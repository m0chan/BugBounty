var app;
app.controller('myCtrl', ['$filter', '$location', '$scope', '$http', function ($filter, $location, $scope, $http) {
        var supportedCarriers = ["mojio", "rogers", "telus", "bell", "tmobile",
            "vivint", "metropcs", "assurant", "att", "telcel",
            "tmcz", "tmpl", "tdg", "tmat", "optus", "telefonica",
            "bosch", "tracfone"];
        var supportedLanguages = ["en", "de", "cs", "es", "fr", "pl", "jp"];
        // KW: LET is not supported in IE10
        var carrierRegions = {
            "mojio": "na",
            "rogers": "na",
            "telus": "na",
            "bell": "na",
            "tmobile": "na",
            "vivint": "na",
            "metropcs": "na",
            "assurant": "na",
            "att": "na",
            "tracfone": "na",
            "telcel": "mx",
            "tmcz": "eu",
            "tmpl": "eu",
            "tdg": "eu",
            "tmat": "eu",
            "optus": "au",
            "telefonica": "ni",
            "bosch": "jp"
        };
        $scope.iframe = getParameterByName('iframe', null);
        if ($scope.iframe == null)
            $scope.iframe = 'false';
        $scope.brand = getParameterByName('brand', null);
        if ($scope.brand == null)
            $scope.brand = "mojio";
        $scope.lan = getParameterByName('lan', null);
        if ($scope.lan == null)
            $scope.lan = "en";
        $scope.language = setLanguage($scope.lan, $scope.brand);
        //Check whether language and brand is supported
        if (!isBrandAndLanguageValid($scope.brand, $scope.lan))
            return;
        setConfigurations($scope.brand);
        $scope.region = carrierRegions[$scope.brand];
        $scope.data = {
            Selected: {
                Year: "",
                Make: "",
                Model: "",
                Engine: ""
            },
            Years: [],
            Makes: [],
            Models: [],
            Engines: [],
            Location: null,
            Image: "",
            Compatible: ""
        };
        $scope.YearChange = function () {
            $scope.data.Selected.Make = "";
            $scope.data.Selected.Model = "";
            $scope.data.Selected.Engine = "";
            $scope.data.Makes = [];
            $scope.data.Models = [];
            $scope.data.Engines = [];
            resetPageValues();
            queryData();
        };
        $scope.MakeChange = function () {
            $scope.data.Selected.Model = "";
            $scope.data.Selected.Engine = "";
            $scope.data.Models = [];
            $scope.data.Engines = [];
            resetPageValues();
            queryData();
        };
        $scope.ModelChange = function () {
            $scope.data.Selected.Engine = "";
            $scope.data.Engines = [];
            resetPageValues();
            queryData();
        };
        $scope.EngineChange = function () {
            $scope.data.Location = null;
            $scope.data.Image = "";
            $scope.data.Compatible = "";
            queryData();
        };
        function getParameterByName(name, url) {
            if (!url) {
                url = window.location.href;
            }
            //language=JSRegexp
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
            if (!results)
                return null;
            if (!results[2])
                return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
        function resetPageValues() {
            $scope.data.Location = null;
            $scope.data.Image = "";
            $scope.data.Compatible = "";
        }
        function isBrandAndLanguageValid(brand, lan) {
            if (supportedCarriers.indexOf(brand) == -1) {
                var redirectUri = window.location.href.split("?")[0];
                // IE doesn't support + for string. Should use str.concat()
                var brandExtention = "?brand=mojio";
                var url = redirectUri.concat(brandExtention);
                window.location.href = url;
                return false;
            }
            if (supportedLanguages.indexOf(lan) == -1) {
                var url = "";
                var redirectUri = window.location.href.split("?")[0];
                // IE doesn't support + for string. Should use str.concat()
                // IE doesn't support ${$scope.brand}
                var brandExtention = createBrandExtention($scope.brand);
                var iframeExtention = "&iframe=true";
                if ($scope.iframe === 'true')
                    url = redirectUri.concat(brandExtention, iframeExtention);
                else
                    url = redirectUri.concat(brandExtention);
                window.location.href = url;
                return false;
            }
            return true;
        }
        function setLanguage(lan, brand) {
            switch (brand) {
                case "telus":
                case "rogers":
                case "bell":
                    if (lan === "fr")
                        return "fr-ca";
                    else
                        return "en-us";
                case "att":
                case "tmobile":
                case "mojio":
                case "optus":
                case "vivint":
                    return "en-us";
                case "tmat":
                case "tdg":
                    return "de-de";
                case "tmcz":
                    return "cs";
                case "tmpl":
                    return "pl";
                case "telcel":
                    if (lan === "es")
                        return "es-mx";
                    else
                        return "en-us";
                case "assurant":
                case "tracfone":
                case "metropcs":
                    if (lan === "es")
                        return "es-us";
                    else
                        return "en-us";
                case "telefonica":
                    if (lan === "es")
                        return "es-ni";
                    else
                        return "en-us";
                default:
                    return "en-us";
            }
        }
        function setConfigurations(brand) {
            switch (brand) {
                case "mojio":
                    $scope.logoUrl = "https://moj.io/";
                    $scope.contactUrl = "https://www.moj.io/support/";
                    $scope.styleSheet = "";
                    break;
                case "rogers":
                    $scope.carrierCode = "rogers-ca";
                    $scope.logoUrl = "https://moj.io/";
                    $scope.contactUrl = "https://www.rogers.com/consumer/support/?setLanguage=" + $scope.lan;
                    break;
                case "telus":
                    $scope.carrierCode = "telus-ca";
                    $scope.logoUrl = "https://moj.io/";
                    if ($scope.lan === 'en')
                        $scope.contactUrl = "https://www.telus.com/en/ab/support/contact-us?lang=en&prov=ab&INTCMP=VAN_contact-us";
                    else if ($scope.lan === 'fr')
                        $scope.contactUrl = "https://www.telusquebec.com/fr/soutien/#gsc.tab=0";
                    else
                        $scope.contactUrl = "https://www.telus.com/en/ab/support/contact-us?lang=en&prov=ab&INTCMP=VAN_contact-us";
                    break;
                case "bell":
                    $scope.carrierCode = "bell-ca";
                    $scope.logoUrl = "https://moj.io/";
                    if ($scope.lan == 'en')
                        $scope.contactUrl = "https://bell.ca/connectedcar";
                    else if ($scope.lan == 'fr')
                        $scope.contactUrl = "https://bell.ca/voitureconnectee";
                    else
                        $scope.contactUrl = "https://bell.ca/connectedcar";
                    break;
                case "tmobile":
                    $scope.carrierCode = "tmobile-us";
                    $scope.logoUrl = "https://moj.io/";
                    $scope.contactUrl = "https://support.t-mobile.com/community/contact-us";
                    break;
                case "tmcz":
                    $scope.carrierCode = "tmobile-cz";
                    $scope.logoUrl = "https://moj.io/";
                    $scope.contactUrl = "https://www.t-mobile.cz/podpora/kontaktujte-nas";
                    break;
                case "tmpl":
                    $scope.carrierCode = "tmobile-pl";
                    $scope.logoUrl = "https://www.t-mobile.pl/";
                    $scope.contactUrl = "https://firma.t-mobile.pl/pl/strona-glowna/kontakt";
                    break;
                case "tdg":
                    $scope.carrierCode = "telekom-de";
                    $scope.logoUrl = "https://www.telekom.de/start";
                    $scope.contactUrl = "https://www.telekom.de/kontakt";
                    break;
                case "tmat":
                    $scope.carrierCode = "tmobile-at";
                    $scope.logoUrl = "https://moj.io/";
                    //TODO: contact url?
                    break;
                case "telcel":
                    $scope.carrierCode = "telcel-mx";
                    $scope.logoUrl = "https://www.telcel.com/";
                    $scope.contactUrl = "https://www.telcel.com/personas/atencion-a-clientes/puntos-de-contacto/chat-on-line";
                    break;
                case "optus":
                    $scope.carrierCode = "optus-au";
                    $scope.logoUrl = "http://www.optus.com.au/";
                    $scope.contactUrl = "http://www.optus.com.au/shop/support";
                    break;
                case "vivint":
                    $scope.carrierCode = "vivint-us";
                    $scope.logoUrl = "https://www.vivint.com";
                    $scope.contactUrl = "https://www.vivint.com/company/contact-us";
                    break;
                case "tracfone":
                    $scope.carrierCode = "tracfone-us";
                    $scope.logoUrl = "https://www.tracfone.com/";
                    $scope.contactUrl = "https://www.tracfone.com/contactus";
                    break;
                case "metropcs":
                    $scope.carrierCode = "metropcs-us";
                    if ($scope.lan == 'es') {
                        $scope.logoUrl = "https://hola.metropcs.com/";
                        $scope.contactUrl = "https://hola.metropcs.com/contact-us.html";
                    }
                    else {
                        $scope.logoUrl = "https://www.metropcs.com/";
                        $scope.contactUrl = "https://www.metropcs.com/contact-us.html";
                    }
                    break;
                case "assurant":
                    $scope.carrierCode = "assurant-us";
                    $scope.logoUrl = "https://moj.io/";
                    $scope.contactUrl = "http://www.assurantsolutions.com/con-contact-us-t4alt.html";
                    break;
                case "telefonica":
                    $scope.carrierCode = "telefonica-ni";
                    $scope.logoUrl = "https://moj.io/";
                    $scope.contactUrl = "https://www.movistar.com/es/";
                    break;
            }
        }
        var segmentProxyUrl = {
            vehicleCompatibility: "https://segment-proxy.moj.io/vehicle-compatibility/v3/beta",
            vehicleLookup: "https://segment-proxy.moj.io/vehicles/v2/beta"
        };
        function getBackendUrl(backendUrl) {
            // Kenneth - ya... looked back on the commit.. apparently this is to fix IE10 issue.
            var backendUrlObject = document.createElement("a");
            backendUrlObject.href = backendUrl;
            // Add a leading slash to the returned pathname if there isn't one (Internet Explorer).
            var pathname = backendUrlObject.pathname.replace(/(^\/?)/, "/");
            // Add Crarrier code to host name to hit carrier specific segment proxy
            backendUrlObject.hostname = $scope.carrierCode + "-" + backendUrlObject.hostname;
            if (window.location.href.indexOf("localhost") != -1) {
                return "http://localhost:3000" + pathname;
            }
            else if (window.location.href.indexOf("staging") != -1) {
                return backendUrlObject.href.replace($scope.carrierCode, 'staging');
            }
            else {
                return backendUrlObject.href;
            }
        }
        function createBrandExtention(brand) {
            var query = "?brand=";
            var extention = query.concat(brand, "&lan=en");
            return extention;
        }
        function queryData() {
            var params = {
                Region: $scope.region,
                Language: $scope.language,
                CarrierCode: $scope.carrierCode
            };
            if ($scope.data.Selected.Year != "")
                params["Year"] = $scope.data.Selected.Year;
            if ($scope.data.Selected.Make != "")
                params["Make"] = $scope.data.Selected.Make;
            if ($scope.data.Selected.Model != "")
                params["Model"] = $scope.data.Selected.Model;
            if ($scope.data.Selected.Engine != "")
                params["Engine"] = $scope.data.Selected.Engine;
            if (params["Engine"]) {
                $http.post(getBackendUrl(segmentProxyUrl.vehicleCompatibility), params)
                    .then(function (data) {
                    var obdLocation = data["data"].obdLocation;
                    var code = data["data"].obdLocation.locationCode;
                    var compatibility = data["data"].compatibility;
                    switch (compatibility) {
                        case "A":
                        case "B":
                        case "E":
                            if (code) {
                                if (code.length == 1) {
                                    code = "0" + code;
                                }
                                $scope.data.Image = "loc" + code;
                                $scope.data.Location = obdLocation.locationString;
                            }
                            else {
                                $scope.data.Image = "";
                                $scope.data.Location = obdLocation.locationString;
                            }
                            $scope.data.Compatible = data["data"].displayMessage;
                            break;
                        case "C":
                        case "D":
                            $scope.data.Compatible = data["data"].displayMessage;
                    }
                })
                    .catch(function (data) {
                    console.log(data);
                });
            }
            else {
                $http.post(getBackendUrl(segmentProxyUrl.vehicleLookup), params)
                    .then(function (data) {
                    if (params["Model"]) {
                        for (var index = 0; index < data["data"].length; index++) {
                            $scope.data.Engines.push(data["data"][index]);
                        }
                    }
                    else if (params["Make"]) {
                        for (var index = 0; index < data["data"].length; index++) {
                            $scope.data.Models.push(data["data"][index]);
                        }
                    }
                    else if (params["Year"]) {
                        for (var index = 0; index < data["data"].length; index++) {
                            $scope.data.Makes.push(data["data"][index]);
                        }
                    }
                    else if (params["Region"]) {
                        for (var index = 0; index < data["data"].length; index++) {
                            $scope.data.Years.push(data["data"][index]);
                        }
                    }
                })
                    .catch(function (data) {
                    console.log(data);
                });
            }
        }
        queryData();
    }]);
//# sourceMappingURL=obd-locator.js.map