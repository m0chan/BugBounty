/**
 * Created by pooyaparidel on 2016-09-14.
 */
// this end point is not longer used for lookupeu.html, because 
// lookupeu.html is pointed by ISO and Android apps, now lookupeu.html. Should be remove soon
// redirect to https://my.moj.io/utility/obd_locator/vehicle-compatibility-eu.html?brand=tmcz&device=calamp&lan=cs
var app = angular.module('myApp', ['pascalprecht.translate']);

app.config(['$translateProvider', function($translateProvider) {

    $translateProvider.useStaticFilesLoader({
        prefix: 'lan/',
        suffix: '.json'
    });

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

    var lan=getParameterByName('language');
    if(lan==null)
        lan="en"

    $translateProvider.preferredLanguage(lan);

}]);
