/**
 * Created by pooyaparidel on 2016-09-14.
 */

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

    var lan=getParameterByName('lan');
    if(lan==null)
        lan="en"
    $translateProvider.preferredLanguage(lan);

}]);
