/**
 * Created by pooyaparidel on 2016-09-14.
 */


app.controller('myCtrl', ['$filter','$location','$scope','$http',function($filter,$location,$scope,$http) {

    var urlprefix= "https://segment-proxy.moj.io/"; //"http://localhost:3000/";

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

        Compatible:"",
        IsCompatible:null,

        ObdLocation:"",
        ObdImage:"",
        LocationIl:"loc00"
    }

    $scope.YearChange=function(){
        $scope.data.Compatible="";
        $scope.data.IsCompatible=null;

        $scope.data.Selected.Make="";
        $scope.data.Selected.Model="";
        $scope.data.Selected.Engine="";

        $scope.data.Makes=[];
        $scope.dataModels=[];
        $scope.data.Engines=[];

        $scope.data.ObdLocation="";
        $scope.data.ObdImage="";
        $scope.data.LocationIl="loc00";

        queryData();
    }

    $scope.MakeChange=function(){

        $scope.data.Selected.Model="";
        $scope.data.Selected.Engine="";

        $scope.data.Models=[];
        $scope.data.Engines=[];

        $scope.data.Compatible="";
        $scope.data.IsCompatible=null;

        $scope.data.ObdLocation="";
        $scope.data.ObdImage="";
        $scope.data.LocationIl="loc00";

        queryData();
    }

    $scope.ModelChange=function(){

        $scope.data.Selected.Engine="";
        $scope.data.Engines=[];

        $scope.data.Compatible="";
        $scope.data.IsCompatible=null;

        $scope.data.ObdLocation="";
        $scope.data.ObdImage="";
        $scope.data.LocationIl="loc00";

        queryData();
    }

    $scope.EngineChange=function(){
        $scope.data.Compatible="";
        $scope.data.IsCompatible=null;

        $scope.data.ObdLocation="";
        $scope.data.ObdImage="";
        $scope.data.LocationIl="loc00";

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

    $scope.obdLocation=function(){
        $scope.data.ObdLocation="Loading...";

        data={

        }

        if($scope.data.Selected.Year!="")
            data.Year=$scope.data.Selected.Year;

        if($scope.data.Selected.Make!="")
            data.Make=$scope.data.Selected.Make;

        if($scope.data.Selected.Model!="")
            data.Model=$scope.data.Selected.Model;

        $http.post(urlprefix + "vehicles2-obd", data)
            .success(function (result, status, headers, config) {

                $scope.data.ObdLocation=result.Vehicle.Location;
                $scope.data.ObdImage=result.Vehicle.Image;

                var locations =
                    [
                        {
                            "docCount": 1721,
                            "key": "UNDER DRIVER’S SIDE DASH, NEAR THE HOOD RELEASE",
                            "locationCode": 1,
                            "locationString": "The OBD port is located under the driver’s side dash, near the hood release."
                        },
                        {
                            "docCount": 1345,
                            "key": "AT BOTTOM EDGE OF DRIVER’S SIDE DASH, UNDER THE STEERING WHEEL",
                            "locationCode": 2,
                            "locationString": "The OBD port is located at bottom edge of the driver’s side dash, under the steering wheel."
                        },
                        {
                            "docCount": 608,
                            "key": "IN DRIVER’S KICK-PANEL, TO THE LEFT OF THE STEERING WHEEL",
                            "locationCode": 1,
                            "locationString": "The OBD port is located in the driver’s kick-panel, to the left of the steering wheel."
                        },
                        {
                            "docCount": 551,
                            "key": "ON THE DRIVER’S SIDE OF THE CENTER CONSOLE",
                            "locationCode": 3,
                            "locationString": "The OBD port is located on the driver’s side of the center console."
                        },
                        {
                            "docCount": 394,
                            "key": "UNDER DRIVER’S SIDE DASH, NEAR THE KICK-PANEL",
                            "locationCode": 1,
                            "locationString": "The OBD port is located under the driver’s side dash, near the kick-panel."
                        },
                        {
                            "docCount": 382,
                            "key": "UNDER DRIVER’S SIDE DASH, NEAR THE PARKING-BRAKE PEDAL",
                            "locationCode": 1,
                            "locationString": "The OBD port is located under the driver’s side dash, near the parking-brake pedal."
                        },
                        {
                            "docCount": 363,
                            "key": "BEHIND PANEL, IN DRIVER’S KICK-PANEL, TO THE LEFT OF THE STEERING WHEEL",
                            "locationCode": 1,
                            "locationString": "The OBD port is located in the driver’s kick-panel, to the left of the steering wheel."
                        },
                        {
                            "docCount": 347,
                            "key": "UNDER DRIVER’S SIDE DASH, TO THE LEFT OF THE STEERING WHEEL",
                            "locationCode": 1,
                            "locationString": "The OBD port is located under the driver’s side dash, to the left of the steering wheel."
                        },
                        {
                            "docCount": 324,
                            "key": "UNDER DRIVER’S SIDE DASH, TO THE RIGHT OF THE STEERING WHEEL",
                            "locationCode": 3,
                            "locationString": "The OBD port is located under the driver’s side dash, to the right of the steering wheel."
                        },
                        {
                            "docCount": 279,
                            "key": "UNDER DRIVER’S SIDE DASH, NEAR THE PARKING-BRAKE RELEASE",
                            "locationCode": 3,
                            "locationString": "The OBD port is located under the driver’s side dash, near the parking-brake release."
                        },
                        {
                            "docCount": 206,
                            "key": "UNDER DRIVER’S SIDE DASH, ABOVE THE BRAKE PEDAL",
                            "locationCode": 2,
                            "locationString": "The OBD port is located under the driver’s side dash, above the brake pedal."
                        },
                        {
                            "docCount": 130,
                            "key": "BEHIND PANEL, ON THE LEFT SIDE OF THE DRIVER’S UNDER-DASH PANEL",
                            "locationCode": 1,
                            "locationString": "The OBD port is located on the left side of the driver’s under-dash panel."
                        },
                        {
                            "docCount": 125,
                            "key": "IN A COMPARTMENT, UNDER DRIVER’S SIDE DASH, TO THE LEFT OF THE STEERING WHEEL",
                            "locationCode": 1,
                            "locationString": "The OBD port is located in a compartment, under the driver’s side dash, to the left of the steering wheel."
                        },
                        {
                            "docCount": 58,
                            "key": "UNDER DRIVER’S SIDE DASH, ABOVE THE GAS PEDAL",
                            "locationCode": 3,
                            "locationString": "The OBD port is located under the driver’s side dash, above the gas pedal."
                        },
                        {
                            "docCount": 53,
                            "key": "ON THE PASSENGER’S SIDE OF THE CENTER CONSOLE",
                            "locationCode": 9,
                            "locationString": "The OBD port is located on the passenger’s side of the center console"
                        },
                        {
                            "docCount": 45,
                            "key": "BEHIND ASHTRAY, IN CENTER CONSOLE",
                            "locationCode": 7,
                            "locationString": "The OBD port is located behind the ashtray, in the center console."
                        },
                        {
                            "docCount": 41,
                            "key": "INSIDE OF CENTER CONSOLE STORAGE AREA",
                            "locationCode": 8,
                            "locationString": "The OBD port is located inside of the center console storage area."
                        },
                        {
                            "docCount": 32,
                            "key": "UNDER DRIVER’S SIDE DASH, NEAR THE FUSE-BOX",
                            "locationCode": 1,
                            "locationString": "The OBD port is located under the driver’s side dash, near the fuse-box."
                        },
                        {
                            "docCount": 31,
                            "key": "UNDER DRIVER’S SIDE DASH, NEAR THE TRUNK RELEASE",
                            "locationCode": 10,
                            "locationString": "The OBD port is located under the driver’s side dash, near the trunk release."
                        },
                        {
                            "docCount": 26,
                            "key": "UNDER DRIVER’S SIDE DASH, TO THE LEFT OF THE FOOTWELL LIGHT",
                            "locationCode": 10,
                            "locationString": "The OBD port is located under the driver’s side dash, to the left of the footwell light."
                        },
                        {
                            "docCount": 25,
                            "key": "INSIDE POCKET, TO THE LEFT OF THE STEERING WHEEL",
                            "locationCode": 1,
                        }
                    ];

                for(var ipos=0;ipos<locations.length;ipos++)
                {
                    if(locations[ipos].key==result.Vehicle.Location){
                        var code="" + locations[ipos].locationCode;
                        if(code.length==1)
                            code="0"+code;
                        $scope.data.LocationIl="loc" + code;
                    }

                }

            })
            .error(function (result, status, header, config) {
                $scope.data.ObdLocation="";
                $scope.data.ObdImage="";
                $scope.data.LocationIl="loc00";
            });

    };

    isEngineCompatible=function(code) {
        var type=engineType(code);

        if(type===null)
            return true;

        if(type==="electric" || type==="hybrid")
            return false;

        return true;
    }

    engineType=function(code){
        var ipos;
        var row;

        for(ipos=0;ipos<$scope.data.Engines.length;ipos++)
        {
            row=$scope.data.Engines[ipos];

            if(row.key===$scope.data.Selected.Engine)
                return row.type;


        }

        return null;
    }

    queryData=function(){

        if($scope.data.Selected.Engine!=="")
        {
            if(!isEngineCompatible($scope.data.Selected.Engine))
            {
                $scope.data.Compatible=$filter('translate')('vehicle_compatibility.not_compatible');
                $scope.data.IsCompatible=false;

                return;
            }

            var data2 = {
                "Device": $scope.device,
                "Year": $scope.data.Selected.Year,
                "Make": $scope.data.Selected.Make,
                "Model": $scope.data.Selected.Model,
                "Engine": $scope.data.Selected.Engine,
            }

            $http.post(urlprefix + "vehicles2-blacklist/compatible", data2)
                .success(function (result2, status, headers, config) {

                    if (result2.Status==="Success" && result2.Result===true) {

                        $scope.data.Compatible=$filter('translate')('vehicle_compatibility.compatible');
                        $scope.data.IsCompatible=true;

                        //obdLocation();
                    }
                    else
                    {
                        $scope.data.Compatible=$filter('translate')('vehicle_compatibility.not_compatible');
                        $scope.data.IsCompatible=false;

                    }

                })
                .error(function (result, status, header, config) {
                    console.log(result);
                });

        }
        else
        {
            var data={

            }

            if($scope.data.Selected.Year!=="")
                data.Year=$scope.data.Selected.Year;

            if($scope.data.Selected.Make!=="")
                data.Make=$scope.data.Selected.Make;

            if($scope.data.Selected.Model!=="")
                data.Model=$scope.data.Selected.Model;

            $http.post(urlprefix + "vehicles2", data)
                .success(function (result, status, headers, config) {
                    prepareData(result);
                })
                .error(function (data, status, header, config) {
                    console.log(data);
                });
        }
        //data.Engine=$scope.data.Selected.Engine;


    }

    queryData();

}]);