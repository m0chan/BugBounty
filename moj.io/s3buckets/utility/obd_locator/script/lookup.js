/**
 * Created by pooyaparidel on 2016-09-14.
 */

app.controller('myCtrl', ['$location','$scope','$http',function($location,$scope,$http) {

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
            Year:null,
            Trim:null
        },

        Makes:[],
        Models:[],
        Years:[],
        Trims:[],

        Location:"",
        LocationImage:"",
        LocationIl:"loc00",
        Compatible:"",
        IsCompatible:false
    }

    $scope.ShowObdLocator=false;
    $scope.loading=false;

    $scope.MakeChange=function(){

        $scope.data.Selected.Model=null;
        $scope.data.Selected.Year=null;
        $scope.data.Selected.Trim=null;

        $scope.data.Models=[];
        $scope.data.Years=[];
        $scope.data.Trims=[];

        $scope.data.Compatible="";
        $scope.data.IsCompatible=false;
        $scope.data.Location="";
        $scope.data.LocationImage="";
        $scope.data.LocationIl="loc00";


        queryData();
    }

    $scope.ModelChange=function(){

        $scope.data.Selected.Year=null;
        $scope.data.Selected.Trim=null;

        $scope.data.Years=[];
        $scope.data.Trims=[];

        $scope.data.Compatible="";
        $scope.data.IsCompatible=false;
        $scope.data.Location="";
        $scope.data.LocationImage="";
        $scope.data.LocationIl="loc00";


        queryData();
    }

    $scope.YearChange=function(){
        $scope.data.Selected.Trim=null;

        $scope.data.Trims=[];

        $scope.data.Compatible="";
        $scope.data.IsCompatible=false;
        $scope.data.Location="";
        $scope.data.LocationImage="";
        $scope.data.LocationIl="loc00";


        queryData();
    }

    $scope.TrimChange=function(){

        $scope.data.Location="";
        $scope.data.LocationImage="";
        $scope.data.LocationIl="loc00";


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

        if(typeof(data.Trim)!="undefined")
        {
            var ipos;
            for (ipos=0;ipos<data.Trim.length;ipos++)
            {
                $scope.data.Trims.push(data.Trim[ipos]);
            }

            if(data.Trim.length==1)
            {
                $scope.data.Selected.Trim=data.Trim[0];
                queryData();
                return;

            }
        }

        if(typeof(data.Vehicle)!="undefined")
        {
            $scope.data.Location=data.Vehicle.Location;
            $scope.data.LocationImage=data.Vehicle.Image;

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
                if(locations[ipos].key==$scope.data.Location){
                    var code="" + locations[ipos].locationCode;
                    if(code.length==1)
                        code="0"+code;
                    $scope.data.LocationIl="loc" + code;
                }

            }

        }

    }

    queryData=function(){
        data={

        }

        if($scope.data.Selected.Make!=null)
            data.Make=$scope.data.Selected.Make;

        if($scope.data.Selected.Model!=null)
            data.Model=$scope.data.Selected.Model;

        if($scope.data.Selected.Year!=null)
            data.Year=$scope.data.Selected.Year;

        if($scope.data.Selected.Trim!=null)
            data.Trim=$scope.data.Selected.Trim;

        $scope.loading=true;

        $http.post("https://segment-proxy.moj.io/obd3", data)
            .success(function (result, status, headers, config) {

                $scope.loading=false;

                if(typeof(result.Trim)!="undefined") {
                    data2 = {
                        "Device": $scope.device,
                        "Make": $scope.data.Selected.Make.toLowerCase(),
                        "Model": $scope.data.Selected.Model.toLowerCase(),
                        "Year": $scope.data.Selected.Year.toLowerCase()
                    }

                    $scope.loading=true;
                    $http.post("https://segment-proxy.moj.io/vehicle-compatibility-blacklist", data2)
                        .success(function (result2, status, headers, config) {
                            $scope.loading=false;

                            if(result2.hits.hits.length==0 && parseInt($scope.data.Selected.Year)>=1996) {
                                $scope.data.Compatible = "YOUR CAR IS COMPATIBLE";
                                $scope.data.IsCompatible=true;
                                prepareData(result);
                            }else{
                                $scope.data.Compatible="YOUR CAR IS NOT COMPATIBLE";
                                $scope.data.IsCompatible=false;
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