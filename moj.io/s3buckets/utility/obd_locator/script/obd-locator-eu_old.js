/**
 * Created by pooyaparidel on 2016-09-14.
 */

// this end point is not longer used for lookupeu.html, because 
// lookupeu.html is pointed by ISO and Android apps, now lookupeu.html. Should be remove soon
// redirect to https://my.moj.io/utility/obd_locator/vehicle-compatibility-eu.html?brand=tmcz&device=calamp&lan=cs
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
        $scope.brand="tmcz"

    $scope.lan=getParameterByName('language');
    if($scope.lan==null)
        $scope.lan="en"


    $scope.data={
        Selected:{
            Make:"",
            Model:"",
            Year:""
        },

        Makes:[],
        Models:[],
        Years:[],

        Location:null,
        Image:"loc00",
        Compatible:""
    }


    $scope.MakeChange=function(){

        $scope.data.Selected.Model="";
        $scope.data.Selected.Year="";

        $scope.data.Models=[];
        $scope.data.Years=[];

        $scope.data.Location=null;
        $scope.data.Image="loc00";
        $scope.data.Compatible="";

        queryData();
    }

    $scope.ModelChange=function(){

        $scope.data.Selected.Year="";
        $scope.data.Years=[];

        $scope.data.Location=null;
        $scope.data.Image="loc00";
        $scope.data.Compatible="";

        queryData();
    }

    $scope.YearChange=function(){
        $scope.data.Location=null;
        $scope.data.Image="loc00";
        $scope.data.Compatible="";

        queryData();
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

        $http.post("https://segment-proxy.moj.io/obd2eu", data)
            .success(function (data, status, headers, config) {

                if(data.aggregations.group_by_location.buckets.length==1){
                    //$scope.data.Location=data.aggregations.group_by_location.buckets[0].key;

                    var code=data.aggregations.group_by_locationcode.buckets[0].key + '';
                    if(code.length==1)
                        code="0"+code;

                    $scope.data.Location=$filter('translate')('obd_locator.locationCode' + code);

                    $scope.data.Image="loc" + code;
                    $scope.data.Compatible=$filter('translate')('obd_locator.has_obd'); //"YOUR CAR HAS AN OBD-II PORT";
                }


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


            })
            .error(function (data, status, header, config) {
                console.log(data);
            });

    }

    queryData();

}]);