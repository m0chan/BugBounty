/**
 * Created by pooyaparidel on 2016-09-14.
 */


app.controller('myCtrl', ['$filter','$location','$scope','$http',function($filter,$location,$scope,$http) {

    $scope.brand="tmobile"
    $scope.lan="en"
    $scope.device="zte"

    $scope.data={
        Selected:{
            Year:"",
            Make:"",
            Model:"",
            Engine:""
        },

        Years:[],
        Makes:[],
        Models:[],
        Engines:[],

        Compatible:""
    }

    $scope.YearChange=function(){
        $scope.data.Compatible="";

        $scope.data.Selected.Make="";
        $scope.data.Selected.Model="";
        $scope.data.Selected.Engine="";

        $scope.data.Makes=[];
        $scope.data.Models=[];
        $scope.data.Engines=[];

        queryData();
    }

    $scope.MakeChange=function(){

        $scope.data.Selected.Model="";
        $scope.data.Selected.Engine="";

        $scope.data.Models=[];
        $scope.data.Engines=[];

        $scope.data.Compatible="";

        queryData();
    }

    $scope.ModelChange=function(){

        $scope.data.Selected.Engine="";
        $scope.data.Engines=[];

        $scope.data.Compatible="";

        queryData();
    }

    $scope.EngineChange=function(){
        $scope.data.Compatible="";

        queryData();
    }

    prepareData=function(data) {
        if(typeof(data.Year)!=="undefined")
        {
            $scope.data.Years=data.Year;
        }

        if(typeof(data.Make)!=="undefined")
        {
            $scope.data.Makes=data.Make;
        }

        if(typeof(data.Model)!=="undefined")
        {
            $scope.data.Models=data.Model;
        }

        if(typeof(data.Engine)!=="undefined")
        {
            $scope.data.Engines=data.Engine;
        }

    }

    queryData=function(){
        data={

        }

        if($scope.data.Selected.Year!="")
            data.Year=$scope.data.Selected.Year;

        if($scope.data.Selected.Make!="")
            data.Make=$scope.data.Selected.Make;

        if($scope.data.Selected.Model!="")
            data.Model=$scope.data.Selected.Model;

        if($scope.data.Selected.Engine!="")
            data.Model=$scope.data.Selected.Engine;

        $http.post("https://segment-proxy.moj.io/vehicles2", data)
            .success(function (result, status, headers, config) {

                if($scope.data.Selected.Engine!="") {
                    data2 = {
                        "Device": $scope.device,
                        "Year": $scope.data.Selected.Year,
                        "Make": $scope.data.Selected.Make,
                        "Model": $scope.data.Selected.Model,
                        "Engine": $scope.data.Selected.Engine,
                    }

                    $http.post("https://segment-proxy.moj.io/vehicles2-blacklist/compatible", data2)
                        .success(function (result2, status, headers, config) {

                            if (result2.Status==="Success" && result2.Result===true) {

                                $scope.data.Compatible=$filter('translate')('vehicle_compatibility.compatible');

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