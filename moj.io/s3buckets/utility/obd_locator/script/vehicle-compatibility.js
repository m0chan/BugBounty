/**
 * Created by pooyaparidel on 2016-09-14.
 */


app.controller('myCtrl', ['$filter','$location','$scope','$http',function($filter,$location,$scope,$http) {

    function getParameterByName(name, url) {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    $scope.brand=getParameterByName('brand');
    if($scope.brand==null)
        $scope.brand="mojio"

    $scope.lan=getParameterByName('lan');
    if($scope.lan==null)
        $scope.lan="en"

    $scope.device=getParameterByName('device');
    if($scope.device==null)
        $scope.device="zte"

    $scope.obdLocatorUrl="obd-locator.html?brand=" + $scope.brand + "&device=" +$scope.device + "&lan=" + $scope.lan;
    //if($scope.brand=="tmobile")
    //    $scope.obdLocatorUrl="https://explore.t-mobile.com/t-mobile-sync-up-drive?locateport=true#portlocator";

    $scope.data={
        Selected:{
            Make:"",
            Model:"",
            Year:""
        },

        Makes:[],
        Models:[],
        Years:[],

        Compatible:""
    }


    $scope.MakeChange=function(){

        $scope.data.Selected.Model="";
        $scope.data.Selected.Year="";

        $scope.data.Models=[];
        $scope.data.Years=[];

        $scope.data.Compatible="";

        queryData();
    }

    $scope.ModelChange=function(){

        $scope.data.Selected.Year="";
        $scope.data.Years=[];

        $scope.data.Compatible="";

        queryData();
    }

    $scope.YearChange=function(){
        $scope.data.Compatible="";

        queryData();
    }

    prepareData=function(data) {
        if(typeof(data.aggregations.group_by_make)!="undefined")
        {
            var ipos;
            for (ipos=0;ipos<data.aggregations.group_by_make.buckets.length;ipos++)
            {
                $scope.data.Makes.push(data.aggregations.group_by_make.buckets[ipos].key)
            }
        }

        if(typeof(data.aggregations.group_by_model)!="undefined")
        {
            var ipos;
            for (ipos=0;ipos<data.aggregations.group_by_model.buckets.length;ipos++)
            {
                $scope.data.Models.push(data.aggregations.group_by_model.buckets[ipos].key)
            }
        }

        if(typeof(data.aggregations.group_by_year)!="undefined")
        {
            var ipos;
            for (ipos=0;ipos<data.aggregations.group_by_year.buckets.length;ipos++)
            {
                $scope.data.Years.push(data.aggregations.group_by_year.buckets[ipos].key)
            }
        }
    }

    queryData=function(){
        data={

        }

        if($scope.data.Selected.Make!="")
            data.Make=$scope.data.Selected.Make;

        if($scope.data.Selected.Model!="")
            data.Model=$scope.data.Selected.Model;

        if($scope.data.Selected.Year!="")
            data.Year=$scope.data.Selected.Year;

        $http.post("https://segment-proxy.moj.io/obd2", data)
            .success(function (result, status, headers, config) {

                if($scope.data.Selected.Year!="") {
                    data2 = {
                        "Device": $scope.device,
                        "Make": $scope.data.Selected.Make.toLowerCase(),
                        "Model": "all",
                        "Year": "all"
                    }

                    if($scope.data.Selected.Model!="")
                        data2.Model=$scope.data.Selected.Model.toLowerCase();

                    if($scope.data.Selected.Year!="")
                        data2.Year=$scope.data.Selected.Year;

                    $http.post("https://segment-proxy.moj.io/vehicle-compatibility-blacklist", data2)
                        .success(function (result2, status, headers, config) {

                            var minyear=1996;
                            if($scope.brand=='tmcz')
                                minyear=2001;

                            if (result2.hits.hits.length == 0 && parseInt($scope.data.Selected.Year) >= minyear) {

                                if($scope.data.Selected.Year!="")
                                    $scope.data.Compatible=$filter('translate')('vehicle_compatibility.compatible');
                                else
                                    prepareData(result);

                            }
                            else
                            {
                                $scope.data.Compatible=$filter('translate')('vehicle_compatibility.not_compatible');
                            }

                        })
                        .error(function (result, status, header, config) {
                            console.log(result);
                        });

                }
                else
                {
                    prepareData(result);
                }


            })
            .error(function (data, status, header, config) {
                console.log(data);
            });

    }

    queryData();

}]);