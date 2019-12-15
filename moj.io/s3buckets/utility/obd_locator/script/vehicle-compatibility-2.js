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

    $scope.data={
        Selected:{
            Make:null,
            Model:null,
            Year:null
        },

        Makes:[],
        Models:[],
        Years:[],

        Compatible:"",
        IsCompatible:false
    }

    $scope.loading=false;

    $scope.MakeChange=function(){

        $scope.data.Selected.Model=null;
        $scope.data.Selected.Year=null;

        $scope.data.Models=[];
        $scope.data.Years=[];

        $scope.data.Compatible="";
        $scope.data.IsCompatible=false;

        queryData();
    }

    $scope.ModelChange=function(){

        $scope.data.Selected.Year=null;

        $scope.data.Years=[];

        $scope.data.Compatible="";
        $scope.data.IsCompatible=false;

        queryData();
    }

    $scope.YearChange=function(){
        $scope.data.Compatible="";
        $scope.data.IsCompatible=false;

        queryData();
    }


    prepareData=function(data) {
        if(typeof(data.Make)!="undefined")
        {
            var ipos;
            for (ipos=0;ipos<data.Make.length;ipos++)
            {
                $scope.data.Makes.push(data.Make[ipos]);
            }
        }

        if(typeof(data.Model)!="undefined")
        {
            var ipos;
            for (ipos=0;ipos<data.Model.length;ipos++)
            {
                $scope.data.Models.push(data.Model[ipos]);
            }
        }

        if(typeof(data.Year)!="undefined")
        {
            var ipos;
            for (ipos=0;ipos<data.Year.length;ipos++)
            {
                $scope.data.Years.push(data.Year[ipos]);
            }
        }

    }

    queryData=function() {
        data = {}

        if ($scope.data.Selected.Make != null)
            data.Make = $scope.data.Selected.Make;

        if ($scope.data.Selected.Model != null)
            data.Model = $scope.data.Selected.Model;

        if ($scope.data.Selected.Year != null)
            data.Year = $scope.data.Selected.Year;

        $scope.loading = true;

        if ($scope.data.Selected.Year != null) {
            data2 = {
                "Device": $scope.device,
                "Make": $scope.data.Selected.Make.toLowerCase(),
                "Model": $scope.data.Selected.Model.toLowerCase(),
                "Year": $scope.data.Selected.Year.toLowerCase()
            }

            $scope.loading = true;
            $http.post("https://segment-proxy.moj.io/vehicle-compatibility-blacklist", data2)
                .success(function (result2, status, headers, config) {
                    $scope.loading = false;

                    var minyear=1996;
                    if($scope.brand=='tmcz')
                        minyear=2001;

                    if (result2.hits.hits.length == 0 && parseInt($scope.data.Selected.Year) >= minyear) {
                        $scope.data.Compatible=$filter('translate')('vehicle_compatibility.compatible');
                        $scope.data.IsCompatible = true;

                    } else {
                        $scope.data.Compatible=$filter('translate')('vehicle_compatibility.not_compatible');
                        $scope.data.IsCompatible = false;
                    }
                })
                .error(function (result, status, header, config) {
                    console.log(result);
                });


        }
        else{
            $http.post("https://segment-proxy.moj.io/vehicles", data)
                .success(function (result, status, headers, config) {

                    $scope.loading = false;
                    prepareData(result);

                })
                .error(function (data, status, header, config) {
                    console.log(data);
                });
        }
    }

    queryData();

}]);