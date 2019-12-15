app.controller('myCtrl', ['$filter', '$location', '$scope', '$http', function ($filter, $location, $scope, $http) {
        function getParameterByName(name, url) {
            if (!url) {
                url = window.location.href;
            }
            name = name.replace(/[\[\]]/g, "\\$&");
            let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
            if (!results)
                return null;
            if (!results[2])
                return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
        $scope.brand = getParameterByName('brand', null);
        if ($scope.brand === null)
            $scope.brand = "mojio";
        $scope.lan = getParameterByName('lan', null);
        if ($scope.lan === null)
            $scope.lan = "en";
        $scope.device = getParameterByName('device', null);
        if ($scope.device === null) {
            // KW - Leave it as zte as the backend only supports zte devices. For this case, we are device agnostic because we are only retriving year, make, and model.
            $scope.device = "zte";
        }
        $scope.data = {
            Selected: {
                Make: "",
                Model: "",
                Year: ""
            },
            Makes: [],
            Models: [],
            Years: [],
            Compatible: "",
            IsCompatible: false
        };
        $scope.MakeChange = function () {
            $scope.data.Selected.Model = "";
            $scope.data.Selected.Year = "";
            $scope.data.Models = [];
            $scope.data.Years = [];
            $scope.data.Compatible = "";
            queryData();
        };
        $scope.ModelChange = function () {
            $scope.data.Selected.Year = "";
            $scope.data.Years = [];
            $scope.data.Compatible = "";
            queryData();
        };
        $scope.YearChange = function () {
            $scope.data.Compatible = "";
            queryData();
        };
        function queryData() {
            let data = {};
            if ($scope.data.Selected.Make !== "")
                data['Make'] = $scope.data.Selected.Make;
            if ($scope.data.Selected.Model !== "")
                data['Model'] = $scope.data.Selected.Model;
            if ($scope.data.Selected.Year !== "")
                data['Year'] = $scope.data.Selected.Year;
            // https://segment-proxy.moj.io/obd2eu
            // KW - Leaving it eu-segment for now because eu-segment-proxy.moj.io is deployed in EU and watchs the master branch on github.
            // $http.post("https://eu-segment-proxy.moj.io/obd2eu", data)
            //TODO: Will have a look why https://eu-segment-proxy.moj.io/obd2eu is too slow
            $http.post("https://segment-proxy.moj.io/obd2eu", data)
                .success(function (result, status, headers, config) {
                if ($scope.data.Selected.Year !== "") {
                    let compatLevel = result.CompatibilityLevel;
                    $scope.data.IsCompatible = compatLevel != 'E';
                    $scope.data.Compatible = $scope.data.IsCompatible ? $filter('translate')('vehicle_compatibility.compatible') : $filter('translate')('vehicle_compatibility.not_compatible');
                }
                else {
                    if (typeof (data['Make']) === 'undefined') {
                        result.forEach(function (val) {
                            if (val != null)
                                $scope.data.Makes.push(val);
                        });
                    }
                    else if (typeof (data['Model']) === 'undefined') {
                        result.forEach(function (val) {
                            $scope.data.Models.push(val);
                        });
                    }
                    else if (typeof (data['Year']) === 'undefined') {
                        result.forEach(function (val) {
                            $scope.data.Years.push(val);
                        });
                    }
                }
            })
                .error(function (data, status, header, config) {
                console.log(data);
            });
        }
        queryData();
    }]);
//# sourceMappingURL=vehicle-compatibility-eu.js.map