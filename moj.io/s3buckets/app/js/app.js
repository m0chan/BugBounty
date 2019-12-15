
/*!
 * 
 * Angle - Bootstrap Admin App + AngularJS
 * 
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: http://support.wrapbootstrap.com/knowledge_base/topics/usage-licenses
 *
 */
var App;

if (typeof $ === 'undefined') {
  throw new Error('This application\'s JavaScript requires jQuery');
}

App = angular.module('angle', ['templates', 'smart-table', 'ngRoute', 'ngAnimate', 'ngStorage', 'ngCookies', 'pascalprecht.translate', 'ui.bootstrap', 'ui.router', 'cfp.loadingBar', 'ngSanitize', 'ngResource', 'ui.utils', 'toaster', 'jsonFormatter', 'angularRangeSlider', 'xeditable', 'ngMessages', 'lrDragNDrop']).run([
  'mojioGlobal', '$rootScope', '$state', '$stateParams', '$window', '$templateCache', '$translate', 'WebsiteSelectionHelpers', 'editableOptions', 'editableThemes', function(mojioGlobal, $rootScope, $state, $stateParams, $window, $templateCache, $translate, WebsiteSelectionHelpers, editableOptions, editableThemes) {
    var today, todayString, yesterday, yesterdayString;
    editableThemes.bs3.inputClass = 'input-sm';
    editableThemes.bs3.buttonsClass = 'btn-sm';
    editableOptions.theme = 'font-awesome';
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$storage = $window.localStorage;
    $rootScope.user = {
      name: '',
      job: 'Admin',
      withpic: false
    };

    /*$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        if (typeof(toState) !== 'undefined'){
          $templateCache.remove(toState.templateUrl);
        }
    });
     */
    $rootScope.basepath = "app/views/";
    $rootScope.app = {
      name: 'MOJIO',
      description: 'Mojio Dashboard',
      year: (new Date).getFullYear(),
      layout: {
        isFixed: false,
        isCollapsed: true,
        isBoxed: false,
        isRTL: false,
        horizontal: false,
        isFloat: false,
        asideHover: false,
        theme: 'e',
        isMetric: true,
        unit: 'm'
      },
      useFullLayout: false,
      hiddenFooter: true,
      portalToolbar: false,
      viewAnimation: 'ng-fadeInUp'
    };
    today = new Date();
    yesterday = new Date();
    yesterday.setDate((new Date()).getDate() - 1);
    todayString = today.getFullYear() + "." + (today.getMonth() + 1) + "." + today.getDate();
    yesterdayString = yesterday.getFullYear() + "." + (yesterday.getMonth() + 1) + "." + yesterday.getDate();
    $rootScope.ProjectOptions = {
      'My': {
        ProjectName: "My",
        BackEnd: "",
        SidebarMenu: [
          {
            'text': 'Dashboard',
            'sref': 'my.dashboard',
            'icon': 'fa icon-dash'
          }, {
            'text': 'My Trips',
            'sref': 'my.trips',
            'icon': 'fa icon-dist'
          }, {
            'text': 'My Account',
            'sref': 'my.managedevice',
            'icon': 'fa icon-profile'
          }, {
            'text': 'Support',
            'sref': 'my.support',
            'icon': 'fa icon-phone'
          }
        ]
      },
      'Dash': {
        ProjectName: "Demo",
        BackEnd: "",
        SidebarMenu: [
          {
            'text': 'DataDource',
            'sref': 'dash.datasource',
            'icon': 'fa fa-datasource'
          }
        ]
      },
      'Demo': {
        ProjectName: "Demo",
        BackEnd: "",
        SidebarMenu: [
          {
            'text': 'Dashboard',
            'sref': 'fleet.dashboard',
            'icon': 'fa fa-dashboard'
          }, {
            'text': 'My Space',
            'sref': '',
            'icon': 'fa fa-qrcode',
            'submenu': [
              {
                'text': 'Space 1',
                'sref': 'app.portal',
                'icon': 'fa fa-qrcode',
                'params': {
                  pid: "1"
                }
              }, {
                'text': 'Space 2',
                'sref': 'app.portal',
                'icon': 'fa fa-qrcode',
                'params': {
                  pid: "2"
                }
              }
            ]
          }
        ]
      },
      'Admin': {
        ProjectName: "Admin",
        BackEnd: "",
        SidebarMenu: [
          {
            'text': 'Dashboard',
            'sref': 'admin.dashboard',
            'icon': 'fa fa-dashboard'
          }, {
            'text': 'Device',
            'sref': '',
            'icon': 'fa fa-cubes',
            'submenu': [
              {
                'text': 'Device List',
                'sref': 'admin.devicelist',
                'icon': 'fa fa-hdd-o'
              }, {
                'text': 'Configuration List',
                'sref': 'admin.configlist',
                'icon': 'fa fa-sliders'
              }, {
                'text': 'Firmware List',
                'sref': 'admin.firmwarelist',
                'icon': 'fa fa-plug'
              }, {
                'text': 'Sim Card List',
                'sref': 'admin.simcardlist',
                'icon': 'fa fa-mobile'
              }, {
                'text': 'TCU Visualizer',
                'sref': 'admin.tcuvisualizer',
                'icon': 'fa fa-crosshairs'
              }
            ]
          }, {
            'text': 'Reports',
            'sref': '',
            'icon': 'fa fa-file-text',
            'submenu': [
              {
                'text': 'Device in Operation',
                'sref': 'admin.devicelist',
                'icon': 'fa fa-hdd-o',
                'params': {
                  search: "LastContactTime=" + yesterdayString + "-" + todayString
                }
              }
            ]
          }, {
            'text': 'Inventory',
            'sref': '',
            'icon': 'fa fa-upload',
            'submenu': [
              {
                'text': 'Import Mojio Devices',
                'sref': 'admin.importdevices',
                'icon': 'fa fa-cubes'
              }, {
                'text': 'Import Mojio SIMs',
                'sref': 'admin.importsims',
                'icon': 'fa fa-mobile'
              }
            ]
          }, {
            'text': 'Utility',
            'sref': '',
            'icon': 'fa fa-gears',
            'submenu': [
              {
                'text': 'Operation List',
                'sref': 'admin.operations',
                'icon': 'fa fa-tasks'
              }
            ]
          }
        ]
      },
      'Developer': {
        ProjectName: "Developer",
        BackEnd: "",
        SidebarMenu: [
          {
            'text': 'Manage Apps',
            'sref': 'dev.manageapps',
            'icon': 'fa fa-th-large'
          }, {
            'text': 'Vehicle Simulator',
            'sref': 'dev.simulator',
            'icon': 'fa fa-car'
          }, {
            'text': 'Multi Vehicle Simulator',
            'sref': 'dev.multisimulator',
            'icon': 'fa fa-car'
          }, {
            'text': 'Content Viewer',
            'sref': 'dev.content',
            'icon': 'fa fa-file-o'
          }, {
            'text': 'Code Wizard',
            'sref': 'dev.codewizard',
            'icon': 'fa fa-file-o'
          }
        ]
      },
      'Simulator': {
        ProjectName: "Simulator",
        BackEnd: "",
        SidebarMenu: [
          {
            'text': 'Simple Simulator',
            'sref': 'dev.simplesimulator',
            'icon': 'fa fa-car'
          }, {
            'text': 'Advanced Simulator',
            'sref': 'dev.simulator',
            'icon': 'fa fa-car'
          }, {
            'text': 'Multi Vehicle Simulator',
            'sref': 'dev.multisimulator',
            'icon': 'fa fa-car'
          }, {
            'text': 'Event Simulator',
            'sref': 'dev.eventsimulator',
            'icon': 'fa fa-bolt'
          }, {
            'text': 'Manage Vehicles',
            'sref': 'dev.dummyvehicles',
            'icon': 'fa fa-car'
          }
        ]
      },
      'Simulator2': {
        ProjectName: "Simulator2",
        BackEnd: "",
        SidebarMenu: [
          {
            'text': 'Advanced Simulator',
            'sref': 'dev.sim2',
            'icon': 'fa fa-car'
          }
        ]
      },
      'Simulator2m': {
        ProjectName: "Simulator2m",
        BackEnd: "",
        SidebarMenu: [
          {
            'text': 'Advanced Simulator',
            'sref': 'dev.sim2',
            'icon': 'fa fa-car'
          }, {
            'text': 'Multi Vehicle Simulator',
            'sref': 'dev.sim2multi',
            'icon': 'fa fa-car'
          }
        ]
      },
      'Admin2': {
        ProjectName: "Admin2",
        BackEnd: "",
        SidebarMenu: [
          {
            'text': 'Admin Search',
            'sref': 'admin2.search',
            'icon': 'fa fa-search'
          }
        ]
      },
      'Serenity': {
        ProjectName: "Serenity",
        BackEnd: "",
        SidebarMenu: [
          {
            'text': 'Service',
            'sref': 'serenity.service',
            'icon': 'fa fa-book'
          }, {
            'text': 'Service Instance',
            'sref': 'serenity.sinstance',
            'icon': 'fa fa-wrench'
          }, {
            'text': 'Dealer',
            'sref': 'serenity.dealer',
            'icon': 'fa fa-bank'
          }, {
            'text': 'Vehicle Report',
            'sref': 'serenity.report_vehicle',
            icon: 'fa fa-table'
          }, {
            'text': 'Vehicle Report 2',
            'sref': 'serenity.reports_vehicle2',
            icon: 'fa fa-table'
          }, {
            'text': 'Dealer Visit',
            'sref': 'serenity.reports_dealervisit',
            icon: 'fa fa-table'
          }, {
            'text': 'Stats',
            'sref': 'serenity.reports_stats',
            icon: 'fa fa-table'
          }, {
            'text': 'Situation',
            'sref': 'serenity.situation',
            'icon': 'fa fa-balance-scale'
          }
        ]
      }
    };
    $rootScope.selectedProject = $rootScope.ProjectOptions[WebsiteSelectionHelpers.SelectMenu(window.location.host, window.location.href)];
    if ($rootScope.selectedProject.ProjectName === "Simulator2" && window.location.href.indexOf('?multi=true') > -1) {
      $rootScope.selectedProject = $rootScope.ProjectOptions.Simulator2m;
    }
    if ($rootScope.selectedProject.ProjectName === "Serenity") {
      $rootScope.app.layout.isCollapsed = false;
      if (typeof localStorage["ngStorage-layout"] !== "undefined" && JSON.parse(localStorage["ngStorage-layout"]).isCollapsed === true) {
        localStorage.removeItem("ngStorage-layout");
      }
    }
    $rootScope.selectedProject.BackEnd = WebsiteSelectionHelpers.SelectBackEnd(window.location.host, window.location.href);
    mojioGlobal.checkAccess();
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      return analytics.track(toState.title, {
        fromState: fromState,
        fromParams: fromParams,
        toState: toState,
        toParams: toParams
      });
    });
  }
]);


/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================
 */
App.config([
  '$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider', 'WebsiteSelectionHelpersProvider', function($stateProvider, $locationProvider, $urlRouterProvider, helper, WebsiteSelectionHelpersProvider) {
    'use strict';
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise(WebsiteSelectionHelpersProvider.SelectDefaultMenu(window.location.href));
    $stateProvider.state('admin', {
      url: '/admin',
      abstract: true,
      templateUrl: 'app.html',
      controller: 'AppController'
    }).state('admin.dashboard', {
      url: '/dashboard',
      title: 'Admin Dashboard',
      templateUrl: 'admin_dashboard.html'
    }).state('admin.devicelist', {
      url: '/devicelist/:search',
      title: 'Device List',
      templateUrl: 'devicelist.html'
    }).state('admin.devicedetail', {
      url: '/devicedetail/:id',
      title: 'Device Management',
      templateUrl: 'devicedetail.html'
    }).state('admin.configlist', {
      url: '/configlist',
      title: 'Config List',
      templateUrl: 'configlist.html'
    }).state('admin.configdetail', {
      url: '/configdetail/:id',
      title: 'Config Detail',
      templateUrl: 'configdetail.html'
    }).state('admin.firmwarelist', {
      url: '/firmwarelist',
      title: 'Firmware List',
      templateUrl: 'firmwarelist.html'
    }).state('admin.firmwaredetail', {
      url: '/firmwaredetail/:id',
      title: 'Firmware Detail',
      templateUrl: 'firmwaredetail.html'
    }).state('admin.simcardlist', {
      url: '/simcardlist',
      title: 'SIM Card List',
      templateUrl: 'simcard.html'
    }).state('admin.adminsearch', {
      url: '/search/:key',
      title: 'Admin Search',
      templateUrl: 'adminsearch.html'
    }).state('admin.operations', {
      url: '/operations',
      title: 'Operation List',
      templateUrl: 'operations_list.html'
    }).state('admin.importdevices', {
      url: '/importdevices',
      title: 'Import Mojio Devices',
      templateUrl: 'import_devices.html'
    }).state('admin.importsims', {
      url: '/importsims',
      title: 'Import SIMs',
      templateUrl: 'import_sims.html'
    }).state('admin.tcuvisualizer', {
      url: '/tcuvisualizer',
      title: 'TCU Visualizer',
      templateUrl: 'tcu_visualizer.html'
    }).state('admin.exportevents', {
      url: '/exportevents',
      title: 'Export Events',
      templateUrl: 'export_events.html'
    });
    $stateProvider.state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'app.html',
      controller: 'AppController'
    }).state('app.portal', {
      url: '/portal/:pid/:full?',
      title: 'Portal',
      templateUrl: 'portal.html'
    });
    $stateProvider.state('my', {
      url: '/my',
      abstract: true,
      templateUrl: 'mymojio.html',
      controller: 'AppController'
    }).state('my.dashboard', {
      url: '/dashboard',
      title: 'MyMojio Dashboard',
      templateUrl: 'mymojio_dashboard.html',
      controller: 'myMojioDashboardController'
    }).state('my.trips', {
      url: '/mymojiotrips',
      title: 'My Trips',
      templateUrl: 'mymojio_trips.html',
      controller: 'myMojioTripsController'
    }).state('my.eventdetail', {
      url: '/eventdetail',
      title: 'Notification Detail',
      templateUrl: 'event_detail.html'
    }).state('my.managedevice', {
      url: '/managedevice',
      title: 'Manage Device',
      templateUrl: 'manage_device.html',
      controller: 'manageDeviceController'
    }).state('my.support', {
      url: '/support',
      title: 'My Support Resources',
      templateUrl: 'mymojio_support.html',
      controller: 'mymojioSupportController'
    });
    $stateProvider.state('my2', {
      url: '/my2',
      abstract: true,
      templateUrl: 'mymojio.html',
      controller: 'AppController'
    }).state('my2.trips', {
      url: '/mymojio2trips',
      title: 'My Trips',
      templateUrl: 'mymojio2_trips.html',
      controller: 'myMojio2TripsController'
    });
    $stateProvider.state('admin2', {
      url: '/admin2',
      abstract: true,
      templateUrl: 'mymojio.html',
      controller: 'AppController'
    }).state('admin2.search', {
      url: '/search',
      title: 'Admin Search',
      templateUrl: 'admin2_search.html',
      controller: 'admin2SearchController'
    });
    $stateProvider.state('dev', {
      url: '/dev',
      abstract: true,
      templateUrl: 'simulator.html',
      controller: 'AppController'
    }).state('dev.manageapps', {
      url: '/manageapps',
      title: 'Manage Apps',
      templateUrl: 'manage_apps.html'
    }).state('dev.appide', {
      url: '/appide/:id',
      title: 'Application IDE',
      templateUrl: 'app_ide.html'
    }).state('dev.managepages', {
      url: '/managepages/:id',
      title: 'Manage Pages',
      templateUrl: 'manage_pages.html'
    }).state('dev.simulator', {
      url: '/simulator',
      title: 'Simulator',
      templateUrl: 'simulator.html'
    }).state('dev.simplesimulator', {
      url: '/simplesimulator',
      title: 'Simple Simulator',
      templateUrl: 'simple_simulator.html'
    }).state('dev.multisimulator', {
      url: '/multisimulator',
      title: 'Multi Vehicle Simulator',
      templateUrl: 'multi_simulator.html'
    }).state('dev.eventsimulator', {
      url: '/eventsimulator',
      title: 'Event Simulator',
      templateUrl: 'event_simulator.html'
    }).state('dev.sim2', {
      url: '/sim2',
      title: 'Simulator 2 Advanced',
      templateUrl: 'sim2_adv.html'
    }).state('dev.sim2multi', {
      url: '/sim2multi',
      title: 'Simulator 2 Multi',
      templateUrl: 'sim2_multi.html'
    }).state('dev.dummyvehicles', {
      url: '/dummyvehicles',
      title: 'Manage Dummy Vehicles',
      templateUrl: 'dummy_vehicles.html'
    }).state('dev.content', {
      url: '/content/:uri',
      title: 'Content Viewer',
      templateUrl: 'content.html',
      controller: 'contentController'
    }).state('dev.codewizard', {
      url: '/codewizard/:uri',
      title: 'Code Wizard',
      templateUrl: 'code_wizard.html'
    }).state('dev.obs', {
      url: '/obs',
      title: 'Observer Test',
      templateUrl: 'observe.html'
    });
    $stateProvider.state('fleet', {
      url: '/fleet',
      abstract: true,
      templateUrl: 'app.html',
      controller: 'AppController'
    }).state('fleet.dashboard', {
      url: '/fleet_dashboard',
      title: 'Fleet Dashboard',
      templateUrl: 'fleet_dashboard.html'
    });
    $stateProvider.state('serenity', {
      url: '/serenity',
      abstract: true,
      templateUrl: 'mymojio.html',
      controller: 'AppController'
    }).state('serenity.service', {
      url: '/service',
      title: 'Service Editor',
      templateUrl: 'serenity_service.html',
      controller: 'serenityServiceController'
    }).state('serenity.report_vehicle', {
      url: '/report_vehicle',
      title: 'Vehicle Report',
      templateUrl: 'serenity_vehicle_service_item.html',
      controller: 'serenityVehicleServiceItemController'
    }).state('serenity.service_edit', {
      url: '/service_edit/:id',
      title: 'Service Editor',
      templateUrl: 'serenity_service_edit.html',
      controller: 'serenityServiceEditController'
    }).state('serenity.situation', {
      url: '/situation',
      title: 'Situation Editor',
      templateUrl: 'serenity_situation.html',
      controller: 'serenitySituationController'
    }).state('serenity.situation_edit', {
      url: '/situation_edit/:id',
      title: 'Situation Editor',
      templateUrl: 'serenity_situation_edit.html',
      controller: 'serenitySituationEditController'
    }).state('serenity.sinstance', {
      url: '/sinstance',
      title: 'Service Instance',
      templateUrl: 'serenity_service_instance.html',
      controller: 'serenityServiceInstanceController'
    }).state('serenity.dealer', {
      url: '/sdealer',
      title: 'Dealer Management',
      templateUrl: 'serenity_dealer.html',
      controller: 'serenityDealerController'
    }).state('serenity.dealer_edit', {
      url: '/sdealer_edit/:id',
      title: 'Dealer Management',
      templateUrl: 'serenity_dealer_edit.html',
      controller: 'serenityDealerEditController'
    }).state('serenity.reports_vehicle2', {
      url: '/reports_vehicle2',
      title: 'Vehicle Report 2',
      templateUrl: 'serenity_report_vehicle.html',
      controller: 'serenityReportVehicleController'
    }).state('serenity.reports_dealervisit', {
      url: '/reports_dealervisit',
      title: 'Dealer Visit',
      templateUrl: 'serenity_report_dealervisit.html',
      controller: 'serenityReportDealerVisitController'
    }).state('serenity.reports_stats', {
      url: '/reports_stats',
      title: 'Stats',
      templateUrl: 'serenity_report_stats.html',
      controller: 'serenityReportStatsController'
    });
    $stateProvider.state('dash', {
      url: '/dash',
      abstract: true,
      templateUrl: 'mymojio.html',
      controller: 'AppController'
    }).state('dash.datasource', {
      url: '/datasource',
      title: 'DataSource',
      templateUrl: 'dash_datasource.html',
      controller: 'dashDatasourceController'
    });
  }
]).config([
  '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', function($controllerProvider, $compileProvider, $filterProvider, $provide) {
    'use strict';
    App.controller = $controllerProvider.register;
    App.directive = $compileProvider.directive;
    App.filter = $filterProvider.register;
    App.factory = $provide.factory;
    App.service = $provide.service;
    App.constant = $provide.constant;
    App.value = $provide.value;
  }
]).config([
  '$translateProvider', 'WebsiteSelectionHelpersProvider', function($translateProvider, WebsiteSelectionHelpersProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: WebsiteSelectionHelpersProvider.translatePrefix(window.location.host),
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useLocalStorage();
    $translateProvider.usePostCompiling(true);
  }
]).config([
  'cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = true;
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 500;
    cfpLoadingBarProvider.parentSelector = 'body';
  }
]);


/**=========================================================
 * Module: constants.js
 * Define constants to inject across the application
 =========================================================
 */
App.constant('APP_COLORS', {
  'primary': '#5d9cec',
  'success': '#27c24c',
  'info': '#23b7e5',
  'warning': '#ff902b',
  'danger': '#f05050',
  'inverse': '#131e26',
  'green': '#37bc9b',
  'pink': '#f532e5',
  'purple': '#7266ba',
  'dark': '#3a3f51',
  'yellow': '#fad732',
  'gray-darker': '#232735',
  'gray-dark': '#3a3f51',
  'gray': '#dde6e9',
  'gray-light': '#e4eaec',
  'gray-lighter': '#edf1f2'
}).constant('APP_MEDIAQUERY', {
  'desktopLG': 1200,
  'desktop': 992,
  'tablet': 768,
  'mobile': 480
}).constant('APP_REQUIRES', {
  modules: []
});


/**=========================================================
 * Module: main.js
 * Main Application Controller
 =========================================================
 */
App.controller('AppController', [
  '$rootScope', '$scope', '$state', '$translate', '$window', '$localStorage', '$timeout', 'toggleStateService', 'colors', 'cfpLoadingBar', 'mojioGlobal', 'WebsiteSelectionHelpers', function($rootScope, $scope, $state, $translate, $window, $localStorage, $timeout, toggle, colors, cfpLoadingBar, mojioGlobal, WebsiteSelectionHelpers) {
    'use strict';
    var thBar;
    thBar = void 0;
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      if ($('.wrapper > section').length) {
        thBar = $timeout((function() {
          cfpLoadingBar.start();
        }), 0);
      }
    });
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      event.targetScope.$watch('$viewContentLoaded', function() {
        $timeout.cancel(thBar);
        cfpLoadingBar.complete();
      });
    });
    $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
      console.log(unfoundState.to);
      console.log(unfoundState.toParams);
      console.log(unfoundState.options);
    });
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      console.log(error);
    });
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $window.scrollTo(0, 0);
      $rootScope.currTitle = $state.current.title;
    });
    $rootScope.currTitle = $state.current.title;
    $rootScope.pageTitle = function() {
      var title;
      title = $rootScope.app.name + ' - ' + ($rootScope.currTitle || $rootScope.app.description);
      document.title = title;
      return title;
    };
    $rootScope.$watch('app.layout.isCollapsed', function(newValue, oldValue) {
      if (newValue === false) {
        $rootScope.$broadcast('closeSidebarMenu');
      }
    });
    if (angular.isDefined($localStorage.layout)) {
      $scope.app.layout = $localStorage.layout;
    } else {
      $localStorage.layout = $scope.app.layout;
    }
    $rootScope.$watch('app.layout', (function() {
      if ($scope.app.layout.isMetric) {
        $scope.app.layout.unit = "i";
      } else {
        $scope.app.layout.unit = "m";
      }
      $localStorage.layout = $scope.app.layout;
    }), true);
    $scope.toggleUserBlock = (function() {
      return $scope.$broadcast('toggleUserBlock');
    });
    $scope.userLogout = function() {
      return mojioGlobal.logout();
    };
    $scope.changeUnit = function(u) {
      return $rootScope.app.layout.unit = u;
    };
    $scope.colorByName = colors.byName;
    $rootScope.language = {
      listIsOpen: false,
      available: {
        'en': 'English'
      },
      init: function() {
        var preferredLanguage, proposedLanguage;
        proposedLanguage = $translate.proposedLanguage() || $translate.use();
        preferredLanguage = $translate.preferredLanguage();
        $rootScope.language.selected = $rootScope.language.available[proposedLanguage || preferredLanguage];
        $rootScope.language.selectedId = proposedLanguage || preferredLanguage;
      },
      set: function(localeId, ev) {
        $translate.use(localeId);
        $rootScope.language.selected = $rootScope.language.available[localeId];
        $rootScope.language.selectedId = localeId;
        $rootScope.language.listIsOpen = !$rootScope.language.listIsOpen;
      }
    };
    $rootScope.language.available = WebsiteSelectionHelpers.AvailableLanguage(window.location.host);
    $rootScope.language.init();
    toggle.restoreState($(document.body));
    $rootScope.cancel = function($event) {
      $event.stopPropagation();
    };
  }
]);


/**
 * Created by pooyaparidel on 15-03-05.
 */
App.controller('mojioGridController', [
  '$stateParams', '$state', '$rootScope', '$location', '$scope', '$element', 'localStorage', '$q', '$filter', '$timeout', '$http', 'mojioGlobal', 'mojioRemote', function($stateParams, $state, $rootScope, $location, $scope, $element, localStorage, $q, $filter, $timeout, $http, mojioGlobal, mojioRemote) {
    var CachedItems, DefaultSetting, DefaultSettingKey, allData, controllerName, ctrl, fieldsTags, getPage, isPageReady, mojioApi, mojioCriteria, mojioModel, mojioModelNo, numberOfPages, show, sid, td;
    controllerName = $element[0].getAttribute('data-alias');
    DefaultSettingKey = 'DefaultSettingKey_' + location.hash.substr(1) + "_" + controllerName;
    ctrl = this;
    isPageReady = function(start, number) {
      var page;
      page = start / number;
      if (typeof CachedItems[page] !== 'undefined') {
        return true;
      } else {
        return false;
      }
    };
    getPage = function(mojioModel, mojioCriteria, start, number, params, auto) {
      var config, deferred, page, url;
      page = start / number;
      if (typeof CachedItems[page] !== 'undefined') {
        if (!auto && page + 1 < numberOfPages && typeof CachedItems[page + 1] === 'undefined') {
          getPage(mojioModel, mojioCriteria, start + number, number, params, true);
        }
        return {
          data: CachedItems[page],
          numberOfPages: numberOfPages
        };
      }
      config = {
        headers: {
          'Content-Type': ' application/json',
          'MojioAPIToken': mojioGlobal.data.access_token
        }
      };
      deferred = $q.defer();
      url = mojioGlobal.apiUrl() + mojioModel + '?limit=' + number + '&offset=' + page * number;
      if (mojioCriteria.length !== 0) {
        url += '&criteria=' + escape(mojioCriteria);
      }
      $http.get(url, config).success(function(response) {
        var numberOfPages, result;
        result = response.Data;
        CachedItems[page] = result;
        numberOfPages = Math.ceil(response.TotalRows / number);
        if (!auto) {
          deferred.resolve({
            data: result,
            numberOfPages: numberOfPages
          });
          if (page + 1 < numberOfPages && typeof CachedItems[page + 1] === 'undefined') {
            getPage(mojioModel, mojioCriteria, start + number, number, params, true);
          }
        }
      });
      return deferred.promise;
    };
    allData = function() {
      var data, ipos, key;
      data = [];
      for (key in CachedItems) {
        ipos = 0;
        while (ipos < CachedItems[key].length) {
          data.push(CachedItems[key][ipos]);
          ipos++;
        }
      }
      return data;
    };
    $scope.EXPORT_CURRENT_PAGE = 1;
    $scope.EXPORT_VISITED_PAGES = 2;
    $scope.EXPORT_CSV = 1;
    mojioModelNo = 0;
    mojioApi = "";
    if (typeof $scope.api !== "undefined") {
      mojioApi = $scope.api;
    } else {
      mojioApi = JSON.parse($element[0].getAttribute('data-mojioApi'));
    }
    sid = $scope.$parent.selectedId;
    mojioModel = mojioApi[0].MojioModel;
    if (mojioApi[0].defaultCriteria) {
      mojioCriteria = mojioApi[0].defaultCriteria;
    } else {
      mojioCriteria = '';
    }
    if (mojioCriteria[0] === ':') {
      mojioCriteria = $stateParams[mojioCriteria.substr(1)];
    }
    $scope.displayed = [];
    $scope.isLoading = false;
    $scope.selectedRow = null;
    $scope.subGrid = null;
    $scope.subGridType = '';
    $scope.s = {
      f: [],
      itemsPerPage: 10
    };
    DefaultSetting = JSON.parse(localStorage.get(DefaultSettingKey));
    if (DefaultSetting === null) {
      DefaultSetting = $scope.s;
    } else {
      $scope.s.itemsPerPage = DefaultSetting.itemsPerPage;
      $scope.itemsPerPage = DefaultSetting.itemsPerPage;
    }
    fieldsTags = $element[0].getElementsByClassName('fieldHeader');
    td = 0;
    while (td < fieldsTags.length) {
      show = fieldsTags[td].getAttribute('data-show') === 'true';
      if (typeof DefaultSetting.f[td] !== 'undefined') {
        show = DefaultSetting.f[td].show;
      }
      $scope.s.f.push({
        name: fieldsTags[td].innerText,
        show: show
      });
      td++;
    }
    CachedItems = {};
    numberOfPages = 0;
    ctrl.clearCachedPage = function() {
      CachedItems = {};
      numberOfPages = 0;
    };
    $scope.ShowHide = function(field) {
      var row;
      for (row in $scope.s.f) {
        if ($scope.s.f[row].name === field) {
          $scope.s.f[row].show = !this.s.f[row].show;
        }
      }
      localStorage.add(DefaultSettingKey, JSON.stringify($scope.s));
    };
    $scope.changeItemsPerPage = function(itemsPerPage) {
      $scope.s.itemsPerPage = itemsPerPage;
      localStorage.add(DefaultSettingKey, JSON.stringify($scope.s));
      ctrl.tableState.pagination.number = itemsPerPage;
      ctrl.tableState.pagination.start = 0;
      ctrl.clearCachedPage();
      $scope.callServer(ctrl.tableState);
    };
    $scope.exportData = function(page, type) {
      var data, fileName;
      data = null;
      fileName = '';
      if (page === $scope.EXPORT_CURRENT_PAGE) {
        data = $scope.displayed;
      } else {
        data = allData();
      }
      if (type = $scope.EXPORT_CSV) {
        fileName = 'export.csv';
        saveAs(ctrl.prepareCsv(data), fileName);
      } else {
        fileName = 'export.csv';
      }
    };
    this.prepareCsv = function(data) {
      var cols, csv_data, ipos, itm, rows;
      rows = [];
      ipos = 0;
      while (ipos < data.length) {
        cols = void 0;
        if (ipos === 0) {
          cols = [];
          for (itm in data[ipos]) {
            if (data[ipos].hasOwnProperty(itm)) {
              cols.push(itm);
            }
          }
          rows.push(cols.join(','));
        }
        cols = [];
        for (itm in data[ipos]) {
          if (data[ipos].hasOwnProperty(itm)) {
            cols.push(data[ipos][itm]);
          }
        }
        rows.push(cols.join(','));
        ipos++;
      }
      csv_data = rows.join('\r\n');
      return new Blob([csv_data], {
        type: 'application/csv'
      });
    };
    $scope.oldSearch = function(searchID) {
      var fieldName, ipos, value;
      mojioModel = mojioApi[searchID].MojioModel;
      mojioCriteria = mojioApi[searchID].criteria.split(',');
      ipos = 0;
      while (ipos < mojioCriteria.length) {
        fieldName = mojioCriteria[ipos].split('=')[1];
        value = $element[0].querySelectorAll('[name="' + fieldName + '"]')[0].value;
        if (value.length !== 0) {
          mojioCriteria[ipos] = mojioCriteria[ipos].replace(fieldName, value);
        } else {
          mojioCriteria[ipos] = '';
        }
        ipos++;
      }
      mojioCriteria = mojioCriteria.join(',');
      ctrl.clearCachedPage();
      $scope.displayed = [];
      $scope.selectedRow = null;
      $scope.callServer(ctrl.tableState);
    };
    $scope.newSearch = function(searchID) {
      var block, blocks, ipos, value, word;
      mojioModel = mojioApi[searchID].MojioModel;
      mojioCriteria = mojioApi[searchID].criteria;
      blocks = mojioCriteria.match(/[^[\]]+(?=])/g);
      ipos = 0;
      while (blocks !== null && ipos < blocks.length) {
        word = blocks[ipos].match(/[^{\}]+(?=})/g);
        value = $element[0].querySelectorAll('[name="' + word + '"]')[0].value;
        if (value.length === 0) {
          mojioCriteria = mojioCriteria.replace("[" + blocks[ipos] + "]", "");
        } else {
          block = blocks[ipos].replace("{" + word + "}", value);
          mojioCriteria = mojioCriteria.replace("[" + blocks[ipos] + "]", block);
        }
        ipos++;
      }
      ctrl.tableState.pagination.start = 0;
      ctrl.clearCachedPage();
      $scope.displayed = [];
      $scope.selectedRow = null;
      $scope.callServer(ctrl.tableState);
    };
    $rootScope.$on('MojioObjectSelected', function(event, data) {
      var ipos, modelId;
      modelId = -1;
      if (data === null && mojioModelNo !== 0) {
        modelId = 0;
      } else {
        ipos = 0;
        while (modelId === -1 && ipos < mojioApi.length) {
          if (mojioApi[ipos].Parent === data.Type) {
            modelId = ipos;
          }
          ipos++;
        }
        if (modelId === -1) {
          return;
        }
      }
      mojioModelNo = modelId;
      mojioModel = mojioApi[modelId].MojioModel;
      if (mojioApi[modelId].defaultCriteria) {
        mojioCriteria = mojioApi[modelId].defaultCriteria;
      } else {
        mojioCriteria = "";
      }
      sid = data._id;
      ctrl.clearCachedPage();
      $scope.displayed = [];
      $scope.selectedRow = null;
      $scope.callServer(ctrl.tableState);
    });
    $scope.impersonate = function(UserID) {
      return mojioRemote.POST("Users/Impersonated/?UserId=" + UserID, {}, function(result) {
        var NewToken;
        NewToken = result._id;
        return mojioGlobal.ChangeUser(NewToken);
      }, function(result) {
        return console.log(result);
      });
    };
    $scope.deleteRow = function(row, endpoint) {
      var NewEndPoint;
      NewEndPoint = mojioModel + "/" + row._id;
      if (typeof endpoint !== "undefined") {
        NewEndPoint = endpoint.replace('{id}', row._id);
      }
      mojioRemote.DELETE(NewEndPoint, function(result) {
        var i, len, pos, r, ref, results;
        ref = $scope.displayed;
        results = [];
        for (pos = i = 0, len = ref.length; i < len; pos = ++i) {
          r = ref[pos];
          if (r._id === row._id) {
            $scope.displayed.splice(pos, 1);
            break;
          } else {
            results.push(void 0);
          }
        }
        return results;
      }, function(result) {
        return console.log(result);
      });
    };
    $scope.detailRow = function(row, type) {
      if (typeof type === "undefined") {
        type = "";
      } else if (type === "broadcast") {
        $rootScope.$broadcast('MojioObjectSelected', row);
        return;
      }
      $scope.selectedRow = row;
      $scope.selectedType = type;
    };
    $scope.showSubGrid = function(row, type) {
      $scope.subGrid = row;
      $scope.subGridType = type;
      $scope.selectedId = row._id;
    };
    $scope.showDetailView = function(view, storeName, row) {
      $rootScope[storeName] = row;
      $state.go(view, {
        id: row._id
      });
    };
    $scope.callServer = function(tableState) {
      var number, pagination, result, start;
      if (typeof tableState === 'undefined') {
        if (typeof ctrl.tableState === 'undefined') {
          return;
        } else {
          tableState = ctrl.tableState;
        }
      }
      if (typeof ctrl.firstLoad === 'undefined' && typeof tableState.pagination.number !== 'undefined') {
        ctrl.firstLoad = false;
        return;
      }
      ctrl.tableState = tableState;
      pagination = tableState.pagination;
      start = pagination.start || 0;
      number = pagination.number || 10;
      mojioModel = mojioModel.replace(':id', sid);
      mojioCriteria = mojioCriteria.replace(':id', sid);
      if (isPageReady(start, number)) {
        result = getPage(mojioModel, mojioCriteria, start, number, tableState, false);
        $scope.displayed = result.data;
      } else {
        $scope.isLoading = true;
        getPage(mojioModel, mojioCriteria, start, number, tableState, false).then(function(result) {
          $scope.displayed = result.data;
          tableState.pagination.numberOfPages = result.numberOfPages;
          $scope.isLoading = false;
        });
      }
    };
  }
]);


/**=========================================================
 * Module: sidebar-menu.js
 * Handle sidebar collapsible elements
 =========================================================
 */
App.controller('SidebarController', [
  '$rootScope', '$scope', '$state', '$http', '$timeout', 'Utils', function($rootScope, $scope, $state, $http, $timeout, Utils) {
    var closeAllBut, collapseList, isActive, isChild, sidebarMenuData;
    sidebarMenuData = $rootScope.selectedProject.SidebarMenu;
    collapseList = [];
    closeAllBut = function(index) {
      var i;
      index += '';
      for (i in collapseList) {
        if (index < 0 || index.indexOf(i) < 0) {
          collapseList[i] = true;
        }
      }
    };
    isChild = function($index) {
      return typeof $index === 'string' && !($index.indexOf('-') < 0);
    };
    $rootScope.$watch('app.layout.asideHover', function(oldVal, newVal) {
      if (newVal === false && oldVal === true) {
        closeAllBut(-1);
      }
    });
    isActive = function(item) {
      var foundActive;
      if (!item) {
        return;
      }
      if (!item.sref || item.sref === '#') {
        foundActive = false;
        angular.forEach(item.submenu, function(value, key) {
          if (isActive(value)) {
            foundActive = true;
          }
        });
        return foundActive;
      } else {
        return $state.is(item.sref) || $state.includes(item.sref);
      }
    };
    $scope.getMenuItemPropClasses = function(item) {
      return (item.heading ? 'nav-heading' : '') + (isActive(item) ? ' active' : '');
    };
    $rootScope.menuItems = sidebarMenuData;
    $scope.addCollapse = function($index, item) {
      collapseList[$index] = $rootScope.app.layout.asideHover ? true : !isActive(item);
    };
    $scope.isCollapse = function($index) {
      return collapseList[$index];
    };
    $scope.toggleCollapse = function($index, isParentItem) {
      if (Utils.isSidebarCollapsed() || $rootScope.app.layout.asideHover) {
        return true;
      }
      if (angular.isDefined(collapseList[$index])) {
        if (!$scope.lastEventFromChild) {
          collapseList[$index] = !collapseList[$index];
          closeAllBut($index);
        }
      } else if (isParentItem) {
        closeAllBut(-1);
      }
      $scope.lastEventFromChild = isChild($index);
      return true;
    };
  }
]);


/**=========================================================
 * Module: sidebar-menu.js
 * Handle sidebar collapsible elements
 =========================================================
 */
App.controller('SidebarTimeline', [
  '$rootScope', '$scope', '$state', '$http', '$timeout', 'Utils', 'myMojioFactory', function($rootScope, $scope, $state, $http, $timeout, Utils, myMojioFactory) {
    var getNotifications;
    $scope.Notifications = [];
    $scope.NotificationStatus = "Loading";
    getNotifications = function() {
      myMojioFactory.AllVehicleNotifications(16).then(function(data) {
        $scope.Notifications = data;
        $scope.NotificationStatus = "Done";
        $timeout((function() {
          return getNotifications();
        }), 30000);
      });
    };
    $scope.VehicleName = function(id) {
      var title, v;
      title = null;
      v = myMojioFactory.Content.VehiclesObj[id];
      if (typeof v !== "undefined" && typeof v.Name !== "undefined" && v.Name !== null && v.Name !== "") {
        title = v.Name;
      } else {
        title = "New Car";
      }
      return title;
    };
    getNotifications();
    $scope.AllData = myMojioFactory.Content;
    $scope.EventTitle = function(name) {
      return name.replace(/([a-z])([A-Z])/g, '$1 $2');
    };
  }
]);

App.controller('UserBlockController', [
  '$scope', function($scope) {
    $scope.userBlockVisible = true;
    $scope.$on('toggleUserBlock', function(event, args) {
      $scope.userBlockVisible = !$scope.userBlockVisible;
    });
  }
]);

App.directive('latLngToAddress', [
  'localStorage', function(localStorage) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        loc: '=',
        adr: '=',
        cache: '=',
        accuracy: '='
      },
      template: '<div></div>',
      link: function(scope, element, attrs) {
        scope.$watch('loc', function() {
          var Lat, Lng, StorageKey, decPoints, geocoder, latlng, res;
          geocoder = new google.maps.Geocoder;
          if (typeof scope.loc === "undefined" || scope.loc === null) {
            element.text("");
            return;
          }
          Lat = scope.loc.Lat;
          Lng = scope.loc.Lng;
          StorageKey = "";
          if (scope.cache === true) {
            decPoints = Math.pow(10, scope.accuracy);
            Lat = Math.round(scope.loc.Lat * decPoints) / decPoints;
            Lng = Math.round(scope.loc.Lng * decPoints) / decPoints;
            StorageKey = "geocode_" + Lat + "_" + Lng;
            res = localStorage.get(StorageKey);
            if (res !== null) {
              element.text(res);
              if (scope.adr != null) {
                scope.adr.Address1 = res;
              }
              return;
            }
          }
          latlng = new google.maps.LatLng(Lat, Lng);
          geocoder.geocode({
            'latLng': latlng
          }, function(results, status) {
            Lat = Math.round(scope.loc.Lat * decPoints) / decPoints;
            Lng = Math.round(scope.loc.Lng * decPoints) / decPoints;
            element.text(Lat + "," + Lng);
            if (status === google.maps.GeocoderStatus.OK) {
              if (results[1]) {
                element.text(results[1].formatted_address);
                if (scope.adr != null) {
                  scope.adr.Address1 = results[1].formatted_address;
                }
                if (scope.cache === true) {
                  localStorage.add(StorageKey, results[1].formatted_address);
                }
              }
            }
          });
        });
      }
    };
  }
]);

App.directive('latLngToWeather', [
  'sessionStorage', '$http', '$compile', 'mojioRemote2', function(sessionStorage, $http, $compile, mojioRemote2) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        loc: '=',
        cache: '=',
        accuracy: '=',
        type: '=',
        attachResult: '='
      },
      template: '<div></div>',
      link: function(scope, element, attrs) {
        var createHtml;
        createHtml = function(result) {
          if (scope.type === "weather") {
            return "<img src='http://openweathermap.org/img/w/" + result.weather[0].icon + ".png'>";
          } else if (scope.type === "temp") {
            return Math.round(result.main.temp - 273.15);
          }
        };
        scope.$watch('loc', function() {
          var Lat, Lng, StorageKey, decPoints, geocoder, res;
          geocoder = new google.maps.Geocoder;
          if (typeof scope.loc === "undefined" || scope.loc === null) {
            element.text("");
            return;
          }
          Lat = scope.loc.Lat;
          Lng = scope.loc.Lng;
          StorageKey = "";
          if (scope.cache === true) {
            decPoints = Math.pow(10, scope.accuracy);
            Lat = Math.round(scope.loc.Lat * decPoints) / decPoints;
            Lng = Math.round(scope.loc.Lng * decPoints) / decPoints;
            StorageKey = "geocode_" + Lat + "_" + Lng;
            res = sessionStorage.get(StorageKey);
            if (res !== null) {
              if (scope.attachResult) {
                scope.attachResult.weather = res;
              }
              element.html(createHtml(res));
              $compile(element.contents())(scope);
              return;
            }
          }
          mojioRemote2.GET({
            endpoint: "firefly",
            operation: "weather/lat=" + Lat + "&lon=" + Lng,
            onSuccess: function(result) {
              if (scope.cache === true) {
                sessionStorage.add(StorageKey, result);
              }
              if (scope.attachResult) {
                scope.attachResult.weather = result;
              }
              element.html(createHtml(result));
              return $compile(element.contents())(scope);
            }
          });
        });
      }
    };
  }
]);

App.directive('multiSelect', [
  '$compile', function($compile) {
    return {
      scope: {
        multiSelect: '=',
        choice: '='
      },
      link: function(scope, element, attributes) {
        element.bind('click', function(changeEvent) {
          var ch, i, iPos, len, pos, ref;
          iPos = -1;
          ref = scope.choice;
          for (pos = i = 0, len = ref.length; i < len; pos = ++i) {
            ch = ref[pos];
            if (scope.multiSelect === ch) {
              iPos = (pos + 1) % scope.choice.length;
              scope.$apply(function() {
                return scope.multiSelect = scope.choice[iPos];
              });
              return;
            }
          }
        });
      }
    };
  }
]);

App.directive('areYouSure', [
  '$modal', '$filter', function($modal, $filter) {
    return {
      restrict: 'A',
      scope: {
        areYouSure: '&',
        item: '='
      },
      link: function(scope, element, attrs) {
        element.bind('click', function() {
          var message, modalHtml, modalInstance;
          message = attrs.message || $filter('translate')("common.AreYouSure");
          modalHtml = '<div class="modal-body">' + message + '</div>';
          modalHtml += '<div class="modal-footer"><button class="btn btn-primary" ng-click="ok()"><em class="fa fa-check"></em></button><button class="btn btn-warning" ng-click="cancel()"><em class="fa fa-close"></em></button></div>';
          modalInstance = $modal.open({
            template: modalHtml,
            size: 'sm',
            controller: ["$scope", "$modalInstance", function($scope, $modalInstance) {
              $scope.ok = function() {
                $modalInstance.close();
              };
              $scope.cancel = function() {
                $modalInstance.dismiss('cancel');
              };
            }]
          });
          modalInstance.result.then((function() {
            scope.areYouSure({
              item: scope.item
            });
          }), function() {});
        });
      }
    };
  }
]);

App.directive('compareTo', [
  '$compile', function($compile) {
    return {
      require: "ngModel",
      scope: {
        otherModelValue: "=compareTo"
      },
      link: function(scope, element, attributes, ngModel) {
        ngModel.$validators.compareTo = function(modelValue) {
          return modelValue === scope.otherModelValue;
        };
        return scope.$watch("otherModelValue", function() {
          return ngModel.$validate();
        });
      }
    };
  }
]);

App.directive('dynamic', [
  '$compile', function($compile) {
    return {
      restrict: 'AE',
      replace: true,
      link: function(scope, ele, attrs) {
        return scope.$watch(attrs.dynamic, function(html) {
          ele.html(html);
          $compile(ele.contents())(scope);
        });
      }
    };
  }
]);

App.directive('fileread', [
  '$compile', function($compile) {
    return {
      scope: {
        fileread: '=',
        file: '=',
        readtype: '@'
      },
      link: function(scope, element, attributes) {
        element.bind('change', function(changeEvent) {
          var reader;
          reader = new FileReader;
          reader.onload = function(loadEvent) {
            scope.$apply(function() {
              scope.file = changeEvent.target.files[0];
              if (scope.readtype === "json") {
                scope.fileread = JSON.parse(loadEvent.target.result);
              } else {
                scope.fileread = loadEvent.target.result;
              }
            });
          };
          if (scope.readtype === "text" || scope.readtype === "json") {
            reader.readAsText(changeEvent.target.files[0]);
          } else {
            reader.readAsDataURL(changeEvent.target.files[0]);
          }
          element[0].value = "";
        });
      }
    };
  }
]);


/**=========================================================
 * Module: flot.js
 * Initializes the Flot chart plugin and handles data refresh
 =========================================================
 */
App.directive('flot', [
  '$http', '$timeout', function($http, $timeout) {
    var linkFunction;
    linkFunction = function(scope, element, attributes) {
      var height, heightDefault, init, onDatasetChanged, onSerieToggled, onSrcChanged, plot, plotArea, width;
      height = void 0;
      plot = void 0;
      plotArea = void 0;
      width = void 0;
      heightDefault = 220;
      init = function() {
        var plotObj;
        plotObj = void 0;
        if (!scope.dataset || !scope.options) {
          return;
        }
        plotObj = $.plot(plotArea, scope.dataset, scope.options);
        scope.$emit('plotReady', plotObj);
        if (scope.callback) {
          scope.callback(plotObj, scope);
        }
        return plotObj;
      };
      onDatasetChanged = function(dataset) {
        if (plot) {
          plot.setData(dataset);
          plot.setupGrid();
          return plot.draw();
        } else {
          plot = init();
          onSerieToggled(scope.series);
          return plot;
        }
      };
      onSerieToggled = function(series) {
        var sName, someData, toggleFor;
        toggleFor = function(sName) {
          return function(s, i) {
            if (someData[i] && someData[i][sName]) {
              someData[i][sName].show = s;
            }
          };
        };
        if (!plot || !series) {
          return;
        }
        someData = plot.getData();
        for (sName in series) {
          angular.forEach(series[sName], toggleFor(sName));
        }
        plot.setData(someData);
        plot.draw();
      };
      onSrcChanged = function(src) {
        if (src) {
          $http.get(src).success(function(data) {
            $timeout(function() {
              scope.dataset = data;
            });
          }).error(function() {
            $.error('Flot chart: Bad request.');
          });
        }
      };
      plot = null;
      width = attributes.width || '100%';
      height = attributes.height || heightDefault;
      plotArea = $(element.children()[0]);
      plotArea.css({
        width: width,
        height: height
      });
      scope.$watchCollection('dataset', onDatasetChanged, true);
      scope.$watch('series', onSerieToggled, true);
      scope.$watch('src', onSrcChanged);
    };
    'use strict';
    return {
      restrict: 'EA',
      template: '<div></div>',
      scope: {
        dataset: '=?',
        options: '=',
        series: '=',
        callback: '=',
        src: '='
      },
      link: linkFunction
    };
  }
]);

App.directive('imageModal', [
  '$modal', '$filter', function($modal, $filter) {
    return {
      restrict: 'A',
      scope: {
        imageModal: '='
      },
      link: function(scope, element, attrs) {
        element.bind('click', function() {
          var modalHtml, modalInstance;
          modalHtml = '<div class="modal-body"><img class="img-responsive" src="' + scope.imageModal + '"></div>';
          modalInstance = $modal.open({
            template: modalHtml,
            controller: ["$scope", "$modalInstance", function($scope, $modalInstance) {
              $scope.ok = function() {
                $modalInstance.close();
              };
              $scope.cancel = function() {
                $modalInstance.dismiss('cancel');
              };
            }]
          });
          modalInstance.result.then((function() {}), function() {});
        });
      }
    };
  }
]);

App.directive('loadCss', [
  '$rootScope', function($rootScope) {
    var createLink;
    createLink = function(uri) {
      var linkId, oldLink;
      linkId = 'autoloaded-stylesheet';
      oldLink = $('#' + linkId).attr('id', linkId + '-old');
      $('head').append($('<link/>').attr({
        'id': linkId,
        'rel': 'stylesheet',
        'href': uri
      }));
      if (oldLink.length) {
        oldLink.remove();
      }
      return $('#' + linkId);
    };
    'use strict';
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.on('click', function(e) {
          var link, theme, uri;
          if (element.is('a')) {
            e.preventDefault();
          }
          uri = attrs.loadCss;
          theme = attrs.theme;
          if (theme) {
            $rootScope.$apply(function() {
              return $rootScope.app.layout.theme = theme;
            });
          }
          link = void 0;
          if (uri) {
            link = createLink(uri);
            if (!link) {
              $.error('Error creating stylesheet link element.');
            }
          } else {
            $.error('No stylesheet location defined.');
          }
        });
      }
    };
  }
]);

App.directive('modalInput', [
  '$modal', function($modal) {
    return {
      restrict: 'A',
      scope: {
        modalInput: '=',
        fields: '=',
        inputValue: '=',
        outputValue: '=',
        item: '='
      },
      link: function(scope, element, attrs) {
        element.bind('click', function() {
          var message, modalHtml, modalInstance;
          message = attrs.message || 'Change The Value:';
          modalHtml = '<div class="modal-header">' + message;
          if (typeof scope.inputValue !== "object") {
            modalHtml += '<div class="modal-body">' + '<input ng-model="showData">' + '</div>';
          } else {
            modalHtml += '<div class="modal-body">' + '<div class="row" ng-repeat="f in fieldDesc">' + '<div class="col-md-12">' + '<div class="input-group">' + '<span class="input-group-btn">' + '<div class="btn btn-default">{{f.FieldTitle}}</div>' + '</span>' + '<input class="form-control" ng-model="showData[f.FieldName]">' + '</div>' + '<br/></div>' + '</div></div></div>';
          }
          modalHtml += '<div class="modal-footer"><button class="btn btn-primary" ng-click="ok()">OK</button><button class="btn btn-warning" ng-click="cancel()">Cancel</button></div>';
          modalInstance = $modal.open({
            template: modalHtml,
            controller: ["$scope", "$modalInstance", "showData", "fieldDesc", function($scope, $modalInstance, showData, fieldDesc) {
              $scope.showData = showData;
              $scope.fieldDesc = fieldDesc;
              $scope.ok = function() {
                $modalInstance.close($scope.showData);
              };
              $scope.cancel = function() {
                $modalInstance.dismiss('cancel');
              };
            }],
            resolve: {
              showData: function() {
                return scope.inputValue;
              },
              fieldDesc: function() {
                return scope.fields;
              }
            }
          });
          modalInstance.result.then((function(result) {
            scope.outputValue = result;
            scope.modalInput(result);
          }), function() {});
        });
      }
    };
  }
]);

App.directive('mojioLocation', [
  '$modal', '$templateCache', '$compile', function($modal, $templateCache, $compile) {
    return {
      restrict: 'EA',
      scope: {
        geoloc: '=',
        address: '='
      },
      controller: ["$scope", function($scope) {}],
      link: function(scope, element) {
        var adr, mtitle, text;
        if (scope.geoloc !== null) {
          $templateCache.put('mojioLocationTemplate.html', '<div class="modal-header"> <h3 class="modal-title">{{mtitle}}</h3> </div> <div class="modal-body" style="height: 300px" mojio-simple-map geoloc="geoloc"></div>');
          text = '';
          mtitle = '';
          if (typeof scope.address !== 'undefined' && scope.address !== null) {
            adr = scope.address;
            mtitle = adr.Address1;
            if (adr.Address2 !== null) {
              mtitle += ", " + adr.Address2;
            }
            mtitle += ", " + adr.City + ", " + adr.State + ", " + adr.Zip + " " + adr.Country;
            text = adr.Address1 + ", " + adr.City;
          } else {
            mtitle = scope.geoloc.Lat.toFixed(2) + " , " + scope.geoloc.Lng.toFixed(2);
            text = scope.geoloc.Lat.toFixed(2) + " , " + scope.geoloc.Lng.toFixed(2);
          }
          element[0].innerHTML = "<a ng-click><li class='fa fa-crosshairs '> " + text + "</a>";
          return element.on('click', function() {
            return scope.modalInstance = $modal.open({
              size: 'lg',
              templateUrl: 'mojioLocationTemplate.html',
              controller: ["$scope", "geoloc", "mtitle", function($scope, geoloc, mtitle) {
                $scope.geoloc = geoloc;
                return $scope.mtitle = mtitle;
              }],
              resolve: {
                geoloc: function() {
                  return scope.geoloc;
                },
                mtitle: function() {
                  return mtitle;
                }
              }
            });
          });
        }
      }
    };
  }
]);

App.directive('mojioSimpleMap', [
  '$rootScope', function($rootScope) {
    return {
      restrict: 'EA',
      scope: {
        geoloc: '='
      },
      link: function(scope, element) {
        var bounds, checkVisibility, extendPoint1, extendPoint2, marker, myLatlng, myOptions;
        myLatlng = new google.maps.LatLng(scope.geoloc.Lat, scope.geoloc.Lng);
        myOptions = {
          zoom: 12,
          disableDefaultUI: true,
          navigationControl: true,
          navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
          },
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        scope.map = new google.maps.Map(element[0], myOptions);
        marker = new google.maps.Marker({
          position: myLatlng,
          map: scope.map,
          title: "Marker"
        });
        console.log(scope.geoloc.Lat + ' , ' + scope.geoloc.Lng);
        bounds = new google.maps.LatLngBounds();
        extendPoint1 = new google.maps.LatLng(scope.geoloc.Lat + 0.003, scope.geoloc.Lng + 0.003);
        extendPoint2 = new google.maps.LatLng(scope.geoloc.Lat - 0.003, scope.geoloc.Lng - 0.003);
        bounds.extend(extendPoint1);
        bounds.extend(extendPoint2);
        checkVisibility = function() {
          google.maps.event.trigger(scope.map, "resize");
          scope.map.fitBounds(bounds);
        };
        window.setTimeout(checkVisibility, 500);
      }
    };
  }
]);

App.directive('morrisArea', [
  '$rootScope', '$timeout', function($rootScope, $timeout) {
    return {
      restrict: 'EA',
      template: '<div></div>',
      replace: true,
      scope: {
        data: "=",
        xkey: "=",
        ykeys: "=",
        labels: "=",
        xLabelFormat: "=",
        lineColors: "="
      },
      link: function(scope, element, attrs) {
        $timeout(function() {
          return Morris.Area({
            element: element,
            data: scope.data,
            xkey: scope.xkey,
            ykeys: scope.ykeys,
            labels: scope.labels,
            lineColors: scope.lineColors,
            fillOpacity: 0.8,
            resize: true,
            behaveLikeLine: true
          });
        }, 0);
      }
    };
  }
]);

App.directive('morrisChart', [
  '$rootScope', function($rootScope) {
    return {
      restrict: 'EA',
      template: '<div></div>',
      replace: true,
      scope: {
        data: "=",
        xkey: "=",
        ykeys: "=",
        labels: "=",
        xLabelFormat: "=",
        lineColors: "="
      },
      link: function(scope, element, attrs) {
        Morris.Line({
          element: element,
          data: scope.data,
          xkey: scope.xkey,
          ykeys: scope.ykeys,
          labels: scope.labels,
          lineColors: scope.lineColors
        });
      }
    };
  }
]);


/**=========================================================
 * Module: navbar-search.js
 * Navbar search toggler * Auto dismiss on ESC key
 =========================================================
 */
App.directive('searchOpen', [
  'navSearch', function(navSearch) {
    'use strict';
    return {
      restrict: 'A',
      controller: ["$scope", "$element", function($scope, $element) {
        $element.on('click', function(e) {
          e.stopPropagation();
        }).on('click', navSearch.toggle);
      }]
    };
  }
]).directive('searchDismiss', [
  'navSearch', '$state', function(navSearch, $state) {
    'use strict';
    var inputSelector;
    inputSelector = '.navbar-form input[type="text"]';
    return {
      restrict: 'A',
      controller: ["$scope", "$element", "$document", function($scope, $element, $document) {
        $(inputSelector).on('click', function(e) {
          e.stopPropagation();
        }).on('keyup', function(e) {
          if (e.keyCode === 27) {
            navSearch.dismiss();
          }
        }).on('keypress', function(e) {
          var param;
          if (e.keyCode === 13) {
            param = this.value;
            navSearch.dismiss();
            $state.go('admin.adminsearch', {
              key: param
            });
          }
        });
        $(document).on('click', navSearch.dismiss);
        $document.bind('keypress', function(e) {
          var nodeName;
          if (e.which === 47 || e.which === 63) {
            nodeName = e.target.nodeName;
            if (nodeName !== "INPUT" && nodeName !== "TEXTAREA") {
              navSearch.toggle();
              return false;
            }
          }
        });
        $element.on('click', function(e) {
          e.stopPropagation();
        }).on('click', navSearch.dismiss);
      }]
    };
  }
]);

App.directive('notificationIcon', [
  '$rootScope', function($rootScope) {
    return {
      restrict: 'EA',
      template: '<div class="label {{color}}"><li class="fa {{icon}}"></li></div>',
      replace: true,
      scope: false,
      link: function(scope, element, attrs) {
        scope.icon = '';
        scope.color = '';
        if (attrs.type === "MILWarning") {
          scope.icon = 'fa-exclamation-triangle';
          scope.color = 'label-danger';
        }
        if (attrs.type === "Accident") {
          scope.icon = 'fa-exclamation-triangle';
          scope.color = 'label-danger';
        }
        if (attrs.type === "TowStart") {
          scope.icon = 'fa-exclamation-triangle';
          scope.color = 'label-danger';
        }
        if (attrs.type === "LowBattery") {
          scope.icon = 'fa-exclamation-triangle';
          scope.color = 'label-warning';
        }
        if (attrs.type === "ConnectionLost") {
          scope.icon = 'fa-exclamation-triangle';
          scope.color = 'label-warning';
        }
        if (attrs.type === "HardAcceleration") {
          scope.icon = 'fa-exclamation-triangle';
          scope.color = 'label-warning';
        }
        if (attrs.type === "HardBrake") {
          scope.icon = 'fa-exclamation-triangle';
          scope.color = 'label-warning';
        }
        if (attrs.type === "LowFuel") {
          scope.icon = 'fa-exclamation-triangle';
          scope.color = 'label-warning';
        }
        if (attrs.type === "Speed") {
          scope.icon = 'fa-exclamation-triangle';
          scope.color = 'label-warning';
        }
        if (attrs.type === "Diagnostic") {
          scope.icon = 'fa-exclamation-triangle';
          scope.color = 'label-warning';
        }
      }
    };
  }
]);


/**=========================================================
 * Module: sidebar.js
 * Wraps the sidebar and handles collapsed state
 =========================================================
 */
App.directive('sidebar', [
  '$rootScope', '$window', 'Utils', function($rootScope, $window, Utils) {
    var $body, $scope, $sidebar, $win, currentState, removeFloatingNav, sidebarAddBackdrop, toggleMenuItem, toggleTouchItem;
    $win = $($window);
    $body = $('body');
    $scope = void 0;
    $sidebar = void 0;
    currentState = $rootScope.$state.current.name;
    sidebarAddBackdrop = function() {
      var $backdrop;
      $backdrop = $('<div/>', {
        'class': 'dropdown-backdrop'
      });
      $backdrop.insertAfter('.aside-inner').on('click mouseenter', function() {
        removeFloatingNav();
      });
    };
    toggleTouchItem = function($element) {
      $element.siblings('li').removeClass('open').end().toggleClass('open');
    };
    toggleMenuItem = function($listItem) {
      var $aside, $asideInner, itemTop, mar, subNav, ul, vwHeight;
      removeFloatingNav();
      ul = $listItem.children('ul');
      if (!ul.length) {
        return $();
      }
      if ($listItem.hasClass('open')) {
        toggleTouchItem($listItem);
        return $();
      }
      $aside = $('.aside');
      $asideInner = $('.aside-inner');
      mar = parseInt($asideInner.css('padding-top'), 0) + parseInt($aside.css('padding-top'), 0);
      subNav = ul.clone().appendTo($aside);
      toggleTouchItem($listItem);
      itemTop = $listItem.position().top + mar - $sidebar.scrollTop();
      vwHeight = $win.height();
      subNav.addClass('nav-floating').css({
        position: $scope.app.layout.isFixed ? 'fixed' : 'absolute',
        top: itemTop,
        bottom: subNav.outerHeight(true) + itemTop > vwHeight ? 0 : 'auto'
      });
      subNav.on('mouseleave', function() {
        toggleTouchItem($listItem);
        subNav.remove();
      });
      return subNav;
    };
    removeFloatingNav = function() {
      $('.dropdown-backdrop').remove();
      $('.sidebar-subnav.nav-floating').remove();
      $('.sidebar li.open').removeClass('open');
    };
    return {
      restrict: 'EA',
      template: '<nav class="sidebar" ng-transclude></nav>',
      transclude: true,
      replace: true,
      link: function(scope, element, attrs) {
        var eventName, subNav;
        $scope = scope;
        $sidebar = element;
        eventName = Utils.isTouch() ? 'click' : 'mouseenter';
        subNav = $();
        $sidebar.on(eventName, '.nav > li', function() {
          if (Utils.isSidebarCollapsed() || $rootScope.app.layout.asideHover) {
            subNav.trigger('mouseleave');
            subNav = toggleMenuItem($(this));
            sidebarAddBackdrop();
          }
        });
        scope.$on('closeSidebarMenu', function() {
          removeFloatingNav();
        });
        $win.on('resize', function() {
          if (!Utils.isMobile()) {
            $body.removeClass('aside-toggled');
          }
        });
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
          currentState = toState.name;
          $('body.aside-toggled').removeClass('aside-toggled');
          $rootScope.$broadcast('closeSidebarMenu');
        });
      }
    };
  }
]);

App.directive('slowUpdate', [
  '$rootScope', function($rootScope) {
    return {
      restrict: 'EA',
      scope: {
        real: '=',
        typ: '='
      },
      link: function(scope, element) {
        var changeNum, changeStr;
        changeStr = function() {
          var change, code, curr, diff, ipos, real;
          if (typeof scope.real === "undefined") {
            window.setTimeout(changeStr, 500);
          }
          real = scope.real;
          curr = element[0].innerHTML;
          if (curr === real) {
            window.setTimeout(changeStr, 500);
          }
          while (curr.length !== real.length) {
            if (curr.length > real.length) {
              real += " ";
            } else {
              curr += " ";
            }
          }
          ipos = 0;
          change = 0;
          while (ipos < curr.length) {
            if (curr[ipos] !== real[ipos]) {
              diff = real.charCodeAt(ipos) - curr.charCodeAt(ipos);
              if (Math.abs(diff) >= 2) {
                diff = parseInt(diff / 2);
              }
              code = curr.charCodeAt(ipos) + diff;
              curr = curr.substr(0, ipos) + String.fromCharCode(code) + curr.substr(ipos + 1);
              change++;
              if (change === 3) {
                break;
              }
            }
            ipos++;
          }
          element[0].innerHTML = curr;
          window.setTimeout(changeStr, 10);
        };
        changeNum = function() {
          var add, curr;
          curr = parseInt(element[0].innerHTML);
          if (isNaN(curr)) {
            curr = 0;
          }
          add = parseInt(scope.real) - curr;
          if (Math.abs(add) >= 2) {
            add = parseInt(add / 2);
          }
          if (add !== 0) {
            element[0].innerHTML = curr + add;
            window.setTimeout(changeNum, 50);
          } else {

          }
        };
        if (scope.typ === 'number') {
          changeNum();
        } else {
          changeStr();
        }
      }
    };
  }
]);


/**=========================================================
 * Module: toggle-state.js
 * Toggle a classname from the BODY Useful to change a state that
 * affects globally the entire layout or more than one item
 * Targeted elements must have [toggle-state="CLASS-NAME-TO-TOGGLE"]
 * User no-persist to avoid saving the sate in browser storage
 =========================================================
 */
App.directive('toggleState', [
  'toggleStateService', function(toggle) {
    'use strict';
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var $body;
        $body = $('body');
        $(element).on('click', function(e) {
          var classname;
          e.preventDefault();
          classname = attrs.toggleState;
          if (classname) {
            if ($body.hasClass(classname)) {
              $body.removeClass(classname);
              if (!attrs.noPersist) {
                toggle.removeState(classname);
              }
            } else {
              $body.addClass(classname);
              if (!attrs.noPersist) {
                toggle.addState(classname);
              }
            }
          }
        });
      }
    };
  }
]);

App.factory('SerenityModels', [
  function() {
    var Dealer, EmptyPic, Location, Service, ServiceAdvice, ServiceOffer, ServiceTask, Situation, SituationEvent;
    EmptyPic = "";
    Service = {
      "name": "",
      "description": "string",
      "icon": EmptyPic,
      "artwork": EmptyPic,
      "artworktext": "",
      "artworksubtext": "",
      "advice": [],
      "offers": [],
      "tasks": [],
      "tag": []
    };
    ServiceAdvice = {
      "name": "",
      "description": "",
      "icon": EmptyPic,
      "artwork": EmptyPic,
      "artworktext": "",
      "artworksubtext": "",
      "tag": []
    };
    ServiceOffer = {
      "name": "",
      "description": "",
      "icon": EmptyPic,
      "artwork": EmptyPic,
      "artworktext": "",
      "artworksubtext": "",
      "discounttype": "",
      "discountamount": "",
      "discountitem": "",
      "discounttext": "",
      "discount": "",
      "expires": "",
      "tag": [],
      "redemptioncode": ""
    };
    ServiceTask = {
      "name": "",
      "description": "",
      "icon": EmptyPic,
      "artwork": EmptyPic,
      "artworktext": "",
      "artworksubtext": "",
      "advice": [],
      "offers": [],
      "tag": []
    };
    Situation = {
      "name": "",
      "events": [],
      "Debounce": "",
      "Throttle": "",
      "Timing": "",
      "State": true
    };
    SituationEvent = {
      "Source": "vehicle",
      "Property": "",
      "Condition": "",
      "Debounce": "",
      "Throttle": "",
      "Timing": "level",
      "State": false,
      "Conjunction": "and"
    };
    Dealer = {
      "name": "",
      "address": "",
      "phone": "",
      "email": "",
      "artwork": "",
      "icon": "",
      "Locations": [],
      "ServiceRep": [],
      "MojioUserId": "",
      "MojioGroupId": ""
    };
    Location = {
      "NorthEast_lat": 0,
      "NorthEast_lon": 0,
      "SouthWest_lat": 0,
      "SouthWest_lon": 0
    };
    return {
      Service: Service,
      ServiceAdvice: ServiceAdvice,
      ServiceOffer: ServiceOffer,
      ServiceTask: ServiceTask,
      Situation: Situation,
      SituationEvent: SituationEvent,
      Dealer: Dealer,
      Location: Location
    };
  }
]);

App.provider('WebsiteSelectionHelpers', [
  function() {
    'use strict';
    this.translatePrefix = function(h) {
      var defPrefix, i, l, len, list;
      defPrefix = "app/i18n/";
      list = [["cz-my", "app/i18n/cz-my/"], ["eu-my", "app/i18n/cz-my/"], ["staging-my", "app/i18n/cz-my/"], ["staging-cz-my", "app/i18n/cz-my/"], ["localhost", "app/i18n/cz-my/"]];
      for (i = 0, len = list.length; i < len; i++) {
        l = list[i];
        if (h.indexOf(l[0]) === 0) {
          return l[1];
        }
      }
      return defPrefix;
    };
    this.SelectDefaultMenu = function(href) {
      var defaultMenu, i, l, len, list;
      list = [["staging-dealer-firefly.moj.io", "/serenity/sinstance"], ["dealer-firefly.moj.io", "/serenity/sinstance"], ["preview.admin.moj.io", "/admin/dashboard"], ["preview.developer.moj.io", "/admin/dashboard"], ["preview.demo.moj.io", "/admin/dashboard"], ["preview.simulator.moj.io", "/dev/simplesimulator"], ["staging-simulator.moj.io", "/dev/sim2"], ["simulator.moj.io", "/dev/sim2"], ["trial-simulator.moj.io", "/dev/sim2"], ["staging-admin.moj.io", "/admin2/search"]];
      defaultMenu = "/my/dashboard";
      for (i = 0, len = list.length; i < len; i++) {
        l = list[i];
        if (href.indexOf(l[0]) > -1) {
          return l[1];
        }
      }
      return defaultMenu;
    };
    this.$get = function() {
      return {
        AvailableLanguage: function(host) {
          var SiteList, en, en_cz, i, len, s;
          en_cz = {
            'en': 'English',
            'cs_CZ': 'Czech'
          };
          en = {
            'en': 'English'
          };
          SiteList = [['cz-my.moj.io', en_cz], ['eu-my.moj.io', en_cz], ['staging-cz-my.moj.io', en_cz], ['localhost', en]];
          for (i = 0, len = SiteList.length; i < len; i++) {
            s = SiteList[i];
            if (host.indexOf(s[0]) === 0) {
              return s[1];
            }
          }
          return en;
        },
        SelectMenu: function(host, cref) {
          var defaultMenu, i, l, len, list;
          list = [["staging-dealer-firefly.moj.io", "Serenity"], ["dealer-firefly.moj.io", "Serenity"], ["simulator.moj.io", "Simulator2"], ["my2.moj.io", "My"], ["my.moj.io", "My"], ["preview.admin.moj.io", "Admin"], ["staging-my.moj.io", "My"], ["preview.my.moj.io", "My"], ["preview.developer.moj.io", "Developer"], ["preview.demo.moj.io", "Demo"], ["preview.simulator.moj.io", "Simulator"], ["staging-simulator.moj.io", "Simulator2"], ["trial-simulator.moj.io", "Simulator2"], ["prod-simulator.moj.io", "Simulator2"], ["staging-admin.moj.io", "Admin2"], ["cz-simulator.moj.io", "Simulator2"], ["cz-my.moj.io", "My"], ["eu-simulator.moj.io", "Simulator2"], ["eu-my.moj.io", "My"], ["staging-cz-my.moj.io", "My"], ["localhost", "Serenity"]];
          defaultMenu = "Serenity";
          for (i = 0, len = list.length; i < len; i++) {
            l = list[i];
            if (cref.indexOf(l[0]) > -1) {
              return l[1];
            }
          }
          return defaultMenu;
        },
        SelectBackEnd: function(host, cref) {
          var defaultBackEnd, i, l, len, list;
          list = [["trial-my.moj.io", "legacytrial"], ["trial-simulator.moj.io", "trial_v2"], ["prod-my.moj.io", "legacyprod"], ["prod-simulator.moj.io", "prod_v2"], ["preview.my.moj.io", "production"], ["staging-simulator.", "staging2"], ["cz-my.moj.io", "legacychezh"], ["staging-cz-my.moj.io", "legacychezh"], ["cz-simulator.moj.io", "chezh_main_v2"], ["eu-my.moj.io", "legacyeu"], ["eu-simulator.moj.io", "eu_main_v2"], ["develop.", "develop"], ["staging-my.", "legacystaging"], ["staging-admin.", "main_v2"], ["staging.", "staging"], ["simulator.moj.io", "main_v2"], ["my2.moj.io", "main_legacy"], ["my.moj.io", "main_legacy"], ["staging-dealer-firefly.moj.io", "staging2"], ["dealer-firefly.moj.io", "main_v2"]];
          defaultBackEnd = "serenity_local";
          for (i = 0, len = list.length; i < len; i++) {
            l = list[i];
            if (cref.indexOf(l[0]) > -1) {
              return l[1];
            }
          }
          return defaultBackEnd;
        }
      };
    };
  }
]);

App.factory('codeWizardFactory', [
  '$http', function($http) {
    var Child, Content, MasterConfigUrl, Parent, SelectNode, getTemplate, isNumber, prepareAncestors, prepareNodes, prepareTemplates, tohash;
    MasterConfigUrl = "code_template/menu.js";
    Content = {
      nodes: [],
      masterNode: null,
      selectedNode: null,
      Data: {}
    };
    prepareTemplates = function() {
      var i, len, node, ref, tmp;
      node = Content.selectedNode;
      if (node.askForTemplate === true) {
        return;
      }
      if (typeof node.template === "undefined") {
        return;
      }
      node.askForTemplate = true;
      node.templateNo = 0;
      node.templateReady = false;
      ref = node.template;
      for (i = 0, len = ref.length; i < len; i++) {
        tmp = ref[i];
        getTemplate(node, tmp);
      }
    };
    getTemplate = function(node, tmp) {
      var tur;
      tur = node.path + "/" + node.name + "/" + tmp.filename;
      $http.get(tur).success(function(response) {
        tmp.template = response;
        node.templateNo++;
        if (node.templateNo === node.template.length) {
          return node.templateReady = true;
        }
      });
    };
    prepareAncestors = function() {
      var currAncestor, currAncestorId;
      if (typeof Content.selectedNode.Ancestors !== "undefined") {
        return;
      }
      Content.selectedNode.Ancestors = [];
      currAncestorId = Content.selectedNode.parent;
      while (currAncestorId.length !== 0) {
        currAncestor = Content.nodes[currAncestorId];
        if (currAncestor.level !== 0) {
          Content.selectedNode.Ancestors.push(currAncestor);
        }
        currAncestorId = currAncestor.parent;
      }
    };
    Child = function(node) {
      var cid, i, len, ref;
      if (typeof node === "undefined" || node === null) {
        return;
      }
      if (typeof node.ChildNode !== "undefined") {
        return node.ChildNode;
      }
      node.ChildNode = [];
      ref = node.children;
      for (i = 0, len = ref.length; i < len; i++) {
        cid = ref[i];
        node.ChildNode.push(Content.nodes[cid]);
      }
      return node.ChildNode;
    };
    Parent = function(node) {
      if (typeof node === "undefined" || node === null) {
        return;
      }
      return Content.nodes[node.parent];
    };
    isNumber = function(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    };
    SelectNode = function(rootUri, uri) {
      var ch, nodeId, rootId;
      rootId = "node" + tohash(rootUri);
      Content.masterNode = Content.nodes[rootId];
      nodeId = "node" + tohash(uri);
      ch = Content.nodes[nodeId];
      if (typeof ch === "undefined") {
        return;
      }
      Content.selectedNode = ch;
      prepareAncestors();
      prepareTemplates();
      Content.Data = Content.selectedNode.data;
    };
    prepareNodes = function(rootUri, uri) {
      if (Content.nodes.length !== 0) {
        SelectNode(rootUri, uri);
        return;
      }
      $http.get(MasterConfigUrl).success(function(response) {
        var k, n, ref, results;
        Content.nodes = response;
        SelectNode(rootUri, uri);
        ref = Content.nodes;
        results = [];
        for (n in ref) {
          k = ref[n];
          results.push(k.Child = Child);
        }
        return results;
      });
    };
    tohash = function(s) {
      return s.split('').reduce((function(a, b) {
        a = (a << 5) - a + b.charCodeAt(0);
        return a & a;
      }), 0);
    };
    return {
      Content: Content,
      prepareAncestors: prepareAncestors,
      SelectNode: SelectNode,
      prepareNodes: prepareNodes,
      Child: Child,
      Parent: Parent
    };
  }
]);


/**=========================================================
 * Module: colors.js
 * Services to retrieve global colors
 =========================================================
 */
App.factory('colors', [
  'APP_COLORS', function(colors) {
    return {
      byName: function(name) {
        return colors[name] || '#fff';
      }
    };
  }
]);

App.factory('contentFactory', [
  '$http', '$state', '$location', function($http, $state, $location) {
    var Child, Content, GotoNode, MasterConfigUrl, MenuNodes, Parent, SelectNode, isNumber, prepareAncestors, prepareContent, prepareNodes, prepareTemplate, tohash;
    MasterConfigUrl = "cms/menu.js";
    Content = {
      uri: "",
      IsReady: false,
      rootUri: "",
      nodes: [],
      masterNode: null,
      selectedNode: null,
      Data: {}
    };
    prepareAncestors = function() {
      var currAncestor, currAncestorId;
      if (typeof Content.selectedNode.Ancestors !== "undefined") {
        return;
      }
      Content.selectedNode.Ancestors = [];
      currAncestorId = Content.selectedNode.parent;
      while (currAncestorId.length !== 0) {
        currAncestor = Content.nodes[currAncestorId];
        if (currAncestor.level !== 0) {
          Content.selectedNode.Ancestors.push(currAncestor);
        }
        currAncestorId = currAncestor.parent;
      }
    };
    Child = function(node) {
      var cid, i, len, ref;
      if (typeof node.ChildNode !== "undefined") {
        return node.ChildNode;
      }
      node.ChildNode = [];
      ref = node.children;
      for (i = 0, len = ref.length; i < len; i++) {
        cid = ref[i];
        node.ChildNode.push(Content.nodes[cid]);
      }
      return node.ChildNode;
    };
    Parent = function(node) {
      return Content.nodes[node.parent];
    };
    isNumber = function(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    };
    MenuNodes = function(node, menuType) {
      var cnode, menuConfig, refNode;
      menuConfig = node[menuType];
      refNode = null;
      if (menuConfig.source === "children") {
        refNode = node;
      }
      if (menuConfig.source === "root") {
        refNode = Content.masterNode;
      }
      if (menuConfig.source === "parent") {
        refNode = Content.nodes[node.parent];
      } else if (isNumber(menuConfig.source)) {
        cnode = node;
        while (cnode.level > parseInt(menuConfig.source, 10)) {
          cnode = Content.nodes[cnode.parent];
        }
        refNode = cnode;
      }
      return Child(refNode);
    };
    prepareContent = function() {
      if (Content.selectedNode.templateContent.length !== 0 || Content.selectedNode.templateURI.length === 0) {
        return;
      }
      if (Content.selectedNode.templateURI[0] === "~") {
        Content.selectedNode.templateURI = Content.selectedNode.path + "/" + Content.selectedNode.name + Content.selectedNode.templateURI.substring(1);
      }
      $http.get(Content.selectedNode.templateURI).success(function(response) {
        return Content.selectedNode.templateContent = prepareTemplate(response, Content.selectedNode.templateType);
      });
    };
    prepareTemplate = function(template, templateType) {
      if (templateType === "HTML") {
        return template;
      } else if (templateType === "jade") {
        return jade.compile(template)(null);
      } else if (templateType === "markdown") {
        return markdown.toHTML(template);
      }
    };
    SelectNode = function(rootUri, uri) {
      var ch, nodeId, rootId;
      rootId = "node" + tohash(rootUri);
      Content.masterNode = Content.nodes[rootId];
      nodeId = "node" + tohash(uri);
      ch = Content.nodes[nodeId];
      if (typeof ch === "undefined") {
        return;
      }
      Content.selectedNode = ch;
      prepareContent();
      prepareAncestors();
      Content.Data = Content.selectedNode.data;
    };
    GotoNode = function(node) {
      var newHash, newState, nodeUri;
      nodeUri = "";
      if (node.level === 0) {
        nodeUri = Content.rootUri;
      } else {
        nodeUri = node.path + "/" + node.name;
      }
      newState = nodeUri;
      if (newState === Content.rootUri) {
        newState = "";
      }
      $state.current.reloadOnSearch = false;
      newHash = '#/dev/content/' + newState.replace(/\//g, '.');
      if (newHash !== location.hash) {
        history.pushState(null, null, newHash);
      }
    };
    prepareNodes = function(rootUri, uri) {
      Content.rootUri = rootUri;
      if (Content.nodes.length !== 0) {
        SelectNode(rootUri, uri);
        return;
      }
      return $http.get(MasterConfigUrl).success(function(response) {
        var k, n, ref;
        Content.nodes = response;
        SelectNode(rootUri, uri);
        ref = Content.nodes;
        for (n in ref) {
          k = ref[n];
          k.Child = Child;
        }
        return Content.IsReady = true;
      });
    };
    tohash = function(s) {
      return s.split('').reduce((function(a, b) {
        a = (a << 5) - a + b.charCodeAt(0);
        return a & a;
      }), 0);
    };
    return {
      Content: Content,
      prepareAncestors: prepareAncestors,
      prepareContent: prepareContent,
      prepareTemplate: prepareTemplate,
      SelectNode: SelectNode,
      prepareNodes: prepareNodes,
      Child: Child,
      Parent: Parent,
      MenuNodes: MenuNodes,
      GotoNode: GotoNode
    };
  }
]);

App.factory('dashDatasource', [
  '$http', function($http) {
    var Data, DataSource, DataSourceObj, DataSourceTemplate, fetchData, prepare, startEngine;
    DataSource = [];
    DataSourceObj = {};
    DataSourceTemplate = {
      name: 'DataSourceName',
      config: {
        method: 'GET',
        url: 'http://www.moj.io',
        params: [],
        data: "",
        header: []
      },
      relatedDatasource: [],
      interval: 0,
      autoStart: false
    };
    Data = {};
    prepare = function() {
      var ds, i, len;
      for (i = 0, len = DataSource.length; i < len; i++) {
        ds = DataSource[i];
        DataSourceObj[ds.name] = ds;
      }
    };
    startEngine = function() {
      var ds, i, len;
      for (i = 0, len = DataSource.length; i < len; i++) {
        ds = DataSource[i];
        if (ds.autoStart) {
          fetchData(ds);
        }
      }
    };
    fetchData = function(datasource) {
      var config;
      config = eval(datasource.config);
      $http(datasource.config).then(function(response) {
        return Data[datasource.name] = response.data;
      }, function(response) {
        return Data[datasource.name] = response.data || "Request failed";
      });
    };
    return {
      DataSource: DataSource,
      DataSourceTemplate: DataSourceTemplate,
      prepare: prepare,
      startEngine: startEngine
    };
  }
]);

App.factory('googlemapFactory', [
  function() {
    var MapStyle;
    MapStyle = [];
    return {
      MapStyle: MapStyle
    };
  }
]);

App.factory('localStorage', [
  '$window', function($window) {
    var add, get, remove, store;
    store = $window.localStorage;
    add = function(key, value) {
      value = angular.toJson(value);
      store.setItem(key, value);
    };
    get = function(key) {
      var value;
      value = store.getItem(key);
      if (value) {
        value = angular.fromJson(value);
      }
      return value;
    };
    remove = function(key) {
      store.removeItem(key);
    };
    return {
      add: add,
      get: get,
      remove: remove
    };
  }
]);

App.factory('mojioConnection', [
  '$rootScope', function($rootScope) {
    var SelectedSettings, Settings;
    Settings = {
      develop: {
        application: '9852c940-19bb-47d0-9a7b-b9ec89776d14',
        hostname: 'develop.api.moj.io',
        url: 'https://develop.api.moj.io/v1/',
        urlv2: 'https://develop.api.moj.io/v2/',
        login: 'https://develop.api.moj.io/OAuth2/authorize',
        logout: 'https://develop.api.moj.io/account/logout',
        version: 'v1',
        scope: 'full'
      },
      sandbox_develop: {
        application: '9852c940-19bb-47d0-9a7b-b9ec89776d14',
        hostname: 'develop.api.moj.io',
        url: 'https://develop.api.moj.io/v1/',
        urlv2: 'https://develop.api.moj.io/v2/',
        login: 'https://develop.api.moj.io/OAuth2SandBox/authorize',
        logout: 'https://develop.api.moj.io/account/logout',
        version: 'v1',
        scope: 'full'
      },
      staging: {
        application: '9852c940-19bb-47d0-9a7b-b9ec89776d14',
        hostname: 'staging.api.moj.io',
        url: 'https://staging.api.moj.io/v1/',
        urlv2: 'https://staging.api.moj.io/v2/',
        login: 'https://staging.api.moj.io/OAuth2/authorize',
        logout: 'https://staging.api.moj.io/account/logout',
        firefly: 'https://staging-api-firefly.moj.io/',
        version: 'v1',
        scope: 'full'
      },
      sandbox_staging: {
        application: '9852c940-19bb-47d0-9a7b-b9ec89776d14',
        hostname: 'staging.api.moj.io',
        url: 'https://staging.api.moj.io/v1/',
        urlv2: 'https://staging.api.moj.io/v2/',
        login: 'https://staging.api.moj.io/OAuth2SandBox/authorize',
        logout: 'https://staging.api.moj.io/account/logout',
        version: 'v1',
        scope: 'full'
      },
      production: {
        application: '19349720-6b3e-49c8-8956-ccab4b7b283c',
        hostname: 'api.moj.io',
        url: 'https://api.moj.io/v1/',
        urlv2: 'https://api.moj.io/v2/',
        login: 'https://api.moj.io/OAuth2/authorize',
        logout: 'https://api.moj.io/account/logout',
        version: 'v1',
        scope: 'full'
      },
      sandbox_production: {
        application: '9852c940-19bb-47d0-9a7b-b9ec89776d14',
        hostname: 'api.moj.io',
        url: 'https://api.moj.io/v1/',
        urlv2: 'https://api.moj.io/v2/',
        login: 'https://api.moj.io/OAuth2SandBox/authorize',
        logout: 'https://api.moj.io/account/logout',
        version: 'v1',
        scope: 'full'
      },
      legacystaging: {
        application: '9852c940-19bb-47d0-9a7b-b9ec89776d14',
        hostname: 'staging.api.moj.io',
        url: 'https://staging-api.moj.io/v1/',
        urlv2: 'https://staging-api.moj.io/v2/',
        login: 'https://staging-api.moj.io/OAuth2/authorize',
        logout: 'https://staging-api.moj.io/account/logout',
        version: 'v1',
        scope: 'full'
      },
      staging2: {
        application: 'b66b06d1-e3f1-4ff0-b329-a89fd33e1915',
        hostname: 'staging-api.moj.io',
        url: 'https://staging-api.moj.io/v2/',
        urlv2: 'https://staging-api.moj.io/v2/',
        login: 'https://staging-accounts.moj.io/OAuth2/authorize',
        logout: 'https://staging-api.moj.io/account/logout',
        firefly: 'https://staging-api-firefly.moj.io/',
        version: 'v2',
        scope: 'admin'
      },
      legacychezh: {
        application: '9852c940-19bb-47d0-9a7b-b9ec89776d14',
        hostname: 'cz-api.moj.io',
        url: 'https://cz-api.moj.io/v1/',
        urlv2: 'https://cz-api.moj.io/v2/',
        login: 'https://cz-api.moj.io/OAuth2/authorize',
        logout: 'https://cz-api.moj.io/account/logout',
        version: 'v1',
        scope: 'full'
      },
      chezh_prod_v2: {
        application: 'b66b06d1-e3f1-4ff0-b329-a89fd33e1915',
        hostname: 'cz-api.moj.io',
        url: 'https://cz-api.moj.io/v2/',
        urlv2: 'https://cz-api.moj.io/v2/',
        login: 'https://cz-accounts.moj.io/OAuth2/authorize',
        logout: 'https://cz-api.moj.io/account/logout',
        version: 'v2',
        scope: 'admin'
      },
      legacyeu: {
        application: '9852c940-19bb-47d0-9a7b-b9ec89776d14',
        hostname: 'eu-api.moj.io',
        url: 'https://eu-api.moj.io/v1/',
        urlv2: 'https://eu-api.moj.io/v2/',
        login: 'https://eu-api.moj.io/OAuth2/authorize',
        logout: 'https://eu-api.moj.io/account/logout',
        version: 'v1',
        scope: 'full'
      },
      eu_prod_v2: {
        application: 'b66b06d1-e3f1-4ff0-b329-a89fd33e1915',
        hostname: 'eu-api.moj.io',
        url: 'https://eu-api.moj.io/v2/',
        urlv2: 'https://eu-api.moj.io/v2/',
        login: 'https://eu-accounts.moj.io/OAuth2/authorize',
        logout: 'https://eu-api.moj.io/account/logout',
        version: 'v2',
        scope: 'admin'
      },
      legacydevelop: {
        application: '9852c940-19bb-47d0-9a7b-b9ec89776d14',
        hostname: 'develop-api.moj.io',
        url: 'https://develop-api.moj.io/v1/',
        urlv2: 'https://develop-api.moj.io/v1/',
        login: 'https://develop-api.moj.io/OAuth2/authorize',
        logout: 'https://develop-api.moj.io/account/logout',
        version: 'v1',
        scope: 'full'
      },
      develop_v2: {
        application: 'b66b06d1-e3f1-4ff0-b329-a89fd33e1915',
        hostname: 'develop-api.moj.io',
        url: 'https://develop-api.moj.io/v2/',
        login: 'https://develop-accounts.moj.io/OAuth2/authorize',
        logout: 'https://develop-api.moj.io/account/logout',
        version: 'v2',
        scope: 'admin'
      },
      legacyprod: {
        application: '9852c940-19bb-47d0-9a7b-b9ec89776d14',
        hostname: 'prod-api.moj.io',
        url: 'https://prod-api.moj.io/v1/',
        urlv2: 'https://prod-api.moj.io/v2/',
        login: 'https://prod-api.moj.io/OAuth2/authorize',
        logout: 'https://prod-api.moj.io/account/logout',
        version: 'v1',
        scope: 'full'
      },
      prod_v2: {
        application: '9852c940-19bb-47d0-9a7b-b9ec89776d14',
        hostname: 'prod-api.moj.io',
        url: 'https://prod-api.moj.io/v2/',
        urlv2: 'https://prod-api.moj.io/v2/',
        login: 'https://prod-api.moj.io/OAuth2/authorize',
        logout: 'https://prod-api.moj.io/account/logout',
        version: 'v2',
        scope: 'full'
      },
      legacytrial: {
        application: '9852c940-19bb-47d0-9a7b-b9ec89776d14',
        hostname: 'trial-api.moj.io',
        url: 'https://trial-api.moj.io/v1/',
        urlv2: 'https://trial-api.moj.io/v1/',
        login: 'https://trial-api.moj.io/OAuth2/authorize',
        logout: 'https://trial-api.moj.io/account/logout',
        version: 'v1',
        scope: 'full'
      },
      trial_v2: {
        application: 'b66b06d1-e3f1-4ff0-b329-a89fd33e1915',
        hostname: 'trial-api.moj.io',
        url: 'https://trial-api.moj.io/v2/',
        urlv2: 'https://trial-api.moj.io/v2/',
        login: 'https://trial-accounts.moj.io/OAuth2/authorize',
        logout: 'https://trial-api.moj.io/account/logout',
        version: 'v2',
        scope: 'admin'
      },
      legacybeta: {
        application: '9852c940-19bb-47d0-9a7b-b9ec89776d14',
        hostname: 'beta-api.moj.io',
        url: 'https://beta-api.moj.io/v1/',
        urlv2: 'https://beta-api.moj.io/v1/',
        login: 'https://beta-api.moj.io/OAuth2/authorize',
        logout: 'https://beta-api.moj.io/account/logout',
        version: 'v1',
        scope: 'full'
      },
      beta_v2: {
        application: 'b66b06d1-e3f1-4ff0-b329-a89fd33e1915',
        hostname: 'beta-api.moj.io',
        url: 'https://beta-api.moj.io/v2/',
        urlv2: 'https://beta-api.moj.io/v2/',
        firefly: 'https://arcane-garden-2123.herokuapp.com/',
        login: 'https://beta-accounts.moj.io/OAuth2/authorize',
        logout: 'https://beta-api.moj.io/account/logout',
        version: 'v2',
        scope: 'admin'
      },
      main_legacy: {
        application: '9852c940-19bb-47d0-9a7b-b9ec89776d14',
        hostname: 'api2.moj.io',
        url: 'https://api2.moj.io/v1/',
        urlv2: 'https://api2.moj.io/v2/',
        login: 'https://api2.moj.io/OAuth2/authorize',
        logout: 'https://api2.moj.io/account/logout',
        version: 'v1',
        scope: 'full'
      },
      main_v2: {
        application: 'b66b06d1-e3f1-4ff0-b329-a89fd33e1915',
        hostname: 'api.moj.io',
        url: 'https://api.moj.io/v2/',
        urlv2: 'https://api.moj.io/v2/',
        login: 'https://accounts.moj.io/OAuth2/authorize',
        logout: 'https://api.moj.io/account/logout',
        firefly: 'https://api-firefly.moj.io/',
        version: 'v2',
        scope: 'admin'
      },
      serenity_local: {
        application: 'b66b06d1-e3f1-4ff0-b329-a89fd33e1915',
        hostname: 'staging-api.moj.io',
        url: 'https://staging-api.moj.io/v2/',
        urlv2: 'https://staging-api.moj.io/v2/',
        login: 'https://staging-accounts.moj.io/OAuth2/authorize',
        logout: 'https://staging-api.moj.io/account/logout',
        firefly: 'http://localhost:3000/',
        version: 'v2',
        scope: 'admin'
      },
      env: {
        application: '9852c940-19bb-47d0-9a7b-b9ec89776d14',
        hostname: 'api.moj.io',
        url: 'api.moj.io/',
        urlv2: 'api.moj.io/v2/',
        login: 'api.moj.io/OAuth2/authorize',
        logout: 'api.moj.io/account/logout',
        firefly: 'api-firefly.moj.io/',
        version: 'v1',
        scope: 'full'
      }
    };
    SelectedSettings = function() {
      var getParameterByName, pre, setting;
      setting = angular.copy(Settings[$rootScope.selectedProject.BackEnd]);
      getParameterByName = function(name) {
        var regex, results;
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        results = regex.exec(location.search);
        if (results === null) {
          return '';
        } else {
          return decodeURIComponent(results[1].replace(/\+/g, ' '));
        }
      };
      pre = getParameterByName('env');
      if (pre !== "") {
        setting = angular.copy(Settings.env);
        if ($rootScope.selectedProject.ProjectName === "Simulator2") {
          setting.version = 'v2';
        }
        setting.hostname = pre + '-' + setting.hostname;
        setting.url = 'https://' + pre + '-' + setting.url + setting.version + "/";
        setting.urlv2 = 'https://' + pre + '-' + setting.urlv2;
        setting.login = 'https://' + pre + '-' + setting.login;
        setting.logout = 'https://' + pre + '-' + setting.logout;
      }
      return setting;
    };
    return {
      Settings: Settings,
      SelectedSettings: SelectedSettings
    };
  }
]);

App.factory('mojioGear', [
  '$http', 'mojioRemote', '$q', function($http, mojioRemote, $q) {
    var GearList, HiddenList, claim, help;
    HiddenList = [
      {
        category: "Hidden",
        icon: 'icon-cog',
        desc: "Tools for Admin",
        gears: [
          {
            Portlet: 'gear-admin-mojio',
            Title: 'Mojio Device',
            Desc: 'All JSON Data Related to Mojio Device',
            Icon: 'fa-cube',
            Size: [6, 3],
            Color: '#1797be',
            BGColor: '#ffffff',
            SupportedSize: [[1, 1], [2, 2]],
            Data: {},
            SelBGColor: '#F8D868'
          }, {
            Portlet: 'gear-admin-vehicle',
            Title: 'Vehicle Data',
            Desc: 'All JSON Data Related to Vehicle',
            Icon: 'fa-car',
            Size: [6, 3],
            Color: '#1797be',
            BGColor: '#ffffff',
            SupportedSize: [[1, 1], [2, 2]],
            Data: {},
            SelBGColor: '#F8D868'
          }, {
            Portlet: 'gear-admin-me',
            Title: 'Me',
            Desc: 'All JSON Data Related to User',
            Icon: 'fa-me',
            Size: [6, 3],
            Color: '#1797be',
            BGColor: '#ffffff',
            SupportedSize: [[1, 1], [2, 2]],
            Data: {},
            SelBGColor: '#F8D868'
          }
        ]
      }
    ];
    GearList = [
      {
        category: "Gauge",
        icon: 'icon-gauge',
        desc: "Know everything that your mechanic knows.",
        gears: [
          {
            Portlet: 'gear-gauge-battery-level',
            Title: 'Battery Level',
            Desc: 'View Battery Level',
            Icon: 'icon-car',
            Size: [4, 3],
            Color: '#1797be',
            BGColor: '#42B6E9',
            SupportedSize: [[1, 1], [2, 2]],
            Data: {},
            SelBGColor: '#484848'
          }, {
            Portlet: 'gear-gauge-vehicle-health',
            Title: 'Vehicle Health',
            Desc: 'View Vehicle Health',
            Icon: 'fa-heart-o',
            Size: [4, 3],
            Color: '#ffffff',
            BGColor: '#42B6E9',
            SupportedSize: [[1, 1], [2, 2]],
            Data: {},
            SelBGColor: '#484848'
          }, {
            Portlet: 'gear-gauge-service-schedule',
            Title: 'Service Schedule',
            Desc: 'Gauge Service Schedule',
            Icon: 'icon-g4',
            Size: [4, 3],
            Color: '#ffffff',
            BGColor: '#484848',
            SupportedSize: [[1, 1], [2, 2]],
            Data: {},
            SelBGColor: '#484848'
          }
        ]
      }, {
        category: "Trek",
        icon: 'icon-trek',
        desc: 'Be an informed and empowered driver',
        gears: [
          {
            Portlet: 'gear-trek-last-trip-map',
            Title: 'Last Trip Map',
            Desc: 'Last Trip Map',
            Icon: 'icon-locate',
            Size: [12, 3],
            Color: '#000000',
            BGColor: '#ffffff',
            SupportedSize: [[1, 1], [2, 2]],
            Data: {},
            SelBGColor: '#00D8BE'
          }, {
            Portlet: 'gear-trek-chart',
            Title: 'Trek Chart',
            Desc: 'Chart',
            Icon: 'fa-line-chart',
            Size: [12, 3],
            Color: '#000000',
            BGColor: '#ffffff',
            SupportedSize: [[1, 1], [2, 2]],
            Data: {
              range: 1,
              ChartTypes: 0
            },
            SelBGColor: '#00D8BE'
          }, {
            Portlet: 'gear-trek-vehicle-details',
            Title: 'Vehicle Details',
            Desc: 'Vehicle Details',
            Icon: 'icon-gear',
            Size: [4, 3],
            Color: '#000000',
            BGColor: '#ffffff',
            SupportedSize: [[1, 1], [2, 2]],
            Data: {},
            SelBGColor: '#00D8BE'
          }, {
            Portlet: 'gear-trek-driving-stat',
            Title: 'Driving Stat',
            Desc: 'Driving Stat',
            Icon: 'icon-dash',
            Size: [4, 3],
            Color: '#ffffff',
            BGColor: '#1C344C',
            SupportedSize: [[1, 1], [2, 2]],
            Data: {},
            SelBGColor: '#00D8BE'
          }
        ]
      }, {
        category: "Cloak",
        icon: 'icon-cloak',
        desc: 'Keep your car secure, no matter where you are',
        gears: [
          {
            Portlet: 'gear-cloak-status',
            Title: 'Security Status',
            Desc: 'Status',
            Icon: 'icon-power',
            Size: [4, 3],
            Color: '#000000',
            BGColor: '#ffffff',
            SupportedSize: [[1, 1], [2, 2]],
            Data: {},
            SelBGColor: '#4A75E6'
          }
        ]
      }
    ];
    help = {
      Portlet: 'gear-help',
      Title: 'Help',
      Desc: 'Help',
      Icon: 'icon-power',
      Size: [12, 5],
      Color: '#000000',
      BGColor: '#ffffff',
      SupportedSize: [[1, 1], [2, 2]],
      Data: []
    };
    claim = {
      Portlet: 'gear-claim',
      Title: 'Claim',
      Desc: 'Claim New Device',
      Icon: 'fa-plus',
      Size: [12, 5],
      Color: '#000000',
      BGColor: '#ffffff',
      SupportedSize: [[1, 1], [2, 2]],
      Data: []
    };
    return {
      GearList: GearList,
      HiddenList: HiddenList,
      help: help,
      claim: claim
    };
  }
]);

App.factory('mojioGlobal', [
  '$http', 'sessionStorage', '$rootScope', '$timeout', '$state', 'mojioConnection', function($http, sessionStorage, $rootScope, $timeout, $state, mojioConnection) {
    var ChangeUser, CreateHeaders, GoToOAuth, TOKENKEY, USERKEY, afterLoginProcess, apiUrl, checkAccess, checkAccessV1, checkAccessV2, data, getUserInfoV1, getUserInfoV2, getUserPic, getUserPicV1, getUserPicV2, logout;
    TOKENKEY = 'ACCESS_TOKEN_KEY';
    USERKEY = 'USER_DATA_KEY';
    data = {
      mojio_client: null,
      mojio_observer: null,
      mojio_observedEntity: null,
      redirect_uri: window.location.host.indexOf('preview.') !== 0 ? window.location.href.split('#')[0].replace('http:', 'https:') : window.location.href.split('#')[0],
      access_token: '',
      user_data: null,
      accessChecked: false
    };
    apiUrl = function(url) {
      if (typeof url === "undefined") {
        return mojioConnection.SelectedSettings().url;
      } else {
        return mojioConnection.SelectedSettings()[url];
      }
    };
    GoToOAuth = function() {
      sessionStorage.remove(TOKENKEY);
      sessionStorage.remove(USERKEY);
      window.location = mojioConnection.SelectedSettings().login + '?response_type=token&client_id=' + mojioConnection.SelectedSettings().application + '&redirect_uri=' + data.redirect_uri + '&scope=' + mojioConnection.SelectedSettings().scope;
    };
    logout = function() {
      var oldToken;
      sessionStorage.remove(TOKENKEY);
      oldToken = data.access_token;
      data.access_token = '';
      window.location = mojioConnection.SelectedSettings().logout + '?Guid=' + oldToken + '&client_id=' + mojioConnection.SelectedSettings().application + '&redirect_uri=' + data.redirect_uri;
    };
    getUserPic = function() {
      if (mojioConnection.SelectedSettings().version === "v1") {
        return getUserPicV1();
      } else {
        return getUserPicV2();
      }
    };
    getUserPicV1 = function() {
      $http({
        method: 'GET',
        url: apiUrl() + "Users/" + data.user_data.id + "/Image?size=50",
        headers: CreateHeaders().headers,
        responseType: 'blob'
      }).success(function(blob) {
        var img;
        img = document.getElementById('userGlobalPic');
        img.onload = function(e) {
          return window.URL.revokeObjectURL(img.src);
        };
        img.src = window.URL.createObjectURL(blob);
        $rootScope.user.withpic = true;
      }).error(function(response) {});
    };
    getUserPicV2 = function() {
      $http({
        method: 'GET',
        url: apiUrl() + "Users/" + data.user_data.id + "/Image",
        headers: CreateHeaders().headers
      }).success(function(data) {
        var img;
        img = document.getElementById('userGlobalPic');
        img.src = data.Thumbnail;
        $rootScope.user.withpic = true;
      }).error(function(response) {});
    };
    ChangeUser = function(NewToken) {
      data.access_token = NewToken;
      sessionStorage.add(TOKENKEY, data.access_token);
      data.user_data.title = "Impersonating Mode";
      return alert("Refresh the Page to see Impersonated User Data");
    };
    CreateHeaders = function(version) {
      var Headers, lan, v;
      Headers = "";
      lan = "en";
      if (typeof $rootScope.language !== "undefined") {
        lan = $rootScope.language.selectedId;
      }
      v = "";
      if (typeof version !== "undefined") {
        v = version;
      } else {
        v = mojioConnection.SelectedSettings().version;
      }
      if (v === "v1") {
        Headers = {
          headers: {
            'Content-Type': 'application/json',
            'MojioAPIToken': data.access_token,
            'Accept-Language': lan
          }
        };
      } else {
        Headers = {
          headers: {
            'Accept': 'application/json',
            'MojioAPIToken': data.access_token,
            'Authorization': 'Bearer ' + data.access_token,
            'Accept-Language': lan
          }
        };
      }
      return Headers;
    };
    checkAccess = function() {
      if (mojioConnection.SelectedSettings().version === "v1") {
        checkAccessV1();
      } else {
        checkAccessV2();
      }
    };
    checkAccessV1 = function() {
      var access_token, e, param;
      param = window.location.toString().split('#')[1];
      if (typeof param !== 'undefined' && param.indexOf('/access_token=') === 0) {
        try {
          access_token = document.location.hash.match(/access_token=([0-9a-f-]{36})/)[1];
          if (access_token) {
            data.access_token = access_token;
            sessionStorage.add(TOKENKEY, data.access_token);
          }
        } catch (_error) {
          e = _error;
        }
      } else {
        access_token = sessionStorage.get(TOKENKEY);
        data.user_data = sessionStorage.get(USERKEY);
        if (access_token !== null && access_token.length !== 0) {
          data.access_token = access_token;
        }
      }
      if (data.access_token.length === 0) {
        GoToOAuth();
      } else if (data.user_data === null) {
        getUserInfoV1();
      } else {
        afterLoginProcess();
      }
    };
    checkAccessV2 = function() {
      var access_token, e, param;
      param = window.location.toString().split('#')[1];
      if (typeof param !== 'undefined' && param.indexOf('/access_token=') === 0) {
        try {
          access_token = document.location.hash.match(/access_token=([0-9a-f-]{36})/)[1];
          if (access_token) {
            data.access_token = access_token;
            sessionStorage.add(TOKENKEY, data.access_token);
          }
        } catch (_error) {
          e = _error;
        }
      } else {
        access_token = sessionStorage.get(TOKENKEY);
        data.user_data = sessionStorage.get(USERKEY);
        if (access_token !== null && access_token.length !== 0) {
          data.access_token = access_token;
        }
      }
      if (data.access_token.length === 0) {
        GoToOAuth();
      } else if (data.user_data === null) {
        getUserInfoV2();
      } else {
        afterLoginProcess();
      }
    };
    getUserInfoV1 = function() {
      $http.get(apiUrl() + 'Users/Me', CreateHeaders()).success(function(response) {
        var email, title;
        email = "-----";
        if (typeof response.Email !== "undefined" && response.Email !== null) {
          email = response.Email;
        }
        title = "";
        if (typeof response.UserName !== "undefined" && response.UserName !== null) {
          title = response.UserName;
        }
        if (title === "") {
          title = email;
        }
        if (typeof response.FirstName !== "undefined" && response.FirstName !== null) {
          title = response.FirstName;
          if (typeof response.LastName !== "undefined" && response.LastName !== null) {
            title += " " + response.LastName;
          }
        }
        data.user_data = {
          id: response._id,
          title: title,
          email: email
        };
        afterLoginProcess();
      }).error(function(response) {
        return console.log(response);
      });
    };
    getUserInfoV2 = function() {
      $http.get(apiUrl() + 'me', CreateHeaders()).success(function(response) {
        var email, title;
        email = "-----";
        if (typeof response.Email !== "undefined" && response.Email.length > 0) {
          email = response.Email[0].Address;
        }
        title = "";
        if (typeof response.UserName !== "undefined" && response.UserName !== null) {
          title = response.UserName;
        }
        if (title === "") {
          title = response.Email;
        }
        if (typeof response.FirstName !== "undefined" && response.FirstName !== null) {
          title = response.FirstName;
          if (typeof response.LastName !== "undefined" && response.LastName !== null) {
            title += " " + response.LastName;
          }
        }
        data.user_data = {
          id: response._id,
          title: title,
          email: email
        };
        afterLoginProcess();
      }).error(function(response) {
        return console.log(response);
      });
    };
    afterLoginProcess = function() {
      analytics.identify(data.user_data.id, {
        name: data.user_data.title,
        email: data.user_data.email
      });
      $rootScope.user.name = data.user_data.title;
      sessionStorage.add(USERKEY, data.user_data);
      $timeout(getUserPic, 500);
    };
    return {
      data: data,
      GoToOAuth: GoToOAuth,
      checkAccess: checkAccess,
      logout: logout,
      apiUrl: apiUrl,
      getUserPic: getUserPic,
      ChangeUser: ChangeUser,
      CreateHeaders: CreateHeaders
    };
  }
]);

App.factory('mojioLocal', [
  '$rootScope', '$http', 'localStorage', 'mojioGlobal', function($rootScope, $http, localStorage, mojioGlobal) {
    var makeDataAvalible, staticData;
    staticData = {
      DeviceType: {
        Xirgo: 'Xirgo',
        Mdi: 'Mdi'
      },
      LoggingDuration: {
        di: 'Disabled',
        w1: '1 Week',
        w2: '2 Weeks',
        w4: '4 Weeks',
        m2: '2 Months',
        m4: '4 Months'
      }
    };
    makeDataAvalible = function(mojioModel, localName, callback) {
      var config, url;
      if (typeof $rootScope.data === 'undefined') {
        $rootScope.data = {};
      }
      if (typeof $rootScope.data[localName] === 'undefined') {
        config = {
          headers: {
            'Content-Type': ' application/json',
            'MojioAPIToken': mojioGlobal.data.access_token
          }
        };
        url = mojioGlobal.apiUrl() + mojioModel + '?limit=1000&offset=0';
        return $http.get(url, config).success(function(response) {
          $rootScope.data[localName] = response.Data;
          callback(response.Data);
        });
      } else {
        return callback($rootScope.data[localName]);
      }
    };
    return {
      staticData: staticData,
      makeDataAvalible: makeDataAvalible
    };
  }
]);

App.factory('mojioRemote', [
  '$rootScope', '$http', 'localStorage', 'mojioGlobal', function($rootScope, $http, localStorage, mojioGlobal) {
    var DELETE, GET, GETBlob, POST, PUT;
    GETBlob = function(mojioModel, limit, offset, criteria, option, onSuccess, onError) {
      var lastsep, url;
      url = mojioGlobal.apiUrl() + mojioModel;
      lastsep = '?';
      if (typeof limit !== "undefined" && limit !== null) {
        url += lastsep + 'limit=' + limit + '&offset=' + offset;
        lastsep = "&";
      }
      if (typeof criteria !== "undefined" && criteria !== null && criteria.length !== 0) {
        url += lastsep + 'criteria=' + escape(criteria);
        lastsep = "&";
      }
      if (option !== null) {
        url += lastsep + option;
      }
      $http({
        method: 'GET',
        url: url,
        headers: mojioGlobal.CreateHeaders().headers,
        responseType: 'blob'
      }).success(function(response) {
        onSuccess(response);
      }).error(function(response) {
        onError(response);
      });
    };
    GET = function(mojioModel, limit, offset, criteria, option, onSuccess, onError) {
      var lastsep, url;
      url = mojioGlobal.apiUrl() + mojioModel;
      lastsep = '?';
      if (typeof limit !== "undefined" && limit !== null) {
        url += lastsep + 'limit=' + limit + '&offset=' + offset;
        lastsep = "&";
      }
      if (typeof criteria !== "undefined" && criteria !== null && criteria.length !== 0) {
        url += lastsep + 'criteria=' + escape(criteria);
        lastsep = "&";
      }
      if (option !== null) {
        url += lastsep + option;
      }
      $http({
        method: 'GET',
        url: url,
        headers: mojioGlobal.CreateHeaders().headers
      }).success(function(response) {
        onSuccess(response);
      }).error(function(error, status) {
        if (status === 401) {
          mojioGlobal.GoToOAuth();
        }
        if (typeof onError !== "undefined") {
          onError(error);
        }
      });
    };
    DELETE = function(mojioModel, onSuccess, onError) {
      var url;
      url = mojioGlobal.apiUrl() + mojioModel;
      $http({
        method: 'DELETE',
        url: url,
        headers: mojioGlobal.CreateHeaders().headers
      }).success(function(response) {
        onSuccess(response);
      }).error(function(response) {
        onError(response);
      });
    };
    POST = function(mojioModel, data, onSuccess, onError) {
      var url;
      url = mojioGlobal.apiUrl() + mojioModel;
      $http({
        method: 'POST',
        url: url,
        data: data,
        headers: mojioGlobal.CreateHeaders().headers
      }).success(function(response) {
        onSuccess(response);
      }).error(function(response) {
        onError(response);
      });
    };
    PUT = function(mojioModel, data, onSuccess, onError) {
      var url;
      url = mojioGlobal.apiUrl() + mojioModel;
      $http({
        method: 'PUT',
        url: url,
        data: data,
        headers: mojioGlobal.CreateHeaders().headers
      }).success(function(response) {
        onSuccess(response);
      }).error(function(response) {
        onError(response);
      });
    };
    return {
      POST: POST,
      PUT: PUT,
      GET: GET,
      DELETE: DELETE,
      GETBlob: GETBlob
    };
  }
]);

App.factory('mojioRemote2', [
  '$rootScope', '$http', 'localStorage', 'mojioGlobal', function($rootScope, $http, localStorage, mojioGlobal) {
    var DELETE, GET, POST, PUT;
    GET = function(options) {
      var endpoint, httpOptions, i, lastsep, len, ref, row, url;
      endpoint = "urlv2";
      if (typeof options.endpoint !== "undefined") {
        endpoint = options.endpoint;
      }
      url = mojioGlobal.apiUrl(endpoint) + options.operation;
      lastsep = '?';
      if (typeof options.top !== "undefined") {
        url += lastsep + encodeURIComponent('$top') + '=' + encodeURIComponent(options.top);
        lastsep = "&";
      }
      if (typeof options.skip !== "undefined") {
        url += lastsep + encodeURIComponent('$skip') + '=' + encodeURIComponent(options.skip);
        lastsep = "&";
      }
      if (typeof options.filter !== "undefined") {
        url += lastsep + encodeURIComponent('$filter') + '=' + encodeURIComponent(options.filter);
        lastsep = "&";
      }
      if (typeof options.select !== "undefined") {
        url += lastsep + encodeURIComponent('$select') + '=' + encodeURIComponent(options.select);
        lastsep = "&";
      }
      if (typeof options.orderby !== "undefined") {
        url += lastsep + encodeURIComponent('$orderby') + '=' + encodeURIComponent(options.orderby);
        lastsep = "&";
      }
      if (typeof options.moreparam !== "undefined") {
        ref = options.moreparam;
        for (i = 0, len = ref.length; i < len; i++) {
          row = ref[i];
          url += lastsep + encodeURIComponent(row.param) + '=' + encodeURIComponent(row.val);
          lastsep = "&";
        }
      }
      httpOptions = {
        method: 'GET',
        url: url,
        headers: mojioGlobal.CreateHeaders('v2').headers
      };
      if (typeof options.responseType !== 'undefined') {
        httpOptions.responseType = options.responseType;
      }
      $http(httpOptions).success(function(response) {
        if (typeof options.onSuccess !== "undefined") {
          options.onSuccess(response);
        }
      }).error(function(response) {
        if (typeof options.onError !== "undefined") {
          options.onError(response);
        }
      });
    };
    DELETE = function(mojioModel, onSuccess, onError) {
      var endpoint, url;
      endpoint = "urlv2";
      if (typeof options.endpoint !== "undefined") {
        endpoint = options.endpoint;
      }
      url = mojioGlobal.apiUrl(endpoint) + options.operation;
      $http({
        method: 'DELETE',
        url: url,
        headers: mojioGlobal.CreateHeaders('v2').headers
      }).success(function(response) {
        if (typeof options.onSuccess !== "undefined") {
          options.onSuccess(response);
        }
      }).error(function(response) {
        onError(response);
      });
    };
    POST = function(options, mojioModel, data, onSuccess, onError) {
      var endpoint, url;
      endpoint = "urlv2";
      if (typeof options.endpoint !== "undefined") {
        endpoint = options.endpoint;
      }
      url = mojioGlobal.apiUrl(endpoint) + options.operation;
      $http({
        method: 'POST',
        url: url,
        data: options.data,
        headers: mojioGlobal.CreateHeaders('v2').headers
      }).success(function(response) {
        if (typeof options.onSuccess !== "undefined") {
          options.onSuccess(response);
        }
      }).error(function(response) {
        if (typeof options.onError !== "undefined") {
          options.onError(response);
        }
      });
    };
    PUT = function(options, mojioModel, data, onSuccess, onError) {
      var endpoint, url;
      endpoint = "urlv2";
      if (typeof options.endpoint !== "undefined") {
        endpoint = options.endpoint;
      }
      url = mojioGlobal.apiUrl(endpoint) + options.operation;
      $http({
        method: 'PUT',
        url: url,
        data: options.data,
        headers: mojioGlobal.CreateHeaders('v2').headers
      }).success(function(response) {
        if (typeof options.onSuccess !== "undefined") {
          options.onSuccess(response);
        }
      }).error(function(response) {
        if (typeof options.onError !== "undefined") {
          options.onError(response);
        }
      });
    };
    return {
      POST: POST,
      PUT: PUT,
      GET: GET,
      DELETE: DELETE
    };
  }
]);

App.factory('myMojioFactory', [
  '$http', 'mojioRemote', '$q', '$timeout', 'localStorage', function($http, mojioRemote, $q, $timeout, localStorage) {
    var AllVehicleNotifications, CheckForVehicleNewData, Clear, Content, Distance, FindGoodNameForVehicle, GetFaultsDetail, GetVehicleInformation, IsInorderPoint, IsValidLocation, LastTripEvents, LastUsedColor, SetTimeoutForVehicleNewData, VehicleColor, VehicleNotifications, VehicleServices, VehicleTimer, changeSelectedVehicle, deg2rad, forcePrepareData, getLastTrip, prepareData, processVehiclesData, updateVehicleName;
    Content = {
      Vehicles: [],
      VehiclesObj: {},
      SelectedVehicle: null,
      Devices: [],
      VehiclesColor: {}
    };
    Clear = function() {
      Content.Vehicles = [];
      Content.VehiclesObj = {};
      Content.SelectedVehicle = null;
      Content.Devices = [];
    };
    changeSelectedVehicle = function(vehicle) {
      Content.SelectedVehicle = vehicle;
      if (vehicle === null) {
        return;
      }
      if (typeof vehicle.LastTripData === "undefined") {
        getLastTrip(vehicle);
      }
      if (typeof vehicle.VIN !== "undefined" && vehicle.VIN !== null && vehicle.VIN.length === 17) {
        GetVehicleInformation(vehicle);
      } else {
        vehicle.InfoStatus = "NoData";
      }
      vehicle.FaultsSummary = {
        "Unknown": {
          count: 0,
          title: "common.FaultsSummary.Unknown"
        },
        "SensorFault": {
          count: 0,
          title: "common.FaultsSummary.SensorFault"
        },
        "AirFilterFault": {
          count: 0,
          title: "common.FaultsSummary.AirFilter"
        },
        "CoolantFault": {
          count: 0,
          title: "common.FaultsSummary.Coolant"
        },
        "DrivetrainFault": {
          count: 0,
          title: "common.FaultsSummary.Drivetrain"
        },
        "EmissionsFault": {
          count: 0,
          title: "common.FaultsSummary.Emissions"
        },
        "SensorFault": {
          count: 0,
          title: "common.FaultsSummary.Sensor"
        }
      };
      if (vehicle.FaultsDetected) {
        GetFaultsDetail(vehicle);
      } else {
        vehicle.FaultsStatus = "Ready";
      }
    };
    getLastTrip = function(vehicle) {
      var LastTripId;
      LastTripId = "";
      if (typeof vehicle.CurrentTrip !== "undefined" && vehicle.CurrentTrip !== "") {
        LastTripId = vehicle.CurrentTrip;
      } else if (typeof vehicle.LastTrip !== "undefined" && vehicle.LastTrip !== "") {
        LastTripId = vehicle.LastTrip;
      }
      if (LastTripId !== "") {
        mojioRemote.GET("Trips/" + LastTripId, null, null, null, null, function(result) {
          if (typeof result.Distance === "undefined" || result.Distance === 0) {
            result.Distance = Distance(result);
          }
          return vehicle.LastTripData = result;
        });
      }
    };
    AllVehicleNotifications = function(limit) {
      var deferred;
      deferred = $q.defer();
      mojioRemote.GET("Events", limit, 0, 'EventType=MILWarning,Accident,TowStart,LowBattery,ConnectionLost,HardAcceleration,HardBrake,LowFuel,Speed,Diagnostic,IgnitionOn,IgnitionOff', "sortBy=Time&desc=true", function(result) {
        return deferred.resolve(result.Data);
      });
      return deferred.promise;
    };
    VehicleNotifications = function(limit) {
      var deferred;
      deferred = $q.defer();
      mojioRemote.GET("Vehicles/" + Content.SelectedVehicle._id + "/Events", limit, null, 'EventType=MILWarning,Accident,TowStart,LowBattery,ConnectionLost,HardAcceleration,HardBrake,LowFuel,Speed,Diagnostic,IgnitionOn,IgnitionOff', "sortBy=Time&desc=true", function(result) {
        return deferred.resolve(result.Data);
      });
      return deferred.promise;
    };
    VehicleServices = function() {
      var VIN, deferred;
      deferred = $q.defer();
      VIN = "0";
      if (typeof Content.SelectedVehicle.VIN !== "undefined" && Content.SelectedVehicle.VIN !== null) {
        VIN = Content.SelectedVehicle.VIN;
      }
      mojioRemote.GET("Vins/" + VIN + "/VehicleServices", null, null, null, null, function(result) {
        var data, i, len, ref, row;
        data = [];
        ref = result.Data;
        for (i = 0, len = ref.length; i < len; i++) {
          row = ref[i];
          if (row.Units.length > 0) {
            data.push(row);
          }
        }
        return deferred.resolve(data);
      }, function(error) {
        return deferred.resolve([]);
      });
      return deferred.promise;
    };
    LastTripEvents = function() {
      var LastTripId, deferred;
      deferred = $q.defer();
      LastTripId = "";
      if (typeof Content.SelectedVehicle.CurrentTrip !== "undefined" && Content.SelectedVehicle.CurrentTrip !== "") {
        LastTripId = Content.SelectedVehicle.CurrentTrip;
      } else if (typeof Content.SelectedVehicle.LastTrip !== "undefined" && Content.SelectedVehicle.LastTrip !== "") {
        LastTripId = Content.SelectedVehicle.LastTrip;
      }
      if (LastTripId !== "") {
        mojioRemote.GET("Trips/" + LastTripId + "/Events", 3000, null, null, "sortBy=Time&desc=false", function(result) {
          return deferred.resolve(result.Data);
        });
      } else {
        $timeout((function() {
          return deferred.resolve([]);
        }), 0);
      }
      return deferred.promise;
    };
    VehicleTimer = null;
    SetTimeoutForVehicleNewData = function() {
      if (VehicleTimer !== null) {
        $timeout.cancel(VehicleTimer);
      }
      VehicleTimer = $timeout((function() {
        return CheckForVehicleNewData();
      }), 15000);
    };
    CheckForVehicleNewData = function() {
      if (Content.SelectedVehicle !== null) {
        mojioRemote.GET("Vehicles/" + Content.SelectedVehicle._id, null, null, null, null, function(result) {
          var NewFaults;
          if (result._id !== Content.SelectedVehicle._id) {
            SetTimeoutForVehicleNewData();
            return;
          }
          if (result.LastContactTime === Content.SelectedVehicle.LastContactTime) {
            SetTimeoutForVehicleNewData();
            return;
          }
          NewFaults = false;
          if (JSON.stringify(result.DiagnosticCodes) !== JSON.stringify(Content.SelectedVehicle)) {
            NewFaults = true;
          }
          console.log("extend");
          angular.extend(Content.SelectedVehicle, result);
          getLastTrip(Content.SelectedVehicle);
          if (NewFaults) {
            GetFaultsDetail(Content.SelectedVehicle);
          }
          SetTimeoutForVehicleNewData();
        });
      }
    };
    forcePrepareData = function(callback) {
      Clear();
      prepareData(callback);
    };
    FindGoodNameForVehicle = function(v) {
      if (typeof v.VIN !== "undefined" && v.VIN !== null && v.VIN.length === 17) {
        return mojioRemote.GET("Vins/" + v.VIN, null, null, null, null, function(result) {
          var NewName, Seprator;
          NewName = "";
          Seprator = "";
          if (typeof result.Make !== "undefined") {
            NewName += result.Make;
            Seprator = " ";
          }
          if (typeof result.Model !== "undefined") {
            if (result.Model.indexOf(NewName) === 0) {
              NewName = "";
            }
            NewName += Seprator + result.Model;
            Seprator = " ";
          }
          if (typeof result.Year !== "undefined") {
            NewName += Seprator + result.Year;
          }
          return updateVehicleName(v, NewName);
        }, function(error) {
          return updateVehicleName(v, "");
        });
      } else {
        return updateVehicleName(v, "");
      }
    };
    updateVehicleName = function(v, name) {
      mojioRemote.PUT("Vehicles/" + v._id, {
        "Type": "Vehicle",
        Name: name
      }, function(result) {}, function() {});
    };
    processVehiclesData = function(data) {
      var ChangeNameCount, i, j, len, len1, ref, ref1, v;
      Content.Vehicles = angular.copy(data);
      Content.Vehicles.sort(function(a, b) {
        var diff;
        diff = (new Date(a.LastContactTime)) - (new Date(b.LastContactTime));
        if (diff === 0) {
          return 0;
        } else {
          return Math.abs(diff) / diff;
        }
      });
      ref = Content.Vehicles;
      for (i = 0, len = ref.length; i < len; i++) {
        v = ref[i];
        Content.VehiclesObj[v._id] = v;
      }
      if (Content.Vehicles.length > 0) {
        changeSelectedVehicle(Content.Vehicles[0]);
      } else {
        changeSelectedVehicle(null);
      }
      CheckForVehicleNewData();
      ChangeNameCount = 0;
      ref1 = Content.Vehicles;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        v = ref1[j];
        if ((typeof v.Name === "undefined" || v.Name === null) && ChangeNameCount < 3) {
          FindGoodNameForVehicle(v);
          ChangeNameCount++;
        }
      }
    };
    prepareData = function(callback) {
      if (Content.Vehicles.length !== 0) {
        if (typeof callback !== "undefined") {
          callback();
        }
        return;
      }
      return mojioRemote.GET("Vehicles", 200, null, null, "sortBy=LastContactTime&desc=true", function(result) {
        processVehiclesData(result.Data);
        if (typeof callback !== "undefined") {
          return callback();
        }
      });
    };
    GetFaultsDetail = function(v) {
      if (typeof v.FaultsStatus !== "undefined" && v.FaultsStatus === "Loading") {
        return;
      }
      v.FaultsStatus = "Loading";
      mojioRemote.GET("Vehicles/" + v._id + "/Diagnostics", null, null, null, null, function(result) {
        var cat, drow, fk, fv, i, len, ref, ref1;
        v.Diagnostic = result.Data;
        ref = v.FaultsSummary;
        for (fk in ref) {
          fv = ref[fk];
          fv.count = 0;
        }
        ref1 = v.Diagnostic;
        for (i = 0, len = ref1.length; i < len; i++) {
          drow = ref1[i];
          cat = "Unknown";
          if (drow.Category !== null) {
            cat = drow.Category.replace(' ', '');
          }
          v.FaultsSummary[cat].count++;
        }
        return v.FaultsStatus = "Ready";
      });
    };
    GetVehicleInformation = function(v) {
      var StorageKey, info;
      if (typeof v.InfoStatus !== "undefined") {
        return;
      }
      StorageKey = "Vins-" + v.VIN;
      info = localStorage.get(StorageKey);
      if (info !== null) {
        v.InfoStatus = "Ready";
        v.Info = info;
        return;
      }
      v.InfoStatus = "Loading";
      mojioRemote.GET("Vins/" + v.VIN, null, null, null, null, function(result) {
        v.InfoStatus = "Ready";
        v.Info = result;
        return localStorage.add(StorageKey, result);
      }, function(error) {
        v.InfoStatus = "NoData";
        return console.log("Invalid VIN Number");
      });
    };
    IsValidLocation = function(e, att) {
      var loc;
      if (typeof e[att] === "undefined") {
        return false;
      }
      loc = e[att];
      if (loc !== null && typeof loc.Lng !== "undefined" && typeof loc.Lat !== "undefined" && !isNaN(loc.Lat) && !isNaN(loc.Lng) && loc.IsValid === true) {
        return true;
      } else {
        return false;
      }
    };
    LastUsedColor = 0;
    deg2rad = function(deg) {
      return deg * Math.PI / 180;
    };
    Distance = function(trip) {
      var a, c, dlat, dlon, km, lat1, lat2, lon1, lon2;
      if (!IsValidLocation(trip, "StartLocation") || !IsValidLocation(trip, "EndLocation")) {
        return 0;
      }
      lat1 = deg2rad(trip.StartLocation.Lat);
      lon1 = deg2rad(trip.StartLocation.Lng);
      lat2 = deg2rad(trip.EndLocation.Lat);
      lon2 = deg2rad(trip.EndLocation.Lng);
      dlat = lat2 - lat1;
      dlon = lon2 - lon1;
      a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);
      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      km = Math.round((6373 * c) * 10) / 10;
      if (km > 1) {
        km = 1;
      }
      return km;
    };
    VehicleColor = function(id) {
      var colors;
      colors = ['#4a75e6', '#caf200', 'green', 'black', '#DE1B1B', '#E9E581', '#118C4E', '#DFE2DB'];
      if (typeof Content.VehiclesColor[id] === "undefined") {
        Content.VehiclesColor[id] = colors[LastUsedColor++ % colors.length];
      }
      return Content.VehiclesColor[id];
    };
    IsInorderPoint = function(cur, pre, nxt) {
      var distanceLat, distanceLng, maxLat, maxLng, middleLat, middleLng, minLat, minLng;
      if (typeof document.TripRouteEnhancement !== "undefined" && document.TripRouteEnhancement === false) {
        return true;
      }
      if (!IsValidLocation(cur, "Location") || !IsValidLocation(pre, "Location") || !IsValidLocation(nxt, "Location")) {
        return true;
      }
      if (typeof pre.Heading === "undefined" || typeof cur.Heading === "undefined" || typeof nxt.Heading === "undefined") {
        return true;
      }
      if (Math.abs(pre.Heading - cur.Heading) > 3 || Math.abs(nxt.Heading - cur.Heading) > 3) {
        return true;
      }
      distanceLat = Math.abs(pre.Location.Lat - nxt.Location.Lat);
      distanceLng = Math.abs(pre.Location.Lng - nxt.Location.Lng);
      middleLat = (pre.Location.Lat + nxt.Location.Lat) / 2;
      middleLng = (pre.Location.Lng + nxt.Location.Lng) / 2;
      minLat = middleLat - distanceLat * 1;
      maxLat = middleLat + distanceLat * 1;
      minLng = middleLng - distanceLng * 1;
      maxLng = middleLng + distanceLng * 1;
      if (cur.Location.Lat < minLat || cur.Location.Lat > maxLat || cur.Location.Lng < minLng || cur.Location.Lng > maxLng) {
        return false;
      } else {
        return true;
      }
    };
    return {
      Content: Content,
      LastTripEvents: LastTripEvents,
      prepareData: prepareData,
      changeSelectedVehicle: changeSelectedVehicle,
      VehicleServices: VehicleServices,
      VehicleNotifications: VehicleNotifications,
      AllVehicleNotifications: AllVehicleNotifications,
      Clear: Clear,
      forcePrepareData: forcePrepareData,
      GetVehicleInformation: GetVehicleInformation,
      IsValidLocation: IsValidLocation,
      IsInorderPoint: IsInorderPoint,
      VehicleColor: VehicleColor,
      Distance: Distance
    };
  }
]);


/**=========================================================
 * Module: nav-search.js
 * Services to share navbar search functions
 =========================================================
 */
App.service('navSearch', function() {
  var navbarFormSelector;
  navbarFormSelector = 'form.navbar-form';
  return {
    toggle: function() {
      var isOpen, navbarForm;
      navbarForm = $(navbarFormSelector);
      navbarForm.toggleClass('open');
      isOpen = navbarForm.hasClass('open');
      navbarForm.find('input')[isOpen ? 'focus' : 'blur']();
    },
    dismiss: function() {
      $(navbarFormSelector).removeClass('open').find('input[type="text"]').blur().val('');
    }
  };
});


/**=========================================================
 * Module: helpers.js
 * Provides helper functions for routes definition
 =========================================================
 */
App.provider('RouteHelpers', [
  'APP_REQUIRES', function(appRequires) {
    'use strict';
    this.basepath = function(uri) {
      return 'app/views/' + uri;
    };
    this.resolveFor = function() {
      var _args;
      _args = arguments;
      return {
        deps: [
          '$q', function($q) {
            var andThen, getRequired, i, len, promise;
            promise = $q.when(1);
            andThen = function(_arg) {
              if (typeof _arg === 'function') {
                return promise.then(_arg);
              } else {
                return promise.then(function() {
                  var whatToLoad;
                  whatToLoad = getRequired(_arg);
                  if (!whatToLoad) {
                    return $.error('Route resolve: Bad resource name [' + _arg + ']');
                  }
                });
              }
            };
            getRequired = function(name) {
              var m;
              if (appRequires.modules) {
                for (m in appRequires.modules) {
                  if (appRequires.modules[m].name && appRequires.modules[m].name === name) {
                    return appRequires.modules[m];
                  }
                }
              }
              return appRequires.scripts && appRequires.scripts[name];
            };
            i = 0;
            len = _args.length;
            while (i < len) {
              promise = andThen(_args[i]);
              i++;
            }
            return promise;
          }
        ]
      };
    };
    this.$get = function() {};
  }
]);

App.factory('sessionStorage', [
  '$window', function($window) {
    var add, get, remove, store;
    store = $window.sessionStorage;
    add = function(key, value) {
      value = angular.toJson(value);
      store.setItem(key, value);
    };
    get = function(key) {
      var value;
      value = store.getItem(key);
      if (value) {
        value = angular.fromJson(value);
      }
      return value;
    };
    remove = function(key) {
      store.removeItem(key);
    };
    return {
      add: add,
      get: get,
      remove: remove
    };
  }
]);

App.factory('sim2LogicFactory', [
  'simulator2Factory', 'mojioRemote2', 'googlemapFactory', function(simulator2Factory, mojioRemote2, googlemapFactory) {
    var CreateSimulatorLogic, FuelLevel, RandomBattery, RandomFuelEfficiency, RandomRPM, RandomSpeed, SimulatorLogic;
    SimulatorLogic = function() {
      this.Vehicle = {
        Selected: null,
        Imei: '999',
        VIN: ''
      };
      this.Settings = {
        Title: 'New Trip Title',
        Duration: 60,
        DurationLimit: {
          Min: 10,
          Max: 3600
        },
        NoOfVehicleStates: 30,
        RPM: {
          Min: 300,
          Max: 1200
        },
        Speed: {
          Min: 30,
          Max: 90
        },
        Fuel: {
          Min: 70,
          Max: 80
        },
        FuelEfficiency: {
          Min: 12,
          Max: 17
        },
        Battery: {
          Min: 11.5,
          Max: 12.5
        },
        Points: {
          Start: null,
          End: null,
          WayPoint: []
        },
        CircularTrip: false,
        VehicleStates: null
      };
      this.SimulationMode = "Stop";
      this.SimulationStep = 0;
      this.WaitBefore = 0;
      this.SimulationTimer = null;
      this.legs = [];
      this.map = {};
      this.Info = {
        VehicleStatesNo: 0,
        LegsNo: 0,
        LastImportantEvent: null,
        LastEvent: null,
        LastNetworkLatency: 0,
        TotalNetworkLatency: 0,
        AvgNetworkLatency: 0,
        LastWaitBeforeSendingEvent: 0,
        TotalWaitBeforeSendingEvent: 0,
        NoOfErrors: 0
      };
      this.OnStateSendCallback = null;
      this.OnTripEnd = null;
      return angular.extend(this);
    };
    RandomRPM = function(Settings) {
      return Math.floor(Settings.RPM.Min + (Settings.RPM.Max - Settings.RPM.Min) * Math.random());
    };
    RandomSpeed = function(Settings) {
      return Math.floor(Settings.Speed.Min + (Settings.Speed.Max - Settings.Speed.Min) * Math.random());
    };
    RandomFuelEfficiency = function(Settings) {
      return Math.floor(Settings.FuelEfficiency.Min + (Settings.FuelEfficiency.Max - Settings.FuelEfficiency.Min) * Math.random());
    };
    RandomBattery = function(Settings) {
      return Math.floor(Settings.Battery.Min + (Settings.Battery.Max - Settings.Battery.Min) * Math.random());
    };
    FuelLevel = function(Settings, i, m) {
      var fl;
      fl = Settings.Fuel.Max - (Settings.Fuel.Max - Settings.Fuel.Min) * i / m;
      return Math.round(10 * fl) / 10;
    };
    SimulatorLogic.prototype = {
      CreateAllMapRelatedObjects: function(mapId, panoId, position) {
        var myOptions, panoramaOptions;
        this.map.Marker = {
          Start: null,
          End: null,
          WayPoint: []
        };
        myOptions = {
          zoom: 11,
          center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
          styles: googlemapFactory.MapStyle,
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
          },
          navigationControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map.map = new google.maps.Map(mapId, myOptions);
        this.map.directionsDisplay = new google.maps.DirectionsRenderer();
        this.map.directionsService = new google.maps.DirectionsService();
        panoramaOptions = {
          clickToGo: false,
          disableDefaultUI: true
        };
        this.map.panorama = new google.maps.StreetViewPanorama(panoId, panoramaOptions);
        this.map.sv = new google.maps.StreetViewService();
        return this.map.map.setStreetView(this.map.panorama);
      },
      ClearVehicleStates: function() {
        return this.Settings.VehicleStates = null;
      },
      CreateVehicleStates: function() {
        var CurrPoint, CurrentStateNo, PrePoint, TotalVehicleStatesNo, amax, apos, distanceSoFar, imax, ipos, j, jmax, jpos, k, l, leg, len, len1, len2, len3, len4, n, newEvent, o, p0, p1, point, ref, ref1, ref2, ref3, ref4, step, thisStepDistance;
        this.Settings.VehicleStates = [];
        TotalVehicleStatesNo = 0;
        CurrentStateNo = 0;
        ref = this.legs;
        for (j = 0, len = ref.length; j < len; j++) {
          leg = ref[j];
          ref1 = leg.steps;
          for (k = 0, len1 = ref1.length; k < len1; k++) {
            step = ref1[k];
            TotalVehicleStatesNo += step.path.length;
          }
        }
        newEvent = angular.copy(simulator2Factory.VehicleState);
        newEvent.Vehicle.Location.Lng = parseInt(this.legs[0].steps[0].path[0].lng() * 100000) / 100000;
        newEvent.Vehicle.Location.Lat = parseInt(this.legs[0].steps[0].path[0].lat() * 100000) / 100000;
        newEvent.TelematicDevice.GPSRadio.Location = angular.copy(newEvent.Vehicle.Location);
        newEvent.Vehicle.RPM.Value = RandomRPM(this.Settings);
        newEvent.Vehicle.Speed.Value = RandomSpeed(this.Settings);
        newEvent.Vehicle.FuelEfficiency.Value = RandomFuelEfficiency(this.Settings);
        newEvent.Vehicle.Battery.Value = RandomBattery(this.Settings);
        newEvent.Vehicle.FuelLevel.Value = FuelLevel(this.Settings, CurrentStateNo, TotalVehicleStatesNo);
        newEvent.Vehicle.VirtualOdometer.Value = 0;
        newEvent.Vehicle.IgnitionState.Value = false;
        this.Settings.VehicleStates.push(newEvent);
        PrePoint = null;
        CurrPoint = null;
        distanceSoFar = 0;
        amax = this.legs.length;
        ref2 = this.legs;
        for (apos = l = 0, len2 = ref2.length; l < len2; apos = ++l) {
          leg = ref2[apos];
          imax = leg.steps.length;
          ref3 = leg.steps;
          for (ipos = n = 0, len3 = ref3.length; n < len3; ipos = ++n) {
            step = ref3[ipos];
            thisStepDistance = step.distance.value;
            jmax = step.path.length;
            ref4 = step.path;
            for (jpos = o = 0, len4 = ref4.length; o < len4; jpos = ++o) {
              point = ref4[jpos];
              PrePoint = CurrPoint;
              CurrPoint = point;
              newEvent = angular.copy(simulator2Factory.VehicleState);
              newEvent.Vehicle.Location.Lng = parseInt(CurrPoint.lng() * 100000) / 100000;
              newEvent.Vehicle.Location.Lat = parseInt(CurrPoint.lat() * 100000) / 100000;
              newEvent.TelematicDevice.GPSRadio.Location = angular.copy(newEvent.Vehicle.Location);
              newEvent.Vehicle.RPM.Value = RandomRPM(this.Settings);
              newEvent.Vehicle.Speed.Value = RandomSpeed(this.Settings);
              newEvent.Vehicle.FuelEfficiency.Value = RandomFuelEfficiency(this.Settings);
              newEvent.Vehicle.Battery.Value = RandomBattery(this.Settings);
              newEvent.Vehicle.FuelLevel.Value = FuelLevel(this.Settings, CurrentStateNo, TotalVehicleStatesNo);
              newEvent.Vehicle.VirtualOdometer.Value = distanceSoFar + Math.round(thisStepDistance * (jpos + 1) / jmax);
              newEvent.Vehicle.IgnitionState.Value = true;
              if (PrePoint !== null) {
                p0 = new google.maps.LatLng(PrePoint.lat(), PrePoint.lng());
                p1 = new google.maps.LatLng(CurrPoint.lat(), CurrPoint.lng());
                newEvent.Vehicle.Heading.Value = parseInt(google.maps.geometry.spherical.computeHeading(p0, p1) * 10) / 10;
              }
              if (Math.random() * 100 <= this.Settings.NoOfVehicleStates) {
                this.Settings.VehicleStates.push(newEvent);
              }
              CurrentStateNo++;
            }
            distanceSoFar += thisStepDistance;
          }
        }
        newEvent = angular.copy(simulator2Factory.VehicleState);
        newEvent.Vehicle.Location.Lng = parseInt(CurrPoint.lng() * 100000) / 100000;
        newEvent.Vehicle.Location.Lat = parseInt(CurrPoint.lat() * 100000) / 100000;
        newEvent.TelematicDevice.GPSRadio.Location = angular.copy(newEvent.Vehicle.Location);
        newEvent.Vehicle.RPM.Value = RandomRPM(this.Settings);
        newEvent.Vehicle.Speed.Value = RandomSpeed(this.Settings);
        newEvent.Vehicle.FuelEfficiency.Value = RandomFuelEfficiency(this.Settings);
        newEvent.Vehicle.Battery.Value = RandomBattery(this.Settings);
        newEvent.Vehicle.FuelLevel.Value = FuelLevel(this.Settings, CurrentStateNo, TotalVehicleStatesNo);
        newEvent.Vehicle.VirtualOdometer.Value = distanceSoFar;
        newEvent.Vehicle.IgnitionState.Value = false;
        this.Settings.VehicleStates.push(newEvent);
      },
      SimulationPlay: function() {
        var WaitTime;
        WaitTime = 0;
        if (this.SimulationMode === "Stop") {
          WaitTime = this.WaitBefore;
        }
        this.SimulationMode = "Play";
        this.SimulationTimer = window.setTimeout(this.SimulationNextStep.bind(this), WaitTime);
      },
      SimulationPause: function() {
        this.SimulationMode = "Pause";
      },
      SimulationStop: function() {
        this.SimulationMode = "Stop";
        this.SimulationStep = 0;
        if (this.SimulationTimer !== null) {
          clearTimeout(this.SimulationTimer);
        }
        this.Info.LastNetworkLatency = 0;
        this.Info.TotalNetworkLatency = 0;
        this.Info.AvgNetworkLatency = 0;
        this.Info.LastWaitBeforeSendingEvent = 0;
        this.Info.TotalWaitBeforeSendingEvent = 0;
      },
      PrepareEvent: function(step) {
        var cEvent, code, codes, j, len, pEvent, sEvent;
        cEvent = this.Settings.VehicleStates[step];
        sEvent = angular.copy(cEvent);
        delete sEvent.ResponseTime;
        sEvent.IMEI = this.Vehicle.Imei;
        sEvent.TelematicDevice.IMEI = this.Vehicle.Imei;
        sEvent.Vehicle.VIN = this.Vehicle.VIN;
        sEvent.DeviceTime = {
          Timestamp: (new Date()).toISOString(),
          Status: 'Valid'
        };
        if (step !== 0) {
          pEvent = this.Settings.VehicleStates[step - 1];
          if (pEvent.Vehicle.Battery.Connected === false && sEvent.Vehicle.Battery.Connected === true) {
            sEvent.EventType = "6010";
          } else {
            sEvent.EventType = "0";
          }
        }
        codes = sEvent.Vehicle.DiagnosticCodes[0].Code;
        if (codes.indexOf(',') > -1) {
          codes = codes.split(',');
          sEvent.Vehicle.DiagnosticCodes = [];
          for (j = 0, len = codes.length; j < len; j++) {
            code = codes[j];
            sEvent.Vehicle.DiagnosticCodes.push({
              "Code": code
            });
          }
          if (!sEvent.IncludedData.Diagnostics) {
            delete sEvent.Vehicle.DiagnosticCodes;
            delete sEvent.Vehicle.MilStatus;
          }
          if (!sEvent.IncludedData.Ignition) {
            delete sEvent.Vehicle.IgnitionState;
          }
          if (!sEvent.IncludedData.Fuel) {
            delete sEvent.Vehicle.FuelLevel;
            delete sEvent.Vehicle.FuelEfficiency;
          }
          if (!sEvent.IncludedData.Battery) {
            delete sEvent.Vehicle.Battery;
            delete sEvent.EventType;
          }
        }
        return sEvent;
      },
      SimulationNextStep: function() {
        var cEvent, date1, onResult, sEvent, that;
        if (this.SimulationStep >= this.Settings.VehicleStates.length) {
          this.SimulationStop();
          if (this.OnTripEnd !== null) {
            this.OnTripEnd(this);
          }
          return;
        }
        cEvent = this.Settings.VehicleStates[this.SimulationStep];
        this.Info.LastEvent = cEvent;
        if (this.OnStateSendCallback !== null) {
          this.OnStateSendCallback(this, cEvent);
        }
        date1 = new Date();
        sEvent = this.PrepareEvent(this.SimulationStep);
        that = this;
        onResult = function(type) {
          var date2, tspan;
          date2 = new Date();
          tspan = date2 - date1;
          that.Info.LastNetworkLatency = tspan;
          that.Info.TotalNetworkLatency += tspan;
          that.Info.AvgNetworkLatency = Math.round(that.Info.TotalNetworkLatency / (that.SimulationStep + 1));
          that.SimulationPrepareNextStep(tspan);
        };
        mojioRemote2.POST({
          operation: "simulator",
          data: sEvent,
          onSuccess: function() {
            return onResult('success');
          },
          onError: function() {
            return onResult('error');
          }
        });
      },
      SimulationPrepareNextStep: function(tspan) {
        var delay;
        if (this.SimulationMode === "Stop") {
          return;
        }
        this.SimulationStep++;
        if (this.SimulationStep >= this.Settings.VehicleStates.length) {
          this.SimulationStop();
          if (this.OnTripEnd !== null) {
            this.OnTripEnd(this);
          }
        } else if (this.SimulationMode === "Play") {
          delay = Math.round(this.Settings.Duration * 1000 / this.Settings.VehicleStates.length);
          delay = delay - tspan;
          if (delay < 1) {
            delay = 1;
          }
          this.Info.LastWaitBeforeSendingEvent = delay;
          this.Info.TotalWaitBeforeSendingEvent += delay;
          this.SimulationTimer = window.setTimeout(this.SimulationNextStep.bind(this), delay);
        }
      }
    };
    CreateSimulatorLogic = function() {
      return new SimulatorLogic();
    };
    return {
      CreateSimulatorLogic: CreateSimulatorLogic
    };
  }
]);

App.factory('simulator2Factory', [
  function() {
    var VehicleState;
    VehicleState = {
      "Vehicle": {
        "VIN": "string",
        "MilStatus": false,
        "Acceleration": {
          "Value": 0,
          "Unit": "KilometersPerHourPerSecond"
        },
        "Deceleration": {
          "Value": 0,
          "Unit": "KilometersPerHourPerSecond"
        },
        "RPM": {
          "Value": 0,
          "Unit": "RevolutionsPerMinute"
        },
        "IgnitionState": {
          "Value": true
        },
        "Speed": {
          "Value": 0,
          "Unit": "KilometersPerHour"
        },
        "FuelEfficiency": {
          "Value": 0,
          "Unit": "KilometerPerLiter"
        },
        "FuelLevel": {
          "Unit": "Percentage",
          "Value": 0
        },
        "Battery": {
          "Connected": true,
          "Value": 0,
          "Unit": "Volts"
        },
        "Location": {
          "Lat": 0,
          "Lng": 0,
          "Status": "Locked",
          "Dilution": 0,
          "IsValid": true,
          "Altitude": 0
        },
        "Accelerometer": {
          "X": {
            "Value": 0,
            "Unit": "MilliGUnits"
          },
          "Y": {
            "Value": 0,
            "Unit": "MilliGUnits"
          },
          "Z": {
            "Value": 0,
            "Unit": "MilliGUnits"
          }
        },
        "Heading": {
          "Value": 0
        },
        "VirtualOdometer": {
          "Value": 0,
          "Unit": "Meters"
        },
        "DiagnosticCodes": [
          {
            "Code": ""
          }
        ],
        "TowState": {
          "Value": false
        },
        "AccidentState": {
          "Value": false
        },
        "IdleState": {
          "Value": false
        },
        "HarshEventState": {
          "Value": false
        },
        "ParkedState": {
          "Value": false
        }
      },
      "TelematicDevice": {
        "IMEI": "string",
        "AwakeState": {
          "AwakeReason": "MotionStart",
          "Value": true
        },
        "GPSRadio": {
          "Location": {}
        },
        "ConnectedState": {
          "Value": true
        },
        "OBDFirmware": {
          "FirmwareType": "Main",
          "Version": "Simulator 2.0"
        }
      },
      "IncludedData": {
        "Diagnostics": false
      }
    };
    return {
      VehicleState: VehicleState
    };
  }
]);

App.factory('simulatorFactory', [
  function() {
    var DiagnosticEventTemplate, EventTemplate, EventTypes, FixVehicleName;
    EventTypes = [
      {
        value: "MojioOn",
        text: 'Mojio On'
      }, {
        value: "MojioOff",
        text: 'Mojio Off'
      }, {
        value: "MojioIdle",
        text: 'Mojio Idle'
      }, {
        value: "MojioWake",
        text: 'Mojio Wake'
      }, {
        value: "ConnectionLost",
        text: 'Connection Lost'
      }, {
        value: "LowBattery",
        text: 'Low Battery'
      }, {
        value: "OffStatus",
        text: 'Off Status'
      }, {
        value: "IgnitionOn",
        text: 'Ignition On'
      }, {
        value: "IgnitionOff",
        text: 'Ignition Off'
      }, {
        value: "TripStatus",
        text: 'Trip Status'
      }, {
        value: "MovementStart",
        text: 'Movement Start'
      }, {
        value: "MovementStop",
        text: 'Movement Stop'
      }, {
        value: "Park",
        text: 'Park'
      }, {
        value: "Accident",
        text: 'Accident'
      }, {
        value: "Accelerometer",
        text: 'Accelerometer'
      }, {
        value: "Deceleration",
        text: 'Deceleration'
      }, {
        value: "HeadingChange",
        text: 'HeadingChange'
      }, {
        value: "Tow",
        text: 'Tow'
      }, {
        value: "Diagnostic",
        text: 'Diagnostic'
      }
    ];
    DiagnosticEventTemplate = {
      EventType: "",
      Location: {
        Lat: "",
        Lng: ""
      },
      Accelerometer: {
        X: "",
        Y: "",
        Z: ""
      },
      BatteryVoltage: "",
      ConnectionLost: "",
      Codes: "1",
      MilStatus: false
    };
    EventTemplate = {
      EventType: "",
      Location: {
        Lat: "",
        Lng: ""
      },
      Accelerometer: {
        X: "",
        Y: "",
        Z: ""
      },
      BatteryVoltage: "",
      ConnectionLost: "",
      Altitude: "",
      Acceleration: "",
      Deceleration: "",
      Distance: "",
      FuelEfficiency: "",
      FuelLevel: "",
      Heading: "",
      Odometer: "",
      RPM: "",
      Speed: ""
    };
    FixVehicleName = function(Vehicles) {
      var i, len, results, v;
      results = [];
      for (i = 0, len = Vehicles.length; i < len; i++) {
        v = Vehicles[i];
        if (v.Name === null || v.Name === "") {
          results.push(v.Name = "New Car");
        } else {
          results.push(void 0);
        }
      }
      return results;
    };
    return {
      EventTypes: EventTypes,
      DiagnosticEventTemplate: DiagnosticEventTemplate,
      EventTemplate: EventTemplate,
      FixVehicleName: FixVehicleName
    };
  }
]);


/**=========================================================
 * Module: toggle-state.js
 * Services to share toggle state functionality
 =========================================================
 */
App.service('toggleStateService', [
  '$rootScope', function($rootScope) {
    var WordChecker, storageKeyName;
    storageKeyName = 'toggleState';
    WordChecker = {
      hasWord: function(phrase, word) {
        return new RegExp('(^|\\s)' + word + '(\\s|$)').test(phrase);
      },
      addWord: function(phrase, word) {
        if (!this.hasWord(phrase, word)) {
          return phrase + (phrase ? ' ' : '') + word;
        }
      },
      removeWord: function(phrase, word) {
        if (this.hasWord(phrase, word)) {
          return phrase.replace(new RegExp('(^|\\s)*' + word + '(\\s|$)*', 'g'), '');
        }
      }
    };
    return {
      addState: function(classname) {
        var data;
        data = angular.fromJson($rootScope.$storage[storageKeyName]);
        if (!data) {
          data = classname;
        } else {
          data = WordChecker.addWord(data, classname);
        }
        $rootScope.$storage[storageKeyName] = angular.toJson(data);
      },
      removeState: function(classname) {
        var data;
        data = $rootScope.$storage[storageKeyName];
        if (!data) {
          return;
        }
        data = WordChecker.removeWord(data, classname);
        $rootScope.$storage[storageKeyName] = angular.toJson(data);
      },
      restoreState: function($elem) {
        var data;
        data = angular.fromJson($rootScope.$storage[storageKeyName]);
        if (!data) {
          return;
        }
        $elem.addClass(data);
      }
    };
  }
]);


/**=========================================================
 * Module: utils.js
 * Utility library to use across the theme
 =========================================================
 */
var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

App.service('Utils', ["$window", "APP_MEDIAQUERY", function($window, APP_MEDIAQUERY) {
  'use strict';
  var $body, $html, $win;
  $html = angular.element('html');
  $win = angular.element($window);
  $body = angular.element('body');
  return {
    support: {
      transition: (function() {
        var transitionEnd;
        transitionEnd = (function() {
          var element, name, transEndEventNames;
          element = document.body || document.documentElement;
          transEndEventNames = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd otransitionend',
            transition: 'transitionend'
          };
          name = void 0;
          for (name in transEndEventNames) {
            name = name;
            if (element.style[name] !== void 0) {
              return transEndEventNames[name];
            }
          }
        })();
        return transitionEnd && {
          end: transitionEnd
        };
      })(),
      animation: (function() {
        var animationEnd;
        animationEnd = (function() {
          var animEndEventNames, element, name;
          element = document.body || document.documentElement;
          animEndEventNames = {
            WebkitAnimation: 'webkitAnimationEnd',
            MozAnimation: 'animationend',
            OAnimation: 'oAnimationEnd oanimationend',
            animation: 'animationend'
          };
          name = void 0;
          for (name in animEndEventNames) {
            name = name;
            if (element.style[name] !== void 0) {
              return animEndEventNames[name];
            }
          }
        })();
        return animationEnd && {
          end: animationEnd
        };
      })(),
      requestAnimationFrame: window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1000 / 60);
      },
      touch: indexOf.call(window, 'ontouchstart') >= 0 && navigator.userAgent.toLowerCase().match(/mobile|tablet/) || window.DocumentTouch && document instanceof window.DocumentTouch || window.navigator['msPointerEnabled'] && window.navigator['msMaxTouchPoints'] > 0 || window.navigator['pointerEnabled'] && window.navigator['maxTouchPoints'] > 0 || false,
      mutationobserver: window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || null
    },
    isInView: function(element, options) {
      var $element, left, offset, top, window_left, window_top;
      $element = $(element);
      if (!$element.is(':visible')) {
        return false;
      }
      window_left = $win.scrollLeft();
      window_top = $win.scrollTop();
      offset = $element.offset();
      left = offset.left;
      top = offset.top;
      options = $.extend({
        topoffset: 0,
        leftoffset: 0
      }, options);
      if (top + $element.height() >= window_top && top - options.topoffset <= window_top + $win.height() && left + $element.width() >= window_left && left - options.leftoffset <= window_left + $win.width()) {
        return true;
      } else {
        return false;
      }
    },
    langdirection: $html.attr('dir') === 'rtl' ? 'right' : 'left',
    isTouch: function() {
      return $html.hasClass('touch');
    },
    isSidebarCollapsed: function() {
      return $body.hasClass('aside-collapsed');
    },
    isSidebarToggled: function() {
      return $body.hasClass('aside-toggled');
    },
    isMobile: function() {
      return $win.width() < APP_MEDIAQUERY.tablet;
    }
  };
}]);

App.controller('Sim2MultiController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote2', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', 'simulatorFactory', 'sim2LogicFactory', 'googlemapFactory', function($scope, $rootScope, $stateParams, mojioRemote2, mojioLocal, mojioGlobal, toaster, $filter, simulatorFactory, sim2LogicFactory, googlemapFactory) {
    var AddSimLogics, myOptions;
    $scope.AddVehicleData = {
      Imei: null,
      TripRow: null
    };
    $scope.SimLogics = [];
    $scope.ChangeContinuesDriving = function() {
      $scope.SimulationData.ContinuesDriving = !$scope.SimulationData.ContinuesDriving;
    };
    $scope.ChangeParallelDriving = function() {
      $scope.SimulationData.ParallelDriving = !$scope.SimulationData.ParallelDriving;
    };
    $scope.AllDevices = [];
    mojioRemote2.GET({
      operation: "mojios",
      onSuccess: function(res) {
        var IMEI, d, i, len, pointer, results;
        pointer = null;
        if (typeof res._embedded !== "undefined") {
          pointer = res._embedded.MojioResponse;
        } else if (typeof res.Data !== "undefined") {
          pointer = res.Data;
        } else {
          pointer = [];
        }
        results = [];
        for (i = 0, len = pointer.length; i < len; i++) {
          d = pointer[i];
          IMEI = "";
          if (typeof d.IMEI !== "undefined") {
            IMEI = d.IMEI;
          } else {
            IMEI = d.Imei;
          }
          if (IMEI.indexOf('999') === 0) {
            results.push($scope.AllDevices.push({
              Title: IMEI,
              Imei: IMEI,
              VIN: IMEI
            }));
          } else {
            results.push(void 0);
          }
        }
        return results;
      }
    });
    $scope.SavedSimulatorTrip = [];
    if (typeof localStorage["SavedSimulatorTrip"] !== "undefined") {
      $scope.SavedSimulatorTrip = JSON.parse(localStorage["SavedSimulatorTrip"]);
    }
    if ($scope.SavedSimulatorTrip.length === 0) {
      alert("You Need to save Simulated Trip in Simulator first");
    }
    $scope.SimulationData = {
      ParallelDriving: true,
      ContinuesDriving: false
    };
    $scope.SimulationMode = {
      ShowStop: false,
      ShowPause: false,
      ShowPlay: true
    };
    $scope.AddVehicleAuto = function() {
      var Imei, Settings, ipos;
      while ($scope.SimLogics.length !== 0) {
        $scope.RemoveVehicle(0);
      }
      ipos = 0;
      while (ipos < $scope.AllDevices.length) {
        Settings = $scope.SavedSimulatorTrip[ipos % $scope.SavedSimulatorTrip.length];
        Imei = $scope.AllDevices[ipos].Imei;
        AddSimLogics(Imei, Settings);
        ipos++;
      }
    };
    $scope.RemoveVehicle = function(row) {
      $scope.RemoveRoute($scope.SimLogics[row]);
      $scope.SimLogics.splice(row, 1);
    };
    $scope.RemoveRoute = function(row) {
      row.map.directionsDisplay.setDirections({
        routes: []
      });
    };
    AddSimLogics = function(Imei, Settings) {
      var logic;
      logic = sim2LogicFactory.CreateSimulatorLogic();
      logic.Vehicle.Imei = Imei;
      logic.Vehicle.VIN = Imei;
      logic.WaitBefore = 0;
      logic.Settings = angular.copy(Settings);
      logic.OnStateSendCallback = function(RelatedLogic, VehicleState) {
        return console.log("OnStateSendCallback");
      };
      logic.OnTripEnd = function(RelatedLogic) {
        var i, ipos, len, next, ref, sdata;
        if (!$scope.SimulationData.ContinuesDriving) {
          $scope.SimulationGlobalMode();
          return;
        }
        if ($scope.SimulationData.ParallelDriving) {
          RelatedLogic.SimulationPlay();
          return;
        }
        ref = $scope.SimLogics;
        for (ipos = i = 0, len = ref.length; i < len; ipos = ++i) {
          sdata = ref[ipos];
          if (sdata === RelatedLogic) {
            next = (ipos + 1) % $scope.SimLogics.length;
            if ($scope.SimLogics[next].SimulationMode === "Stop") {
              $scope.SimLogics[next].SimulationPlay();
              $scope.SimulationGlobalMode();
              return;
            }
          }
        }
      };
      $scope.SimLogics.push(logic);
      $scope.ShowRoute(logic);
    };
    $scope.AddVehicle = function() {
      AddSimLogics($scope.AddVehicleData.Imei, $scope.SavedSimulatorTrip[$scope.AddVehicleData.TripRow]);
    };
    $scope.createMarker = function(latlng, name, html, color) {
      var contentString, marker;
      contentString = html;
      marker = new google.maps.Marker({
        position: latlng,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          strokeColor: color,
          scale: 3
        },
        draggable: true,
        map: $scope.map
      });
      google.maps.event.trigger(marker, 'click');
      return marker;
    };
    myOptions = {
      zoom: 8,
      styles: googlemapFactory.MapStyle,
      center: new google.maps.LatLng(43.907787, -79.359741),
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      },
      navigationControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    $scope.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    $scope.directionsService = new google.maps.DirectionsService();
    $scope.ShowRoute = function(row) {
      var ipos, request, waypts, wp;
      row.map.directionsDisplay = new google.maps.DirectionsRenderer();
      row.map.directionsDisplay.setMap($scope.map);
      waypts = [];
      ipos = 0;
      wp = row.Settings.Points.WayPoint;
      while (ipos < wp.length) {
        waypts.push({
          location: new google.maps.LatLng(wp[ipos][0], wp[ipos][1]),
          stopover: true
        });
        ipos++;
      }
      request = {
        origin: new google.maps.LatLng(row.Settings.Points.Start[0], row.Settings.Points.Start[1]),
        destination: new google.maps.LatLng(row.Settings.Points.End[0], row.Settings.Points.End[1]),
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING
      };
      $scope.directionsService.route(request, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          return row.map.directionsDisplay.setDirections(response);
        }
      });
    };
    $scope.SimulationPlay = function(row) {
      var ThisVehicleInOtherTrip, apos, arow, i, ipos, j, len, len1, ref, ref1, sdata;
      ref = $scope.SimLogics;
      for (ipos = i = 0, len = ref.length; i < len; ipos = ++i) {
        sdata = ref[ipos];
        if (sdata.SimulationMode === "Play" || (typeof row !== "undefined" && ipos !== row)) {
          continue;
        }
        ThisVehicleInOtherTrip = false;
        ref1 = $scope.SimLogics;
        for (apos = j = 0, len1 = ref1.length; j < len1; apos = ++j) {
          arow = ref1[apos];
          if (arow.Vehicle.Imei === sdata.Vehicle.Imei && arow.SimulationMode !== "Stop" && apos !== ipos) {
            ThisVehicleInOtherTrip = true;
            break;
          }
        }
        if (ThisVehicleInOtherTrip) {
          toaster.error({
            title: "Error",
            body: "You can play new trip for this vehicle while vehicle is in another trip"
          });
          continue;
        }
        sdata.SimulationPlay();
        if (!$scope.SimulationData.ParallelDriving) {
          break;
        }
      }
      $scope.SimulationGlobalMode();
    };
    $scope.SimulationGlobalMode = function() {
      var ApplySimMode, NoOfPause, NoOfPlay, NoOfStop, SimMode, Total, ipos;
      NoOfPlay = 0;
      NoOfPause = 0;
      NoOfStop = 0;
      Total = $scope.SimLogics.length;
      ipos = 0;
      while (ipos < Total) {
        if ($scope.SimLogics[ipos].SimulationMode === "Play") {
          NoOfPlay++;
        } else if ($scope.SimLogics[ipos].SimulationMode === "Pause") {
          NoOfPause++;
        } else {
          NoOfStop++;
        }
        ipos++;
      }
      SimMode = $scope.SimulationMode;
      ApplySimMode = function() {
        if (NoOfPlay > 0) {
          SimMode.ShowStop = true;
          SimMode.ShowPause = true;
        }
        if (NoOfPause > 0) {
          SimMode.ShowPlay = true;
          SimMode.ShowStop = true;
        }
        if (NoOfStop > 0) {
          SimMode.ShowPlay = true;
        }
        if (NoOfPlay === Total) {
          SimMode.ShowPlay = false;
        }
        if (NoOfPause === Total) {
          SimMode.ShowPause = false;
        }
        if (NoOfStop === Total) {
          SimMode.ShowStop = false;
          SimMode.ShowPause = false;
        }
      };
      if (!$scope.$$phase) {
        $scope.$apply(function() {
          return ApplySimMode();
        });
      } else {
        ApplySimMode();
      }
    };
    $scope.SimulationStop = function(row) {
      var NoOfTrip, StopOne, ipos;
      StopOne = function(rid) {
        var StopProc;
        StopProc = function(RowPos) {
          $scope.SimLogics[RowPos].SimulationStop();
        };
        if (!$scope.$$phase) {
          return $scope.$apply(function() {
            return StopProc(rid);
          });
        } else {
          return StopProc(rid);
        }
      };
      NoOfTrip = $scope.SimLogics.length;
      if (typeof row === "undefined") {
        ipos = 0;
        while (ipos < NoOfTrip) {
          StopOne(ipos);
          ipos++;
        }
      } else {
        if ($scope.SimulationData.ParallelDriving) {
          if ($scope.SimulationData.ContinuesDriving) {
            row.SimulationStep = 0;
          } else {
            StopOne(row);
          }
        } else {
          StopOne(row);
        }
      }
      $scope.SimulationGlobalMode();
    };
    $scope.SimulationPause = function(row) {
      var ipos;
      if (typeof row === "undefined") {
        ipos = 0;
        while (ipos < $scope.SimLogics.length) {
          $scope.SimLogics[ipos].SimulationMode = "Pause";
          ipos++;
        }
      } else {
        $scope.SimLogics[row].SimulationMode = "Pause";
      }
      $scope.SimulationGlobalMode();
    };
    $scope.SaveSimulator = function() {
      var DataForSaving, data, i, len, ref, sl;
      DataForSaving = [];
      ref = $scope.SimLogics;
      for (i = 0, len = ref.length; i < len; i++) {
        sl = ref[i];
        DataForSaving.push({
          Imei: sl.Vehicle.Imei,
          Settings: sl.Settings
        });
      }
      data = new Blob([JSON.stringify(DataForSaving)], {
        type: 'application/json'
      });
      saveAs(data, "MultiVehicleSimulator.txt");
    };
    $scope.FileContent = null;
    $scope.$watch('FileContent', function(newValue, oldValue) {
      var DataFromFile, i, len, row;
      if (newValue === null) {
        return;
      }
      while ($scope.SimLogics.length !== 0) {
        $scope.RemoveVehicle(0);
      }
      DataFromFile = JSON.parse(newValue);
      for (i = 0, len = DataFromFile.length; i < len; i++) {
        row = DataFromFile[i];
        AddSimLogics(row.Imei, row.Settings);
      }
      return $scope.FileContent = null;
    });
  }
]);

App.controller('admin2SearchController', [
  '$scope', '$rootScope', 'mojioRemote2', 'toaster', function($scope, $rootScope, mojioRemote2, toaster) {
    $scope.data = {
      username: '',
      email: '',
      phonenumber: '',
      imei: ''
    };
    $scope.result = [];
    $scope.search = function() {
      var moreparam, req;
      moreparam = [];
      if ($scope.data.username.length !== 0) {
        moreparam.push({
          param: 'username',
          val: $scope.data.username
        });
      }
      if ($scope.data.email.length !== 0) {
        moreparam.push({
          param: 'email',
          val: $scope.data.email
        });
      }
      if ($scope.data.phonenumber.length !== 0) {
        moreparam.push({
          param: 'phonenumber',
          val: $scope.data.phonenumber
        });
      }
      if ($scope.data.imei.length !== 0) {
        moreparam.push({
          param: 'imei',
          val: $scope.data.imei
        });
      }
      req = {
        operation: "admin/users",
        top: '20',
        skip: '0',
        moreparam: moreparam,
        onSuccess: function(res) {
          return $scope.result = res.Data;
        },
        onError: function(res) {
          return $scope.result = [];
        }
      };
      return mojioRemote2.GET(req);
    };
  }
]);

App.controller('adminDashboardController', [
  '$rootScope', '$stateParams', '$scope', 'mojioRemote', function($rootScope, $stateParams, $scope, mojioRemote) {
    var today;
    $scope.mojiosTotal = "";
    mojioRemote.GET('mojios', 0, 0, "", null, function(result) {
      return $scope.mojiosTotal = result.TotalRows;
    }, function(result) {
      return $scope.mojiosTotal = "?";
    });
    $scope.carsTotal = "";
    mojioRemote.GET('vehicles', 0, 0, "", null, function(result) {
      return $scope.carsTotal = result.TotalRows;
    }, function(result) {
      return $scope.carsTotal = "?";
    });
    $scope.usersTotal = "";
    mojioRemote.GET('users', 0, 0, "", null, function(result) {
      return $scope.usersTotal = result.TotalRows;
    }, function(result) {
      return $scope.usersTotal = "?";
    });
    $scope.tripsTotal = "";
    mojioRemote.GET('trips', 0, 0, "", null, function(result) {
      return $scope.tripsTotal = result.TotalRows;
    }, function(result) {
      return $scope.tripsTotal = "?";
    });
    $scope.carsDriving = "";
    mojioRemote.GET('vehicles', 0, 0, "IgnitionOn=true", null, function(result) {
      return $scope.carsDriving = result.TotalRows;
    }, function(result) {
      return $scope.carsDriving = "?";
    });
    today = new Date();
    $scope.carsConnected = "";
    return mojioRemote.GET('vehicles', 0, 0, "LastContactTime=0000.00.00-" + today.toString("yyyy.mm.dd"), null, function(result) {
      return $scope.carsConnected = result.TotalRows;
    }, function(result) {
      return $scope.carsConnected = "?";
    });
  }
]);

App.controller('codeWizardController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', '$http', 'codeWizardFactory', '$state', function($scope, $rootScope, $stateParams, mojioRemote, mojioLocal, mojioGlobal, toaster, $filter, $http, codeWizardFactory, $state) {
    var quote, rootUri, uri;
    rootUri = "./code_template";
    uri = rootUri;
    if ($stateParams['uri'].length !== 0) {
      uri = $stateParams['uri'].replace(/\./g, '/');
    }
    $scope.Content = codeWizardFactory.Content;
    $scope.Child = codeWizardFactory.Child;
    $scope.Parent = codeWizardFactory.Parent;
    codeWizardFactory.prepareNodes(rootUri, uri);
    $scope.SelectNode = function(node) {
      var nodeUri;
      nodeUri = "";
      if (node.level === 0) {
        nodeUri = rootUri;
      } else {
        nodeUri = node.path + "/" + node.name;
      }
      if (nodeUri === rootUri) {
        nodeUri = "";
      }
      $state.go("dev.codewizard", {
        uri: nodeUri.replace(/\//g, '.')
      });
    };
    $scope.generateFiles = function() {
      var filedata, fl, i, j, len, len1, re, ref, ref1, results, tem, template;
      ref = $scope.Content.selectedNode.template;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        tem = ref[i];
        template = tem.template;
        ref1 = $scope.Content.selectedNode.data;
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          fl = ref1[j];
          re = new RegExp(quote(fl.tag), 'g');
          template = template.replace(re, fl.value);
        }
        filedata = new Blob([template], {
          type: tem.mimetype
        });
        results.push(saveAs(filedata, tem.output));
      }
      return results;
    };
    $scope.showOutput = function() {
      var fl, i, j, len, len1, re, ref, ref1, results, tem, template;
      $scope.Content.selectedNode.output = [];
      ref = $scope.Content.selectedNode.template;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        tem = ref[i];
        template = tem.template;
        ref1 = $scope.Content.selectedNode.data;
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          fl = ref1[j];
          re = new RegExp(quote(fl.tag), 'g');
          template = template.replace(re, fl.value);
        }
        results.push($scope.Content.selectedNode.output.push({
          title: tem.output,
          content: template
        }));
      }
      return results;
    };
    return quote = function(str) {
      return str.replace(/(?=[\/\\^$*+?.()|{}[\]])/g, '\\');
    };
  }
]);

App.controller('configDetailController', [
  '$rootScope', '$stateParams', function($rootScope, $stateParams) {
    this.configRow = $rootScope.configRow;
    this.showArray = function(arr) {
      var eg;
      eg = arr.join('<br/>');
      return arr.join('\n\r');
    };
    this.changeMode = function() {
      mojioGlobal.changeProducationMode();
    };
    this.UserData = function() {
      return mojioGlobal.data.user_data;
    };
    this.logout = function() {
      mojioGlobal.logout();
    };
  }
]);

App.controller('contentController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', '$http', 'contentFactory', '$state', '$route', function($scope, $rootScope, $stateParams, mojioRemote, mojioLocal, mojioGlobal, toaster, $filter, $http, contentFactory, $state, $route) {
    var prepare;
    $scope.Content = contentFactory.Content;
    $scope.Child = contentFactory.Child;
    $scope.Parent = contentFactory.Parent;
    $scope.MenuNodes = contentFactory.MenuNodes;
    prepare = function(uri) {
      var curi, rootUri;
      rootUri = "./cms";
      curi = rootUri;
      if (uri.length !== 0) {
        curi = uri.replace(/\./g, '/');
      }
      contentFactory.prepareNodes(rootUri, curi);
    };
    prepare($stateParams['uri']);
    return $scope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {
      var allParam;
      if (newUrl.split('#')[0] === oldUrl.split('#')[0] && newUrl.split('#')[1].indexOf('/dev/content/') === 0) {
        allParam = newUrl.split('#')[1].split('/');
        prepare(allParam[allParam.length - 1]);
      }
    });
  }
]);

App.controller('dashDatasourceController', [
  '$scope', 'dashDatasource', 'localStorage', function($scope, dashDatasource, localStorage) {
    var STORAGE_KEY, data;
    STORAGE_KEY = "DashDatasource";
    data = localStorage.get(STORAGE_KEY);
    if (data !== null) {
      dashDatasource.DataSource = data;
    }
    $scope.DataSource = dashDatasource.DataSource;
    $scope.AddParam = function(ds) {
      ds.config.params.push({
        pname: '',
        pvalue: ''
      });
    };
    $scope.AddHeader = function(ds) {
      ds.config.header.push({
        hname: '',
        hvalue: ''
      });
    };
    $scope.AddRelatedDatasource = function(ds) {
      ds.relatedDatasource.push("");
    };
    $scope.SaveDatasource = function() {
      localStorage.add(STORAGE_KEY, dashDatasource.DataSource);
    };
    $scope.AddNewDatasource = function() {
      dashDatasource.DataSource.push(dashDatasource.DataSourceTemplate);
    };
  }
]);

App.controller('deviceDetailController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', function($scope, $rootScope, $stateParams, mojioRemote, mojioLocal, mojioGlobal, toaster) {
    var loadConfigurations, loadDeviceStats, loadMojio, loadOther, loadSIMData, loadUpdateHistory, loadUser, loadVehicle, modifyLoggingDuration, modifyProxyServer, setProxyServerJson2String;
    if (mojioGlobal.data.mojio_client === null) {
      mojioGlobal.createMojioForSignal();
    }
    loadMojio = function() {
      if (typeof $rootScope["deviceRow"] === "undefined" || $rootScope["deviceRow"]._id !== $scope._id) {
        return mojioRemote.GET('mojios/' + $scope._id, null, null, null, null, function(result) {
          $scope.device = result;
          return loadOther();
        }, function(result) {
          return console.log("Error");
        });
      } else {
        $scope.device = $rootScope["deviceRow"];
        return loadOther();
      }
    };
    loadOther = function() {
      setProxyServerJson2String();
      loadDeviceStats();
      loadSIMData();
      loadUser();
      loadVehicle();
      return loadUpdateHistory();
    };
    $scope.UpdateHistory = [];
    loadUpdateHistory = function() {
      mojioRemote.GET('MojioUpdate', null, null, "MojioId = " + $scope._id, null, function(result) {
        return $scope.UpdateHistory = result.Data;
      }, function(result) {
        return console.log("Error");
      });
    };
    loadDeviceStats = function() {
      mojioRemote.GET('DeviceStats/', 6, 0, "MojioId = " + $scope._id, null, function(result) {
        $scope.xkey = 'y';
        $scope.ykeys = ['a', 'b'];
        $scope.labels = ['a', 'b'];
        return $scope.myModel = [
          {
            y: '2006',
            a: 100,
            b: 90
          }, {
            y: '2007',
            a: 75,
            b: 65
          }, {
            y: '2008',
            a: 50,
            b: 40
          }, {
            y: '2009',
            a: 75,
            b: 65
          }, {
            y: '2010',
            a: 50,
            b: 40
          }, {
            y: '2011',
            a: 75,
            b: 65
          }, {
            y: '2012',
            a: 100,
            b: 90
          }
        ];
      }, function(result) {
        return console.log("Error");
      });
    };
    loadSIMData = function() {
      if ($scope.device.DevicePrivate.SimCardId === null) {
        return;
      }
      return mojioRemote.GET('SimCards/' + $scope.device.DevicePrivate.SimCardId, null, null, null, null, function(result) {
        $scope.simCard = result;
        return $scope.editDevice.Iccid = $scope.simCard.Iccid;
      }, function(result) {
        return console.log("Error");
      });
    };
    loadUser = function() {
      if ($scope.device.OwnerId === null) {
        return;
      }
      return mojioRemote.GET('Users/' + $scope.device.OwnerId, null, null, null, null, function(result) {
        $scope.User = result;
        return $scope.editUser = angular.copy($scope.User);
      }, function(result) {
        return console.log("Error");
      });
    };
    loadVehicle = function() {
      if ($scope.device.VehicleId === null) {
        return;
      }
      return mojioRemote.GET('Vehicles/' + $scope.device.VehicleId, null, null, null, null, function(result) {
        $scope.Vehicle = result;
        return $scope.editVehicle = angular.copy($scope.Vehicle);
      }, function(result) {
        return console.log("Error");
      });
    };
    loadConfigurations = function() {
      if ($scope.device.mojioPrivate.Firmware === null || $scope.device.mojioPrivate.Configuration === null) {
        return;
      }
      mojioRemote.GET('Configurations', null, null, 'Firmware=' + $scope.device.mojioPrivate.Firmware, null, function(result) {
        return $scope.compatibleCfg = result;
      }, function(result) {
        return console.log("Error");
      });
      return mojioRemote.GET('Firmwares', null, null, 'Xirgo', null, function(result) {
        return $scope.compatibleFw = result;
      }, function(result) {
        return console.log("Error");
      });
    };
    modifyLoggingDuration = function() {
      var d, data, ld, x;
      ld = $scope.editDevice.LoggingDuration;
      data = {
        Type: "MojioPrivate"
      };
      if (ld !== "di") {
        d = new Date();
        x = parseInt(ld[1]);
        if (ld[0] === 'w') {
          d.setDate(d.getDate() + x * 7);
        } else {
          d = new Date(d.setMonth(d.getMonth() + x));
        }
        data = {
          Type: "MojioPrivate",
          LoggerDate: d.toISOString()
        };
      }
      mojioRemote.PUT("mojios/" + $scope._id + "/private", data, function() {
        return toaster.success({
          title: "Logging Duration",
          body: "Logging Duration Set Successfully"
        });
      }, function() {
        return toaster.error({
          title: "Logging Duration",
          body: "Error Setting Logging Duration"
        });
      });
    };
    modifyProxyServer = function() {
      var i, len, one, part, proxyJson, ref;
      proxyJson = [];
      ref = $scope.editDevice.ProxyServer.split(/\n/);
      for (i = 0, len = ref.length; i < len; i++) {
        one = ref[i];
        if (one.length !== 0) {
          part = one.split(',');
          proxyJson.push({
            Address: part[0],
            Port: part[1]
          });
        }
      }
      mojioRemote.POST("mojios/" + $scope._id + "/proxy", proxyJson, function() {
        toaster.success({
          title: "Proxy Server",
          body: "Proxy Server Set Successfully"
        });
        return $scope.device.DevicePrivate.ProxyServers = angular.copy(proxyJson);
      }, function() {
        return toaster.error({
          title: "Proxy Server",
          body: "Error Setting Proxy Server"
        });
      });
    };
    setProxyServerJson2String = function() {
      var i, len, one, proxyStr, ref;
      if ($scope.device.DevicePrivate.ProxyServers === null) {
        $scope.editDevice.ProxyServer = "";
        return;
      }
      proxyStr = [];
      ref = $scope.device.DevicePrivate.ProxyServers;
      for (i = 0, len = ref.length; i < len; i++) {
        one = ref[i];
        proxyStr.push(one.Address + "," + one.Port);
      }
      return $scope.editDevice.ProxyServer = proxyStr.join(/\n/);
    };
    $scope._id = $stateParams.id;
    $scope.device = {};
    $scope.editDevice = {
      LoggingDuration: 'di',
      ProxyServer: '',
      Iccid: ''
    };
    $scope.editUser = {};
    $scope.editVehicle = {};
    $scope.watchStatus = 0;
    $scope.diagStream = [];
    $scope.ServerConfiguration = {
      MojioId: '',
      Address: '',
      Port: '',
      ServerProtocol: '3',
      MessageType: 'Server'
    };
    $scope.ApnConfiguration = {
      MojioId: '',
      Apn: '',
      Username: '',
      Password: '',
      MessageType: 'Apn'
    };
    $scope.SmsConfiguration = {
      MojioId: '',
      Msisdn: '',
      MessageType: 'Sms'
    };
    $scope.auditTrailShowUpdatePanel = false;
    $scope.DeployUpdate = {
      Type: 'cfg',
      Update1: '',
      Update2: '',
      Name: '',
      Description: ''
    };
    $scope.DeviceActivity = {
      To: '',
      From: ''
    };
    $scope.Events = [];
    $scope.Reports = [];
    $scope.LoggingDuration = mojioLocal.staticData.LoggingDuration;
    $scope.watchDevice = function() {
      var EventModel, Mojio, mojio;
      $scope.watchStatus = 1 - $scope.watchStatus;
      EventModel = mojioGlobal.data.mojio_client.model("Event");
      Mojio = mojioGlobal.data.mojio_client.model("Mojio");
      mojio = new Mojio($scope.device);
      if ($scope.watchStatus === 1) {
        mojioGlobal.data.mojio_client.observe(EventModel, mojio, function(entity) {
          return console.log("Observed change seen.");
        }, function(error, result) {
          if (error) {
            console.log("Observe error: " + error);
            return;
          }
          console.log("Observer started");
          return mojioGlobal.data.mojio_observer = result;
        });
      } else {
        console.log(mojioGlobal.data.mojio_observer);
        console.log(mojioGlobal.data.mojio_observedEntity);
        mojioGlobal.data.mojio_client.unobserve(mojioGlobal.data.mojio_observer, mojioGlobal.data.mojio_observedEntity, $scope.device, function(error, result) {
          if (error) {
            return console.log('Unobserve error: ' + error);
          } else {
            return console.log('Unobserved the entity');
          }
        });
      }
    };
    $scope.ModifyDevice = function() {
      modifyLoggingDuration();
      modifyProxyServer();
    };
    $scope.unclaimSimCard = function() {
      mojioRemote.PUT("simcards/" + $scope._id + "/unclaim", $scope.simCard, function() {
        toaster.success({
          title: "Unclaim SIM Card",
          body: "Unclaim SIM Card Successfully"
        });
        $scope.simCard = null;
        $scope.editDevice.Iccid = "";
        return $scope.edit = "";
      }, function() {
        return toaster.error({
          title: "Unclaim SIM Card",
          body: "Error Unclaiming SIM Card"
        });
      });
    };
    $scope.claimSimCard = function() {
      var data;
      data = {
        Type: "SimCard",
        Iccid: $scope.editDevice.Iccid,
        MojioId: $scope._id
      };
      mojioRemote.PUT("simcards/" + $scope._id + "/claim", data, function() {
        toaster.success({
          title: "Claim SIM Card",
          body: "Claim SIM Card Successfully"
        });
        $rootScope["deviceRow"] = void 0;
        return loadMojio();
      }, function() {
        return toaster.error({
          title: "Claim SIM Card",
          body: "Error Claiming SIM Card"
        });
      });
    };
    $scope.updateUser = function() {
      mojioRemote.PUT("users/" + $scope.editUser._id, $scope.editUser, function() {
        toaster.success({
          title: "Update User",
          body: "Update User Successfully"
        });
        return $scope.User = angular.copy($scope.editUser);
      }, function() {
        return toaster.error({
          title: "Update User",
          body: "Error Updating User"
        });
      });
    };
    $scope.updateVehicle = function() {
      mojioRemote.PUT("vehicles/" + $scope.editVehicle._id, $scope.editVehicle, function() {
        toaster.success({
          title: "Update Vehicle",
          body: "Update Vehicle Successfully"
        });
        return $scope.Vehicle = angular.copy($scope.editVehicle);
      }, function() {
        return toaster.error({
          title: "Update Vehicle",
          body: "Error Updating Vehicle"
        });
      });
    };
    $scope.diagServerCommunicationSettings = function() {
      var cmd;
      cmd = 'mojioCommand/' + $scope._id + '/Comm?GET&_';
      return $scope.sendGETCommand(cmd);
    };
    $scope.diagVehicleStatus = function() {
      var cmd;
      cmd = 'mojioCommand/' + $scope._id + '/VehicleStatus?GET&_';
      return $scope.sendGETCommand(cmd);
    };
    $scope.diagDeviceDiagnostics = function() {
      var cmd;
      cmd = 'mojioCommand/' + $scope._id + '/DeviceDiagnostics?GET&_';
      return $scope.sendGETCommand(cmd);
    };
    $scope.diagDeviceProfile = function() {
      var cmd;
      cmd = 'mojioCommand/' + $scope._id + '/profile?GET&_';
      return $scope.sendGETCommand(cmd);
    };
    $scope.diagSetServerConfiguration = function() {
      var cmd;
      cmd = 'mojioCommand/' + $scope._id + '/Server?POST&_';
      $scope.ServerConfiguration.MojioId = $scope._id;
      return $scope.sendPOSTCommand(cmd, $scope.ServerConfiguration);
    };
    $scope.diagSetApnConfiguration = function() {
      var cmd;
      cmd = 'mojioCommand/' + $scope._id + '/Apn?POST&_';
      $scope.ApnConfiguration.MojioId = $scope._id;
      return $scope.sendPOSTCommand(cmd, $scope.ApnConfiguration);
    };
    $scope.diagSetSmsNumber = function() {
      var cmd;
      cmd = 'mojioCommand/' + $scope._id + '/Sms?POST&_';
      $scope.SmsConfiguration.MojioId = $scope._id;
      return $scope.sendPOSTCommand(cmd, $scope.SmsConfiguration);
    };
    $scope.sendPOSTCommand = function(cmd, data) {
      return mojioRemote.POST(cmd, data, function(result) {
        var obj;
        obj = result;
        obj.type = 'server';
        obj.time = new Date();
        return $scope.diagStream.push(obj);
      }, function(result) {
        var obj;
        obj = result;
        obj.type = 'error';
        obj.time = new Date();
        return $scope.diagStream.push(obj);
      });
    };
    $scope.sendGETCommand = function(cmd) {
      return mojioRemote.GET(cmd, null, null, null, null, function(result) {
        var obj;
        obj = result;
        obj.type = 'server';
        obj.time = new Date();
        return $scope.diagStream.push(obj);
      }, function(result) {
        var obj;
        obj = result;
        obj.type = 'error';
        obj.time = new Date();
        return $scope.diagStream.push(obj);
      });
    };
    $scope.auditTrailSubmitUpdate = function() {
      var cmd, data, target;
      cmd = '';
      target = '';
      if ($scope.DeployUpdate.Type === 'cfg') {
        cmd = 'configurations/deploy';
        ({
          target: $scope.DeployUpdate.Update1
        });
      } else {
        cmd = 'firmwares/deploy';
        ({
          target: $scope.DeployUpdate.Update2
        });
      }
      data = {
        Description: $scope.DeployUpdate.Description,
        Name: $scope.DeployUpdate.Name,
        RequestData: [$scope.device.Imei],
        TargetDataId: target,
        Type: 'Operation'
      };
      if ($scope.DeployUpdate.Launch) {
        data.DeployOptions = "DeployAndLaunch";
      }
      return mojioRemote.POST(cmd, data, function(result) {
        return toaster.success({
          title: "Deploy Update",
          body: "Deploy Update Successfully"
        });
      }, function() {
        return toaster.error({
          title: "Deploy Update",
          body: "Error Deploying Update"
        });
      });
    };
    $scope.deviceActivityLoadData = function() {
      var criteria, mdate;
      criteria = "Imei=" + $scope.device.Imei + ";Time=";
      mdate = new Date($scope.DeviceActivity.From);
      criteria += mdate.getFullYear() + "." + (mdate.getMonth() + 1) + "." + mdate.getDate();
      mdate = new Date($scope.DeviceActivity.To);
      criteria += "-" + mdate.getFullYear() + "." + (mdate.getMonth() + 1) + "." + mdate.getDate();
      if ($scope.DeviceActivity.To === '' || $scope.DeviceActivity.From === '') {
        toaster.error({
          title: "Load Data",
          body: "Please Specify From and To date"
        });
        return;
      }
      mojioRemote.GET('MojioReports', 1000, 0, criteria, 'sortby=ServerTimestamp', function(result) {
        return $scope.Reports = result.Data;
      }, function(result) {
        return console.log("Error");
      });
      criteria = "Time=";
      mdate = new Date($scope.DeviceActivity.From);
      criteria += mdate.getFullYear() + "." + (mdate.getMonth() + 1) + "." + mdate.getDate();
      mdate = new Date($scope.DeviceActivity.To);
      criteria += "-" + mdate.getFullYear() + "." + (mdate.getMonth() + 1) + "." + mdate.getDate();
      $scope.Events = [];
      return mojioRemote.GET('mojios/' + $scope._id + '/Events', 1000, 0, criteria, null, function(result) {
        return $scope.Events = result.Data;
      }, function(result) {
        return console.log("Error");
      });
    };
    $scope.deviceActivityExportEvents = function(type) {
      return saveAs(new Blob([JSON.stringify($scope.Events)], {
        type: 'application/json'
      }), "Events.json");
    };
    $scope.deviceActivityExportReports = function(type) {
      return saveAs(new Blob([JSON.stringify($scope.Reports)], {
        type: 'application/json'
      }), "Reports.json");
    };
    loadMojio();
  }
]);

App.controller('dummyVehiclesController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', function($scope, $rootScope, $stateParams, mojioRemote, mojioLocal, mojioGlobal, toaster) {
    var ModifyVehicle, MojioName;
    $scope.AddVehicleData = {
      Name: 'New Vehicle',
      MojioId: '0',
      VIN: ''
    };
    $scope.prepareData = function() {
      $scope.Mojios = [
        {
          _id: '0',
          Name: 'New Mojio'
        }
      ];
      $scope.Vehicles = null;
      return mojioRemote.GET("Users/" + mojioGlobal.data.user_data.id + "/Mojios", 200, null, null, null, function(result) {
        var RowData, i, len, ref, row;
        ref = result.Data;
        for (i = 0, len = ref.length; i < len; i++) {
          row = ref[i];
          RowData = {
            _id: row._id,
            Name: row.Name
          };
          if (row.VehicleId !== null) {
            RowData.Name += " [Connected]";
          }
          $scope.Mojios.push(RowData);
        }
        return $scope.GetVehicles();
      });
    };
    $scope.prepareData();
    $scope.GetVehicles = function() {
      return mojioRemote.GET("Users/" + mojioGlobal.data.user_data.id + "/Vehicles", 200, null, null, null, function(result) {
        var i, len, ref, results, row;
        $scope.Vehicles = result.Data;
        ref = $scope.Vehicles;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          row = ref[i];
          results.push(row.MojioName = MojioName(row.MojioId));
        }
        return results;
      });
    };
    MojioName = function(MojioId) {
      var i, len, ref, row;
      ref = $scope.Mojios;
      for (i = 0, len = ref.length; i < len; i++) {
        row = ref[i];
        if (row._id === MojioId) {
          return row.Name;
        }
      }
    };
    $scope.RemoveVehicle = function(Vehicle) {
      return mojioRemote.DELETE("Vehicles/" + Vehicle._id, function(result) {
        var MojioId, i, len, pos, ref, results, row;
        ref = $scope.Vehicles;
        results = [];
        for (pos = i = 0, len = ref.length; i < len; pos = ++i) {
          row = ref[pos];
          if (row._id === Vehicle._id) {
            MojioId = Vehicle.MojioId;
            $scope.Vehicles.splice(pos, 1);
            mojioRemote.DELETE("Mojios/" + MojioId, function(result) {
              return $scope.prepareData();
            }, function(result) {
              return console.log(result);
            });
            break;
          } else {
            results.push(void 0);
          }
        }
        return results;
      }, function(result) {
        return console.log(result);
      });
    };
    $scope.AddVehicleByHeartBeat = function(MojioId) {
      var mcode, mdata, vcode, vdata;
      if (typeof MojioId === "undefined") {
        if ($scope.AddVehicleData.MojioId !== '0') {
          $scope.AddVehicleByHeartBeat($scope.AddVehicleData.MojioId);
          return;
        } else {
          mcode = Math.round(Math.random() * 1000000);
          mdata = {
            "Type": "Mojio",
            "Name": "Dummy Simulator Mojio " + mcode,
            "Imei": "IMEI_" + mcode
          };
          mojioRemote.POST("Mojios", mdata, function(result) {
            $scope.AddVehicleData.MojioId = result._id;
            return $scope.AddVehicleByHeartBeat($scope.AddVehicleData.MojioId);
          }, function(result) {
            return console.log(result);
          });
        }
        return;
      }
      vcode = $scope.AddVehicleData.VIN;
      if (vcode.length === 0) {
        vcode = Math.round(Math.random() * 1000000);
      }
      vdata = {
        "Type": "Event",
        "MojioId": MojioId,
        "EventType": "HeartBeat",
        "VIN": vcode
      };
      mojioRemote.POST("Events", vdata, function(result) {
        return ModifyVehicle(result.VehicleId, MojioId);
      }, function(result) {
        return console.log(result);
      });
    };
    ModifyVehicle = function(VehicleId, MojioId) {
      var vdata;
      vdata = {
        "Type": "Vehicle",
        "Name": $scope.AddVehicleData.Name || "No Name"
      };
      mojioRemote.PUT("Vehicles/" + VehicleId, vdata, function(result) {
        return $scope.prepareData();
      }, function(result) {
        return console.log(result);
      });
    };
    $scope.AddVehicle = function(MojioId) {
      var mcode, mdata, vcode, vdata;
      if (typeof MojioId === "undefined") {
        if ($scope.AddVehicleData.MojioId !== '0') {
          $scope.AddVehicle($scope.AddVehicleData.MojioId);
          return;
        } else {
          mcode = Math.round(Math.random() * 1000000);
          mdata = {
            "Type": "Mojio",
            "Name": "Dummy Simulator Mojio " + mcode,
            "Imei": "IMEI_" + mcode
          };
          mojioRemote.POST("Mojios", mdata, function(result) {
            $scope.AddVehicleData.MojioId = result._id;
            return $scope.AddVehicle($scope.AddVehicleData.MojioId);
          }, function(result) {
            return console.log(result);
          });
        }
        return;
      }
      vcode = Math.round(Math.random() * 1000000);
      vdata = {
        "Type": "Vehicle",
        "MojioId": MojioId,
        "Name": $scope.AddVehicleData.Name || "No Name",
        "VIN": vcode
      };
      return mojioRemote.POST("Vehicles", vdata, function(result) {
        return $scope.prepareData();
      }, function(result) {
        return console.log(result);
      });
    };
  }
]);

App.controller('eventDetailController', [
  '$scope', '$rootScope', '$stateParams', function($scope, $rootScope, $stateParams) {
    console.log($rootScope.eventRow);
    $scope.Event = $rootScope.eventRow;
  }
]);

App.controller('eventSimulatorController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', 'simulatorFactory', function($scope, $rootScope, $stateParams, mojioRemote, mojioLocal, mojioGlobal, toaster, $filter, simulatorFactory) {
    $scope.Vehicles = null;
    mojioRemote.GET("Users/" + mojioGlobal.data.user_data.id + "/Vehicles", 20, null, null, null, function(result) {
      $scope.Vehicles = result.Data;
      simulatorFactory.FixVehicleName($scope.Vehicles);
      $scope.Data.Vehicle = "0";
      return $scope.Data.EventType = "TripStatus";
    });
    $scope.SimulationMode = "Stop";
    $scope.Data = {
      EventType: "",
      Vehicle: ""
    };
    $scope.showEventField = function(key) {
      if (key[0] === '_' || key === "Location" || key === "EventType") {
        return false;
      }
      if (key === "TripId" || key === "VehicleId" || key === "Type" || key === "MojioId") {
        return false;
      }
      if (key === "OwnerId") {
        return false;
      }
      return true;
    };
    $scope.ChangeViewStatus = function(ev) {
      if (ev._viewStatus === 'c') {
        ev._viewStatus = 'e';
      } else {
        ev._viewStatus = 'c';
      }
    };
    $scope.Events = [];
    $scope.EventTypes = [
      {
        value: "MojioOn",
        text: 'Mojio On'
      }, {
        value: "MojioOff",
        text: 'Mojio Off'
      }, {
        value: "MojioIdle",
        text: 'Mojio Idle'
      }, {
        value: "MojioWake",
        text: 'Mojio Wake'
      }, {
        value: "ConnectionLost",
        text: 'Connection Lost'
      }, {
        value: "LowBattery",
        text: 'Low Battery'
      }, {
        value: "OffStatus",
        text: 'Off Status'
      }, {
        value: "IgnitionOn",
        text: 'Ignition On'
      }, {
        value: "IgnitionOff",
        text: 'Ignition Off'
      }, {
        value: "TripStatus",
        text: 'Trip Status'
      }, {
        value: "FenceEntered",
        text: 'Fence Entered'
      }, {
        value: "FenceExited",
        text: 'Fence Exited'
      }, {
        value: "MovementStart",
        text: 'Movement Start'
      }, {
        value: "MovementStop",
        text: 'Movement Stop'
      }, {
        value: "Park",
        text: 'Park'
      }, {
        value: "Speed",
        text: 'Excessive Speed'
      }, {
        value: "Accident",
        text: 'Accident'
      }, {
        value: "HardBrake",
        text: 'Hard Brake'
      }, {
        value: "HardRight",
        text: 'Hard Right'
      }, {
        value: "HardLeft",
        text: 'Hard Left'
      }, {
        value: "HardAcceleration",
        text: 'Hard Acceleration'
      }, {
        value: "Accelerometer",
        text: 'Accelerometer'
      }, {
        value: "Deceleration",
        text: 'Deceleration'
      }, {
        value: "HeadingChange",
        text: 'HeadingChange'
      }, {
        value: "Mileage",
        text: 'Mileage'
      }, {
        value: "MILWarning",
        text: 'MIL Warning'
      }, {
        value: "TowStart",
        text: 'Tow Start'
      }, {
        value: "TowStop",
        text: 'Tow Stop'
      }, {
        value: "Diagnostic",
        text: 'Diagnostic'
      }
    ];
    $scope.EventTemplate = {
      Force: "",
      FuelEfficiency: "",
      FuelLevel: "",
      Heading: "",
      Location: {
        Lat: "",
        Lng: ""
      },
      Odometer: "",
      RPM: "",
      Speed: "",
      Voltage: "",
      _viewStatus: 'c'
    };
    $scope.SendEvent = function() {
      var sEvent, vehicle;
      vehicle = $scope.Vehicles[$scope.Data.Vehicle];
      sEvent = angular.copy($scope.EventTemplate);
      sEvent.Time = new Date();
      sEvent.VehicleId = vehicle._id;
      if (sEvent.Location.Lat === "") {
        sEvent.Location.Lat = vehicle.LastLocation.Lat;
        sEvent.Location.Lng = vehicle.LastLocation.Lng;
      }
      sEvent.EventType = $scope.Data.EventType;
      sEvent.Type = "Event";
      mojioRemote.POST("events", sEvent, function() {
        return toaster.success({
          title: "Event",
          body: "Event Sent Successfully"
        });
      }, function() {
        return toaster.error({
          title: "Event",
          body: "Error in Sending Event"
        });
      });
    };
    $scope.AddToList = function() {
      var sEvent, vehicle;
      vehicle = $scope.Vehicles[$scope.Data.Vehicle];
      sEvent = angular.copy($scope.EventTemplate);
      if (sEvent.Location.Lat === "") {
        sEvent.Location.Lat = vehicle.LastLocation.Lat;
        sEvent.Location.Lng = vehicle.LastLocation.Lng;
      }
      sEvent.EventType = $scope.Data.EventType;
      $scope.Events.push(sEvent);
    };
  }
]);

App.controller('exportEventsController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', function($scope, $rootScope, $stateParams, mojioRemote, mojioLocal, mojioGlobal, toaster, $filter) {
    $scope.row = $rootScope["tripRow"];
    $scope.settings = {
      margin: 5
    };
    return $scope.importData = function() {
      var end, endString, start, startString, vehicleId;
      start = new Date((new Date($scope.row.StartTime)) - 1000 * $scope.settings.margin);
      end = new Date((new Date($scope.row.EndTime)) + 1000 * $scope.settings.margin);
      startString = start.getUTCFullYear() + "." + (start.getUTCMonth() + 1) + "." + start.getUTCDate() + "." + start.getUTCHours() + ":" + start.getUTCMinutes() + ":" + start.getUTCSeconds();
      endString = end.getUTCFullYear() + "." + (end.getUTCMonth() + 1) + "." + end.getUTCDate() + "." + end.getUTCHours() + ":" + end.getUTCMinutes() + ":" + end.getUTCSeconds();
      vehicleId = $scope.row.VehicleId;
      mojioRemote.GET('Events', 100000, null, "VehicleId = " + vehicleId + ";Time=" + startString + "-" + endString, null, function(result) {
        var data;
        data = new Blob([JSON.stringify(result.Data)], {
          type: 'application/json'
        });
        return saveAs(data, "TripEvents.json");
      }, function(result) {}, console.log("Error"));
      return;
    };
  }
]);

App.controller('firmwareDetailController', [
  '$scope', '$rootScope', '$stateParams', function($scope, $rootScope, $stateParams) {
    $scope.firmwareRow = $rootScope.firmwareRow;
    $scope.deploy = function() {
      alert("deploy");
    };
    $scope.modify = function() {
      alert("modify");
    };
  }
]);

App.controller('fleetDashboardController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', function($scope, $rootScope, $stateParams, mojioRemote, mojioLocal, mojioGlobal, toaster, $filter) {
    var myOptions;
    myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(43.907787, -79.359741),
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      },
      navigationControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    $scope.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    $scope.Mojios = null;
    $scope.Vehicles = null;
    mojioRemote.GET("Users/" + mojioGlobal.data.user_data.id + "/Mojios", 200, null, null, null, function(result) {
      $scope.Mojios = result.Data;
      return $scope.GetVehicles();
    });
    $scope.GetVehicles = function() {
      var GetDiagnostics, ShowAllOnMap;
      mojioRemote.GET("Users/" + mojioGlobal.data.user_data.id + "/Vehicles", 200, null, null, null, function(result) {
        var MojioName, i, len, ref, row;
        $scope.Vehicles = result.Data;
        MojioName = function(MojioId) {
          var i, len, ref, row;
          ref = $scope.Mojios;
          for (i = 0, len = ref.length; i < len; i++) {
            row = ref[i];
            if (row._id === MojioId) {
              if (row.Name === null) {
                return row._id;
              } else {
                return row.Name;
              }
            }
          }
          return "-------";
        };
        ref = $scope.Vehicles;
        for (i = 0, len = ref.length; i < len; i++) {
          row = ref[i];
          row.MojioName = MojioName(row.MojioId);
          if (row.FaultsDetected) {
            GetDiagnostics(row);
          }
        }
        return ShowAllOnMap();
      });
      GetDiagnostics = function(row) {
        mojioRemote.GET("Vehicles/" + row._id + "/Diagnostics", 200, null, null, null, function(result) {
          return row.Diagnostics = result.Data;
        });
      };
      ShowAllOnMap = function() {
        var LatLng, i, len, ref, row;
        ref = $scope.Vehicles;
        for (i = 0, len = ref.length; i < len; i++) {
          row = ref[i];
          if (row.LastLocation === null) {
            continue;
          }
          if (row.Marker) {
            row.Marker.setMap(null);
            row.Marker = null;
          }
          LatLng = new google.maps.LatLng(row.LastLocation.Lat, row.LastLocation.Lng);
          row.Marker = $scope.createMarker(LatLng, row.Name, row.Name, "D");
        }
      };
      return $scope.createMarker = function(latlng, name, html, status) {
        var contentString, icon, marker;
        contentString = html;
        icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + status + '|FF0000|000000';
        marker = new google.maps.Marker({
          position: latlng,
          animation: google.maps.Animation.DROP,
          icon: new google.maps.MarkerImage(icon),
          map: $scope.map
        });
        google.maps.event.trigger(marker, 'click');
        return marker;
      };
    };
  }
]);

App.controller('importDevicesController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', function($scope, $rootScope, $stateParams, mojioRemote, mojioLocal, mojioGlobal, toaster, $filter) {
    $scope.data = {
      Description: '',
      Name: '',
      deviceList: ''
    };
    $scope.importData = function() {
      var data;
      data = {
        Description: $scope.data,
        Name: $scope.data.Name,
        RequestData: $scope.data.deviceList.split('\r'),
        Type: 'Operation'
      };
      return mojioRemote.POST("mojios/mojioinventory", data, function(result) {
        return toaster.success({
          title: "Import Device",
          body: "Import Device Successfully"
        });
      }, function() {
        return toaster.error({
          title: "Import Device",
          body: "Error Importing Device"
        });
      });
    };
  }
]);

App.controller('importSimsController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', function($scope, $rootScope, $stateParams, mojioRemote, mojioLocal, mojioGlobal, toaster, $filter) {
    $scope.data = {
      Description: '',
      Name: ''
    };
    $scope.importData = function() {
      var action, fileInput, formdata, i, xhr;
      action = mojioGlobal.apiUrl() + '/SimCards/InventoryAsync?desc=' + $scope.data.Description + '&name=' + $scope.data.Name;
      formdata = new FormData;
      fileInput = document.getElementById('csvFile');
      i = 0;
      while (i < fileInput.files.length) {
        formdata.append('csvFile', fileInput.files[0], fileInput.files[0].name);
        i++;
      }
      xhr = new XMLHttpRequest;
      xhr.open('POST', action);
      xhr.send(formdata);
      return xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 202) {
            toaster.success({
              title: "Import SIMs",
              body: "Import SIMs Successfully"
            });
          } else {
            toaster.error({
              title: "Import SIMs",
              body: "Error Importing SIMs"
            });
          }
        }
      };
    };
  }
]);

App.controller('manageAppsController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', function($scope, $rootScope, $stateParams, mojioRemote, mojioLocal, mojioGlobal, toaster, $filter) {
    $scope.fieldDesc = [
      {
        FieldName: 'Name',
        FieldTitle: 'Application Name'
      }, {
        FieldName: 'Description',
        FieldTitle: 'Application Description'
      }, {
        FieldName: 'RedirectUris',
        FieldTitle: 'RedirectUris'
      }
    ];
    $scope.NewApp = {
      Type: "App",
      Name: "",
      Description: "",
      ApplicationType: "Web",
      CreationDate: "",
      Downloads: 0,
      RedirectUris: [""],
      _deleted: false,
      _id: ""
    };
    $scope.Data = {};
    $scope.deleteMojio = function(row) {
      alert(1);
      $scope.$$childHead.newSearch(0);
    };
    $scope.editMojio = function(row) {
      alert($scope.Data.NewData);
    };
    $scope.CreateApp = function() {
      var data;
      data = {};
      return mojioRemote.POST("Apps/", $scope.NewApp, function(result) {
        toaster.success({
          title: "Create Application",
          body: "Create Application Successfully"
        });
        return $scope.$$childHead.newSearch(0);
      }, function() {
        return toaster.error({
          title: "Create Application",
          body: "Create Application was unsuccessful"
        });
      });
    };
    return $scope.showAppIDE = function(row) {
      $state.go("dev.appide", {
        id: row._id
      });
    };
  }
]);

App.controller('manageDeviceController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', '$http', 'myMojioFactory', function($scope, $rootScope, $stateParams, mojioRemote, mojioLocal, mojioGlobal, toaster, $filter, $http, myMojioFactory) {
    var showImage;
    $scope.showClaim = false;
    $scope.ShowAddNewDevice = function() {
      $scope.showClaim = true;
    };
    $scope.FileContent = null;
    $scope.File = null;
    $scope.$watch('FileContent', function(newValue, oldValue) {
      var base64;
      if (newValue === null) {
        return;
      }
      base64 = '"' + $scope.FileContent.split(',')[1] + '"';
      mojioRemote.POST("Users/" + mojioGlobal.data.user_data.id + "/Image", base64, function() {
        toaster.success({
          title: $filter('translate')('mymojio_account.uploadImage.success.title'),
          body: $filter('translate')('mymojio_account.uploadImage.success.body')
        });
        showImage();
        return mojioGlobal.getUserPic();
      }, function() {
        return toaster.error({
          title: $filter('translate')('mymojio_account.uploadImage.error.title'),
          body: $filter('translate')('mymojio_account.uploadImage.error.body')
        });
      });
    });
    $scope.Data = {
      IMEI: ""
    };
    showImage = function() {
      $scope.UserPicExist = false;
      return mojioRemote.GETBlob("Users/" + mojioGlobal.data.user_data.id + "/Image?size=200", null, null, null, null, function(blob) {
        var img;
        img = document.getElementById('UserPic');
        img.onload = function(e) {
          return window.URL.revokeObjectURL(img.src);
        };
        img.src = window.URL.createObjectURL(blob);
        return $scope.UserPicExist = true;
      });
    };
    showImage();
    $scope.me = {};
    $scope.pwd = {
      Current: '',
      NewPassword: ''
    };
    mojioRemote.GET("Users/Me", null, null, null, null, function(result) {
      return $scope.me = result;
    });
    $scope.SaveUserInfo = function(isValid) {
      var data;
      if (!isValid) {
        toaster.error({
          title: $filter('translate')('mymojio_account.SaveUserInformation.error.title'),
          body: $filter('translate')('mymojio_account.SaveUserInformation.error.invalidBody')
        });
      }
      data = {
        Type: "User",
        _id: $scope.me._id,
        UserName: $scope.me.UserName,
        FirstName: $scope.me.FirstName,
        LastName: $scope.me.LastName,
        Email: $scope.me.Email
      };
      mojioRemote.PUT("Users/" + $scope.me._id, data, function(result) {
        toaster.success({
          title: $filter('translate')('mymojio_account.SaveUserInformation.success.title'),
          body: $filter('translate')('mymojio_account.SaveUserInformation.success.body')
        });
        return $rootScope.user.name = $scope.me.UserName;
      }, function(result) {
        return toaster.error({
          title: $filter('translate')('mymojio_account.SaveUserInformation.error.title'),
          body: $filter('translate')('mymojio_account.SaveUserInformation.error.body') + " - " + result
        });
      });
    };
    $scope.changePassword = function(isValid) {
      var data;
      if (!isValid) {
        return;
      }
      data = {
        OldPassword: $scope.pwd.Current,
        NewPassword: $scope.pwd.NewPassword
      };
      mojioRemote.PUT("Users/" + $scope.me._id + "/Password", data, function(result) {
        return toaster.success({
          title: $filter('translate')('mymojio_account.ChangePassword.success.title'),
          body: $filter('translate')('mymojio_account.ChangePassword.success.body')
        });
      }, function() {
        return toaster.error({
          title: $filter('translate')('mymojio_account.ChangePassword.error.title'),
          body: $filter('translate')('mymojio_account.ChangePassword.error.body')
        });
      });
    };
    $scope.ClaimOnProcess = false;
    $scope.claim = function(refreshCallback) {
      if ($scope.ClaimOnProcess) {
        return;
      }
      $scope.ClaimOnProcess = true;
      mojioRemote.PUT("Mojios/" + $scope.Data.IMEI + "/User", {}, function(result) {
        toaster.success({
          title: $filter('translate')('mymojio_account.ClaimDevice.success.title'),
          body: $filter('translate')('mymojio_account.ClaimDevice.success.body')
        });
        refreshCallback(0);
        $scope.showClaim = false;
        return $scope.ClaimOnProcess = false;
      }, function() {
        $scope.ClaimOnProcess = false;
        return toaster.error({
          title: $filter('translate')('mymojio_account.ClaimDevice.error.title'),
          body: $filter('translate')('mymojio_account.ClaimDevice.error.body')
        });
      });
    };
    $scope.updateDevice = function(row) {
      mojioRemote.PUT("Mojios/" + row._id, row, function(result) {
        return toaster.success({
          title: $filter('translate')('mymojio_account.RenameDevice.success.title'),
          body: $filter('translate')('mymojio_account.RenameDevice.success.body')
        });
      }, function() {
        return toaster.error({
          title: $filter('translate')('mymojio_account.RenameDevice.error.title'),
          body: $filter('translate')('mymojio_account.RenameDevice.error.body')
        });
      });
    };
    $scope.updateVehicle = function(row) {
      mojioRemote.PUT("Vehicles/" + row._id, row, function(result) {
        toaster.success({
          title: $filter('translate')('mymojio_account.UpdateVehicle.success.title'),
          body: $filter('translate')('mymojio_account.UpdateVehicle.success.body')
        });
        return myMojioFactory.forcePrepareData(function() {
          var i, len, ref, results, v;
          console.table(myMojioFactory.Content.Vehicles);
          ref = myMojioFactory.Content.Vehicles;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            v = ref[i];
            results.push(console.log(v.Name));
          }
          return results;
        });
      }, function() {
        return toaster.error({
          title: $filter('translate')('mymojio_account.UpdateVehicle.error.title'),
          body: $filter('translate')('mymojio_account.UpdateVehicle.error.body')
        });
      });
    };
    $scope.CarStatus = function(v) {
      var d, t;
      if (typeof v === "undefined" || v === null || v.LastContactTime === null) {
        return $filter('translate')('common.CarStatus.Unknown');
      }
      t = new Date(v.LastContactTime);
      d = ((new Date()) - t) / (1000 * 60 * 60 * 24);
      if (d > 1) {
        return $filter('translate')('common.CarStatus.Unknown');
      }
      if (v.IgnitionOn) {
        return $filter('translate')('common.CarStatus.Driving');
      }
      return $filter('translate')('common.CarStatus.Parked');
    };
    $scope.SelectedVehicle = 0;
    $scope.selectVehicle = function(row) {
      if (typeof row.selected === 'undefined' || row.selected === false) {
        if ($scope.SelectedVehicle === 2) {
          return;
        }
        row.selected = true;
        $scope.SelectedVehicle++;
      } else {
        row.selected = false;
        $scope.SelectedVehicle--;
      }
    };
    $scope.MergeVehicles = function(data, refreshCallback) {
      var httpOptions, i, id1, id2, len, v, v1;
      id1 = null;
      id2 = null;
      v1 = null;
      for (i = 0, len = data.length; i < len; i++) {
        v = data[i];
        if (v.selected) {
          if (id1 === null) {
            id1 = v._id;
            v1 = v;
          } else {
            if (v1.LastContactTime < v.LastContactTime) {
              id2 = id1;
              id1 = v._id;
            } else {
              id2 = v._id;
            }
            break;
          }
        }
      }
      httpOptions = {
        method: 'DELETE',
        url: mojioGlobal.apiUrl().replace('v1/', 'v2/') + 'vehicles/' + id1 + '?actual=' + id2,
        headers: mojioGlobal.CreateHeaders().headers
      };
      $http(httpOptions).success(function(response) {
        refreshCallback(0);
        $scope.SelectedVehicle = 0;
        return toaster.success({
          title: $filter('translate')('mymojio_account.MergeVehicle.success.title'),
          body: $filter('translate')('mymojio_account.MergeVehicle.success.body')
        });
      }).error(function(response) {
        return toaster.error({
          title: $filter('translate')('mymojio_account.MergeVehicle.error.title'),
          body: $filter('translate')('mymojio_account.MergeVehicle.error.body')
        });
      });
    };
    $scope.PrintInConsole = function(data) {
      return console.log(data);
    };
  }
]);

App.controller('multiSimulatorController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', 'simulatorFactory', function($scope, $rootScope, $stateParams, mojioRemote, mojioLocal, mojioGlobal, toaster, $filter, simulatorFactory) {
    var SimulationNextStep, SimulationPrepareNextStep, StartSimulator, myOptions;
    $scope.AddVehicleData = {
      VehicleId: null,
      TripRow: null
    };
    $scope.FileContent = null;
    $scope.$watch('FileContent', function(newValue, oldValue) {
      var i, len, ref, results, row;
      if (newValue === null) {
        return;
      }
      while ($scope.SimulationData.Data.length !== 0) {
        $scope.RemoveVehicle(0);
      }
      $scope.SimulationData = angular.copy(newValue);
      ref = $scope.SimulationData.Data;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        row = ref[i];
        results.push($scope.ShowRoute(row));
      }
      return results;
    });
    $scope.SaveSimulator = function() {
      var data;
      console.log($scope.SimulationData);
      data = new Blob([JSON.stringify($scope.SimulationData)], {
        type: 'application/json'
      });
      saveAs(data, "MultiVehicleSimulator.txt");
    };
    $scope.ChangeContinuesDriving = function() {
      $scope.SimulationData.ContinuesDriving = !$scope.SimulationData.ContinuesDriving;
    };
    $scope.ChangeParallelDriving = function() {
      $scope.SimulationData.ParallelDriving = !$scope.SimulationData.ParallelDriving;
    };
    $scope.Vehicles = null;
    mojioRemote.GET("Users/" + mojioGlobal.data.user_data.id + "/Vehicles", 20, null, null, null, function(result) {
      $scope.Vehicles = result.Data;
      simulatorFactory.FixVehicleName($scope.Vehicles);
      return $scope.SelectedVehicle = $scope.Vehicles[0]._id;
    });
    $scope.SavedSimulatorTrip = [];
    if (typeof localStorage["SavedSimulatorTrip"] !== "undefined") {
      $scope.SavedSimulatorTrip = JSON.parse(localStorage["SavedSimulatorTrip"]);
    }
    if ($scope.SavedSimulatorTrip.length === 0) {
      alert("You Need to save Simulated Trip in Simulator first");
    }
    $scope.SimulationData = {
      ParallelDriving: true,
      ContinuesDriving: false,
      Data: []
    };
    $scope.SimulationMode = {
      ShowStop: false,
      ShowPause: false,
      ShowPlay: true
    };
    $scope.SimulationPlay = function(row) {
      var ThisVehicleInOtherTrip, apos, arow, fast, i, ipos, j, len, len1, ref, ref1, sdata;
      ref = $scope.SimulationData.Data;
      for (ipos = i = 0, len = ref.length; i < len; ipos = ++i) {
        sdata = ref[ipos];
        if (sdata.SimulationMode === "Play" || (typeof row !== "undefined" && ipos !== row)) {
          continue;
        }
        ThisVehicleInOtherTrip = false;
        ref1 = $scope.SimulationData.Data;
        for (apos = j = 0, len1 = ref1.length; j < len1; apos = ++j) {
          arow = ref1[apos];
          if (arow.VehicleId === sdata.VehicleId && arow.SimulationMode !== "Stop" && apos !== ipos) {
            ThisVehicleInOtherTrip = true;
            break;
          }
        }
        if (ThisVehicleInOtherTrip) {
          toaster.error({
            title: "Error",
            body: "You can play new trip for this vehicle while vehicle is in another trip"
          });
          return;
        }
        fast = false;
        if (sdata.SimulationMode === "Pause") {
          fast = true;
        }
        sdata.SimulationMode = "Play";
        StartSimulator(ipos, fast);
        if (!$scope.SimulationData.ParallelDriving) {
          break;
        }
      }
      $scope.SimulationGlobalMode();
    };
    StartSimulator = function(pos, fast) {
      var delay;
      delay = $scope.SimulationData.Data[pos].WaitBefore;
      if (fast) {
        delay = 0;
      }
      window.setTimeout((function() {
        return SimulationNextStep(pos);
      }), delay);
    };
    SimulationPrepareNextStep = function(pos) {
      var NetworkDelay, delay, row;
      row = $scope.SimulationData.Data[pos];
      if (row.SimulationMode !== "Play") {
        return;
      }
      row.SimulationStep++;
      if (row.SimulationStep >= row.Trip.Events.length) {
        $scope.SimulationStop(pos, false);
      }
      if (row.SimulationMode === "Play") {
        NetworkDelay = 300;
        delay = row.Trip.Duration * 60000 / row.Trip.Events.length - NetworkDelay;
        if (delay < 1) {
          delay = 1;
        }
        window.setTimeout((function() {
          return SimulationNextStep(pos);
        }), delay);
      }
    };
    SimulationNextStep = function(pos) {
      var cEvent, row, sEvent;
      row = $scope.SimulationData.Data[pos];
      cEvent = row.Trip.Events[row.SimulationStep];
      cEvent.Time = new Date();
      sEvent = angular.copy(cEvent);
      delete sEvent._viewStatus;
      sEvent.VehicleId = row.VehicleId;
      if (typeof sEvent.Codes !== "undefined") {
        sEvent.Codes = sEvent.Codes.split(',');
      }
      mojioRemote.POST("events", sEvent, function() {
        var LatLng;
        if (row.Marker) {
          row.Marker.setMap(null);
          row.Marker = null;
        }
        LatLng = new google.maps.LatLng(sEvent.Location.Lat, sEvent.Location.Lng);
        row.Marker = $scope.createMarker(LatLng, "Current Point", "Current Point", "blue");
        return SimulationPrepareNextStep(pos);
      }, function() {
        return SimulationPrepareNextStep(pos);
      });
    };
    $scope.SimulationStop = function(row, byUser) {
      var NextRow, NoOfTrip, StopOne, ipos;
      StopOne = function(rid) {
        var StopProc;
        StopProc = function(RowPos) {
          $scope.SimulationData.Data[RowPos].SimulationMode = "Stop";
          $scope.SimulationData.Data[RowPos].SimulationStep = 0;
        };
        if (!$scope.$$phase) {
          return $scope.$apply(function() {
            return StopProc(rid);
          });
        } else {
          return StopProc(rid);
        }
      };
      NoOfTrip = $scope.SimulationData.Data.length;
      if (typeof row === "undefined") {
        ipos = 0;
        while (ipos < NoOfTrip) {
          StopOne(ipos);
          ipos++;
        }
      } else {
        if ($scope.SimulationData.ParallelDriving) {
          if ($scope.SimulationData.ContinuesDriving) {
            row.SimulationStep = 0;
          } else {
            StopOne(row);
          }
        } else {
          StopOne(row);
          if (!byUser) {
            NextRow = row + 1;
            if ((NextRow >= NoOfTrip && $scope.SimulationData.ContinuesDriving) || NextRow < NoOfTrip) {
              if (NextRow >= NoOfTrip) {
                NextRow = 0;
              }
              if ($scope.SimulationData.Data[NextRow].SimulationMode !== "Play") {
                $scope.SimulationData.Data[NextRow].SimulationMode = "Play";
                $scope.SimulationData.Data[NextRow].SimulationStep = 0;
                StartSimulator(NextRow, false);
              }
            }
          }
        }
      }
      $scope.SimulationGlobalMode();
    };
    $scope.SimulationPause = function(row) {
      var ipos;
      if (typeof row === "undefined") {
        ipos = 0;
        while (ipos < $scope.SimulationData.Data.length) {
          $scope.SimulationData.Data[ipos].SimulationMode = "Pause";
          ipos++;
        }
      } else {
        $scope.SimulationData.Data[row].SimulationMode = "Pause";
      }
      $scope.SimulationGlobalMode();
    };
    $scope.SimulationGlobalMode = function() {
      var ApplySimMode, NoOfPause, NoOfPlay, NoOfStop, SimMide, Total, ipos;
      NoOfPlay = 0;
      NoOfPause = 0;
      NoOfStop = 0;
      Total = $scope.SimulationData.Data.length;
      ipos = 0;
      while (ipos < Total) {
        if ($scope.SimulationData.Data[ipos].SimulationMode === "Play") {
          NoOfPlay++;
        } else if ($scope.SimulationData.Data[ipos].SimulationMode === "Pause") {
          NoOfPause++;
        } else {
          NoOfStop++;
        }
        ipos++;
      }
      SimMide = $scope.SimulationMode;
      ApplySimMode = function() {
        if (NoOfPlay > 0) {
          SimMide.ShowStop = true;
          SimMide.ShowPause = true;
        }
        if (NoOfPause > 0) {
          SimMide.ShowPlay = true;
          SimMide.ShowStop = true;
        }
        if (NoOfStop > 0) {
          SimMide.ShowPlay = true;
        }
        if (NoOfPlay === Total) {
          SimMide.ShowPlay = false;
        }
        if (NoOfPause === Total) {
          SimMide.ShowPause = false;
        }
        if (NoOfStop === Total) {
          SimMide.ShowStop = false;
          SimMide.ShowPause = false;
        }
      };
      if (!$scope.$$phase) {
        $scope.$apply(function() {
          return ApplySimMode();
        });
      } else {
        ApplySimMode();
      }
    };
    $scope.AddVehicle = function() {
      var row;
      row = {
        VehicleId: $scope.AddVehicleData.VehicleId,
        VehicleName: $filter('filter')($scope.Vehicles, {
          _id: $scope.AddVehicleData.VehicleId
        })[0].Name,
        Trip: angular.copy($scope.SavedSimulatorTrip[$scope.AddVehicleData.TripRow]),
        Marker: null,
        SimulationMode: "Stop",
        SimulationStep: 0,
        WaitBefore: 0
      };
      $scope.SimulationData.Data.push(angular.copy(row));
      $scope.ShowRoute(row);
    };
    $scope.AddVehicleAuto = function() {
      var cvrow, ipos, row;
      while ($scope.SimulationData.Data.length !== 0) {
        $scope.RemoveVehicle(0);
      }
      ipos = 0;
      while (ipos < $scope.Vehicles.length) {
        cvrow = $scope.Vehicles[ipos];
        row = {
          VehicleId: cvrow._id,
          VehicleName: cvrow.Name,
          Trip: angular.copy($scope.SavedSimulatorTrip[ipos % $scope.SavedSimulatorTrip.length]),
          Marker: null,
          SimulationMode: "Stop",
          SimulationStep: 0,
          WaitBefore: 0
        };
        $scope.SimulationData.Data.push(angular.copy(row));
        $scope.ShowRoute(row);
        ipos++;
      }
    };
    $scope.RemoveVehicle = function(row) {
      $scope.RemoveRoute($scope.SimulationData.Data[row]);
      $scope.SimulationData.Data.splice(row, 1);
    };
    $scope.createMarker = function(latlng, name, html, color) {
      var contentString, marker;
      contentString = html;
      marker = new google.maps.Marker({
        position: latlng,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          strokeColor: color,
          scale: 3
        },
        draggable: true,
        map: $scope.map
      });
      google.maps.event.trigger(marker, 'click');
      return marker;
    };
    myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(43.907787, -79.359741),
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      },
      navigationControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    $scope.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    $scope.directionsService = new google.maps.DirectionsService();
    $scope.RemoveRoute = function(row) {
      row.directionsDisplay.setDirections({
        routes: []
      });
    };
    $scope.ShowRoute = function(row) {
      var ipos, request, waypts, wp;
      row.directionsDisplay = new google.maps.DirectionsRenderer();
      row.directionsDisplay.setMap($scope.map);
      waypts = [];
      ipos = 0;
      wp = row.Trip.Points.WayPoint;
      while (ipos < wp.length) {
        waypts.push({
          location: new google.maps.LatLng(wp[ipos][0], wp[ipos][1]),
          stopover: true
        });
        ipos++;
      }
      request = {
        origin: new google.maps.LatLng(row.Trip.Points.Start[0], row.Trip.Points.Start[1]),
        destination: new google.maps.LatLng(row.Trip.Points.End[0], row.Trip.Points.End[1]),
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING
      };
      $scope.directionsService.route(request, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          return row.directionsDisplay.setDirections(response);
        }
      });
    };
  }
]);

App.controller('mymojioSupportController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', function($scope, $rootScope, $stateParams, mojioRemote, mojioLocal, mojioGlobal, toaster, $filter) {
    $scope.SendEmail = function() {
      return window.location.href = "mailto:support@moj.io";
    };
  }
]);

App.controller('myMojioDashboardController', [
  '$modal', '$templateCache', '$sce', '$compile', '$rootScope', '$stateParams', '$scope', 'mojioRemote', 'localStorage', 'toaster', 'mojioGlobal', 'myMojioFactory', 'mojioGear', '$filter', '$injector', function($modal, $templateCache, $sce, $compile, $rootScope, $stateParams, $scope, mojioRemote, localStorage, toaster, mojioGlobal, myMojioFactory, mojioGear, $filter, $injector) {
    var preparePortal, tohash;
    $scope.AllData = myMojioFactory.Content;
    $scope.VehicleColor = myMojioFactory.VehicleColor;
    $scope.changeSelectedVehicle = myMojioFactory.changeSelectedVehicle;
    $scope.ShowPortal = false;
    $scope.DashboardStorage = "DashboardStorage";
    preparePortal = function() {
      var data;
      data = localStorage.get($scope.DashboardStorage);
      if (data !== null) {
        $scope.windows = data;
        $scope.ShowPortal = true;
        $scope.changeActiveWindow(0);
      } else {
        $scope.ShowPortal = true;
        $scope.AddDefaultGears();
        $scope.changeActiveWindow(0);
      }
      mojioRemote.GET("Users/" + mojioGlobal.data.user_data.id + "/Store/" + tohash(window.location.href), null, null, null, null, function(result) {
        var rawdata;
        rawdata = JSON.parse(result);
        if (rawdata.length === 4) {
          $scope.windows = JSON.parse(result);
        }
        $scope.ShowPortal = true;
        return $scope.changeActiveWindow(0);
      }, function(result) {
        $scope.ShowPortal = true;
        $scope.AddDefaultGears();
        return $scope.changeActiveWindow(0);
      });
    };
    $scope.GearList = mojioGear.GearList;
    $scope.AllGearList = mojioGear.HiddenList;
    $scope.help = mojioGear.help;
    $scope.claim = mojioGear.claim;
    tohash = function(s) {
      return s.split('').reduce((function(a, b) {
        a = (a << 5) - a + b.charCodeAt(0);
        return a & a;
      }), 0);
    };
    $scope.windows = [[], [], [], []];
    $scope.changeActiveWindow = function(aw) {
      if (typeof aw !== "undefined") {
        $scope.activeWindow = 0;
      } else {
        $scope.activeWindow = ($scope.activeWindow + 1) % 4;
      }
      $scope.portal = $scope.windows[$scope.activeWindow];
    };
    $scope.showAddPortletWindow = function(e) {
      var List;
      if (e.altKey) {
        List = "AllGearList";
      } else {
        List = "GearList";
      }
      $templateCache.put('portalAddPortletTemplate.html', '<div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true" ng-click="cancel()">&times;</button> <h4 class="header-title">' + $filter('translate')('mymojio_dashboard.AddWidgetTitle') + '</h4> <button class="mojiobtn" ng-click="AddDefaultGears();cancel()">' + $filter('translate')('mymojio_dashboard.ResetDefaultWidgetSettings') + '</button> </div> <div class="modal-body bg-gray-lighter"> <div class="panel card" ng-repeat="AppCat in ' + List + '"> <div class="col-md-12 bb"> <h4 class="m0 text-center widget-title pt-lg pb-lg"> <i class="fa {{AppCat.icon}} fa-2x"></i><br> {{AppCat.category}} <div class="app-desc"> {{AppCat.desc}} </div> </h4> </div> <div class="row m-sm"> <div ng-repeat="gear in AppCat.gears" class="col-xs-3 m-sm bb br bl bt gearbox " ng-attr-style="background-color:{{gear.SelBGColor}}" ng-click="addPortlet(gear)"> <div class=" text-center faa-parent animated-hover"> <div class="text-center faa-tada"> <i class="fa {{gear.Icon}} fa-2x"></i> </div> <div class=" text-center pt-sm"> {{gear.Title}} </div> </div> </div> </div> </div> </div>');
      $scope.modalInstance = $modal.open({
        size: 'lg',
        templateUrl: 'portalAddPortletTemplate.html',
        scope: $scope,
        controller: ["$scope", function($scope) {}]
      });
    };
    $scope.cancel = function() {
      return $scope.modalInstance.dismiss('cancel');
    };
    $scope.addPortlet = function(portlet, hideMsg) {
      var cp;
      cp = angular.copy(portlet);
      cp.$$hashKey = parseInt(Math.random() * 1000000000);
      $scope.portal.push(cp);
      $scope.savePortalState();
      if (typeof hideMsg === "undefined" || hideMsg !== true) {
        toaster.success({
          title: $filter('translate')('mymojio_dashboard.AddWidget.success.title'),
          body: $filter('translate')('mymojio_dashboard.AddWidget.success.body')
        });
      }
    };
    $scope.removeWidget = function(v) {
      $scope.portal.splice(v, 1);
      $scope.savePortalState();
    };
    $scope.portletCol = function(p) {
      var md, sm;
      if (typeof p === "undefined") {
        return;
      }
      md = p.Size[0];
      sm = 12;
      if (md >= 6) {
        sm = 12;
      } else {
        sm = 6;
      }
      return "col-sm-" + sm + " col-md-" + md + " col-xs-12";
    };
    $scope.portletStyle = function(p) {
      var height, style;
      if (typeof p === "undefined") {
        return;
      }
      height = p.Size[1] * 105;
      style = "margin:0px;padding:0px;border:0px;" + "height: " + height + "px;" + "background-color:" + p.BGColor + ";" + "color:" + p.Color + ";";
      return style;
    };
    $scope.validDirective = function(widget) {
      if (widget.Portlet === "gear-gauge-last-diagnostics") {
        return false;
      }
      return true;
    };
    $scope.portletDirective = function(widget, pid) {
      var el;
      el = $sce.trustAsHtml("'<div " + widget.Portlet + " data=\"v.Data\" portlet=\"" + pid + "\"></div>'");
      return el;
    };
    $scope.CarStatus = function(v) {
      var d, t;
      if (typeof v === "undefined" || v === null || v.LastContactTime === null) {
        return $filter('translate')('common.CarStatus.Unknown');
      }
      t = new Date(v.LastContactTime);
      d = ((new Date()) - t) / (1000 * 60 * 60 * 24);
      if (d > 1) {
        return $filter('translate')('common.CarStatus.Unknown');
      }
      if (v.IgnitionOn) {
        return $filter('translate')('common.CarStatus.Driving');
      }
      return $filter('translate')('common.CarStatus.Parked');
    };
    $scope.AddDefaultGears = function() {
      $scope.windows = [[], [], [], []];
      $scope.changeActiveWindow(0);
      $scope.addPortlet($scope.GearList[1].gears[0], true);
      $scope.addPortlet($scope.GearList[1].gears[2], true);
      $scope.addPortlet($scope.GearList[0].gears[0], true);
      $scope.addPortlet($scope.GearList[0].gears[1], true);
      $scope.addPortlet($scope.GearList[1].gears[1], true);

      /*      $scope.portal[$scope.portal.length-1].Data={range:1,ChartTypes:0}
            $scope.portal[$scope.portal.length-1].Size=[6,3]
      
            $scope.addPortlet($scope.GearList[1].gears[1],true)
            $scope.portal[$scope.portal.length-1].Data={range:1,ChartTypes:1}
            $scope.portal[$scope.portal.length-1].Size=[6,3]
      
            $scope.addPortlet($scope.GearList[1].gears[1],true)
            $scope.portal[$scope.portal.length-1].Data={range:1,ChartTypes:2}
            $scope.portal[$scope.portal.length-1].Size=[6,3]
      
            $scope.addPortlet($scope.GearList[1].gears[1],true)
            $scope.portal[$scope.portal.length-1].Data={range:1,ChartTypes:3}
            $scope.portal[$scope.portal.length-1].Size=[6,3]
      
            $scope.addPortlet($scope.GearList[1].gears[1],true)
            $scope.portal[$scope.portal.length-1].Data={range:1,ChartTypes:4}
            $scope.portal[$scope.portal.length-1].Size=[6,3]
      
            $scope.addPortlet($scope.GearList[1].gears[1],true)
            $scope.portal[$scope.portal.length-1].Data={range:1,ChartTypes:5}
            $scope.portal[$scope.portal.length-1].Size=[6,3]
       */
      $scope.addPortlet($scope.GearList[1].gears[3], true);
      $scope.addPortlet($scope.GearList[2].gears[0], true);
      $scope.addPortlet($scope.GearList[0].gears[2], true);
    };
    $scope.savePortalState = function() {
      localStorage.add($scope.DashboardStorage, $scope.windows);
      return mojioRemote.POST("Users/" + mojioGlobal.data.user_data.id + "/Store/" + tohash(window.location.href), '"' + JSON.stringify($scope.windows).replace(/"/g, '\\\"').replace(/(\\r\\n|\\n|\\r)/gm, " ") + '"', function(result) {}, function(result) {
        return console.log("save error");
      });
    };
    $scope.dropSuccess = function() {
      $scope.savePortalState();
    };
    return myMojioFactory.prepareData(preparePortal);
  }
]);

App.controller('myMojioTripsController', [
  '$modal', '$templateCache', '$sce', '$compile', '$rootScope', '$stateParams', '$scope', 'mojioRemote', 'localStorage', 'toaster', 'mojioGlobal', 'myMojioFactory', '$timeout', '$filter', 'googlemapFactory', function($modal, $templateCache, $sce, $compile, $rootScope, $stateParams, $scope, mojioRemote, localStorage, toaster, mojioGlobal, myMojioFactory, $timeout, $filter, googlemapFactory) {
    var CreateAddressString, LoadAllEvents, MakeTripsVisible, RemoveCurrentTrips, buildCriteria, createEvents, createMarker, drawHeatMap, fitMap, fitMapPromise, fitMapStart, getAllEventsPartially, getHeatMap, getTripEvents, getTrips, getTripsPartially, hideTripFromMap, myOptions, showTripOnMapStep1, showTripOnMapStep2;
    $scope.AllData = myMojioFactory.Content;
    $scope.AllSort = [
      {
        field: 'StartTime',
        title: 'mymojio_trip.sort.Date'
      }, {
        field: 'Distance',
        title: 'mymojio_trip.sort.Distance'
      }
    ];
    $scope.SortBy = $scope.AllSort[0];
    $scope.SortAsc = true;
    $scope.changeSortDirection = function() {
      $scope.SortAsc = !$scope.SortAsc;
    };
    $scope.changeSort = function(s) {
      $scope.SortBy = s;
    };
    $scope.AllRange = [
      {
        code: 7,
        title: "common.range.d7"
      }, {
        code: 14,
        title: "common.range.d14"
      }, {
        code: 30,
        title: "common.range.d30"
      }, {
        code: 90,
        title: "common.range.m3"
      }, {
        code: 365,
        title: "common.range.m12"
      }, {
        code: 36500,
        title: "common.range.all"
      }
    ];
    $scope.SelectedRange = $scope.AllRange[0];
    $scope.AllHeatMap = [
      {
        code: 0,
        title: "mymojio_trip.HeatMap.HeatMapOff"
      }, {
        code: 2,
        title: "mymojio_trip.HeatMap.ParksHeatMap"
      }
    ];
    $scope.SelectedHeatMap = $scope.AllHeatMap[0];
    $scope.changeHeatMap = function(r) {
      $scope.SelectedHeatMap = r;
      return getHeatMap();
    };
    drawHeatMap = function(heatmapData) {
      var bounds, gradient, j, len, ll;
      if ($scope.heatmap !== null) {
        $scope.heatmap.setMap(null);
      }
      $scope.heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData
      });
      bounds = new google.maps.LatLngBounds();
      for (j = 0, len = heatmapData.length; j < len; j++) {
        ll = heatmapData[j];
        bounds.extend(ll);
      }
      $scope.map.fitBounds(bounds);
      gradient = ['rgba(0, 255, 255, 0)', 'rgba(0, 255, 255, 1)', 'rgba(0, 191, 255, 1)', 'rgba(0, 0, 255, 1)', 'rgba(0, 63, 255, 1)', 'rgba(0, 0, 255, 1)', 'rgba(0, 0, 223, 1)', 'rgba(0, 0, 191, 1)', 'rgba(0, 0, 159, 1)', 'rgba(0, 0, 0, 1)', 'rgba(63, 0, 91, 1)', 'rgba(0, 0, 63, 1)', 'rgba(191, 0, 31, 1)', 'rgba(255, 0, 0, 1)'];
      $scope.heatmap.set('gradient', gradient);
      $scope.heatmap.setMap($scope.map);
    };
    getHeatMap = function() {
      var ev, heatmapData, j, k, len, len1, ref, ref1, t, te;
      if ($scope.SelectedHeatMap.code === 0) {
        if ($scope.heatmap !== null) {
          $scope.heatmap.setMap(null);
        }
        return;
      }
      heatmapData = [];
      if ($scope.SelectedHeatMap.code === 1) {
        for (te in $scope.Events) {
          ref = $scope.Events[te];
          for (j = 0, len = ref.length; j < len; j++) {
            ev = ref[j];
            if (typeof ev.Location !== "undefined" && ev.Location !== null && !isNaN(ev.Location.Lat) && !isNaN(ev.Location.Lng)) {
              heatmapData.push(new google.maps.LatLng(ev.Location.Lat, ev.Location.Lng));
            }
          }
        }
      }
      if ($scope.SelectedHeatMap.code === 2) {
        ref1 = $scope.Trips;
        for (k = 0, len1 = ref1.length; k < len1; k++) {
          t = ref1[k];
          if (t.StartLocation !== null && !isNaN(t.StartLocation.Lat) && !isNaN(t.StartLocation.Lng)) {
            heatmapData.push(new google.maps.LatLng(t.StartLocation.Lat, t.StartLocation.Lng));
          }
          if (t.EndLocation !== null && !isNaN(t.EndLocation.Lat) && !isNaN(t.EndLocation.Lng)) {
            heatmapData.push(new google.maps.LatLng(t.EndLocation.Lat, t.EndLocation.Lng));
          }
        }
      }
      drawHeatMap(heatmapData);
    };
    CreateAddressString = function(adr) {
      var AdrStr;
      if (typeof adr === "undefined" || adr === null) {
        return "";
      }
      AdrStr = "";
      if (typeof adr.Address1 !== "undefined" && adr.Address1 !== null) {
        AdrStr = adr.Address1;
      }
      if (typeof adr.Address2 !== "undefined" && adr.Address2 !== null) {
        AdrStr += " " + adr.Address2;
      }
      AdrStr += " " + adr.City;
      AdrStr += " " + adr.State;
      AdrStr += " " + adr.Zip;
      AdrStr += " " + adr.Country;
      return AdrStr;
    };
    $scope.downloadTrips = function() {
      var EndAddress, EndLocation, StartAddress, StartLocation, csv, duration, j, len, msToTime, ref, row, trip;
      csv = ['"StartTime",' + '"EndTime",' + '"Duration",' + '"MaxSpeed ' + $filter('unitTitle')("maxSpeed", $rootScope.app.layout.unit) + '",' + '"MaxAcceleration ' + "km/(h.s)" + '",' + '"MaxDeceleration ' + "km/(h.s)" + '",' + '"MaxRPM' + '",' + '"FuelLevel ' + $filter('unitTitle')("fuelconsumption", $rootScope.app.layout.unit) + '",' + '"FuelEfficiency ' + $filter('unitTitle')("fuelefficiency", $rootScope.app.layout.unit) + '",' + '"Distance ' + $filter('unitTitle')("distance", $rootScope.app.layout.unit) + '",' + '"StartLocation' + '",' + '"EndLocation' + '",' + '"StartAddress' + '",' + '"EndAddress' + '",' + '"StartMilage' + '",' + '"EndMilage' + '"'];
      msToTime = function(s) {
        var hrs, mins, ms, secs;
        ms = s % 1000;
        s = (s - ms) / 1000;
        secs = s % 60;
        s = (s - secs) / 60;
        mins = s % 60;
        hrs = (s - mins) / 60;
        return hrs + ':' + mins + ':' + secs;
      };
      ref = $scope.Trips;
      for (j = 0, len = ref.length; j < len; j++) {
        trip = ref[j];
        StartAddress = "";
        if (trip.AltStartAddress != null) {
          StartAddress = CreateAddressString(trip.AltStartAddress);
        } else {
          StartAddress = CreateAddressString(trip.StartAddress);
        }
        EndAddress = "";
        if (trip.AltEndAddress != null) {
          EndAddress = CreateAddressString(trip.AltEndAddress);
        } else {
          EndAddress = CreateAddressString(trip.EndAddress);
        }
        duration = Math.abs((new Date(trip.EndTime)) - (new Date(trip.StartTime)));
        StartLocation = "";
        if (typeof trip.StartLocation !== "undefined" && trip.StartLocation !== null && typeof trip.StartLocation.Lat !== "undefined" && typeof trip.StartLocation.Lng !== "undefined" && trip.StartLocation.Lat !== null && trip.StartLocation.Lng !== null) {
          StartLocation = trip.StartLocation.Lat + "," + trip.StartLocation.Lng;
        }
        EndLocation = "";
        if (typeof trip.EndLocation !== "undefined" && trip.EndLocation !== null && typeof trip.EndLocation.Lat !== "undefined" && typeof trip.EndLocation.Lng !== "undefined" && trip.EndLocation.Lat !== null && trip.EndLocation.Lng !== null) {
          EndLocation = trip.EndLocation.Lat + "," + trip.EndLocation.Lng;
        }
        row = '"' + new Date(trip.StartTime).toString() + '",' + '"' + new Date(trip.EndTime).toString() + '",' + '"' + msToTime(duration) + '",' + '"' + Math.round($filter('convertUnit')(trip.MaxSpeed, "speed", $rootScope.app.layout.unit)) + '",' + '"' + (Math.round(100 * $filter('convertUnit')(trip.MaxAcceleration, "distance", $rootScope.app.layout.unit)) / 100) + '",' + '"' + (Math.round(100 * $filter('convertUnit')(trip.MaxDeceleration, "distance", $rootScope.app.layout.unit)) / 100) + '",' + '"' + trip.MaxRPM + '",' + '"' + (Math.round(10 * $filter('convertUnit')(trip.FuelLevel, "fuelconsumption", $rootScope.app.layout.unit)) / 10) + '",' + '"' + (Math.round(10 * $filter('convertUnit')(trip.FuelEfficiency, "fuelefficiency", $rootScope.app.layout.unit)) / 10) + '",' + '"' + (Math.round(10 * $filter('convertUnit')(trip.Distance, "distance", $rootScope.app.layout.unit)) / 10) + '",' + '"' + StartLocation + '",' + '"' + EndLocation + '",' + '"' + StartAddress + '",' + '"' + EndAddress + '",' + '"' + (Math.round(10 * $filter('convertUnit')(trip.StartMilage, "distance", $rootScope.app.layout.unit)) / 10) + '",' + '"' + (Math.round(10 * $filter('convertUnit')(trip.EndMilage, "distance", $rootScope.app.layout.unit)) / 10) + '"';
        csv.push(row);
      }
      saveAs(new Blob([csv.join("\r\n")], {
        type: 'text/csv'
      }), "Trips.csv");
    };
    $scope.Trips = [];
    $scope.SelectedTrips = [];
    $scope.Events = {};
    $scope.Loading = false;
    myMojioFactory.prepareData();
    myOptions = {
      scrollwheel: false,
      zoom: 4,
      center: new google.maps.LatLng(49, -123),
      disableDefaultUI: true,
      styles: googlemapFactory.MapStyle,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.LEFT_CENTER
      },
      scaleControl: false,
      streetViewControl: false
    };
    $scope.map = new google.maps.Map(document.getElementById('map'), myOptions);
    $scope.heatmap = null;
    $scope.sid = null;
    $scope.$watch('AllData.SelectedVehicle', function() {
      if ($scope.AllData.SelectedVehicle !== null && $scope.sid !== $scope.AllData.SelectedVehicle._id) {
        $scope.sid = $scope.AllData.SelectedVehicle._id;
        getTrips();
      }
    });
    $scope.$watch('SelectedRange', function(newData, oldData) {
      if (newData.code !== oldData.code) {
        return getTrips();
      }
    });
    $scope.changeSelectedVehicle = myMojioFactory.changeSelectedVehicle;
    $scope.changeDateRange = function(r) {
      return $scope.SelectedRange = r;
    };
    RemoveCurrentTrips = function() {
      var j, len, pos, ref, trip;
      ref = $scope.SelectedTrips;
      for (pos = j = 0, len = ref.length; j < len; pos = ++j) {
        trip = ref[pos];
        trip.selected = false;
      }
      $scope.SelectedTrips = [];
      return showTripOnMapStep1();
    };
    $scope.selectAll = function() {
      var j, k, len, len1, pos, ref, ref1, trip;
      if ($scope.SelectedTrips.length === $scope.Trips.length) {
        ref = $scope.SelectedTrips;
        for (pos = j = 0, len = ref.length; j < len; pos = ++j) {
          trip = ref[pos];
          trip.selected = false;
        }
        $scope.SelectedTrips = [];
      } else {
        ref1 = $scope.Trips;
        for (pos = k = 0, len1 = ref1.length; k < len1; pos = ++k) {
          trip = ref1[pos];
          if (!trip.selected) {
            $scope.SelectedTrips.push(trip);
            trip.selected = true;
          }
        }
      }
      return showTripOnMapStep1();
    };
    createEvents = function(Events) {
      var event, j, k, len, len1, oldEvents, pos, ref, storage, trip;
      oldEvents = angular.copy($scope.Events);
      for (j = 0, len = Events.length; j < len; j++) {
        event = Events[j];
        if (event.TripId === null) {
          continue;
        }
        if (typeof oldEvents[event.TripId] !== "undefined") {
          continue;
        }
        if (typeof $scope.Events[event.TripId] === "undefined") {
          $scope.Events[event.TripId] = [];
        }
        storage = $scope.Events[event.TripId];
        if (event.EventType === "OffStatus" || event.EventType === "HeartBeat") {
          continue;
        }
        $scope.Events[event.TripId].push(event);
      }
      ref = $scope.Trips;
      for (pos = k = 0, len1 = ref.length; k < len1; pos = ++k) {
        trip = ref[pos];
        trip.hasEvents = true;
      }
    };
    getTrips = function() {
      RemoveCurrentTrips();
      if ($scope.AllData.SelectedVehicle === null) {
        return;
      }
      $scope.Trips = [];
      $scope.Events = {};
      $scope.SelectedTrips = [];
      $scope.Loading = true;
      $scope.TempTrips = [];
      return getTripsPartially([], 0, function(TripsResult) {
        $scope.TempTrips = TripsResult;
        console.log("Trip #:" + TripsResult.length);
        if ($scope.TempTrips.length === 0) {
          $scope.Loading = false;
          return $scope.AllEvents = true;
        } else {
          return MakeTripsVisible();
        }
      });
    };
    getTripsPartially = function(data, offset, cb) {
      var criteria, limit;
      criteria = buildCriteria();
      limit = 1000;
      return mojioRemote.GET("Trips", limit, offset, "VehicleId=" + $scope.AllData.SelectedVehicle._id + ";" + "StartTime=" + criteria, "sortBy=StartTime&desc=true", function(TripsResult) {
        if (TripsResult.Data.length >= limit) {
          return getTripsPartially(data.concat(TripsResult.Data), offset + limit, function(TripsResult) {
            return cb(TripsResult);
          });
        } else {
          return cb(data.concat(TripsResult.Data));
        }
      });
    };
    MakeTripsVisible = function() {
      var LastTrip, j, len, ref, t;
      $scope.Trips = [];
      ref = $scope.TempTrips;
      for (j = 0, len = ref.length; j < len; j++) {
        t = ref[j];
        if (typeof t.Distance === "undefined" || t.Distance === 0) {
          t.Distance = myMojioFactory.Distance(t);
          t.loading = false;
        }
        if (typeof t.StartAddress === "undefined") {
          t.AltStartAddress = {
            Address1: "",
            City: "",
            Country: "",
            State: "",
            Zip: ""
          };
        }
        if (typeof t.EndAddress === "undefined") {
          t.AltEndAddress = {
            Address1: "",
            City: "",
            Country: "",
            State: "",
            Zip: ""
          };
        }
        $scope.Trips.push(t);
      }
      getHeatMap();
      if ($scope.Trips.length !== 0) {
        LastTrip = $scope.Trips[0];
        if (typeof LastTrip.selected === "undefined" || LastTrip.selected === false) {
          $scope.SelectedTrips.push(LastTrip);
          LastTrip.selected = true;
        }
        showTripOnMapStep1(LastTrip._id);
      }
      $scope.Loading = false;
    };
    LoadAllEvents = function(callback) {
      var criteria;
      $scope.AllEvents = false;
      criteria = buildCriteria();
      getAllEventsPartially([], 0, function(EventsResult) {
        console.log("events # " + EventsResult.length);
        createEvents(EventsResult);
        $scope.AllEvents = true;
        if (typeof callback !== "undefined") {
          return callback();
        }
      });
    };
    getAllEventsPartially = function(data, offset, cb) {
      var criteria, limit;
      criteria = buildCriteria();
      limit = 1000;
      return mojioRemote.GET("Events", limit, offset, "VehicleId=" + $scope.AllData.SelectedVehicle._id + ";" + "Time=" + criteria, "sortBy=Time&desc=false", function(EventsResult) {
        if (EventsResult.Data.length >= limit && offset + limit) {
          return getAllEventsPartially(data.concat(EventsResult.Data), offset + limit, function(EventsResult) {
            return cb(EventsResult);
          });
        } else {
          return cb(data.concat(EventsResult.Data));
        }
      });
    };
    buildCriteria = function() {
      var e, eStr, s, sStr, today;
      today = new Date();
      s = new Date();
      s.setDate((new Date()).getDate() - $scope.SelectedRange.code);
      sStr = s.getFullYear() + "." + (s.getMonth() + 1) + "." + s.getDate();
      e = new Date();
      e.setDate((new Date()).getDate() + 1);
      eStr = e.getFullYear() + "." + (e.getMonth() + 1) + "." + e.getDate();
      return sStr + "-" + eStr;
    };
    $scope.showDuration = function(row) {
      return ((new Date(row.EndTime)) - (new Date(row.StartTime))) / 1000;
    };
    $scope.mergeTrips = function() {
      var AllId, FirstId, j, k, lastSelected, len, len1, pos, ref, ref1, trip;
      lastSelected = -1;
      AllId = [];
      FirstId = null;
      ref = $scope.Trips;
      for (pos = j = 0, len = ref.length; j < len; pos = ++j) {
        trip = ref[pos];
        if (trip.selected) {
          if (FirstId === null) {
            FirstId = trip._id;
          } else {
            AllId.push(trip._id);
          }
          if (pos !== lastSelected + 1 && lastSelected !== -1) {
            toaster.error({
              title: $filter('translate')('mymojio_trip.MergeTrips.error.title'),
              body: $filter('translate')('mymojio_trip.MergeTrips.error.notNeighborBody')
            });
            return;
          }
          lastSelected = pos;
        }
      }
      ref1 = $scope.SelectedTrips;
      for (pos = k = 0, len1 = ref1.length; k < len1; pos = ++k) {
        trip = ref1[pos];
        hideTripFromMap(trip);
      }
      mojioRemote.POST("Trips/" + FirstId + "/Trips", AllId, function() {
        toaster.success({
          title: $filter('translate')('mymojio_trip.MergeTrips.success.title'),
          body: $filter('translate')('mymojio_trip.MergeTrips.success.body')
        });
        return getTrips();
      }, function() {
        return toaster.error({
          title: $filter('translate')('mymojio_trip.MergeTrips.error.title'),
          body: $filter('translate')('mymojio_trip.MergeTrips.error.body')
        });
      });
    };
    $scope.deleteTrips = function() {
      var deleted, i, j, k, len, pos, ref, ref1, total, trip;
      total = $scope.SelectedTrips.length;
      deleted = 0;
      ref = $scope.SelectedTrips;
      for (pos = j = 0, len = ref.length; j < len; pos = ++j) {
        trip = ref[pos];
        mojioRemote.DELETE("Trips/" + trip._id, function(result) {
          return deleted++;
        }, function(result) {
          return deleted++;
        });
      }
      for (i = k = ref1 = $scope.Trips.length - 1; k >= 0; i = k += -1) {
        trip = $scope.Trips[i];
        if (trip.selected) {
          $scope.Trips.splice(i, 1);
        }
      }
      $scope.SelectedTrips = [];
      showTripOnMapStep1();
    };
    $scope.tripEvents = function(trip) {
      return $scope.Events[trip._id];
    };
    $scope.selectTrip = function($event, row, multi) {
      var j, k, len, len1, pos, ref, ref1, trip;
      console.log("-----Trip Info-----");
      console.log(row);
      console.log("-------------------");
      $event.stopPropagation();
      if (multi === true) {
        ref = $scope.SelectedTrips;
        for (pos = j = 0, len = ref.length; j < len; pos = ++j) {
          trip = ref[pos];
          if (trip === row) {
            row.selected = false;
            $scope.SelectedTrips.splice(pos, 1);
            hideTripFromMap(trip);
            return;
          }
        }
        $scope.SelectedTrips.push(row);
        row.selected = true;
        showTripOnMapStep1();
      } else {
        ref1 = $scope.SelectedTrips;
        for (pos = k = 0, len1 = ref1.length; k < len1; pos = ++k) {
          trip = ref1[pos];
          trip.selected = false;
        }
        $scope.SelectedTrips = [];
        $scope.SelectedTrips.push(row);
        row.selected = true;
        showTripOnMapStep1();
      }
    };
    showTripOnMapStep1 = function() {
      var j, len, ref, trip;
      ref = $scope.Trips;
      for (j = 0, len = ref.length; j < len; j++) {
        trip = ref[j];
        if (trip.selected) {
          if (typeof trip.onmap === "undefined" || trip.onmap === false) {
            if (typeof $scope.Events[trip._id] !== "undefined") {
              showTripOnMapStep2(trip);
            } else {
              getTripEvents(trip, showTripOnMapStep2);
            }
          }
        } else {
          if (trip.onmap === true) {
            hideTripFromMap(trip);
          }
        }
      }
    };
    getTripEvents = function(trip, callback) {
      trip.loading = true;
      mojioRemote.GET("Trips/" + trip._id + "/Events", 10000, 0, null, "sortBy=Time&desc=false", function(result) {
        var e, j, len, ref;
        trip.loading = false;
        if (typeof $scope.Events[trip._id] !== "undefined") {
          callback(trip);
          return;
        }
        $scope.Events[trip._id] = [];
        ref = result.Data;
        for (j = 0, len = ref.length; j < len; j++) {
          e = ref[j];
          if (e.EventType !== "OffStatus" && e.EventType !== "HeartBeat") {
            $scope.Events[trip._id].push(e);
          }
        }
        trip.hasEvents = true;
        callback(trip);
      });
    };
    hideTripFromMap = function(trip) {
      if (!trip.onmap) {
        return;
      }
      if (typeof trip.TripPath !== "undefined") {
        trip.TripPath.setMap(null);
        trip.TripPath = null;
      }
      if (typeof trip.st !== "undefined") {
        trip.st.setMap(null);
        trip.st = null;
      }
      if (typeof trip.en !== "undefined") {
        trip.en.setMap(null);
        trip.en = null;
      }
      trip.onmap = false;
      fitMap();
    };
    showTripOnMapStep2 = function(trip) {
      var AllCoordinates, AllEvents, EventCounts, bounds, d, en, enLoc, j, len, pos, st, stLoc, tripPath;
      if (typeof trip === "undefined" || typeof trip.selected === "undefined" || !trip.selected) {
        return;
      }
      AllCoordinates = [];
      bounds = new google.maps.LatLngBounds();
      st = null;
      en = null;
      AllEvents = $scope.Events[trip._id];
      EventCounts = AllEvents.length;
      console.log("EventCounts " + EventCounts);
      for (pos = j = 0, len = AllEvents.length; j < len; pos = ++j) {
        d = AllEvents[pos];
        if (myMojioFactory.IsValidLocation(d, "Location")) {
          if (st === null) {
            st = d;
          }
          en = d;
          if (pos === 0 || pos === EventCounts - 1 || d.EventType !== "TripStatus" || myMojioFactory.IsInorderPoint(d, AllEvents[pos - 1], AllEvents[pos + 1])) {
            AllCoordinates.push(new google.maps.LatLng(d.Location.Lat, d.Location.Lng));
            bounds.extend(new google.maps.LatLng(d.Location.Lat, d.Location.Lng));
          } else {
            console.log("invalid");
          }
        }
      }
      if (st !== null) {
        stLoc = new google.maps.LatLng(st.Location.Lat, st.Location.Lng);
        trip.st = createMarker($scope.map, stLoc, null, null, null, "point-start text-circle3", "A");
      }
      if (en !== null) {
        enLoc = new google.maps.LatLng(en.Location.Lat, en.Location.Lng);
        trip.en = createMarker($scope.map, enLoc, null, null, null, "point-end text-circle3", "B");
      }
      if (AllCoordinates.length !== 0) {
        tripPath = new google.maps.Polyline({
          path: AllCoordinates,
          geodesic: false,
          strokeColor: '#0C5B7D',
          strokeOpacity: 0.5,
          strokeWeight: 5
        });
        tripPath.setMap($scope.map);
        trip.TripPath = tripPath;
        trip.SouthWest = bounds.getSouthWest();
        trip.NorthEast = bounds.getNorthEast();
        trip.onmap = true;
        fitMap();
      }
    };
    fitMapPromise = null;
    fitMap = function() {
      if (fitMapPromise !== null) {
        $timeout.cancel(fitMapPromise);
      }
      return fitMapPromise = $timeout(fitMapStart, 100);
    };
    fitMapStart = function() {
      var bounds, j, len, ref, trip;
      bounds = new google.maps.LatLngBounds();
      ref = $scope.Trips;
      for (j = 0, len = ref.length; j < len; j++) {
        trip = ref[j];
        if (trip.onmap === true || $scope.SelectedTrips.length === 0) {
          if (typeof trip.NorthEast !== "undefined") {
            bounds.extend(trip.NorthEast);
          }
          if (typeof trip.SouthWest !== "undefined") {
            bounds.extend(trip.SouthWest);
          }
        }
      }
      $scope.map.fitBounds(bounds);
    };
    return createMarker = function(map, latlng, style, bgcolor, color, classes, text) {
      var allstyle, labelClass, marker;
      if (bgcolor === null) {
        bgcolor = "rgba(255,0,0,0.5)";
      }
      if (color === null) {
        color = "#000000";
      }
      labelClass = "labels";
      if (classes !== null) {
        labelClass += " " + classes;
      }
      allstyle = "font-size:10px;margin-top:1px;padding-top:1px;padding-left:4px;width:15px;height:15px;background-color:" + bgcolor + ";color:" + color + ";";
      if (style !== null) {
        allstyle += style;
      }
      marker = new MarkerWithLabel({
        position: latlng,
        icon: ' ',
        map: map,
        labelContent: text,
        labelClass: labelClass,
        labelAnchor: new google.maps.Point(7, 7)
      });
      marker.setMap(map);
      return marker;
    };
  }
]);

App.controller('obsCotroller', ['$scope', '$rootScope', '$stateParams', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', function($scope, $rootScope, $stateParams, mojioRemote, mojioLocal, mojioGlobal, toaster, $filter) {}]);

App.controller('observeController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'mojioConnection', 'toaster', '$filter', function($scope, $rootScope, $stateParams, mojioRemote, mojioLocal, mojioGlobal, mojioConnection, toaster, $filter) {
    var options;
    options = {
      "Type": "Observer",
      "ObserverType": "Generic",
      "Parent": "user",
      "ParentId": mojioGlobal.data.user_data.id,
      "Subject": "event",
      "SubjectId": null,
      "Transports": "SignalR"
    };
    mojioRemote.POST("Observers", options, function(data) {
      var hub, hubConnection;
      toaster.success({
        title: "success.title",
        body: "success.body"
      });
      console.log(data._id);
      hubConnection = $.hubConnection(mojioConnection.SelectedSettings().url + "signalr", {
        useDefaultPath: false
      });
      hub = hubConnection.createHubProxy("ObserverHub");
      hub.on("UpdateEntity", function(entity) {});
      return hub.connection.start().done(function() {
        return hub.invoke("Subscribe", data._id);
      });
    }, function() {
      return toaster.error({
        title: "error.title",
        body: "error.body"
      });
    });
  }
]);

App.controller('portalController', [
  '$modal', '$templateCache', '$sce', '$compile', '$rootScope', '$stateParams', '$scope', 'mojioRemote', 'localStorage', 'toaster', 'mojioGlobal', function($modal, $templateCache, $sce, $compile, $rootScope, $stateParams, $scope, mojioRemote, localStorage, toaster, mojioGlobal) {
    var tohash;
    $scope.showAddPortlet = false;
    if ($stateParams['full'].length !== 0) {
      $('body > :not(.content-wrapper)').hide();
      $('.content-wrapper').appendTo('body');
      $rootScope.app.useFullLayout = true;
      $('body').addClass('layout-fs');
    }
    $scope.selData = [
      {
        Type: ''
      }
    ];
    $scope.portal = [];
    $scope.styles = [
      {
        Style: 'panel-primary',
        Title: 'Primary'
      }, {
        Style: 'panel-danger',
        Title: 'Danger'
      }, {
        Style: 'panel-info',
        Title: 'Info'
      }, {
        Style: 'panel-success',
        Title: 'Success'
      }, {
        Style: 'panel-warning',
        Title: 'Warning'
      }, {
        Style: 'panel-default',
        Title: 'Default'
      }, {
        Style: 'panel-inverse',
        Title: 'Inverse'
      }, {
        Style: 'panel-purple',
        Title: 'Purple'
      }, {
        Style: 'panel-green',
        Title: 'Green'
      }
    ];
    $scope.portlets = [
      {
        Portlet: 'widget-vehicle-list',
        Title: 'Vehicles List',
        Desc: 'View All Vehicles ',
        Icon: 'fa-car',
        Col: 6,
        Row: 12,
        Footer: '',
        Style: 'panel-primary',
        Resizable: {
          overall: true,
          col: true,
          row: true,
          minRow: 3,
          maxRow: 10,
          minCol: 3,
          maxCol: 12
        },
        Edit: false,
        Data: []
      }, {
        Portlet: 'widget-vehicle-report',
        Title: 'Vehicles Report',
        Desc: 'Your Vehicles Report',
        Icon: 'fa-car',
        Col: 6,
        Row: 12,
        Footer: '',
        Style: 'panel-primary',
        Resizable: {
          overall: true,
          col: true,
          row: true,
          minRow: 3,
          maxRow: 10,
          minCol: 3,
          maxCol: 12
        },
        Edit: false,
        Data: []
      }, {
        Portlet: 'widget-vehicles-on-map',
        Title: 'Vehicles On Map',
        Desc: 'View All Vehicles on Google Map',
        Icon: 'fa-globe',
        Col: 6,
        Row: 6,
        Footer: '',
        Style: 'panel-primary',
        Resizable: {
          overall: true,
          col: true,
          row: true,
          minRow: 3,
          maxRow: 10,
          minCol: 3,
          maxCol: 12
        },
        Edit: false,
        Data: []
      }, {
        Portlet: 'widget-vehicles-on-streetview',
        Title: 'Vehicle Streetview',
        Desc: 'Find out where your Vehicle is parked',
        Icon: 'fa-street-view',
        Col: 6,
        Row: 6,
        Footer: '',
        Style: 'panel-primary',
        Resizable: {
          overall: true,
          col: true,
          row: true,
          minRow: 3,
          maxRow: 10,
          minCol: 3,
          maxCol: 12
        },
        Edit: false,
        Data: []
      }, {
        Portlet: 'widget-vehicles-text-direction',
        Title: 'Direction to My Vehicle',
        Desc: 'Show Text direction from your location to your vehicle location',
        Icon: 'fa-reply',
        Col: 6,
        Row: 6,
        Footer: '',
        Style: 'panel-primary',
        Resizable: {
          overall: true,
          col: true,
          row: true,
          minRow: 3,
          maxRow: 10,
          minCol: 3,
          maxCol: 12
        },
        Edit: false,
        Data: []
      }, {
        Portlet: 'widget-trip-list',
        Title: 'Trips List',
        Desc: 'View List of Trips',
        Icon: 'fa-openid',
        Col: 6,
        Row: 6,
        Footer: '',
        Style: 'panel-primary',
        Resizable: {
          overall: true,
          col: true,
          row: true,
          minRow: 3,
          maxRow: 10,
          minCol: 3,
          maxCol: 12
        },
        Edit: false,
        Data: []
      }, {
        Portlet: 'widget-mojio-list',
        Title: 'Mojios List',
        Desc: 'View List of Mojios',
        Icon: 'fa-hdd-o',
        Col: 6,
        Row: 6,
        Footer: '',
        Style: 'panel-primary',
        Resizable: {
          overall: true,
          col: true,
          row: true,
          minRow: 3,
          maxRow: 10,
          minCol: 3,
          maxCol: 12
        },
        Edit: false,
        Data: []
      }, {
        Portlet: 'widget-user-list',
        Title: 'Friends List',
        Desc: 'View List of Users that you have access to their data',
        Icon: 'fa-user',
        Col: 6,
        Row: 6,
        Footer: '',
        Style: 'panel-primary',
        Resizable: {
          overall: true,
          col: true,
          row: true,
          minRow: 3,
          maxRow: 10,
          minCol: 3,
          maxCol: 12
        },
        Edit: false,
        Data: []
      }, {
        Portlet: 'widget-detail-info',
        Title: 'Detail Info',
        Desc: 'Detail Info can show detail about anything you select!',
        Icon: 'fa-info',
        Col: 6,
        Row: 6,
        Footer: '',
        Style: 'panel-primary',
        Resizable: {
          overall: true,
          col: true,
          row: true,
          minRow: 3,
          maxRow: 10,
          minCol: 3,
          maxCol: 12
        },
        Edit: false,
        Data: []
      }, {
        Portlet: 'widget-json',
        Title: 'JSON View',
        Desc: 'View Information as Prettify JSON!',
        Icon: 'fa-code',
        Col: 6,
        Row: 6,
        Footer: '',
        Style: 'panel-primary',
        Resizable: {
          overall: true,
          col: true,
          row: true,
          minRow: 3,
          maxRow: 10,
          minCol: 3,
          maxCol: 12
        },
        Edit: false,
        Data: []
      }, {
        Portlet: 'widget-cms-embed',
        Title: 'Content Window (Embed Version)',
        Desc: 'Show Content to Visitors',
        Icon: 'fa-align-left',
        Col: 6,
        Row: 6,
        Footer: '',
        Style: 'panel-primary',
        Resizable: {
          overall: true,
          col: true,
          row: true,
          minRow: 3,
          maxRow: 10,
          minCol: 3,
          maxCol: 12
        },
        Edit: false,
        Data: {
          Content: {
            Type: 'html',
            Title: 'Content',
            Data: 'Lorem ipsum dolor sit amet'
          }
        }
      }, {
        Portlet: 'widget-cms-github-menu',
        Title: 'Content Treeview (Github)',
        Desc: 'Show Content list as Treeview',
        Icon: 'fa-align-left',
        Col: 6,
        Row: 6,
        Footer: '',
        Style: 'panel-primary',
        Resizable: {
          overall: true,
          col: true,
          row: true,
          minRow: 3,
          maxRow: 10,
          minCol: 3,
          maxCol: 12
        },
        Edit: false,
        Data: {
          url: {
            Type: 'text',
            Title: 'Content List Url',
            Data: 'cms/menu.js'
          },
          github: {
            Type: 'text',
            Title: 'Address of the page on GitHub',
            Data: 'https://github.com/mojio/mojio-web-demo/edit/master/'
          }
        }
      }, {
        Portlet: 'widget-cms-github-i1',
        Title: 'Content Treeview (Github) i1',
        Desc: 'Show Content list as Treeview i1',
        Icon: 'fa-align-left',
        Col: 6,
        Row: 6,
        Footer: '',
        Style: 'panel-primary',
        Resizable: {
          overall: true,
          col: true,
          row: true,
          minRow: 3,
          maxRow: 10,
          minCol: 3,
          maxCol: 12
        },
        Edit: false,
        Data: {
          url: {
            Type: 'text',
            Title: 'Content List Url',
            Data: 'cms/menu.js'
          },
          github: {
            Type: 'text',
            Title: 'Address of the page on GitHub',
            Data: 'https://github.com/mojio/mojio-web-demo/edit/master/'
          }
        }
      }
    ];
    tohash = function(s) {
      return s.split('').reduce((function(a, b) {
        a = (a << 5) - a + b.charCodeAt(0);
        return a & a;
      }), 0);
    };
    $scope.portal = [];
    mojioRemote.GET("Users/" + mojioGlobal.data.user_data.id + "/Store/" + tohash(window.location.href), null, null, null, null, function(result) {
      return $scope.portal = JSON.parse(result);
    }, function(result) {
      return $scope.portal = [];
    });
    $scope.showAddPortletWindow = function() {
      $templateCache.put('portalAddPortletTemplate.html', '<div class="modal-header"> <h3 class="modal-title">Select Portlet</h3> </div> <div class="modal-body"> <div class="row"> <div ng-repeat="portlet in portlets" class="col-sm-3"> <div class="panel panel-default"> <div class="panel-heading"> <a href="" ng-click="addPortlet(portlet)"> <i class="fa {{portlet.Icon}} fa-4x"></i><br/> {{portlet.Title}} </a> </div> <div class="panel-body" style="height:100px;">{{portlet.Desc}}</div> </div> </div> </div> </div>');
      $modal.open({
        size: 'lg',
        templateUrl: 'portalAddPortletTemplate.html',
        scope: $scope,
        controller: ["$scope", function($scope) {}]
      });
    };
    $scope.addPortlet = function(portlet) {
      $scope.portal.push(angular.copy(portlet));
      toaster.success({
        title: "Add Widget",
        body: "Widget Added Successfully"
      });
    };
    $scope.removePortlet = function(v) {
      $scope.portal.splice(v, 1);
    };
    $scope.editPortlet = function(v) {
      $scope.portal[v].Edit = !$scope.portal[v].Edit;
    };
    $scope.resizeIncCol = function(v, max) {
      if (max) {
        $scope.portal[v].Col = max;
      } else {
        $scope.portal[v].Col++;
      }
    };
    $scope.resizeDecCol = function(v, min) {
      if (min) {
        $scope.portal[v].Col = min;
      } else {
        $scope.portal[v].Col--;
      }
    };
    $scope.resizeIncRow = function(v, max) {
      if (max) {
        $scope.portal[v].Row = max;
      } else {
        $scope.portal[v].Row++;
      }
    };
    $scope.resizeDecRow = function(v, min) {
      if (min) {
        $scope.portal[v].Row = min;
      } else {
        $scope.portal[v].Row--;
      }
    };
    $scope.portletCol = function(col) {
      return "col-sm-" + col;
    };
    $scope.portletRow = function(row) {
      return "height:" + (50 * row) + "px;";
    };
    $scope.portletDirective = function(portlet, pid) {
      var el;
      el = $sce.trustAsHtml("'<div " + portlet + " data=\"v.Data\" portlet=\"" + pid + "\"></div>'");
      return el;
    };
    $scope.savePortalState = function() {
      return mojioRemote.POST("Users/" + mojioGlobal.data.user_data.id + "/Store/" + tohash(window.location.href), '"' + JSON.stringify($scope.portal).replace(/"/g, '\\\"').replace(/(\\r\\n|\\n|\\r)/gm, " ") + '"', function(result) {}, toaster.success({
        title: "Settings",
        body: "Settings Saved Successfully"
      }), function(result) {
        return console.log("save error");
      });
    };
    $scope.fullScreen = function(event) {
      if (screenfull.enabled) {
        return screenfull.toggle(event.currentTarget.parentNode.parentNode);
      }
    };
    $rootScope.$on('MojioObjectSelected', function(event, data) {
      var i, j, len, ref, v;
      if ($scope.selData[0].Type === "") {
        $scope.selData.splice(0, 1);
      }
      if (data.Type !== "") {
        ref = $scope.selData;
        for (i = j = 0, len = ref.length; j < len; i = ++j) {
          v = ref[i];
          if (data.Type === v.Type && data._id === v._id) {
            $scope.selData.splice(i, 1);
            break;
          }
        }
      }
      return $scope.selData.splice(0, 0, data);
    });
    $scope.broadcast = function(data) {
      $rootScope.$broadcast('MojioObjectSelected', data);
    };
    return $scope.deselect = function() {
      $rootScope.$broadcast('MojioObjectSelected', {
        Type: ''
      });
    };
  }
]);

App.controller('serenityDealerController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote2', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', 'SerenityModels', '$state', function($scope, $rootScope, $stateParams, mojioRemote2, mojioLocal, mojioGlobal, toaster, $filter, SerenityModels, $state) {
    var getDealer;
    getDealer = function() {
      return mojioRemote2.GET({
        moreparam: [
          {
            param: 'limit',
            val: 1000
          }
        ],
        endpoint: "firefly",
        operation: "dealers",
        onSuccess: function(res) {
          return $scope.Dealer = res;
        }
      });
    };
    $scope.Dealer = [];
    getDealer();
    $scope.EditDealer = function(id) {
      $state.go("serenity.dealer_edit", {
        id: id
      });
    };
  }
]);

App.controller('serenityDealerEditController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote2', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', 'SerenityModels', function($scope, $rootScope, $stateParams, mojioRemote2, mojioLocal, mojioGlobal, toaster, $filter, SerenityModels) {
    var getDealers;
    $scope.DealerId = $stateParams.id;
    $scope.DataReadyState = false;
    getDealers = function() {
      return mojioRemote2.GET({
        endpoint: "firefly",
        operation: "Dealers/" + $scope.DealerId,
        onSuccess: function(res) {
          $scope.Dealer = res;
          return $scope.DataReadyState = true;
        }
      });
    };
    if ($scope.DealerId === "") {
      $scope.Dealer = angular.copy(SerenityModels.Dealer);
      $scope.DataReadyState = true;
    } else {
      getDealers();
    }
    $scope.SaveDealer = function() {
      if ($scope.DealerId === '') {
        $scope.CreateDealer();
      } else {
        $scope.EditDealer();
      }
    };
    $scope.CreateDealer = function() {
      mojioRemote2.POST({
        endpoint: "firefly",
        operation: "Dealers",
        data: $scope.Dealer,
        onSuccess: function(res) {
          $scope.Dealer = res;
          $scope.DealerId = res._id;
          return alert('create ok');
        },
        onError: function(res) {
          return alert('create error');
        }
      });
    };
    $scope.EditDealer = function() {
      mojioRemote2.PUT({
        endpoint: "firefly",
        operation: "Dealers/" + $scope.DealerId,
        data: $scope.Dealer,
        onSuccess: function(res) {
          $scope.Dealer = res;
          return alert('edit ok');
        },
        onError: function(res) {
          return alert('edit error');
        }
      });
    };
    $scope.AddLocation = function() {
      $scope.Dealer.Locations.push(SerenityModels.Location);
    };
    $scope.DeleteLocation = function(pos) {
      $scope.Dealer.Locations.splice(pos, 1);
    };
    $scope.AddServiceRep = function() {
      $scope.Dealer.ServiceRep.push("");
    };
    $scope.DeleteServiceRep = function(pos) {
      $scope.Dealer.ServiceRep.splice(pos, 1);
    };
  }
]);

App.controller('serenityReportDealerVisitController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote2', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', 'SerenityModels', '$state', function($scope, $rootScope, $stateParams, mojioRemote2, mojioLocal, mojioGlobal, toaster, $filter, SerenityModels, $state) {
    var getDealerVisit;
    getDealerVisit = function() {
      return mojioRemote2.GET({
        moreparam: [
          {
            param: 'limit',
            val: 1000
          }
        ],
        endpoint: "firefly",
        operation: "reports/dealervisit",
        onSuccess: function(data) {
          return $scope.data = data;
        }
      });
    };
    $scope.data = [];
    getDealerVisit();
    $scope["export"] = function() {
      var crow, csv, i, len, ref, row;
      csv = ['"Full Name","Email","Phone","Visit Date"'];
      ref = $scope.data;
      for (i = 0, len = ref.length; i < len; i++) {
        row = ref[i];
        crow = '"' + row.Firstname + " " + row.Lastname + '",' + '"' + row.Email + '",' + '"' + row.Phone + '",' + '"' + row.visitDate + '"';
        csv.push(crow);
      }
      saveAs(new Blob([csv.join("\r\n")], {
        type: 'text/csv'
      }), "Dealer_Visit_Report.csv");
    };
  }
]);

App.controller('serenityReportStatsController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote2', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', 'SerenityModels', '$state', function($scope, $rootScope, $stateParams, mojioRemote2, mojioLocal, mojioGlobal, toaster, $filter, SerenityModels, $state) {
    var getStats, timervar;
    $scope.alldealer = false;
    timervar = null;
    getStats = function() {
      return mojioRemote2.GET({
        moreparam: [
          {
            param: 'limit',
            val: 1000
          }, {
            param: 'alldealer',
            val: $scope.alldealer
          }
        ],
        endpoint: "firefly",
        operation: "reports/stats",
        onSuccess: function(data) {
          $scope.data = data;
          timervar = window.setTimeout(60 * 1000);
        },
        onError: function() {
          timervar = window.setTimeout(60 * 1000);
        }
      });
    };
    $scope.$watch('alldealer', function(newVal, oldVal) {
      if (oldVal !== newVal) {
        clearTimeout(timervar);
        getStats();
      }
    });
    $scope.data = [];
    getStats();
  }
]);

App.controller('serenityReportVehicleController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote2', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', 'SerenityModels', '$state', function($scope, $rootScope, $stateParams, mojioRemote2, mojioLocal, mojioGlobal, toaster, $filter, SerenityModels, $state) {
    var getReportVehicle;
    getReportVehicle = function() {
      return mojioRemote2.GET({
        moreparam: [
          {
            param: 'limit',
            val: 1000
          }
        ],
        endpoint: "firefly",
        operation: "reports/vehicle",
        onSuccess: function(data) {
          var d, i, j, len, len1, o, pdata, ref, row;
          pdata = [];
          for (i = 0, len = data.length; i < len; i++) {
            d = data[i];
            row = {
              Firstname: '',
              Lastname: '',
              Email: '',
              Phone: '',
              validated: '',
              agent: '',
              repairOrder: '',
              createDate: d.createDate,
              lastServiceItemDate: d.lastServiceItemDate,
              lastOfferDate: d.lastOfferDate,
              lastOfferValidationDate: d.lastOfferValidationDate,
              lastRedemptionDate: d.lastRedemptionDate,
              ServiceItemCount: d.ServiceItemCount,
              OfferCount: d.OfferCount,
              UsedOfferCount: d.UsedOfferCount,
              RedemptionCount: d.RedemptionCount,
              mojioVehicleId: d.mojioVehicleId
            };
            if (d.User !== null) {
              row.Firstname = d.User.Firstname;
              row.Lastname = d.User.Lastname;
              row.Email = d.User.Email;
              row.Phone = d.User.Phone;
            }
            if (typeof d.OfferValidations === "undefined" || d.OfferValidations.length === 0) {
              pdata.push(row);
            } else {
              ref = d.OfferValidations;
              for (j = 0, len1 = ref.length; j < len1; j++) {
                o = ref[j];
                row.validated = o.validated;
                row.agent = o.agent;
                row.repairOrder = o.repairOrder;
                pdata.push(row);
              }
            }
          }
          return $scope.data = pdata;
        }
      });
    };
    $scope.data = [];
    getReportVehicle();
    $scope["export"] = function() {
      var crow, csv, i, len, ref, row;
      csv = ['"Vehicle","Full Name","Email","Phone","Start Date",' + '"Service Item - Last","Service Item - Count",' + '"Offer - Last","Offer - Count",' + '"Validation - Last","Validation - Count",' + '"Redemption - Last","Redemption - Count",' + '"Validation Detail - Date","Validation Detail - Service Rep","Validation Detail - Order #"'];
      ref = $scope.data;
      for (i = 0, len = ref.length; i < len; i++) {
        row = ref[i];
        crow = '"' + row.mojioVehicleId + '",' + '"' + row.Firstname + " " + row.Lastname + '",' + '"' + row.Email + '",' + '"' + row.Phone + '",' + '"' + row.createDate + '",' + '"' + row.lastServiceItemDate + '",' + '"' + row.ServiceItemCount + '",' + '"' + row.lastOfferDate + '",' + '"' + row.OfferCount + '",' + '"' + row.lastOfferValidationDate + '",' + '"' + row.UsedOfferCount + '",' + '"' + row.lastRedemptionDate + '",' + '"' + row.RedemptionCount + '",' + '"' + row.validated + '",' + '"' + row.agent + '",' + '"' + row.repairOrder + '"';
        csv.push(crow);
      }
      saveAs(new Blob([csv.join("\r\n")], {
        type: 'text/csv'
      }), "Vehicle_Report.csv");
    };
  }
]);

App.controller('serenityServiceController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote2', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', 'SerenityModels', '$state', function($scope, $rootScope, $stateParams, mojioRemote2, mojioLocal, mojioGlobal, toaster, $filter, SerenityModels, $state) {
    var getServices;
    getServices = function() {
      return mojioRemote2.GET({
        moreparam: [
          {
            param: 'limit',
            val: 1000
          }
        ],
        endpoint: "firefly",
        operation: "servicetemplates",
        onSuccess: function(res) {
          return $scope.Service = res;
        }
      });
    };
    $scope.Service = [];
    getServices();
    $scope.EditService = function(id) {
      $state.go("serenity.service_edit", {
        id: id
      });
    };
  }
]);

App.controller('serenityServiceEditController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote2', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', 'SerenityModels', function($scope, $rootScope, $stateParams, mojioRemote2, mojioLocal, mojioGlobal, toaster, $filter, SerenityModels) {
    var getServices;
    $scope.ServiceTemplateId = $stateParams.id;
    $scope.DataReadeyState = false;
    getServices = function() {
      return mojioRemote2.GET({
        endpoint: "firefly",
        operation: "servicetemplates/" + $scope.ServiceTemplateId,
        onSuccess: function(res) {
          $scope.Service = res;
          return $scope.DataReadeyState = true;
        }
      });
    };
    if ($scope.ServiceTemplateId === "") {
      $scope.Service = angular.copy(SerenityModels.Service);
      $scope.DataReadeyState = true;
    } else {
      getServices();
    }
    $scope.HideShow = function(obj) {
      return obj.show = !obj.show;
    };
    $scope.AddTask = function(parent) {
      var task;
      task = angular.copy(SerenityModels.ServiceTask);
      task.$$hashkey = Math.random();
      task.show = false;
      parent.tasks.push(angular.copy(task));
    };
    $scope.AddOffer = function(parent) {
      var offer;
      offer = angular.copy(SerenityModels.ServiceOffer);
      offer.$$hashkey = Math.random();
      offer.show = false;
      parent.offers.push(angular.copy(offer));
    };
    $scope.AddAdvice = function(parent) {
      var advice;
      advice = angular.copy(SerenityModels.ServiceAdvice);
      advice.$$hashkey = Math.random();
      advice.show = false;
      parent.advice.push(angular.copy(advice));
    };
    $scope.AddTag = function(parent) {
      parent.tag.push("");
    };
    $scope.DeleteTag = function(parent, pos) {
      parent.splice(pos, 1);
    };
    $scope.RemoveAdvice = function(advice, parent) {
      var a, i, j, len, ref;
      ref = parent.advice;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        a = ref[i];
        if (a === advice) {
          parent.advice.splice(i, 1);
          return;
        }
      }
    };
    $scope.RemoveOffer = function(offer, parent) {
      var i, j, len, o, ref;
      ref = parent.offers;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        o = ref[i];
        if (o === offer) {
          parent.offers.splice(i, 1);
          return;
        }
      }
    };
    $scope.RemoveTask = function(task) {
      var i, j, len, ref, t;
      ref = $scope.Service.tasks;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        t = ref[i];
        if (t === task) {
          $scope.Service.tasks.splice(i, 1);
          return;
        }
      }
    };
    $scope.SaveService = function() {
      if ($scope.ServiceTemplateId === '') {
        $scope.CreateService();
      } else {
        $scope.EditService();
      }
    };
    $scope.CreateService = function() {
      mojioRemote2.POST({
        endpoint: "firefly",
        operation: "servicetemplates",
        data: $scope.Service,
        onSuccess: function(res) {
          $scope.Service = res;
          $scope.ServiceTemplateId = res._id;
          return alert('create ok');
        },
        onError: function(res) {
          return alert('create error');
        }
      });
    };
    $scope.EditService = function() {
      mojioRemote2.PUT({
        endpoint: "firefly",
        operation: "servicetemplates/" + $scope.ServiceTemplateId,
        data: $scope.Service,
        onSuccess: function(res) {
          $scope.Service = res;
          return alert('edit ok');
        },
        onError: function(res) {
          return alert('edit error');
        }
      });
    };
  }
]);

App.controller('serenityServiceInstanceController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote2', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', 'SerenityModels', '$state', function($scope, $rootScope, $stateParams, mojioRemote2, mojioLocal, mojioGlobal, toaster, $filter, SerenityModels, $state) {
    var getFireflyVehicles, getServices, getVehicles;
    $scope.criteria = "((vehicle.Battery.Value<11 && vehicle.Battery.Value>1) || vehicle.DiagnosticCodes.length>0 || vehicle.MilStatus===true) && (typeof(vehicle.fireflyVehicle.lastOfferDate)=='undefined' || (new Date(vehicle.fireflyVehicle.lastOfferDate))>(new Date()).setDate((new Date()).getDate() - 7))";
    $scope.showHelp = false;
    $scope.copyText = function(event) {
      $scope.criteria = event.target.innerText;
    };
    $scope.checkCriteria = function(vehicle, criteria) {
      var err, re;
      if (typeof vehicle.fireflyVehicleId === "undefined") {
        return false;
      }
      if (criteria.length === 0) {
        return true;
      }
      try {
        re = new RegExp("={1,3}", "g");
        criteria = criteria.replace(re, '===');
        if (eval(criteria) === true) {
          return true;
        } else {
          return false;
        }
      } catch (_error) {
        err = _error;
        return false;
      }
    };
    getFireflyVehicles = function() {
      return mojioRemote2.GET({
        moreparam: [
          {
            param: 'limit',
            val: 1000
          }
        ],
        endpoint: "firefly",
        operation: "vehicles",
        onSuccess: function(fireflyVehicles) {
          return getVehicles(fireflyVehicles);
        }
      });
    };
    getVehicles = function(fireflyVehicles) {
      return mojioRemote2.GET({
        top: 1000,
        operation: "vehicles",
        onSuccess: function(res) {
          var fv, i, ipos, j, len, len1, mojioVehicles, v;
          mojioVehicles = res.Data;
          console.log(mojioVehicles);
          console.log(fireflyVehicles);
          for (i = 0, len = mojioVehicles.length; i < len; i++) {
            v = mojioVehicles[i];
            for (j = 0, len1 = fireflyVehicles.length; j < len1; j++) {
              fv = fireflyVehicles[j];
              if (v.Id === fv.mojioVehicleId) {
                v.fireflyVehicle = fv;
                v.fireflyVehicleId = fv._id;
                break;
              }
            }
          }
          ipos = mojioVehicles.length - 1;
          while (ipos >= 0) {
            v = mojioVehicles[ipos];
            if (typeof v.fireflyVehicle === "undefined" || typeof v.VIN === "undefined" || v.VIN === "") {
              mojioVehicles.splice(ipos, 1);
            }
            ipos--;
          }
          return $scope.Vehicle = mojioVehicles;
        }
      });
    };
    getServices = function() {
      return mojioRemote2.GET({
        moreparam: [
          {
            param: 'limit',
            val: 1000
          }
        ],
        endpoint: "firefly",
        operation: "servicetemplates",
        onSuccess: function(res) {
          return $scope.Service = res;
        }
      });
    };
    $scope.Service = [];
    getFireflyVehicles();
    getServices();
    $scope.Create = function() {
      var Data, i, j, len, len1, ref, ref1, st, v;
      Data = {
        "Vehicles": [],
        "ServiceTemplates": [],
        "SendingNotification": true
      };
      ref = $scope.Service;
      for (i = 0, len = ref.length; i < len; i++) {
        st = ref[i];
        if (st.selected) {
          Data.ServiceTemplates.push(st._id);
        }
      }
      ref1 = $scope.Vehicle;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        v = ref1[j];
        if (v.selected) {
          Data.Vehicles.push(v.fireflyVehicleId);
        }
      }
      return mojioRemote2.POST({
        endpoint: "firefly",
        operation: "serviceitems",
        data: Data,
        onSuccess: function(res) {
          return alert('create ok');
        },
        onError: function(res) {
          return alert('create error');
        }
      });
    };
    $scope.selectServiceTemplate = function(row) {
      var i, len, ref, st;
      ref = $scope.Service;
      for (i = 0, len = ref.length; i < len; i++) {
        st = ref[i];
        st.selected = false;
      }
      return row.selected = true;
    };
    $scope.VehicleSelectAll = true;
    $scope.selectAllVehicles = function() {
      var i, j, len, len1, ref, ref1, results, selNo, v, val;
      val = true;
      selNo = 0;
      ref = $scope.Vehicle;
      for (i = 0, len = ref.length; i < len; i++) {
        v = ref[i];
        if (v.selected) {
          selNo++;
        }
      }
      if ($scope.Vehicle.length === selNo) {
        val = false;
        $scope.VehicleSelectAll = false;
      } else {
        $scope.VehicleSelectAll = true;
      }
      ref1 = $scope.Vehicle;
      results = [];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        v = ref1[j];
        results.push(v.selected = val);
      }
      return results;
    };
  }
]);

App.controller('serenitySituationController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', 'SerenityModels', '$state', function($scope, $rootScope, $stateParams, mojioRemote, mojioLocal, mojioGlobal, toaster, $filter, SerenityModels, $state) {
    $scope.Situation = [];
    $scope.Situation.push(angular.copy(SerenityModels.Situation));
    $scope.Situation.push(angular.copy(SerenityModels.Situation));
    $scope.EditSituation = function(id) {
      $state.go("serenity.situation_edit", {
        id: id
      });
    };
  }
]);

App.controller('serenitySituationEditController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', 'SerenityModels', function($scope, $rootScope, $stateParams, mojioRemote, mojioLocal, mojioGlobal, toaster, $filter, SerenityModels) {
    $scope.Situation = angular.copy(SerenityModels.Situation);
    $scope.AddEvent = function() {
      var event;
      event = angular.copy(SerenityModels.SituationEvent);
      event.$$hashkey = Math.random();
      event.show = false;
      $scope.Situation.events.push(angular.copy(event));
    };
    $scope.RemoveEvent = function(event) {
      var e, i, j, len, ref;
      ref = $scope.Situation.events;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        e = ref[i];
        if (e === event) {
          $scope.Situation.events.splice(i, 1);
          return;
        }
      }
    };
  }
]);

App.controller('serenityVehicleServiceItemController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote2', 'mojioLocal', 'mojioGlobal', '$filter', 'SerenityModels', '$state', function($scope, $rootScope, $stateParams, mojioRemote2, mojioLocal, mojioGlobal, $filter, SerenityModels, $state) {
    var createCustomerEntry, createCustomerHashTable, createFireflyVehicleHashTable, createOfferEntries, createOfferEntry, createRedemptionEntries, createRedemptionEntry, createServiceItemEntries, createServiceItemEntry, createValidationEntries, createValidationEntry, getCustomers, getDate, getEmail, getFireflyVehicles, getPhoneNumber, getTime, getVehicles, mergeHashTables, waitForGetComplete;
    $scope.toggleDisplayServices = function(customer) {
      if (customer.ServiceItems == null) {
        customer.getServices(function(response) {
          customer.ServiceItems = [];
          createServiceItemEntries(customer, response);
          return customer.isLoading = false;
        });
      }
      return customer.displayServices = !customer.displayServices;
    };
    $scope.toggleDisplayOffers = function(serviceItem) {
      return serviceItem.displayOffers = !serviceItem.displayOffers;
    };
    $scope.toggleDisplayRedemptionsValidations = function(offer) {
      if (offer.Redemptions == null) {
        offer.getRedemptions(function(response) {
          offer.Redemptions = [];
          createRedemptionEntries(offer, response);
          if (offer.Redemptions.length > 0) {
            offer.hasRedemptions = true;
          }
          return offer.isRedemptionLoading = false;
        });
      }
      if (offer.Validations == null) {
        offer.getValidations(function(response) {
          offer.Validations = [];
          createValidationEntries(offer, response);
          if (offer.Validations.length > 0) {
            offer.hasValidations = true;
          }
          return offer.isValidationLoading = false;
        });
      }
      offer.displayRedemptions = !offer.displayRedemptions;
      return offer.displayValidations = !offer.displayValidations;
    };
    getCustomers = function() {
      return mojioRemote2.GET({
        top: 1000,
        operation: "users",
        onSuccess: function(response) {
          createCustomerHashTable(response.Data);
          return waitForGetComplete();
        }
      });
    };
    getVehicles = function() {
      return mojioRemote2.GET({
        top: 1000,
        operation: "vehicles",
        onSuccess: function(response) {
          $scope.Vehicles = response.Data;
          return waitForGetComplete();
        }
      });
    };
    getFireflyVehicles = function() {
      return mojioRemote2.GET({
        moreparam: [
          {
            param: 'limit',
            val: 1000
          }
        ],
        endpoint: "firefly",
        operation: "vehicles",
        onSuccess: function(response) {
          createFireflyVehicleHashTable(response);
          return waitForGetComplete();
        }
      });
    };
    $scope.isLoading = true;
    $scope.CustomerEntries = [];
    getCustomers();
    getVehicles();
    getFireflyVehicles();
    waitForGetComplete = function() {
      if (($scope.CustomerHashTable != null) && ($scope.FireflyVehicleHashTable != null) && ($scope.Vehicles != null)) {
        return mergeHashTables();
      } else {

      }
    };
    createCustomerHashTable = function(Customers) {
      var customer, i, len, results;
      $scope.CustomerHashTable = {};
      results = [];
      for (i = 0, len = Customers.length; i < len; i++) {
        customer = Customers[i];
        results.push($scope.CustomerHashTable[customer.Id] = customer);
      }
      return results;
    };
    createFireflyVehicleHashTable = function(FireflyVehicles) {
      var fireflyVehicle, i, len, results;
      $scope.FireflyVehicleHashTable = {};
      results = [];
      for (i = 0, len = FireflyVehicles.length; i < len; i++) {
        fireflyVehicle = FireflyVehicles[i];
        results.push($scope.FireflyVehicleHashTable[fireflyVehicle.mojioVehicleId] = fireflyVehicle);
      }
      return results;
    };
    mergeHashTables = function() {
      var customer, fireflyVehicle, i, len, ref, vehicle;
      ref = $scope.Vehicles;
      for (i = 0, len = ref.length; i < len; i++) {
        vehicle = ref[i];
        fireflyVehicle = $scope.FireflyVehicleHashTable[vehicle.Id];
        if (fireflyVehicle == null) {
          continue;
        }
        customer = $scope.CustomerHashTable[fireflyVehicle.mojioUserId];
        if (customer == null) {
          continue;
        }
        createCustomerEntry(customer, fireflyVehicle, vehicle);
      }
      return $scope.isLoading = false;
    };
    createCustomerEntry = function(customer, fireflyVehicle, vehicle) {
      var customerEntry, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
      customerEntry = {
        UserName: (ref = customer.UserName) != null ? ref : "",
        FirstName: (ref1 = customer.FirstName) != null ? ref1 : "",
        LastName: (ref2 = customer.LastName) != null ? ref2 : "",
        Email: getEmail(customer.Emails),
        PhoneNumber: getPhoneNumber(customer.PhoneNumbers),
        VehicleName: (ref3 = vehicle.Name) != null ? ref3 : "",
        VIN: (ref4 = vehicle.VIN) != null ? ref4 : "",
        MilStatus: vehicle.MilStatus,
        DTC: (ref5 = vehicle.DiagnosticCodes) != null ? ref5 : [],
        ServiceItemCount: (ref6 = fireflyVehicle.ServiceItemCount) != null ? ref6 : "",
        OfferCount: fireflyVehicle.OfferCount,
        RedemptionCount: fireflyVehicle.RedemptionCount,
        UsedOfferCount: (ref7 = fireflyVehicle.UsedOfferCount) != null ? ref7 : "",
        createDate: fireflyVehicle.createDate,
        lastServiceItemDate: fireflyVehicle.lastServiceItemDate,
        lastOfferDate: fireflyVehicle.lastOfferDate,
        lastOfferValidationDate: fireflyVehicle.lastOfferValidationDate,
        lastRedemptionDate: fireflyVehicle.lastRedemptionDate,
        hasServiceItems: fireflyVehicle.ServiceItemCount > 0,
        displayServices: false,
        isLoading: true,
        getServices: function(_callback) {
          return mojioRemote2.GET({
            moreparam: [
              {
                param: 'limit',
                val: 1000
              }
            ],
            endpoint: "firefly",
            operation: "vehicles/" + fireflyVehicle._id + "/serviceitems",
            onSuccess: function(response) {
              return _callback(response);
            }
          });
        }
      };
      return $scope.CustomerEntries.push(customerEntry);
    };
    createServiceItemEntries = function(customer, serviceItems) {
      var i, len, results, serviceItem;
      results = [];
      for (i = 0, len = serviceItems.length; i < len; i++) {
        serviceItem = serviceItems[i];
        results.push(createServiceItemEntry(customer, serviceItem));
      }
      return results;
    };
    createServiceItemEntry = function(customer, serviceItem) {
      var serviceItemEntry;
      serviceItemEntry = {
        Name: serviceItem.name,
        Description: serviceItem.description,
        Given: serviceItem.given,
        DateDismissed: getDate(serviceItem.dismissed),
        TimeDismissed: getTime(serviceItem.dismissed),
        DateCompleted: getDate(serviceItem.completed),
        TimeCompleted: getTime(serviceItem.completed),
        Offers: [],
        hasOffers: serviceItem.offers.length > 0,
        displayOffers: false
      };
      if (serviceItemEntry.hasOffers) {
        createOfferEntries(serviceItemEntry, serviceItem.offers);
      }
      return customer.ServiceItems.push(serviceItemEntry);
    };
    createOfferEntries = function(serviceItemEntry, offers) {
      var i, len, offer, results;
      results = [];
      for (i = 0, len = offers.length; i < len; i++) {
        offer = offers[i];
        results.push(createOfferEntry(serviceItemEntry, offer));
      }
      return results;
    };
    createOfferEntry = function(serviceItemEntry, offer) {
      var offerEntry;
      offerEntry = {
        DiscountItem: offer.discountitem,
        Name: offer.name,
        Description: offer.description,
        DiscountAmount: offer.discountamount,
        DiscountType: offer.discounttype,
        RedemptionCode: offer.redemptioncode,
        DateGiven: getDate(offer.given),
        TimeGiven: getTime(offer.given),
        displayRedemptions: false,
        displayValidations: false,
        hasValidations: false,
        hasRedemptions: false,
        isRedemptionLoading: true,
        isValidationLoading: true,
        getRedemptions: function(_callback) {
          return mojioRemote2.GET({
            moreparam: [
              {
                param: 'limit',
                val: 1000
              }
            ],
            endpoint: "firefly",
            operation: "offers/" + offer._id + "/redemptions",
            onSuccess: function(response) {
              return _callback(response);
            }
          });
        },
        getValidations: function(_callback) {
          return mojioRemote2.GET({
            moreparam: [
              {
                param: 'limit',
                val: 1000
              }
            ],
            endpoint: "firefly",
            operation: "offers/" + offer._id + "/offervalidation",
            onSuccess: function(response) {
              return _callback(response);
            }
          });
        }
      };
      return serviceItemEntry.Offers.push(offerEntry);
    };
    createRedemptionEntries = function(offer, redemptions) {
      var i, len, redemption, results;
      results = [];
      for (i = 0, len = redemptions.length; i < len; i++) {
        redemption = redemptions[i];
        results.push(createRedemptionEntry(offer, redemption));
      }
      return results;
    };
    createRedemptionEntry = function(offer, redemption) {
      var redemptionEntry;
      redemptionEntry = {
        DateRedeemed: getDate(redemption.redeemed),
        TimeRedeemed: getTime(redemption.redeemed),
        Lat: redemption.lat,
        Lon: redemption.lon,
        Value: redemption.value
      };
      return offer.Redemptions.push(redemptionEntry);
    };
    createValidationEntries = function(offer, validations) {
      var i, len, results, validation;
      results = [];
      for (i = 0, len = validations.length; i < len; i++) {
        validation = validations[i];
        results.push(createValidationEntry(offer, validation));
      }
      return results;
    };
    createValidationEntry = function(offer, validation) {
      var validationEntry;
      validationEntry = {
        DateValidated: getDate(validation.validated),
        TimeValidated: getTime(validation.validated),
        Agent: validation.agent,
        RepairOrder: validation.repairOrder
      };
      return offer.Validations.push(validationEntry);
    };
    getDate = function(date) {
      if (date != null) {
        return new Date(date).toLocaleDateString();
      } else {
        return "";
      }
    };
    getTime = function(time) {
      if (time != null) {
        return new Date(time).toLocaleTimeString();
      } else {
        return "";
      }
    };
    getEmail = function(emails) {
      var ref, ref1;
      return (ref = (ref1 = emails[0]) != null ? ref1.Address : void 0) != null ? ref : "Not available";
    };
    return getPhoneNumber = function(phoneNumbers) {
      if (phoneNumbers[0] != null) {
        return phoneNumbers[0].CountryCode + " + " + phoneNumbers[0].AreaCode + " + " + phoneNumbers[0].Number;
      } else {
        return "Not available";
      }
    };
  }
]);

App.controller('tempSim2Controller', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote2', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', 'simulator2Factory', '$http', 'sim2LogicFactory', function($scope, $rootScope, $stateParams, mojioRemote2, mojioLocal, mojioGlobal, toaster, $filter, simulator2Factory, $http, sim2LogicFactory) {
    var CreateShortcut, changeMapCenter, defLocation, getVehicles, googleMap, info, legs, setting;
    $scope.Options = {
      AwakeReason: ['MotionStart', 'PeriodicAlarm', 'Voltage', 'Sleeping', 'DeviceRemoved', 'DeviceAdded'],
      LocationStatus: ['Unknown', 'Locked', 'NotLocked', 'Predicted', 'DiffCorrected', 'LastKnown', 'TwoDFix', 'Historic', 'InvalidTime', 'CommunicationsFailure', 'GPSOff', 'PreviousValidState']
    };
    if (typeof localStorage["HideSimulatorGuide"] === "undefined" || localStorage["HideSimulatorGuide"] === "true") {
      $scope.GuideStatus = true;
    } else {
      $scope.GuideStatus = false;
    }
    $scope.HideGuide = function() {
      localStorage.setItem("HideSimulatorGuide", "true");
      $scope.GuideStatus = false;
    };
    $scope.ShowGuide = function() {
      localStorage.setItem("HideSimulatorGuide", "false");
      $scope.GuideStatus = true;
    };
    googleMap = null;
    legs = null;
    info = null;
    setting = null;
    CreateShortcut = function() {
      googleMap = $scope.SimulatorLogic.map;
      legs = $scope.SimulatorLogic.legs;
      info = $scope.SimulatorLogic.Info;
      setting = $scope.SimulatorLogic.Settings;
    };
    $scope.SimulatorLogic = sim2LogicFactory.CreateSimulatorLogic();
    CreateShortcut();
    $scope.SelState = {
      No: 1,
      Obj: null
    };
    $scope.Vehicle = {
      Selected: null,
      VIN: ''
    };
    $scope.AllDevices = [];
    mojioRemote2.GET({
      operation: "mojios",
      onSuccess: function(res) {
        var pointer;
        pointer = null;
        if (typeof res._embedded !== "undefined") {
          pointer = res._embedded.MojioResponse;
        } else if (typeof res.Data !== "undefined") {
          pointer = res.Data;
        } else {
          pointer = [];
        }
        return getVehicles(pointer);
      }
    });
    getVehicles = function(mojios) {
      return mojioRemote2.GET({
        operation: "vehicles",
        onSuccess: function(res) {
          var IMEI, d, i, len, newImei;
          for (i = 0, len = mojios.length; i < len; i++) {
            d = mojios[i];
            IMEI = "";
            if (typeof d.IMEI !== "undefined") {
              IMEI = d.IMEI;
            } else {
              IMEI = d.Imei;
            }
            if (IMEI.indexOf('999') === 0) {
              $scope.AllDevices.push({
                Title: IMEI,
                Imei: IMEI,
                VIN: IMEI
              });
            }
          }
          newImei = "999" + parseInt(Math.random() * 1000000000000);
          $scope.AllDevices.push({
            Title: newImei + '(new)',
            Imei: newImei,
            VIN: newImei
          });
          $scope.Vehicle.Selected = $scope.AllDevices[0].Imei;
          $scope.Vehicle.VIN = $scope.AllDevices[0].Imei;
          return $scope.updateVehicle();
        }
      });
    };
    $scope.showVehicle = function() {
      return $filter('filter')($scope.AllDevices, {
        Imei: $scope.Vehicle.Selected
      })[0].Title;
    };
    $scope.updateVehicle = function() {
      $scope.SimulatorLogic.Vehicle.Imei = $scope.Vehicle.Selected;
      $scope.SimulatorLogic.Vehicle.VIN = $scope.Vehicle.VIN;
    };
    $scope.updateImei = function() {
      $scope.SimulatorLogic.Vehicle.Imei = $scope.Vehicle.Selected;
      $scope.Vehicle.VIN = $scope.Vehicle.Selected;
      $scope.SimulatorLogic.Vehicle.VIN = $scope.Vehicle.VIN;
    };
    $scope.$watch('Vehicle.VIN', function() {
      $scope.updateVehicle();
    });
    $scope.$watch('SelState.No', function() {
      if (setting.VehicleStates === null || setting.VehicleStates.length <= $scope.SelState.No) {
        return;
      }
      $scope.SelState.Obj = setting.VehicleStates[$scope.SelState.No];
    });
    $scope.CircularTrip = function() {
      setting.CircularTrip = !setting.CircularTrip;
      $scope.ShowRoute();
      setting.VehicleStates = null;
    };
    $scope.SavedSimulatorTrip = [];
    if (typeof localStorage["SavedSimulatorTrip"] !== "undefined") {
      $scope.SavedSimulatorTrip = JSON.parse(localStorage["SavedSimulatorTrip"]);
    }
    $scope.createMarker = function(latlng, name, html, color) {
      var contentString, marker;
      contentString = html;
      marker = new google.maps.Marker({
        position: latlng,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          strokeColor: color,
          scale: 3
        },
        draggable: true,
        map: googleMap.map
      });
      google.maps.event.trigger(marker, 'click');
      return marker;
    };
    $scope.PointType = "s";
    defLocation = {
      coords: {
        latitude: 43.907787,
        longitude: -79.359741
      }
    };
    if (typeof localStorage["lastPosition"] !== "undefined") {
      defLocation = JSON.parse(localStorage["lastPosition"]);
    }
    $scope.SimulatorLogic.CreateAllMapRelatedObjects(document.getElementById("map_canvas"), document.getElementById("pano"), defLocation);
    google.maps.event.addListener(googleMap.map, 'click', function(event) {
      var CurrentMarker, m;
      m = googleMap.Marker;
      CurrentMarker = null;
      if ($scope.PointType === "s") {
        if (m.Start) {
          m.Start.setMap(null);
          m.Start = null;
        }
        m.Start = $scope.createMarker(event.latLng, "Start Point", "Start Point", "blue");
        CurrentMarker = m.Start;
        $scope.$apply(function() {
          return $scope.PointType = "e";
        });
      } else if ($scope.PointType === "e") {
        if (m.End) {
          m.End.setMap(null);
          m.End = null;
        }
        m.End = $scope.createMarker(event.latLng, "End Point", "End Point", "red");
        CurrentMarker = m.End;
        $scope.$apply(function() {
          return $scope.PointType = "w";
        });
      } else if ($scope.PointType === "w") {
        if (m.WayPoint.length < 7) {
          m.WayPoint.push($scope.createMarker(event.latLng, "Way Point", "Way Point", "#green"));
          CurrentMarker = m.WayPoint[m.WayPoint.length - 1];
        }
      }
      if (CurrentMarker !== null) {
        google.maps.event.addListener(CurrentMarker, 'dragend', function(m) {
          $scope.ShowRoute();
          setting.VehicleStates = null;
          $scope.SavePoints();
        });
      }
      $scope.ShowRoute();
      setting.VehicleStates = null;
      return $scope.SavePoints();
    });
    changeMapCenter = function(position) {
      var pos;
      pos = {
        coords: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      };
      localStorage.setItem("lastPosition", JSON.stringify(pos));
      if (typeof position.coords === "undefined") {
        return;
      }
      if (googleMap.Marker.Start) {
        return;
      }
      return googleMap.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(changeMapCenter, changeMapCenter, {
        timeout: 10000
      });
    }
    $scope.ClearPoints = function() {
      var i, len, m, ref, wp;
      m = googleMap.Marker;
      googleMap.directionsDisplay.setDirections({
        routes: []
      });
      $scope.SimulatorLogic.legs = [];
      $scope.PointType = "s";
      if (m.Start) {
        m.Start.setMap(null);
        m.Start = null;
      }
      if (m.End) {
        m.End.setMap(null);
        m.End = null;
      }
      ref = m.WayPoint;
      for (i = 0, len = ref.length; i < len; i++) {
        wp = ref[i];
        if (wp) {
          wp.setMap(null);
          wp = null;
        }
      }
      m.WayPoint = [];
      setting.VehicleStates = null;
      $scope.SavePoints();
    };
    $scope.SavePoints = function() {
      var WayPoint, i, len, m, ref, wp;
      m = googleMap.Marker;
      if (m.Start) {
        setting.Points.Start = [m.Start.position.lat(), m.Start.position.lng()];
      } else {
        setting.Points.Start = null;
      }
      if (m.End) {
        setting.Points.End = [m.End.position.lat(), m.End.position.lng()];
      } else {
        setting.Points.End = null;
      }
      WayPoint = [];
      ref = m.WayPoint;
      for (i = 0, len = ref.length; i < len; i++) {
        wp = ref[i];
        WayPoint.push([wp.position.lat(), wp.position.lng()]);
      }
      setting.Points.WayPoint = WayPoint;
    };
    $scope.LoadPoints = function() {
      var AllPoints, LatLng, WayPoint, i, j, k, len, len1, len2, m, marker, op, ref, ref1, wp;
      CreateShortcut();
      m = googleMap.Marker;
      AllPoints = [];
      if (m.Start) {
        m.Start.setMap(null);
        m.Start = null;
      }
      if (setting.Points.Start) {
        LatLng = new google.maps.LatLng(setting.Points.Start[0], setting.Points.Start[1]);
        m.Start = $scope.createMarker(LatLng, "Start Point", "Start Point", "blue");
        AllPoints.push(m.Start);
      } else {
        m.Start.setMap(null);
        m.Start = null;
      }
      if (m.End) {
        m.End.setMap(null);
        m.End = null;
      }
      if (setting.Points.End) {
        LatLng = new google.maps.LatLng(setting.Points.End[0], setting.Points.End[1]);
        m.End = $scope.createMarker(LatLng, "End Point", "End Point", "red");
        AllPoints.push(m.End);
      } else {
        m.End.setMap(null);
        m.End = null;
      }
      WayPoint = [];
      ref = m.WayPoint;
      for (i = 0, len = ref.length; i < len; i++) {
        wp = ref[i];
        wp.setMap(null);
        wp = null;
      }
      m.WayPoint = [];
      ref1 = setting.Points.WayPoint;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        wp = ref1[j];
        LatLng = new google.maps.LatLng(wp[0], wp[1]);
        marker = $scope.createMarker(LatLng, "Way Point", "Way Point", "#green");
        m.WayPoint.push(marker);
        AllPoints.push(marker);
      }
      for (k = 0, len2 = AllPoints.length; k < len2; k++) {
        op = AllPoints[k];
        google.maps.event.addListener(op, 'dragend', function(m) {
          $scope.ShowRoute();
          setting.VehicleStates = null;
          $scope.SavePoints();
        });
      }
    };
    $scope.ClearVehicleStates = function() {
      $scope.SimulatorLogic.ClearVehicleStates();
    };
    $scope.ShowRoute = function() {
      var i, ipos, len, ref, request, waypts, wp;
      if (!googleMap.Marker.Start || !googleMap.Marker.End) {
        return;
      }
      googleMap.directionsDisplay.setMap(null);
      googleMap.directionsDisplay.setMap(googleMap.map);
      waypts = [];
      ipos = 0;
      ref = googleMap.Marker.WayPoint;
      for (i = 0, len = ref.length; i < len; i++) {
        wp = ref[i];
        waypts.push({
          location: wp.position,
          stopover: true
        });
      }
      request = {
        origin: googleMap.Marker.Start.position,
        destination: googleMap.Marker.End.position,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING
      };
      if (setting.CircularTrip) {
        waypts.push({
          location: googleMap.Marker.End.position,
          stopover: true
        });
        request.destination = googleMap.Marker.Start.position;
      }
      googleMap.directionsService.route(request, function(response, status) {
        var StepsNo, VehicleStatesNo, j, k, leg, len1, len2, ref1, ref2, step;
        if (status === google.maps.DirectionsStatus.OK) {
          info.VehicleStatesNo = 0;
          info.LegsNo = 0;
          info.StepsNo = 0;
          $scope.$apply(function() {
            $scope.SimulatorLogic.legs = response.routes[0].legs;
            return info.LegsNo += legs.length;
          });
          StepsNo = 0;
          VehicleStatesNo = 0;
          ref1 = $scope.SimulatorLogic.legs;
          for (j = 0, len1 = ref1.length; j < len1; j++) {
            leg = ref1[j];
            StepsNo += leg.steps.length;
            ref2 = leg.steps;
            for (k = 0, len2 = ref2.length; k < len2; k++) {
              step = ref2[k];
              VehicleStatesNo += step.path.length;
            }
          }
          $scope.$apply(function() {
            info.StepsNo += StepsNo;
            return info.VehicleStatesNo += VehicleStatesNo;
          });
          return googleMap.directionsDisplay.setDirections(response);
        }
      });
    };
    $scope.CreateVehicleStates = function() {
      $scope.SimulatorLogic.CreateVehicleStates();
      $scope.SelState.No = 0;
      setting.DurationLimit.Min = Math.round(setting.VehicleStates.length / 2);
      if (setting.DurationLimit.Min < 10) {
        setting.DurationLimit.Min = 10;
      }
      if (setting.Duration < setting.DurationLimit.Min) {
        setting.Duration = setting.DurationLimit.Min;
      }
    };
    $scope.SimulationPlay = function() {
      return $scope.SimulatorLogic.SimulationPlay();
    };
    $scope.SimulationPause = function() {
      return $scope.SimulatorLogic.SimulationPause();
    };
    $scope.SimulationStop = function() {
      return $scope.SimulatorLogic.SimulationStop();
    };
    $scope.SimulatorLogic.OnStateSendCallback = function(RelaredLogic, VehicleState) {
      return googleMap.sv.getPanoramaByLocation(new google.maps.LatLng(VehicleState.Vehicle.Location.Lat, VehicleState.Vehicle.Location.Lng), 50, function(data, status) {
        if (status === google.maps.StreetViewStatus.OK) {
          googleMap.panorama.setPano(data.location.pano);
          googleMap.panorama.setPov({
            heading: VehicleState.Vehicle.Heading.Value,
            pitch: 0
          });
          return googleMap.panorama.setVisible(true);
        }
      });
    };
    $scope.MinTripDuration = function() {
      var DurationText, sec;
      sec = setting.VehicleStates.length / 2;
      DurationText = Math.round(sec / 60) + " minutes and " + (sec % 60) + " seconds";
      return DurationText;
    };
    $scope.SaveSimulator = function(Title) {
      setting.Title = Title;
      $scope.SavedSimulatorTrip.push(angular.copy($scope.SimulatorLogic.Settings));
      localStorage.setItem("SavedSimulatorTrip", JSON.stringify($scope.SavedSimulatorTrip));
      toaster.success({
        title: "Save Trip",
        body: "Trip Saved Successfully"
      });
    };
    $scope.LoadSimulator = function(sst) {
      $scope.SimulatorLogic.Settings = angular.copy(sst);
      $scope.LoadPoints();
      $scope.ShowRoute();
    };
    $scope.DeleteSimulator = function(pos) {
      $scope.SavedSimulatorTrip.splice(pos, 1);
      localStorage.setItem("SavedSimulatorTrip", JSON.stringify($scope.SavedSimulatorTrip));
    };
    $scope.ImportFile = function(data) {
      if (data === null) {
        return;
      }
      $scope.SimulatorLogic.Settings = JSON.parse(data);
      $scope.LoadPoints();
      return $scope.ShowRoute();
    };
    $scope.ExportSimulator = function() {
      var data;
      data = new Blob([JSON.stringify($scope.SimulatorLogic.Settings)], {
        type: 'application/json'
      });
      saveAs(data, "Simulator.json");
    };
    $scope.gotoState = function(mode) {
      if (mode === "first") {
        return $scope.SelState.No = 0;
      } else if (mode === "previous" && $scope.SelState.No > 0) {
        return $scope.SelState.No--;
      } else if (mode === "next" && $scope.SelState.No < $scope.SimulatorLogic.Settings.VehicleStates.length - 1) {
        return $scope.SelState.No++;
      } else if (mode === "last") {
        return $scope.SelState.No = $scope.SimulatorLogic.Settings.VehicleStates.length - 1;
      }
    };
  }
]);

App.controller('tempSim2ControllerOld', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', 'simulator2Factory', '$http', 'googlemapFactory', 'sim2LogicFactory', function($scope, $rootScope, $stateParams, mojioRemote, mojioLocal, mojioGlobal, toaster, $filter, simulator2Factory, $http, googlemapFactory, sim2LogicFactory) {
    var PrepareEvent, a, b, myOptions, panoramaOptions, processSVData;
    a = sim2LogicFactory.CreateSimulatorLogic();
    b = sim2LogicFactory.CreateSimulatorLogic();
    a.Settings.Title = "t1";
    b.Settings.Title = "t2";
    console.log(a.Settings.Title);
    console.log(b.Settings.Title);
    $scope.Settings = {
      Title: 'New Trip Title',
      Duration: 60,
      DurationLimit: {
        Min: 10,
        Max: 3600
      },
      NoOfVehicleStates: 30,
      RPM: {
        Min: 300,
        Max: 1200
      },
      Speed: {
        Min: 30,
        Max: 90
      },
      Fuel: {
        Min: 70,
        Max: 80
      },
      FuelEfficiency: {
        Min: 12,
        Max: 17
      },
      Battery: {
        Min: 11.5,
        Max: 12.5
      },
      Points: {
        Start: null,
        End: null,
        WayPoint: []
      },
      CircularTrip: false,
      VehicleStates: null
    };
    $scope.SelState = {
      No: 1,
      Obj: null
    };
    $scope.$watch('SelState.No', function() {
      return $scope.SelState.Obj = $scope.Settings.VehicleStates[$scope.SelState.No];
    });
    $scope.Marker = {
      Start: null,
      End: null,
      WayPoint: []
    };
    $scope.CircularTrip = function() {
      $scope.Settings.CircularTrip = !$scope.Settings.CircularTrip;
      $scope.ShowRoute();
      $scope.Settings.VehicleStates = null;
    };
    $scope.Vehicle = {
      Selected: null,
      Imei: '999',
      VIN: ''
    };
    $scope.SavedSimulatorTrip = [];
    if (typeof localStorage["SavedSimulatorTrip"] !== "undefined") {
      $scope.SavedSimulatorTrip = JSON.parse(localStorage["SavedSimulatorTrip"]);
    }
    $scope.SimulationMode = "Stop";
    $scope.SimulationStep = 0;
    $scope.SimulationTimer = null;
    $scope.Info = {
      VehicleStatesNo: 0,
      LegsNo: 0,
      StepsNo: 0,
      LastImportantEvent: null,
      LastEvent: null,
      LastNetworkLatency: 0,
      TotalNetworkLatency: 0,
      AvgNetworkLatency: 0,
      LastWaitBeforeSendingEvent: 0,
      TotalWaitBeforeSendingEvent: 0,
      NoOfErrors: 0
    };
    $scope.legs = null;
    $scope.createMarker = function(latlng, name, html, color) {
      var contentString, marker;
      contentString = html;
      marker = new google.maps.Marker({
        position: latlng,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          strokeColor: color,
          scale: 3
        },
        draggable: true,
        map: $scope.map
      });
      google.maps.event.trigger(marker, 'click');
      return marker;
    };
    $scope.PointType = "s";
    myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(43.907787, -79.359741),
      styles: googlemapFactory.MapStyle,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      },
      navigationControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    $scope.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    $scope.directionsDisplay = new google.maps.DirectionsRenderer();
    $scope.directionsService = new google.maps.DirectionsService();
    panoramaOptions = {
      clickToGo: false,
      disableDefaultUI: true
    };
    $scope.panorama = new google.maps.StreetViewPanorama(document.getElementById("pano"), panoramaOptions);
    $scope.sv = new google.maps.StreetViewService();
    $scope.map.setStreetView($scope.panorama);
    google.maps.event.addListener($scope.map, 'click', function(event) {
      var CurrentMarker;
      CurrentMarker = null;
      if ($scope.PointType === "s") {
        if ($scope.Marker.Start) {
          $scope.Marker.Start.setMap(null);
          $scope.Marker.Start = null;
        }
        $scope.Marker.Start = $scope.createMarker(event.latLng, "Start Point", "Start Point", "blue");
        CurrentMarker = $scope.Marker.Start;
        $scope.$apply(function() {
          return $scope.PointType = "e";
        });
      } else if ($scope.PointType === "e") {
        if ($scope.Marker.End) {
          $scope.Marker.End.setMap(null);
          $scope.Marker.End = null;
        }
        $scope.Marker.End = $scope.createMarker(event.latLng, "End Point", "End Point", "red");
        CurrentMarker = $scope.Marker.End;
        $scope.$apply(function() {
          return $scope.PointType = "w";
        });
      } else if ($scope.PointType === "w") {
        if ($scope.Marker.WayPoint.length < 7) {
          $scope.Marker.WayPoint.push($scope.createMarker(event.latLng, "Way Point", "Way Point", "#green"));
          CurrentMarker = $scope.Marker.WayPoint[$scope.Marker.WayPoint.length - 1];
        }
      }
      if (CurrentMarker !== null) {
        google.maps.event.addListener(CurrentMarker, 'dragend', function(m) {
          $scope.ShowRoute();
          $scope.Settings.VehicleStates = null;
          $scope.SavePoints();
        });
      }
      $scope.ShowRoute();
      $scope.Settings.VehicleStates = null;
      return $scope.SavePoints();
    });
    $scope.ClearPoints = function() {
      var j, len, ref, wp;
      $scope.directionsDisplay.setDirections({
        routes: []
      });
      $scope.legs = null;
      $scope.PointType = "s";
      if ($scope.Marker.Start) {
        $scope.Marker.Start.setMap(null);
        $scope.Marker.Start = null;
      }
      if ($scope.Marker.End) {
        $scope.Marker.End.setMap(null);
        $scope.Marker.End = null;
      }
      ref = $scope.Marker.WayPoint;
      for (j = 0, len = ref.length; j < len; j++) {
        wp = ref[j];
        if (wp) {
          wp.setMap(null);
          wp = null;
        }
      }
      $scope.Marker.WayPoint = [];
      $scope.Settings.VehicleStates = null;
      $scope.SavePoints();
    };
    $scope.SavePoints = function() {
      var WayPoint, j, len, ref, wp;
      if ($scope.Marker.Start) {
        $scope.Settings.Points.Start = [$scope.Marker.Start.position.lat(), $scope.Marker.Start.position.lng()];
      } else {
        $scope.Settings.Points.Start = null;
      }
      if ($scope.Marker.End) {
        $scope.Settings.Points.End = [$scope.Marker.End.position.lat(), $scope.Marker.End.position.lng()];
      } else {
        $scope.Settings.Points.End = null;
      }
      WayPoint = [];
      ref = $scope.Marker.WayPoint;
      for (j = 0, len = ref.length; j < len; j++) {
        wp = ref[j];
        WayPoint.push([wp.position.lat(), wp.position.lng()]);
      }
      $scope.Settings.Points.WayPoint = WayPoint;
    };
    $scope.LoadPoints = function() {
      var AllPoints, LatLng, WayPoint, j, l, len, len1, len2, marker, n, op, ref, ref1, wp;
      AllPoints = [];
      if ($scope.Marker.Start) {
        $scope.Marker.Start.setMap(null);
        $scope.Marker.Start = null;
      }
      if ($scope.Settings.Points.Start) {
        LatLng = new google.maps.LatLng($scope.Settings.Points.Start[0], $scope.Settings.Points.Start[1]);
        $scope.Marker.Start = $scope.createMarker(LatLng, "Start Point", "Start Point", "blue");
        AllPoints.push($scope.Marker.Start);
      } else {
        $scope.Marker.Start.setMap(null);
        $scope.Marker.Start = null;
      }
      if ($scope.Marker.End) {
        $scope.Marker.End.setMap(null);
        $scope.Marker.End = null;
      }
      if ($scope.Settings.Points.End) {
        LatLng = new google.maps.LatLng($scope.Settings.Points.End[0], $scope.Settings.Points.End[1]);
        $scope.Marker.End = $scope.createMarker(LatLng, "End Point", "End Point", "red");
        AllPoints.push($scope.Marker.End);
      } else {
        $scope.Marker.End.setMap(null);
        $scope.Marker.End = null;
      }
      WayPoint = [];
      ref = $scope.Marker.WayPoint;
      for (j = 0, len = ref.length; j < len; j++) {
        wp = ref[j];
        wp.setMap(null);
        wp = null;
      }
      $scope.Marker.WayPoint = [];
      ref1 = $scope.Settings.Points.WayPoint;
      for (l = 0, len1 = ref1.length; l < len1; l++) {
        wp = ref1[l];
        LatLng = new google.maps.LatLng(wp[0], wp[1]);
        marker = $scope.createMarker(LatLng, "Way Point", "Way Point", "#green");
        $scope.Marker.WayPoint.push(marker);
        AllPoints.push(marker);
      }
      for (n = 0, len2 = AllPoints.length; n < len2; n++) {
        op = AllPoints[n];
        google.maps.event.addListener(op, 'dragend', function(m) {
          $scope.ShowRoute();
          $scope.Settings.VehicleStates = null;
          $scope.SavePoints();
        });
      }
    };
    $scope.ClearVehicleStates = function() {
      $scope.Settings.VehicleStates = [];
    };
    $scope.ShowRoute = function() {
      var ipos, j, len, ref, request, waypts, wp;
      if (!$scope.Marker.Start || !$scope.Marker.End) {
        return;
      }
      $scope.directionsDisplay.setMap(null);
      $scope.directionsDisplay.setMap($scope.map);
      waypts = [];
      ipos = 0;
      ref = $scope.Marker.WayPoint;
      for (j = 0, len = ref.length; j < len; j++) {
        wp = ref[j];
        waypts.push({
          location: wp.position,
          stopover: true
        });
      }
      request = {
        origin: $scope.Marker.Start.position,
        destination: $scope.Marker.End.position,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING
      };
      if ($scope.Settings.CircularTrip) {
        waypts.push({
          location: $scope.Marker.End.position,
          stopover: true
        });
        request.destination = $scope.Marker.Start.position;
      }
      $scope.directionsService.route(request, function(response, status) {
        var StepsNo, VehicleStatesNo, l, leg, len1, len2, n, ref1, ref2, step;
        if (status === google.maps.DirectionsStatus.OK) {
          $scope.Info.VehicleStatesNo = 0;
          $scope.Info.LegsNo = 0;
          $scope.Info.StepsNo = 0;
          $scope.$apply(function() {
            $scope.legs = response.routes[0].legs;
            return $scope.Info.LegsNo += $scope.legs.length;
          });
          StepsNo = 0;
          VehicleStatesNo = 0;
          ref1 = $scope.legs;
          for (l = 0, len1 = ref1.length; l < len1; l++) {
            leg = ref1[l];
            StepsNo += leg.steps.length;
            ref2 = leg.steps;
            for (n = 0, len2 = ref2.length; n < len2; n++) {
              step = ref2[n];
              VehicleStatesNo += step.path.length;
            }
          }
          $scope.$apply(function() {
            $scope.Info.StepsNo += StepsNo;
            return $scope.Info.VehicleStatesNo += VehicleStatesNo;
          });
          return $scope.directionsDisplay.setDirections(response);
        }
      });
    };
    $scope.CreateVehicleStates = function() {
      var CurrPoint, CurrentStateNo, FuelLevel, PrePoint, RandomBattery, RandomFuelEfficiency, RandomSpeed, RandonRPM, TotalVehicleStatesNo, amax, apos, distanceSoFar, imax, ipos, j, jmax, jpos, l, leg, len, len1, len2, len3, len4, n, newEvent, o, p, p0, p1, point, ref, ref1, ref2, ref3, ref4, step, thisStepDistance;
      RandonRPM = function() {
        return Math.floor($scope.Settings.RPM.Min + ($scope.Settings.RPM.Max - $scope.Settings.RPM.Min) * Math.random());
      };
      RandomSpeed = function() {
        return Math.floor($scope.Settings.Speed.Min + ($scope.Settings.Speed.Max - $scope.Settings.Speed.Min) * Math.random());
      };
      RandomFuelEfficiency = function() {
        return Math.floor($scope.Settings.FuelEfficiency.Min + ($scope.Settings.FuelEfficiency.Max - $scope.Settings.FuelEfficiency.Min) * Math.random());
      };
      RandomBattery = function() {
        return Math.floor($scope.Settings.Battery.Min + ($scope.Settings.Battery.Max - $scope.Settings.Battery.Min) * Math.random());
      };
      FuelLevel = function(i, m) {
        var fl;
        fl = $scope.Settings.Fuel.Max - ($scope.Settings.Fuel.Max - $scope.Settings.Fuel.Min) * i / m;
        return Math.round(10 * fl) / 10;
      };
      $scope.Settings.VehicleStates = [];
      TotalVehicleStatesNo = 0;
      CurrentStateNo = 0;
      ref = $scope.legs;
      for (j = 0, len = ref.length; j < len; j++) {
        leg = ref[j];
        ref1 = leg.steps;
        for (l = 0, len1 = ref1.length; l < len1; l++) {
          step = ref1[l];
          TotalVehicleStatesNo += step.path.length;
        }
      }
      newEvent = angular.copy(simulator2Factory.VehicleState);
      newEvent.Vehicle.Location.Lng = parseInt($scope.legs[0].steps[0].path[0].lng() * 100000) / 100000;
      newEvent.Vehicle.Location.Lat = parseInt($scope.legs[0].steps[0].path[0].lat() * 100000) / 100000;
      newEvent.Vehicle.RPM.Value = RandonRPM();
      newEvent.Vehicle.Speed.Value = RandomSpeed();
      newEvent.Vehicle.FuelEfficiency.Value = RandomFuelEfficiency();
      newEvent.Vehicle.Battery.Value = RandomBattery();
      newEvent.Vehicle.FuelLevel.Value = FuelLevel(CurrentStateNo, TotalVehicleStatesNo);
      newEvent.Vehicle.VirtualOdometer.Value = 0;
      newEvent.Vehicle.IgnitionState.Value = false;
      $scope.Settings.VehicleStates.push(newEvent);
      PrePoint = null;
      CurrPoint = null;
      distanceSoFar = 0;
      amax = $scope.legs.length;
      ref2 = $scope.legs;
      for (apos = n = 0, len2 = ref2.length; n < len2; apos = ++n) {
        leg = ref2[apos];
        imax = leg.steps.length;
        ref3 = leg.steps;
        for (ipos = o = 0, len3 = ref3.length; o < len3; ipos = ++o) {
          step = ref3[ipos];
          thisStepDistance = step.distance.value;
          jmax = step.path.length;
          ref4 = step.path;
          for (jpos = p = 0, len4 = ref4.length; p < len4; jpos = ++p) {
            point = ref4[jpos];
            PrePoint = CurrPoint;
            CurrPoint = point;
            newEvent = angular.copy(simulator2Factory.VehicleState);
            newEvent.Vehicle.Location.Lng = parseInt(CurrPoint.lng() * 100000) / 100000;
            newEvent.Vehicle.Location.Lat = parseInt(CurrPoint.lat() * 100000) / 100000;
            newEvent.Vehicle.RPM.Value = RandonRPM();
            newEvent.Vehicle.Speed.Value = RandomSpeed();
            newEvent.Vehicle.FuelEfficiency.Value = RandomFuelEfficiency();
            newEvent.Vehicle.Battery.Value = RandomBattery();
            newEvent.Vehicle.FuelLevel.Value = FuelLevel(CurrentStateNo, TotalVehicleStatesNo);
            newEvent.Vehicle.VirtualOdometer.Value = distanceSoFar + Math.round(thisStepDistance * (jpos + 1) / jmax);
            newEvent.Vehicle.IgnitionState.Value = true;
            if (PrePoint !== null) {
              p0 = new google.maps.LatLng(PrePoint.lat(), PrePoint.lng());
              p1 = new google.maps.LatLng(CurrPoint.lat(), CurrPoint.lng());
              newEvent.Vehicle.Heading.Value = parseInt(google.maps.geometry.spherical.computeHeading(p0, p1) * 10) / 10;
            }
            if (Math.random() * 100 <= $scope.Settings.NoOfVehicleStates) {
              $scope.Settings.VehicleStates.push(newEvent);
            }
            CurrentStateNo++;
          }
          distanceSoFar += thisStepDistance;
        }
      }
      newEvent = angular.copy(simulator2Factory.VehicleState);
      newEvent.Vehicle.Location.Lng = parseInt(CurrPoint.lng() * 100000) / 100000;
      newEvent.Vehicle.Location.Lat = parseInt(CurrPoint.lat() * 100000) / 100000;
      newEvent.Vehicle.RPM.Value = RandonRPM();
      newEvent.Vehicle.Speed.Value = RandomSpeed();
      newEvent.Vehicle.FuelEfficiency.Value = RandomFuelEfficiency();
      newEvent.Vehicle.Battery.Value = RandomBattery();
      newEvent.Vehicle.FuelLevel.Value = FuelLevel(CurrentStateNo, TotalVehicleStatesNo);
      newEvent.Vehicle.VirtualOdometer.Value = distanceSoFar;
      newEvent.Vehicle.IgnitionState.Value = false;
      $scope.Settings.VehicleStates.push(newEvent);
      $scope.SelState.No = 0;
      $scope.Settings.DurationLimit.Min = Math.round($scope.Settings.VehicleStates.length / 8);
      if ($scope.Settings.DurationLimit.Min < 10) {
        $scope.Settings.DurationLimit.Min = 10;
      }
      if ($scope.Settings.Duration < $scope.Settings.DurationLimit.Min) {
        $scope.Settings.Duration = $scope.Settings.DurationLimit.Min;
      }
    };
    $scope.SimulationPlay = function() {
      $scope.SimulationMode = "Play";
      $scope.SimulationNextStep();
    };
    $scope.SimulationPause = function() {
      $scope.SimulationMode = "Pause";
    };
    $scope.SimulationStop = function() {
      $scope.SimulationMode = "Stop";
      $scope.SimulationStep = 0;
      $scope.Info.LastNetworkLatency = 0;
      $scope.Info.TotalNetworkLatency = 0;
      $scope.Info.AvgNetworkLatency = 0;
      $scope.Info.LastWaitBeforeSendingEvent = 0;
      $scope.Info.TotalWaitBeforeSendingEvent = 0;
    };
    processSVData = function(data, status) {
      if (status === google.maps.StreetViewStatus.OK) {
        $scope.panorama.setPano(data.location.pano);
        $scope.panorama.setPov({
          heading: $scope.heading,
          pitch: 0
        });
        return $scope.panorama.setVisible(true);
      }
    };
    PrepareEvent = function(step) {
      var cEvent, code, codes, j, len, pEvent, sEvent;
      cEvent = $scope.Settings.VehicleStates[step];
      sEvent = angular.copy(cEvent);
      delete sEvent.ResponseTime;
      sEvent.IMEI = $scope.Vehicle.Imei;
      sEvent.Vehicle.VIN = $scope.Vehicle.VIN;
      sEvent.DeviceTime = (new Date()).toISOString();
      if (step !== 0) {
        pEvent = $scope.Settings.VehicleStates[step - 1];
        if (pEvent.Vehicle.Battery.Connected === false && sEvent.Vehicle.Battery.Connected === true) {
          sEvent.EventType = "6010";
        } else {
          sEvent.EventType = "0";
        }
      }
      codes = sEvent.Vehicle.DiagnosticCodes[0].Code;
      if (codes.indexOf(',') > -1) {
        codes = codes.split(',');
        sEvent.Vehicle.DiagnosticCodes = [];
        for (j = 0, len = codes.length; j < len; j++) {
          code = codes[j];
          sEvent.Vehicle.DiagnosticCodes.push({
            "Code": code
          });
        }
        if (!sEvent.IncludedData.Diagnostics) {
          delete sEvent.Vehicle.DiagnosticCodes;
          delete sEvent.Vehicle.MilStatus;
        }
        if (!sEvent.IncludedData.Ignition) {
          delete sEvent.Vehicle.IgnitionState;
        }
        if (!sEvent.IncludedData.Fuel) {
          delete sEvent.Vehicle.FuelLevel;
          delete sEvent.Vehicle.FuelEfficiency;
        }
        if (!sEvent.IncludedData.Battery) {
          delete sEvent.Vehicle.Battery;
          delete sEvent.EventType;
        }
      }
      return sEvent;
    };
    $scope.SimulationNextStep = function() {
      var cEvent, date1, sEvent;
      if ($scope.SimulationStep >= $scope.Settings.VehicleStates.length) {
        $scope.$apply(function() {
          return $scope.SimulationStop();
        });
        return;
      }
      cEvent = $scope.Settings.VehicleStates[$scope.SimulationStep];
      $scope.Info.LastEvent = cEvent;
      $scope.heading = cEvent.Heading;
      $scope.sv.getPanoramaByLocation(new google.maps.LatLng(cEvent.Vehicle.Location.Lat, cEvent.Vehicle.Location.Lng), 50, processSVData);
      date1 = new Date();
      sEvent = PrepareEvent($scope.SimulationStep);
      mojioRemote.POST("simulator", sEvent, function() {
        var date2, tspan;
        date2 = new Date();
        tspan = date2 - date1;
        $scope.Info.LastNetworkLatency = tspan;
        $scope.Info.TotalNetworkLatency += tspan;
        $scope.Info.AvgNetworkLatency = Math.round($scope.Info.TotalNetworkLatency / ($scope.SimulationStep + 1));
        cEvent.ResponseTime = new Date();
        $scope.SimulationPrepareNextStep(tspan);
        return console.log("FuelLevel:" + sEvent.Vehicle.FuelLevel.Value + " - FuelEfficiency:" + sEvent.Vehicle.FuelEfficiency.Value + " - Battery:" + sEvent.Vehicle.Battery.Value);
      }, function() {
        var date2, tspan;
        date2 = new Date();
        tspan = date2 - date1;
        $scope.Info.LastNetworkLatency = tspan;
        $scope.Info.TotalNetworkLatency += tspan;
        $scope.Info.AvgNetworkLatency = Math.round($scope.Info.TotalNetworkLatency / ($scope.SimulationStep + 1));
        $scope.SimulationPrepareNextStep(Math.max($scope.Info.LastNetworkLatency, $scope.Info.AvgNetworkLatency));
        return $scope.SimulationPrepareNextStep(tspan);
      });
    };
    $scope.SimulationPrepareNextStep = function(tspan) {
      var delay;
      $scope.SimulationStep++;
      if ($scope.SimulationStep >= $scope.Settings.VehicleStates.length) {
        if (!$scope.$$phase) {
          $scope.$apply(function() {
            return $scope.SimulationStop();
          });
        } else {
          $scope.SimulationStop();
        }
        return;
      } else if ($scope.SimulationMode === "Play") {
        delay = Math.round($scope.Settings.Duration * 1000 / $scope.Settings.VehicleStates.length);
        delay = delay - tspan;
        if (delay < 1) {
          delay = 1;
        }
        $scope.Info.LastWaitBeforeSendingEvent = delay;
        $scope.Info.TotalWaitBeforeSendingEvent += delay;
        $scope.SimulationTimer = window.setTimeout($scope.SimulationNextStep, delay);
      }
    };
    $scope.MinTripDuration = function() {
      var DurationText, sec;
      sec = $scope.Settings.VehicleStates.length / 2;
      DurationText = Math.round(sec / 60) + " minutes and " + (sec % 60) + " seconds";
      return DurationText;
    };
    $scope.SaveSimulator = function(Title) {
      $scope.Settings.Title = Title;
      $scope.SavedSimulatorTrip.push(angular.copy($scope.Settings));
      localStorage.setItem("SavedSimulatorTrip", JSON.stringify($scope.SavedSimulatorTrip));
      toaster.success({
        title: "Save Trip",
        body: "Trip Saved Successfully"
      });
    };
    $scope.LoadSimulator = function(sst) {
      $scope.Settings = angular.copy(sst);
      $scope.LoadPoints();
      $scope.ShowRoute();
    };
    $scope.DeleteSimulator = function(pos) {
      $scope.SavedSimulatorTrip.splice(pos, 1);
      localStorage.setItem("SavedSimulatorTrip", JSON.stringify($scope.SavedSimulatorTrip));
    };
    $scope.updateEventAttrib = function(ev) {
      var AddToList, DeleteFromList, k, v;
      AddToList = null;
      DeleteFromList = null;
      if (typeof ev.DTC !== "undefined") {
        AddToList = simulator2Factory.EventTemplate;
        DeleteFromList = simulator2Factory.DiagnosticEventTemplate;
      } else {
        return;
      }
      for (k in ev) {
        v = ev[k];
        if (k === "EventType" || k === "Location") {
          continue;
        } else if (typeof DeleteFromList[k] !== "undefined") {
          delete ev[k];
        }
      }
      for (k in AddToList) {
        v = AddToList[k];
        if (typeof ev[k] === "undefined") {
          ev[k] = AddToList[k];
        }
      }
    };
    $scope.FileContent = null;
    $scope.$watch('FileContent', function(newValue, oldValue) {
      if (newValue === null) {
        return;
      }
      $scope.Settings = JSON.parse(newValue);
      $scope.LoadPoints();
      return $scope.ShowRoute();
    });
    $scope.ExportSimulator = function() {
      var data;
      data = new Blob([JSON.stringify($scope.Settings)], {
        type: 'application/json'
      });
      saveAs(data, "Simulator.json");
    };
  }
]);

App.controller('simpleSimulatorController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', 'simulatorFactory', function($scope, $rootScope, $stateParams, mojioRemote, mojioLocal, mojioGlobal, toaster, $filter, simulatorFactory) {
    var ChooseEventType, RandomEventTypes, myOptions, panoramaOptions, processSVData;
    $scope.Settings = {
      Title: 'New Trip Title',
      Duration: 5,
      NoOfEvents: 30,
      RPM: {
        Min: 300,
        Max: 1200
      },
      Speed: {
        Min: 30,
        Max: 90
      },
      Fuel: {
        Min: 70,
        Max: 80
      },
      SpecialEventChance: 10,
      Points: {
        Start: null,
        End: null,
        WayPoint: []
      },
      CircularTrip: false,
      Events: null
    };
    $scope.Marker = {
      Start: null,
      End: null,
      WayPoint: []
    };
    $scope.Vehicle = {
      Selected: null
    };
    $scope.Vehicles = null;
    mojioRemote.GET("Users/" + mojioGlobal.data.user_data.id + "/Vehicles", 20, null, null, null, function(result) {
      $scope.Vehicles = result.Data;
      simulatorFactory.FixVehicleName($scope.Vehicles);
      return $scope.Vehicle.Selected = $scope.Vehicles[0]._id;
    });
    $scope.SimulationMode = "Stop";
    $scope.SimulationStep = 0;
    $scope.SimulationTimer = null;
    $scope.Info = {
      EventsNo: 0,
      LegsNo: 0,
      StepsNo: 0,
      LastImportantEvent: null,
      LastEvent: null,
      LastNetworkLatency: 0,
      TotalNetworkLatency: 0,
      AvgNetworkLatency: 0,
      LastWaitBeforeSendingEvent: 0,
      TotalWaitBeforeSendingEvent: 0
    };
    $scope.legs = null;
    RandomEventTypes = [];
    $scope.AllRandomEventTypes = {
      "ConnectionLost": true,
      "LowBattery": true,
      "Accident": true,
      "Acceleration": true,
      "Deceleration": true
    };
    $scope.createMarker = function(latlng, name, html, color) {
      var contentString, marker;
      contentString = html;
      marker = new google.maps.Marker({
        position: latlng,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          strokeColor: color,
          scale: 3
        },
        draggable: true,
        map: $scope.map
      });
      return marker;
    };
    $scope.PointType = "s";
    myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(43.907787, -79.359741),
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      },
      navigationControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    $scope.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    $scope.directionsDisplay = new google.maps.DirectionsRenderer();
    $scope.directionsService = new google.maps.DirectionsService();
    panoramaOptions = {
      clickToGo: false,
      disableDefaultUI: true
    };
    $scope.panorama = new google.maps.StreetViewPanorama(document.getElementById("pano"), panoramaOptions);
    $scope.sv = new google.maps.StreetViewService();
    $scope.map.setStreetView($scope.panorama);
    $scope.SavePoints = function() {
      var WayPoint, j, len, ref, wp;
      if ($scope.Marker.Start) {
        $scope.Settings.Points.Start = [$scope.Marker.Start.position.lat(), $scope.Marker.Start.position.lng()];
      } else {
        $scope.Settings.Points.Start = null;
      }
      if ($scope.Marker.End) {
        $scope.Settings.Points.End = [$scope.Marker.End.position.lat(), $scope.Marker.End.position.lng()];
      } else {
        $scope.Settings.Points.End = null;
      }
      WayPoint = [];
      ref = $scope.Marker.WayPoint;
      for (j = 0, len = ref.length; j < len; j++) {
        wp = ref[j];
        WayPoint.push([wp.position.lat(), wp.position.lng()]);
      }
      $scope.Settings.Points.WayPoint = WayPoint;
    };
    $scope.LoadPoints = function() {
      var AllPoints, LatLng, WayPoint, j, k, l, len, len1, len2, marker, op, ref, ref1, wp;
      AllPoints = [];
      if ($scope.Marker.Start) {
        $scope.Marker.Start.setMap(null);
        $scope.Marker.Start = null;
      }
      if ($scope.Settings.Points.Start) {
        LatLng = new google.maps.LatLng($scope.Settings.Points.Start[0], $scope.Settings.Points.Start[1]);
        $scope.Marker.Start = $scope.createMarker(LatLng, "Start Point", "Start Point", "blue");
        AllPoints.push($scope.Marker.Start);
      } else {
        $scope.Marker.Start.setMap(null);
        $scope.Marker.Start = null;
      }
      if ($scope.Marker.End) {
        $scope.Marker.End.setMap(null);
        $scope.Marker.End = null;
      }
      if ($scope.Settings.Points.End) {
        LatLng = new google.maps.LatLng($scope.Settings.Points.End[0], $scope.Settings.Points.End[1]);
        $scope.Marker.End = $scope.createMarker(LatLng, "End Point", "End Point", "red");
        AllPoints.push($scope.Marker.End);
      } else {
        $scope.Marker.End.setMap(null);
        $scope.Marker.End = null;
      }
      WayPoint = [];
      ref = $scope.Marker.WayPoint;
      for (j = 0, len = ref.length; j < len; j++) {
        wp = ref[j];
        wp.setMap(null);
        wp = null;
      }
      $scope.Marker.WayPoint = [];
      ref1 = $scope.Settings.Points.WayPoint;
      for (k = 0, len1 = ref1.length; k < len1; k++) {
        wp = ref1[k];
        LatLng = new google.maps.LatLng(wp[0], wp[1]);
        marker = $scope.createMarker(LatLng, "Way Point", "Way Point", "#green");
        $scope.Marker.WayPoint.push(marker);
        AllPoints.push(marker);
      }
      for (l = 0, len2 = AllPoints.length; l < len2; l++) {
        op = AllPoints[l];
        google.maps.event.addListener(op, 'dragend', function(m) {
          $scope.ShowRoute();
          $scope.Settings.Events = null;
          $scope.SavePoints();
        });
      }
    };
    $scope.ClearEvents = function() {
      $scope.Settings.Events = [];
    };
    $scope.showVehicle = function() {
      return $filter('filter')($scope.Vehicles, {
        _id: $scope.Vehicle.Selected
      })[0].Name;
    };
    $scope.ShowRoute = function() {
      var ipos, j, len, ref, request, waypts, wp;
      if (!$scope.Marker.Start || !$scope.Marker.End) {
        return;
      }
      $scope.directionsDisplay.setMap(null);
      $scope.directionsDisplay.setMap($scope.map);
      waypts = [];
      ipos = 0;
      ref = $scope.Marker.WayPoint;
      for (j = 0, len = ref.length; j < len; j++) {
        wp = ref[j];
        waypts.push({
          location: wp.position,
          stopover: true
        });
      }
      request = {
        origin: $scope.Marker.Start.position,
        destination: $scope.Marker.End.position,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING
      };
      if ($scope.Settings.CircularTrip) {
        waypts.push({
          location: $scope.Marker.End.position,
          stopover: true
        });
        request.destination = $scope.Marker.Start.position;
      }
      $scope.directionsService.route(request, function(response, status) {
        var EventsNo, StepsNo, k, l, leg, len1, len2, ref1, ref2, step;
        if (status !== google.maps.DirectionsStatus.OK) {
          $scope.PrepareSimulator();
          return;
        }
        $scope.Info.EventsNo = 0;
        $scope.Info.LegsNo = 0;
        $scope.Info.StepsNo = 0;
        $scope.$apply(function() {
          $scope.legs = response.routes[0].legs;
          return $scope.Info.LegsNo += $scope.legs.length;
        });
        StepsNo = 0;
        EventsNo = 0;
        ref1 = $scope.legs;
        for (k = 0, len1 = ref1.length; k < len1; k++) {
          leg = ref1[k];
          StepsNo += leg.steps.length;
          ref2 = leg.steps;
          for (l = 0, len2 = ref2.length; l < len2; l++) {
            step = ref2[l];
            EventsNo += step.path.length;
          }
        }
        $scope.$apply(function() {
          $scope.Info.StepsNo += StepsNo;
          return $scope.Info.EventsNo += EventsNo;
        });
        return $scope.directionsDisplay.setDirections(response);
      });
    };
    ChooseEventType = function(legsNo, stepNo, pathNo, legsMax, stepMax, pathMax) {
      var eType;
      eType = "TripStatus";
      if (legsNo === 0 && stepNo === 0 && pathNo === 0) {
        eType = "MovementStart";
      } else if (pathNo === 0) {
        eType = "HeadingChange";
      } else if (legsNo === legsMax - 1 && stepNo === stepMax - 1 && pathNo === pathMax - 1) {
        eType = "MovementStop";
      } else if (Math.random() * 100 > $scope.Settings.NoOfEvents) {
        eType = "";
      } else if (Math.random() * 100 <= $scope.Settings.SpecialEventChance) {
        eType = RandomEventTypes[Math.floor(Math.random() * RandomEventTypes.length)];
      }
      return eType;
    };
    $scope.CreateEvents = function() {
      var CurrPoint, CurrentEventNo, FuelLevel, PrePoint, RandomSpeed, RandonRPM, TotalEventsNo, amax, apos, distanceSoFar, ev, imax, ipos, j, jmax, jpos, k, l, leg, len, len1, len2, len3, len4, n, newEvent, o, p0, p1, point, ref, ref1, ref2, ref3, ref4, step, thisStepDistance;
      RandomEventTypes = [];
      for (ev in $scope.AllRandomEventTypes) {
        if ($scope.AllRandomEventTypes[ev]) {
          RandomEventTypes.push(ev);
        }
      }
      $scope.Settings.Events = [];
      TotalEventsNo = 0;
      CurrentEventNo = 0;
      ref = $scope.legs;
      for (j = 0, len = ref.length; j < len; j++) {
        leg = ref[j];
        ref1 = leg.steps;
        for (k = 0, len1 = ref1.length; k < len1; k++) {
          step = ref1[k];
          TotalEventsNo += step.path.length;
        }
      }
      newEvent = angular.copy(simulatorFactory.EventTemplate);
      newEvent.EventType = "IgnitionOn";
      newEvent.Location.Lng = $scope.legs[0].steps[0].path[0].lng();
      newEvent.Location.Lat = $scope.legs[0].steps[0].path[0].lat();
      newEvent.Odometer = 0;
      $scope.Settings.Events.push(newEvent);
      PrePoint = null;
      CurrPoint = null;
      RandonRPM = function() {
        return Math.floor($scope.Settings.RPM.Min + ($scope.Settings.RPM.Max - $scope.Settings.RPM.Min) * Math.random());
      };
      RandomSpeed = function() {
        return Math.floor($scope.Settings.Speed.Min + ($scope.Settings.Speed.Max - $scope.Settings.Speed.Min) * Math.random());
      };
      FuelLevel = function(i, m) {
        var fl;
        fl = $scope.Settings.Fuel.Max - ($scope.Settings.Fuel.Max - $scope.Settings.Fuel.Min) * i / m;
        return Math.round(10 * fl) / 10;
      };
      distanceSoFar = 0;
      amax = $scope.legs.length;
      ref2 = $scope.legs;
      for (apos = l = 0, len2 = ref2.length; l < len2; apos = ++l) {
        leg = ref2[apos];
        imax = leg.steps.length;
        ref3 = leg.steps;
        for (ipos = n = 0, len3 = ref3.length; n < len3; ipos = ++n) {
          step = ref3[ipos];
          thisStepDistance = step.distance.value;
          jmax = step.path.length;
          ref4 = step.path;
          for (jpos = o = 0, len4 = ref4.length; o < len4; jpos = ++o) {
            point = ref4[jpos];
            PrePoint = CurrPoint;
            CurrPoint = point;
            newEvent = angular.copy(simulatorFactory.EventTemplate);
            newEvent.EventType = ChooseEventType(apos, ipos, jpos, amax, imax, jmax);
            if (newEvent.EventType.length === 0) {
              jpos++;
              CurrentEventNo++;
              continue;
            }
            newEvent.Location.Lng = CurrPoint.lng();
            newEvent.Location.Lat = CurrPoint.lat();
            newEvent.RPM = RandonRPM();
            newEvent.Speed = RandomSpeed();
            newEvent.FuelLevel = FuelLevel(CurrentEventNo, TotalEventsNo);
            newEvent.Odometer = (distanceSoFar + Math.round(thisStepDistance * (jpos + 1) / jmax)) / 1000;
            if (PrePoint !== null) {
              p0 = new google.maps.LatLng(PrePoint.lat(), PrePoint.lng());
              p1 = new google.maps.LatLng(CurrPoint.lat(), CurrPoint.lng());
              newEvent.Heading = google.maps.geometry.spherical.computeHeading(p0, p1);
            }
            $scope.Settings.Events.push(newEvent);
            CurrentEventNo++;
          }
          distanceSoFar += thisStepDistance;
        }
      }
      newEvent = angular.copy(simulatorFactory.EventTemplate);
      newEvent.EventType = "IgnitionOff";
      newEvent.Location.Lng = CurrPoint.lng();
      newEvent.Location.Lat = CurrPoint.lat();
      newEvent.Odometer = distanceSoFar / 1000;
      $scope.Settings.Events.push(newEvent);
    };
    $scope.SimulationPlay = function() {
      $scope.SimulationMode = "Play";
      $scope.SimulationNextStep();
    };
    $scope.SimulationPause = function() {
      $scope.SimulationMode = "Pause";
    };
    $scope.SimulationStop = function() {
      $scope.SimulationMode = "Stop";
      $scope.SimulationStep = 0;
      $scope.Info.LastNetworkLatency = 0;
      $scope.Info.TotalNetworkLatency = 0;
      $scope.Info.AvgNetworkLatency = 0;
      $scope.Info.LastWaitBeforeSendingEvent = 0;
      $scope.Info.TotalWaitBeforeSendingEvent = 0;
    };
    processSVData = function(data, status) {
      if (status === google.maps.StreetViewStatus.OK) {
        $scope.panorama.setPano(data.location.pano);
        $scope.panorama.setPov({
          heading: $scope.heading,
          pitch: 0
        });
        return $scope.panorama.setVisible(true);
      }
    };
    $scope.SimulationNextStep = function() {
      var cEvent, date1, sEvent;
      if ($scope.SimulationStep >= $scope.Settings.Events.length) {
        $scope.$apply(function() {
          return $scope.SimulationStop();
        });
        return;
      }
      cEvent = $scope.Settings.Events[$scope.SimulationStep];
      $scope.Info.LastEvent = cEvent;
      if (cEvent.EventType !== "TripStatus") {
        $scope.Info.LastImportantEvent = cEvent;
      }
      $scope.heading = cEvent.Heading;
      $scope.sv.getPanoramaByLocation(new google.maps.LatLng(cEvent.Location.Lat, cEvent.Location.Lng), 50, processSVData);
      date1 = new Date();
      cEvent.Time = new Date();
      sEvent = angular.copy(cEvent);
      delete sEvent._viewStatus;
      delete sEvent.ResponseTime;
      sEvent.VehicleId = $scope.Vehicle.Selected;
      mojioRemote.POST("events", sEvent, function() {
        var date2, tspan;
        date2 = new Date();
        tspan = date2 - date1;
        $scope.Info.LastNetworkLatency = tspan;
        $scope.Info.TotalNetworkLatency += tspan;
        $scope.Info.AvgNetworkLatency = Math.round($scope.Info.TotalNetworkLatency / ($scope.SimulationStep + 1));
        cEvent.ResponseTime = new Date();
        return $scope.SimulationPrepareNextStep(tspan);
      }, function() {
        var date2, tspan;
        date2 = new Date();
        tspan = date2 - date1;
        $scope.Info.LastNetworkLatency = tspan;
        $scope.Info.TotalNetworkLatency += tspan;
        $scope.Info.AvgNetworkLatency = Math.round($scope.Info.TotalNetworkLatency / ($scope.SimulationStep + 1));
        $scope.SimulationPrepareNextStep(Math.max($scope.Info.LastNetworkLatency, $scope.Info.AvgNetworkLatency));
        return $scope.SimulationPrepareNextStep();
      });
    };
    $scope.SimulationPrepareNextStep = function(tspan) {
      var delay;
      $scope.SimulationStep++;
      if ($scope.SimulationStep >= $scope.Settings.Events.length) {
        if (!$scope.$$phase) {
          $scope.$apply(function() {
            return $scope.SimulationStop();
          });
        } else {
          $scope.SimulationStop();
        }
        return;
      } else if ($scope.SimulationMode === "Play") {
        delay = Math.round($scope.Settings.Duration * 60 * 1000 / $scope.Settings.Events.length);
        delay = delay - tspan;
        if (delay < 1) {
          delay = 1;
        }
        $scope.Info.LastWaitBeforeSendingEvent = delay;
        $scope.Info.TotalWaitBeforeSendingEvent += delay;
        $scope.SimulationTimer = window.setTimeout($scope.SimulationNextStep, delay);
      }
    };
    $scope.SimpleSimulationPlay = function() {
      $scope.CreateEvents();
      $scope.SimulationPlay();
    };
    $scope.PrepareSimulator = function() {
      var CitiesLatLng, OneCity, latlng;
      console.log("prepare");
      if ($scope.Marker.Start) {
        $scope.Marker.Start.setMap(null);
        $scope.Marker.Start = null;
      }
      if ($scope.Marker.End) {
        $scope.Marker.End.setMap(null);
        $scope.Marker.End = null;
      }
      CitiesLatLng = [[49.9, 97.1], [48.45, 123.33], [47.2, 122.3]];
      OneCity = CitiesLatLng[Math.round((CitiesLatLng.length - 1) * Math.random())];
      latlng = new google.maps.LatLng(OneCity[0] + .2 - 0.4 * Math.random(), -OneCity[1] + .2 - 0.4 * Math.random());
      $scope.Marker.Start = $scope.createMarker(latlng, "Start Point", "Start Point", "blue");
      latlng = new google.maps.LatLng(OneCity[0] + .2 - 0.4 * Math.random(), -OneCity[1] + .2 - 0.4 * Math.random());
      $scope.Marker.End = $scope.createMarker(latlng, "End Point", "End Point", "red");
      $scope.ShowRoute();
      $scope.Settings.Events = null;
      $scope.SavePoints();
    };
    return $scope.PrepareSimulator();
  }
]);

App.controller('simulatorController', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', 'simulatorFactory', function($scope, $rootScope, $stateParams, mojioRemote, mojioLocal, mojioGlobal, toaster, $filter, simulatorFactory) {
    var ChooseEventType, RandomEventTypes, myOptions, panoramaOptions, processSVData;
    $scope.EventTypes = simulatorFactory.EventTypes;
    $scope.ShowEventsMoreOptions = false;
    $scope.Settings = {
      Title: 'New Trip Title',
      Duration: 2,
      NoOfEvents: 30,
      RPM: {
        Min: 300,
        Max: 1200
      },
      Speed: {
        Min: 30,
        Max: 90
      },
      Fuel: {
        Min: 70,
        Max: 80
      },
      SpecialEventChance: 0,
      Points: {
        Start: null,
        End: null,
        WayPoint: []
      },
      CircularTrip: false,
      Events: null
    };
    $scope.Marker = {
      Start: null,
      End: null,
      WayPoint: []
    };
    $scope.CircularTrip = function() {
      $scope.Settings.CircularTrip = !$scope.Settings.CircularTrip;
      $scope.ShowRoute();
      $scope.Settings.Events = null;
    };
    $scope.Vehicle = {
      Selected: null
    };
    $scope.Vehicles = null;
    $scope.SavedSimulatorTrip = [];
    if (typeof localStorage["SavedSimulatorTrip"] !== "undefined") {
      $scope.SavedSimulatorTrip = JSON.parse(localStorage["SavedSimulatorTrip"]);
    }
    mojioRemote.GET("Users/" + mojioGlobal.data.user_data.id + "/Vehicles", 20, null, null, null, function(result) {
      $scope.Vehicles = result.Data;
      simulatorFactory.FixVehicleName($scope.Vehicles);
      return $scope.Vehicle.Selected = $scope.Vehicles[0]._id;
    });
    $scope.SimulationMode = "Stop";
    $scope.SimulationStep = 0;
    $scope.SimulationTimer = null;
    $scope.Info = {
      EventsNo: 0,
      LegsNo: 0,
      StepsNo: 0,
      LastImportantEvent: null,
      LastEvent: null,
      LastNetworkLatency: 0,
      TotalNetworkLatency: 0,
      AvgNetworkLatency: 0,
      LastWaitBeforeSendingEvent: 0,
      TotalWaitBeforeSendingEvent: 0
    };
    $scope.legs = null;
    RandomEventTypes = [];
    $scope.AllRandomEventTypes = {
      "ConnectionLost": true,
      "LowBattery": true,
      "Accident": true,
      "Acceleration": true,
      "Deceleration": true
    };
    $scope.createMarker = function(latlng, name, html, color) {
      var contentString, marker;
      contentString = html;
      marker = new google.maps.Marker({
        position: latlng,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          strokeColor: color,
          scale: 3
        },
        draggable: true,
        map: $scope.map
      });
      google.maps.event.trigger(marker, 'click');
      return marker;
    };
    $scope.PointType = "s";
    myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(43.907787, -79.359741),
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      },
      navigationControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    $scope.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    $scope.directionsDisplay = new google.maps.DirectionsRenderer();
    $scope.directionsService = new google.maps.DirectionsService();
    panoramaOptions = {
      clickToGo: false,
      disableDefaultUI: true
    };
    $scope.panorama = new google.maps.StreetViewPanorama(document.getElementById("pano"), panoramaOptions);
    $scope.sv = new google.maps.StreetViewService();
    $scope.map.setStreetView($scope.panorama);
    google.maps.event.addListener($scope.map, 'click', function(event) {
      var CurrentMarker;
      CurrentMarker = null;
      if ($scope.PointType === "s") {
        if ($scope.Marker.Start) {
          $scope.Marker.Start.setMap(null);
          $scope.Marker.Start = null;
        }
        $scope.Marker.Start = $scope.createMarker(event.latLng, "Start Point", "Start Point", "blue");
        CurrentMarker = $scope.Marker.Start;
        $scope.$apply(function() {
          return $scope.PointType = "e";
        });
      } else if ($scope.PointType === "e") {
        if ($scope.Marker.End) {
          $scope.Marker.End.setMap(null);
          $scope.Marker.End = null;
        }
        $scope.Marker.End = $scope.createMarker(event.latLng, "End Point", "End Point", "red");
        CurrentMarker = $scope.Marker.End;
        $scope.$apply(function() {
          return $scope.PointType = "w";
        });
      } else if ($scope.PointType === "w") {
        if ($scope.Marker.WayPoint.length < 7) {
          $scope.Marker.WayPoint.push($scope.createMarker(event.latLng, "Way Point", "Way Point", "#green"));
          CurrentMarker = $scope.Marker.WayPoint[$scope.Marker.WayPoint.length - 1];
        }
      }
      if (CurrentMarker !== null) {
        google.maps.event.addListener(CurrentMarker, 'dragend', function(m) {
          $scope.ShowRoute();
          $scope.Settings.Events = null;
          $scope.SavePoints();
        });
      }
      $scope.ShowRoute();
      $scope.Settings.Events = null;
      return $scope.SavePoints();
    });
    $scope.ClearPoints = function() {
      var j, len, ref, wp;
      $scope.directionsDisplay.setDirections({
        routes: []
      });
      $scope.legs = null;
      $scope.PointType = "s";
      if ($scope.Marker.Start) {
        $scope.Marker.Start.setMap(null);
        $scope.Marker.Start = null;
      }
      if ($scope.Marker.End) {
        $scope.Marker.End.setMap(null);
        $scope.Marker.End = null;
      }
      ref = $scope.Marker.WayPoint;
      for (j = 0, len = ref.length; j < len; j++) {
        wp = ref[j];
        if (wp) {
          wp.setMap(null);
          wp = null;
        }
      }
      $scope.Marker.WayPoint = [];
      $scope.Settings.Events = null;
      $scope.SavePoints();
    };
    $scope.SavePoints = function() {
      var WayPoint, j, len, ref, wp;
      if ($scope.Marker.Start) {
        $scope.Settings.Points.Start = [$scope.Marker.Start.position.lat(), $scope.Marker.Start.position.lng()];
      } else {
        $scope.Settings.Points.Start = null;
      }
      if ($scope.Marker.End) {
        $scope.Settings.Points.End = [$scope.Marker.End.position.lat(), $scope.Marker.End.position.lng()];
      } else {
        $scope.Settings.Points.End = null;
      }
      WayPoint = [];
      ref = $scope.Marker.WayPoint;
      for (j = 0, len = ref.length; j < len; j++) {
        wp = ref[j];
        WayPoint.push([wp.position.lat(), wp.position.lng()]);
      }
      $scope.Settings.Points.WayPoint = WayPoint;
    };
    $scope.LoadPoints = function() {
      var AllPoints, LatLng, WayPoint, j, l, len, len1, len2, marker, n, op, ref, ref1, wp;
      AllPoints = [];
      if ($scope.Marker.Start) {
        $scope.Marker.Start.setMap(null);
        $scope.Marker.Start = null;
      }
      if ($scope.Settings.Points.Start) {
        LatLng = new google.maps.LatLng($scope.Settings.Points.Start[0], $scope.Settings.Points.Start[1]);
        $scope.Marker.Start = $scope.createMarker(LatLng, "Start Point", "Start Point", "blue");
        AllPoints.push($scope.Marker.Start);
      } else {
        $scope.Marker.Start.setMap(null);
        $scope.Marker.Start = null;
      }
      if ($scope.Marker.End) {
        $scope.Marker.End.setMap(null);
        $scope.Marker.End = null;
      }
      if ($scope.Settings.Points.End) {
        LatLng = new google.maps.LatLng($scope.Settings.Points.End[0], $scope.Settings.Points.End[1]);
        $scope.Marker.End = $scope.createMarker(LatLng, "End Point", "End Point", "red");
        AllPoints.push($scope.Marker.End);
      } else {
        $scope.Marker.End.setMap(null);
        $scope.Marker.End = null;
      }
      WayPoint = [];
      ref = $scope.Marker.WayPoint;
      for (j = 0, len = ref.length; j < len; j++) {
        wp = ref[j];
        wp.setMap(null);
        wp = null;
      }
      $scope.Marker.WayPoint = [];
      ref1 = $scope.Settings.Points.WayPoint;
      for (l = 0, len1 = ref1.length; l < len1; l++) {
        wp = ref1[l];
        LatLng = new google.maps.LatLng(wp[0], wp[1]);
        marker = $scope.createMarker(LatLng, "Way Point", "Way Point", "#green");
        $scope.Marker.WayPoint.push(marker);
        AllPoints.push(marker);
      }
      for (n = 0, len2 = AllPoints.length; n < len2; n++) {
        op = AllPoints[n];
        google.maps.event.addListener(op, 'dragend', function(m) {
          $scope.ShowRoute();
          $scope.Settings.Events = null;
          $scope.SavePoints();
        });
      }
    };
    $scope.ClearEvents = function() {
      $scope.Settings.Events = [];
    };
    $scope.showVehicle = function() {
      return $filter('filter')($scope.Vehicles, {
        _id: $scope.Vehicle.Selected
      })[0].Name;
    };
    $scope.ShowRoute = function() {
      var ipos, j, len, ref, request, waypts, wp;
      if (!$scope.Marker.Start || !$scope.Marker.End) {
        return;
      }
      $scope.directionsDisplay.setMap(null);
      $scope.directionsDisplay.setMap($scope.map);
      waypts = [];
      ipos = 0;
      ref = $scope.Marker.WayPoint;
      for (j = 0, len = ref.length; j < len; j++) {
        wp = ref[j];
        waypts.push({
          location: wp.position,
          stopover: true
        });
      }
      request = {
        origin: $scope.Marker.Start.position,
        destination: $scope.Marker.End.position,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING
      };
      if ($scope.Settings.CircularTrip) {
        waypts.push({
          location: $scope.Marker.End.position,
          stopover: true
        });
        request.destination = $scope.Marker.Start.position;
      }
      $scope.directionsService.route(request, function(response, status) {
        var EventsNo, StepsNo, l, leg, len1, len2, n, ref1, ref2, step;
        if (status === google.maps.DirectionsStatus.OK) {
          $scope.Info.EventsNo = 0;
          $scope.Info.LegsNo = 0;
          $scope.Info.StepsNo = 0;
          $scope.$apply(function() {
            $scope.legs = response.routes[0].legs;
            return $scope.Info.LegsNo += $scope.legs.length;
          });
          StepsNo = 0;
          EventsNo = 0;
          ref1 = $scope.legs;
          for (l = 0, len1 = ref1.length; l < len1; l++) {
            leg = ref1[l];
            StepsNo += leg.steps.length;
            ref2 = leg.steps;
            for (n = 0, len2 = ref2.length; n < len2; n++) {
              step = ref2[n];
              EventsNo += step.path.length;
            }
          }
          $scope.$apply(function() {
            $scope.Info.StepsNo += StepsNo;
            return $scope.Info.EventsNo += EventsNo;
          });
          return $scope.directionsDisplay.setDirections(response);
        }
      });
    };
    ChooseEventType = function(legsNo, stepNo, pathNo, legsMax, stepMax, pathMax) {
      var eType;
      eType = "TripStatus";
      if (legsNo === 0 && stepNo === 0 && pathNo === 0) {
        eType = "MovementStart";
      } else if (pathNo === 0) {
        eType = "HeadingChange";
      } else if (legsNo === legsMax - 1 && stepNo === stepMax - 1 && pathNo === pathMax - 1) {
        eType = "MovementStop";
      } else if (Math.random() * 100 > $scope.Settings.NoOfEvents) {
        eType = "";
      } else if (Math.random() * 100 <= $scope.Settings.SpecialEventChance) {
        eType = RandomEventTypes[Math.floor(Math.random() * RandomEventTypes.length)];
      }
      return eType;
    };
    $scope.CreateEvents = function() {
      var CurrPoint, CurrentEventNo, FuelLevel, PrePoint, RandomSpeed, RandonRPM, TotalEventsNo, amax, apos, distanceSoFar, ev, imax, ipos, j, jmax, jpos, l, leg, len, len1, len2, len3, len4, n, newEvent, o, p, p0, p1, point, ref, ref1, ref2, ref3, ref4, step, thisStepDistance;
      RandomEventTypes = [];
      for (ev in $scope.AllRandomEventTypes) {
        if ($scope.AllRandomEventTypes[ev]) {
          RandomEventTypes.push(ev);
        }
      }
      $scope.Settings.Events = [];
      TotalEventsNo = 0;
      CurrentEventNo = 0;
      ref = $scope.legs;
      for (j = 0, len = ref.length; j < len; j++) {
        leg = ref[j];
        ref1 = leg.steps;
        for (l = 0, len1 = ref1.length; l < len1; l++) {
          step = ref1[l];
          TotalEventsNo += step.path.length;
        }
      }
      newEvent = angular.copy(simulatorFactory.EventTemplate);
      newEvent.EventType = "IgnitionOn";
      newEvent.Location.Lng = $scope.legs[0].steps[0].path[0].lng();
      newEvent.Location.Lat = $scope.legs[0].steps[0].path[0].lat();
      newEvent.Odometer = 0;
      newEvent._viewStatus = 'c';
      $scope.Settings.Events.push(newEvent);
      PrePoint = null;
      CurrPoint = null;
      RandonRPM = function() {
        return Math.floor($scope.Settings.RPM.Min + ($scope.Settings.RPM.Max - $scope.Settings.RPM.Min) * Math.random());
      };
      RandomSpeed = function() {
        return Math.floor($scope.Settings.Speed.Min + ($scope.Settings.Speed.Max - $scope.Settings.Speed.Min) * Math.random());
      };
      FuelLevel = function(i, m) {
        var fl;
        fl = $scope.Settings.Fuel.Max - ($scope.Settings.Fuel.Max - $scope.Settings.Fuel.Min) * i / m;
        return Math.round(10 * fl) / 10;
      };
      distanceSoFar = 0;
      amax = $scope.legs.length;
      ref2 = $scope.legs;
      for (apos = n = 0, len2 = ref2.length; n < len2; apos = ++n) {
        leg = ref2[apos];
        imax = leg.steps.length;
        ref3 = leg.steps;
        for (ipos = o = 0, len3 = ref3.length; o < len3; ipos = ++o) {
          step = ref3[ipos];
          thisStepDistance = step.distance.value;
          jmax = step.path.length;
          ref4 = step.path;
          for (jpos = p = 0, len4 = ref4.length; p < len4; jpos = ++p) {
            point = ref4[jpos];
            PrePoint = CurrPoint;
            CurrPoint = point;
            newEvent = angular.copy(simulatorFactory.EventTemplate);
            newEvent.EventType = ChooseEventType(apos, ipos, jpos, amax, imax, jmax);
            newEvent._viewStatus = 'c';
            if (newEvent.EventType.length === 0) {
              jpos++;
              CurrentEventNo++;
              continue;
            }
            newEvent.Location.Lng = CurrPoint.lng();
            newEvent.Location.Lat = CurrPoint.lat();
            newEvent.RPM = RandonRPM();
            newEvent.Speed = RandomSpeed();
            newEvent.FuelLevel = FuelLevel(CurrentEventNo, TotalEventsNo);
            newEvent.Odometer = (distanceSoFar + Math.round(thisStepDistance * (jpos + 1) / jmax)) / 1000;
            if (PrePoint !== null) {
              p0 = new google.maps.LatLng(PrePoint.lat(), PrePoint.lng());
              p1 = new google.maps.LatLng(CurrPoint.lat(), CurrPoint.lng());
              newEvent.Heading = google.maps.geometry.spherical.computeHeading(p0, p1);
            }
            $scope.Settings.Events.push(newEvent);
            CurrentEventNo++;
          }
          distanceSoFar += thisStepDistance / 1000;
        }
      }
      newEvent = angular.copy(simulatorFactory.EventTemplate);
      newEvent.EventType = "IgnitionOff";
      newEvent._viewStatus = 'c';
      newEvent.Location.Lng = CurrPoint.lng();
      newEvent.Location.Lat = CurrPoint.lat();
      newEvent.Odometer = distanceSoFar;
      $scope.Settings.Events.push(newEvent);
    };
    $scope.showEventField = function(key) {
      if (key[0] === '_' || key === "Accelerometer" || key === "Location" || key === "EventType") {
        return false;
      }
      if (key === "TripId" || key === "VehicleId" || key === "Type" || key === "MojioId") {
        return false;
      }
      if (key === "OwnerId") {
        return false;
      }
      return true;
    };
    $scope.ChangeViewStatus = function(ev) {
      if (ev._viewStatus === 'c') {
        ev._viewStatus = 'e';
      } else {
        ev._viewStatus = 'c';
      }
    };
    $scope.SimulationPlay = function() {
      $scope.SimulationMode = "Play";
      $scope.SimulationNextStep();
    };
    $scope.SimulationPause = function() {
      $scope.SimulationMode = "Pause";
    };
    $scope.SimulationStop = function() {
      $scope.SimulationMode = "Stop";
      $scope.SimulationStep = 0;
      $scope.Info.LastNetworkLatency = 0;
      $scope.Info.TotalNetworkLatency = 0;
      $scope.Info.AvgNetworkLatency = 0;
      $scope.Info.LastWaitBeforeSendingEvent = 0;
      $scope.Info.TotalWaitBeforeSendingEvent = 0;
    };
    processSVData = function(data, status) {
      if (status === google.maps.StreetViewStatus.OK) {
        $scope.panorama.setPano(data.location.pano);
        $scope.panorama.setPov({
          heading: $scope.heading,
          pitch: 0
        });
        return $scope.panorama.setVisible(true);
      }
    };
    $scope.SimulationNextStep = function() {
      var cEvent, date1, sEvent;
      if ($scope.SimulationStep >= $scope.Settings.Events.length) {
        $scope.$apply(function() {
          return $scope.SimulationStop();
        });
        return;
      }
      cEvent = $scope.Settings.Events[$scope.SimulationStep];
      $scope.Info.LastEvent = cEvent;
      if (cEvent.EventType !== "TripStatus") {
        $scope.Info.LastImportantEvent = cEvent;
      }
      $scope.heading = cEvent.Heading;
      $scope.sv.getPanoramaByLocation(new google.maps.LatLng(cEvent.Location.Lat, cEvent.Location.Lng), 50, processSVData);
      date1 = new Date();
      cEvent.Time = new Date();
      sEvent = angular.copy(cEvent);
      delete sEvent._viewStatus;
      delete sEvent.ResponseTime;
      sEvent.VehicleId = $scope.Vehicle.Selected;
      if (typeof sEvent.Codes !== "undefined") {
        sEvent.Codes = sEvent.Codes.split(',');
        sEvent.MilStatus = "true" === sEvent.MilStatus;
      }
      mojioRemote.POST("events", sEvent, function() {
        var date2, tspan;
        date2 = new Date();
        tspan = date2 - date1;
        $scope.Info.LastNetworkLatency = tspan;
        $scope.Info.TotalNetworkLatency += tspan;
        $scope.Info.AvgNetworkLatency = Math.round($scope.Info.TotalNetworkLatency / ($scope.SimulationStep + 1));
        cEvent.ResponseTime = new Date();
        return $scope.SimulationPrepareNextStep(tspan);
      }, function() {
        var date2, tspan;
        date2 = new Date();
        tspan = date2 - date1;
        $scope.Info.LastNetworkLatency = tspan;
        $scope.Info.TotalNetworkLatency += tspan;
        $scope.Info.AvgNetworkLatency = Math.round($scope.Info.TotalNetworkLatency / ($scope.SimulationStep + 1));
        $scope.SimulationPrepareNextStep(Math.max($scope.Info.LastNetworkLatency, $scope.Info.AvgNetworkLatency));
        return $scope.SimulationPrepareNextStep();
      });
    };
    $scope.SimulationPrepareNextStep = function(tspan) {
      var delay;
      $scope.SimulationStep++;
      if ($scope.SimulationStep >= $scope.Settings.Events.length) {
        if (!$scope.$$phase) {
          $scope.$apply(function() {
            return $scope.SimulationStop();
          });
        } else {
          $scope.SimulationStop();
        }
        return;
      } else if ($scope.SimulationMode === "Play") {
        delay = Math.round($scope.Settings.Duration * 60 * 1000 / $scope.Settings.Events.length);
        delay = delay - tspan;
        if (delay < 1) {
          delay = 1;
        }
        $scope.Info.LastWaitBeforeSendingEvent = delay;
        $scope.Info.TotalWaitBeforeSendingEvent += delay;
        $scope.SimulationTimer = window.setTimeout($scope.SimulationNextStep, delay);
      }
    };
    $scope.MinTripDuration = function() {
      var DurationText, sec;
      sec = $scope.Settings.Events.length / 2;
      DurationText = Math.round(sec / 60) + " minutes and " + (sec % 60) + " seconds";
      return DurationText;
    };
    $scope.SaveSimulator = function(Title) {
      $scope.Settings.Title = Title;
      $scope.SavedSimulatorTrip.push(angular.copy($scope.Settings));
      localStorage.setItem("SavedSimulatorTrip", JSON.stringify($scope.SavedSimulatorTrip));
      toaster.success({
        title: "Save Trip",
        body: "Trip Saved Successfully"
      });
    };
    $scope.LoadSimulator = function(sst) {
      $scope.Settings = angular.copy(sst);
      $scope.LoadPoints();
      $scope.ShowRoute();
    };
    $scope.DeleteSimulator = function(pos) {
      $scope.SavedSimulatorTrip.splice(pos, 1);
      localStorage.setItem("SavedSimulatorTrip", JSON.stringify($scope.SavedSimulatorTrip));
    };
    $scope.updateEventAttrib = function(ev) {
      var AddToList, DeleteFromList, k, v;
      AddToList = null;
      DeleteFromList = null;
      if (ev.EventType === "Diagnostic") {
        AddToList = simulatorFactory.DiagnosticEventTemplate;
        DeleteFromList = simulatorFactory.EventTemplate;
      } else if (typeof ev.DTC !== "undefined") {
        AddToList = simulatorFactory.EventTemplate;
        DeleteFromList = simulatorFactory.DiagnosticEventTemplate;
      } else {
        return;
      }
      for (k in ev) {
        v = ev[k];
        if (k === "EventType" || k === "Location") {
          continue;
        } else if (typeof DeleteFromList[k] !== "undefined") {
          delete ev[k];
        }
      }
      for (k in AddToList) {
        v = AddToList[k];
        if (typeof ev[k] === "undefined") {
          ev[k] = AddToList[k];
        }
      }
    };
    $scope.FileContent = null;
    $scope.$watch('FileContent', function(newValue, oldValue) {
      if (newValue === null) {
        return;
      }
      $scope.Settings = angular.copy(newValue);
      $scope.LoadPoints();
      return $scope.ShowRoute();
    });
    $scope.ExportSimulator = function() {
      var data;
      data = new Blob([JSON.stringify($scope.Settings)], {
        type: 'application/json'
      });
      saveAs(data, "Simulator.json");
    };
  }
]);

App.controller('tcuVisualizer', [
  '$scope', '$rootScope', '$stateParams', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$filter', function($scope, $rootScope, $stateParams, mojioRemote, mojioLocal, mojioGlobal, toaster, $filter) {
    var myOptions;
    $scope.EventData = null;
    $scope.EventSelected = null;
    $scope.AdvTitle = "";
    $scope.createMarker = function(ev, latlng, name, html, color, size) {
      var contentString, marker;
      contentString = html;
      marker = new MarkerWithLabel({
        position: latlng,
        icon: ' ',
        map: $scope.map,
        labelContent: '<kbd style="background-color:rgba(100,100,100,0.2);color:' + color + '">' + Math.round(ev.SequenceNumber) + '</kbd>',
        labelClass: "labels"
      });
      marker.setMap($scope.map);
      google.maps.event.addListener(marker, 'click', function() {
        return $scope.$apply(function() {
          return $scope.EventSelected = ev;
        });
      });
      return marker;
    };
    myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(43.907787, -79.359741),
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      },
      navigationControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    $scope.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    $scope.ChangeViewStatus = function(ev) {
      if (typeof ev._viewStatus === "undefined" || ev._viewStatus === 'c') {
        ev._viewStatus = 'e';
      } else {
        ev._viewStatus = 'c';
      }
    };
    $scope.ShowOnMap = function() {
      var Desc, LatLng, Title, bounds, ev, i, len, ref;
      bounds = new google.maps.LatLngBounds();
      ref = $scope.EventData;
      for (i = 0, len = ref.length; i < len; i++) {
        ev = ref[i];
        if (ev.Latitude === null || ev.Longitude === null) {
          continue;
        }
        if (ev.Marker) {
          ev.Marker.setMap(null);
          ev.Marker = null;
        }
        LatLng = new google.maps.LatLng(ev.Latitude, ev.Longitude);
        Title = ev.SequenceNumber + ":" + ev.OpCode;
        Desc = Title;
        ev.Marker = $scope.createMarker(ev, LatLng, Title, Desc, "black", 3);
        bounds.extend(ev.Marker.getPosition());
      }
      $scope.map.fitBounds(bounds);
    };
    $scope.HighlightIt = function(ev) {
      $scope.SelectNewEvent(ev);
    };
    $scope.SelectNewEvent = function(ev) {
      var Desc, LatLng, Title;
      if ($scope.EventSelected !== null) {
        $scope.EventSelected.Marker.setMap(null);
        $scope.EventSelected.Marker = null;
        LatLng = new google.maps.LatLng(ev.Latitude, ev.Longitude);
        Title = $scope.EventSelected.SequenceNumber + ":" + $scope.EventSelected.OpCode;
        Desc = Title;
        ev.Marker = $scope.createMarker($scope.EventSelected, LatLng, Title, Desc, "black", 3);
      }
      $scope.EventSelected = ev;
      if (ev.Marker) {
        ev.Marker.setMap(null);
        ev.Marker = null;
      }
      LatLng = new google.maps.LatLng(ev.Latitude, ev.Longitude);
      Title = ev.SequenceNumber + ":" + ev.OpCode;
      Desc = Title;
      ev.Marker = $scope.createMarker(ev, LatLng, Title, Desc, "red", 6);
    };
    $scope.ShowField = function(key, fl) {
      if (typeof fl === "object" || key[0] === "_") {
        return false;
      } else {
        return true;
      }
    };
    $scope.ShowFieldOnTitle = function(key) {
      $scope.AdvTitle = key;
    };
  }
]);

App.filter('fuelEfficiencyScore', [
  '$filter', function($filter) {
    return function(input, type) {
      var title, v;
      if (typeof input === "undefined" || input === null) {
        if (type === 'NT' || type === 'T') {
          return $filter('translate')("common.FuelEfficiencyScore.NeedMoreData");
        } else {
          return "";
        }
      }
      v = Math.round(input * 10);
      title = "";
      if (v <= 3) {
        title = $filter('translate')("common.FuelEfficiencyScore.poor");
      } else if (v <= 6) {
        title = $filter('translate')("common.FuelEfficiencyScore.average");
      } else {
        title = $filter('translate')("common.FuelEfficiencyScore.good");
      }
      if (type === "NT") {
        return v + " - " + title;
      } else if (type === "N") {
        return v;
      } else if (type === "T") {
        return title;
      }
    };
  }
]);

App.filter('unitTitle', [
  '$filter', function($filter) {
    return function(input, unit) {
      if (input.toLowerCase() === "liter/100km") {
        if (unit === "m") {
          return $filter('translate')("common.Units.L100Km");
        } else {
          return $filter('translate')("common.Units.MPG");
        }
      }
      if (input === "Liter") {
        if (unit === "m") {
          return $filter('translate')("common.Units.Liter");
        } else {
          return $filter('translate')("common.Units.Gallon");
        }
      }
      if (input === "Km") {
        if (unit === "m") {
          return $filter('translate')("common.Units.Km");
        } else {
          return $filter('translate')("common.Units.Mile");
        }
      }
      if (input.toLowerCase() === "kilometers") {
        if (unit === "m") {
          return $filter('translate')("common.Units.Kilometers");
        } else {
          return $filter('translate')("common.Units.Miles");
        }
      }
      if (input === "kph") {
        if (unit === "m") {
          return $filter('translate')("common.Units.kph");
        } else {
          return $filter('translate')("common.Units.mph");
        }
      }
      if (input.toLowerCase() === "kilometers per hour") {
        if (unit === "m") {
          return $filter('translate')("common.Units.Kilometers_per_hour");
        } else {
          return $filter('translate')("common.Units.Miles_per_hour");
        }
      }
      if (input.toLowerCase() === "liter per 100 km") {
        if (unit === "m") {
          return $filter('translate')("common.Units.Liters_per_100_km");
        } else {
          return $filter('translate')("common.Units.Miles_per_gallon");
        }
      }
      if (input.toLowerCase() === "fuelefficiency") {
        if (unit === "m") {
          return $filter('translate')("common.Units.L100Km");
        } else {
          return $filter('translate')("common.Units.MPG");
        }
      }
      if (input.toLowerCase() === "fuelconsumption") {
        if (unit === "m") {
          return $filter('translate')("common.Units.Liter");
        } else {
          return $filter('translate')("common.Units.Gallon");
        }
      }
      if (input.toLowerCase() === "distance") {
        if (unit === "m") {
          return $filter('translate')("common.Units.Kilometers");
        } else {
          return $filter('translate')("common.Units.Miles");
        }
      }
      if (input.toLowerCase() === "duration") {
        return $filter('translate')("common.Units.Minutes");
      }
      if (input.toLowerCase() === "trips") {
        return $filter('translate')("common.Units.Trips");
      }
      if (input === "maxSpeed") {
        if (unit === "m") {
          return $filter('translate')("common.Units.kph");
        } else {
          return $filter('translate')("common.Units.mph");
        }
      }
      return input;
    };
  }
]);

App.filter('convertUnit', [
  function() {
    return function(input, measurement, unit) {
      if (measurement.toLowerCase() === "fuelefficiency") {
        if (unit === "m") {
          return input;
        } else {
          return 235.214583 / input;
        }
      }
      if (measurement.toLowerCase() === "fuelconsumption") {
        if (unit === "m") {
          return input;
        } else {
          return input * 0.264172;
        }
      }
      if (measurement.toLowerCase() === "distance") {
        if (unit === "m") {
          return input;
        } else {
          return input * 0.621371;
        }
      }
      if (measurement.toLowerCase() === "speed") {
        if (unit === "m") {
          return input;
        } else {
          return input * 0.621371;
        }
      }
      return input;
    };
  }
]);

App.filter('duration', function() {
  return function(edate, sdate) {
    var diff, hrs, min, retVal;
    retVal = "";
    diff = Math.abs(((new Date(edate)) - (new Date(sdate))) / 1000);
    if (diff < 60) {
      retVal = Math.floor(diff) + " Sec";
    } else if (diff < 60 * 60) {
      retVal = Math.floor(diff / 60) + " Min";
    } else {
      hrs = Math.floor(diff / 3600);
      min = Math.floor((diff - hrs * 3600) / 60);
      if (min === 0) {
        min = "";
      } else {
        min = min + " Min";
      }
      retVal = hrs + " Hrs " + min;
    }
    return retVal;
  };
});

App.filter('hhmmss', function() {
  return function(sec) {
    var toHHMMSS;
    toHHMMSS = function(sec) {
      var hours, minutes, sec_num, seconds;
      sec_num = parseInt(sec, 10);
      hours = Math.floor(sec_num / 3600);
      minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      seconds = sec_num - (hours * 3600) - (minutes * 60);
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return hours + ':' + minutes + ':' + seconds;
    };
    return toHHMMSS(sec);
  };
});

App.filter('mojioTitle', ["dateFilter", function(dateFilter) {
  return function(data) {
    var ret;
    switch (data.Type) {
      case "":
        ret = "None";
        break;
      case "User":
        ret = "User: " + data.UserName;
        break;
      case "Vehicle":
        ret = "Vehicle: ";
        switch (data.Name) {
          case null:
            ret += "New Car";
            break;
          default:
            ret += data.Name;
        }
        break;
      case "Trip":
        ret = "Trip: start at " + dateFilter(data.StartTime, 'yy-MM-dd HH:mm');
        break;
      case "Event":
        ret = "Event: " + data.EventType + " at " + dateFilter(data.Time, 'yy-MM-dd HH:mm');
        break;
      default:
        ret = data.Type + "";
    }
    return ret;
  };
}]);

App.filter('secondsToDateTime', [
  function() {
    return function(seconds) {
      return new Date(1970, 0, 1).setSeconds(seconds);
    };
  }
]);

App.filter('timeago', function() {
  return function(idate) {
    var ago;
    ago = function(val) {
      var datelength, key, result, value;
      val = 0 | (Date.now() - val) / 1000;
      datelength = {
        second: 60,
        minute: 60,
        hour: 24,
        day: 7,
        week: 4.35,
        month: 12,
        year: 10000
      };
      result = void 0;
      for (key in datelength) {
        value = datelength[key];
        result = val % value;
        if (!(val = 0 | val / value)) {
          return result + ' ' + (result - 1 ? key + 's' : key);
        }
      }
    };
    return ago(new Date(idate));
  };
});

App.directive('gearAdminMe', [
  '$rootScope', '$window', 'mojioRemote2', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote2, mojioLocal, mojioGlobal, toaster, $http) {
    return {
      restrict: 'EA',
      templateUrl: 'gear_admin_me.html',
      controller: ["$rootScope", "$scope", function($rootScope, $scope) {
        var getMe;
        getMe = function() {
          return mojioRemote2.GET({
            operation: "me",
            onSuccess: function(res) {
              return $scope.me = res;
            }
          });
        };
        $scope.me = {};
        getMe();
      }],
      link: function($rootScope, scope, element, attrs) {}
    };
  }
]);

App.directive('gearAdminMojio', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    return {
      restrict: 'EA',
      templateUrl: 'gear_admin_mojio.html',
      controller: ["$rootScope", "$scope", function($rootScope, $scope) {
        var getMojio;
        getMojio = function() {
          return mojioRemote.GET("Mojios/" + $scope.AllData.SelectedVehicle.MojioId, null, null, null, null, function(result) {
            return $scope.Mojio = result;
          });
        };
        $scope.Mojio = {};
        $scope.$watch('AllData.SelectedVehicle', function() {
          return getMojio();
        });
      }],
      link: function($rootScope, scope, element, attrs) {}
    };
  }
]);

App.directive('gearAdminVehicle', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    return {
      restrict: 'EA',
      templateUrl: 'gear_admin_vehicle.html',
      controller: ["$rootScope", "$scope", function($rootScope, $scope) {}],
      link: function($rootScope, scope, element, attrs) {}
    };
  }
]);

App.directive('gearClaim', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', '$filter', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http, $filter) {
    return {
      restrict: 'EA',
      templateUrl: 'gear_claim.html',
      controller: ["$rootScope", "$scope", function($rootScope, $scope) {
        $scope.Data = {
          IMEI: ""
        };
        $scope.Step = "init";
        mojioRemote.GET("Mojios", 1, 0, null, null, function(result) {
          if (result.Data.length === 0) {
            return $scope.Step = "claimform";
          } else {
            return $scope.Step = "device-disconnected";
          }
        });
        return $scope.claimNewDevice = function() {
          mojioRemote.PUT("Mojios/" + $scope.Data.IMEI + "/User", {}, function(result) {
            toaster.success({
              title: $filter('translate')('gear.claim.claimNewDevice.success.title'),
              body: $filter('translate')('gear.claim.claimNewDevice.success.body')
            });
            return $scope.Step = "finished";
          }, function() {
            return toaster.error({
              title: $filter('translate')('gear.claim.claimNewDevice.error.title'),
              body: $filter('translate')('gear.claim.claimNewDevice.error.body')
            });
          });
        };
      }],
      link: function($rootScope, scope, element, attrs) {}
    };
  }
]);

App.directive('gearCloakStatus', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', 'myMojioFactory', '$timeout', 'googlemapFactory', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http, myMojioFactory, $timeout, googlemapFactory) {
    return {
      restrict: 'EA',
      templateUrl: 'gear_cloak_status.html',
      controller: ["$rootScope", "$scope", function($rootScope, $scope) {
        var createMarker, showStatus;
        showStatus = function() {
          var bounds, ll, llLoc;
          if ($scope.CloakLastMarker !== null) {
            $scope.CloakLastMarker.setMap(null);
          }
          ll = $scope.AllData.SelectedVehicle.LastLocation;
          if (typeof ll === "undefined" || ll === null) {
            return;
          }
          bounds = new google.maps.LatLngBounds();
          bounds.extend(new google.maps.LatLng(ll.Lat + 0.003, ll.Lng + 0.003));
          bounds.extend(new google.maps.LatLng(ll.Lat - 0.003, ll.Lng - 0.003));
          $scope.map.fitBounds(bounds);
          llLoc = new google.maps.LatLng(ll.Lat, ll.Lng);
          return $scope.CloakLastMarker = createMarker($scope.map, llLoc, null, null, null, "cloak-pos", $scope.CarStatus($scope.AllData.SelectedVehicle));
        };
        $scope.AllData = myMojioFactory.Content;
        $scope.$watch('AllData.SelectedVehicle', function() {
          return showStatus();
        });
        return createMarker = function(map, latlng, style, bgcolor, color, classes, text) {
          var labelClass, marker;
          if (bgcolor === null) {
            bgcolor = "rgba(255,0,0,0.5)";
          }
          if (color === null) {
            color = "#000000";
          }
          labelClass = "labels";
          if (classes !== null) {
            labelClass += " " + classes;
          }
          marker = new MarkerWithLabel({
            position: latlng,
            icon: ' ',
            map: map,
            labelContent: text,
            labelClass: labelClass,
            labelAnchor: new google.maps.Point(50, 50)
          });
          marker.setMap(map);
          return marker;
        };
      }],
      link: function(scope, element, attrs) {
        var myLatlng, myOptions;
        scope.CloakLastMarker = null;
        scope.element = element;
        myLatlng = new google.maps.LatLng(49, -123);
        myOptions = {
          scrollwheel: false,
          zoom: 4,
          center: myLatlng,
          disableDefaultUI: true,
          styles: googlemapFactory.MapStyle,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: false,
          zoomControl: true,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.LEFT_CENTER
          },
          scaleControl: false,
          streetViewControl: false
        };
        scope.map = new google.maps.Map(element[0].children[1], myOptions);
      }
    };
  }
]);

App.directive('gearGaugeBatteryLevel', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    return {
      restrict: 'EA',
      templateUrl: 'gear_gauge_battery_level.html',
      controller: ["$rootScope", "$scope", function($rootScope, $scope) {
        return $scope.BatteryStatus = function(bv) {
          if (typeof bv === "undefined" || bv === null || isNaN(bv)) {
            return "gear.gear_gauge_battery_level.level.UNKNOWN";
          }
          if (bv === 0) {
            return "gear.gear_gauge_battery_level.level.DISCONNECTED";
          } else if (bv < 9) {
            return "gear.gear_gauge_battery_level.level.DEAD";
          } else if (bv < 11) {
            return "gear.gear_gauge_battery_level.level.LOW";
          } else if (bv < 12) {
            return "gear.gear_gauge_battery_level.level.MEDIUM";
          } else {
            return "gear.gear_gauge_battery_level.level.GOOD";
          }
        };
      }],
      link: function($rootScope, scope, element, attrs) {}
    };
  }
]);

App.directive('gearGaugeServiceSchedule', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', 'myMojioFactory', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http, myMojioFactory) {
    return {
      restrict: 'EA',
      templateUrl: 'gear_gauge_service_schedule.html',
      controller: ["$rootScope", "$scope", function($rootScope, $scope) {
        var getServices;
        getServices = function() {
          myMojioFactory.VehicleServices().then(function(data) {
            $scope.Services = data;
          });
        };
        $scope.AllData = myMojioFactory.Content;
        $scope.$watch('AllData.SelectedVehicle', function() {
          return getServices();
        });
        $scope.CalculateDistanceToService = function(ServicePeriod) {
          return ServicePeriod - $scope.AllData.SelectedVehicle.LastOdometer % ServicePeriod;
        };
        return $scope.NearService = function(ServicePeriod) {
          if ((ServicePeriod - $scope.AllData.SelectedVehicle.LastOdometer % ServicePeriod) < 0.05 * ServicePeriod) {
            return true;
          } else {
            return false;
          }
        };
      }],
      link: function($rootScope, scope, element, attrs) {}
    };
  }
]);

App.directive('gearGaugeVehicleHealth', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    return {
      restrict: 'EA',
      templateUrl: 'gear_gauge_vehicle_health.html',
      controller: ["$rootScope", "$scope", function($rootScope, $scope) {
        $scope.ShowMode = "Overall";
        $scope.HealthStatus = function(FaultsDetected) {
          if (FaultsDetected) {
            return "gear.gear_gauge_vehicle_health.HealthStatus.FaultsDetected";
          } else {
            return "gear.gear_gauge_vehicle_health.HealthStatus.Good";
          }
        };
        $scope.ChangeMode = function(NewMode, Category) {
          $scope.ShowMode = NewMode;
          $scope.Category = Category;
        };
        $scope.ShowThisCategory = function(Category) {
          if (Category.replace(' ', '') === $scope.Category) {
            return true;
          } else {
            return false;
          }
        };
      }],
      link: function($rootScope, scope, element, attrs) {}
    };
  }
]);

App.directive('gearTrekChart', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', '$timeout', 'myMojioFactory', '$filter', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http, $timeout, myMojioFactory, $filter) {
    return {
      restrict: 'EA',
      templateUrl: 'gear_trek_chart.html',
      controller: ["$rootScope", "$scope", function($rootScope, $scope) {
        var buildCriteria, changeChart, distanceInMs, monthNames, prepareChart;
        monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        $scope.calcData = [];
        $scope.AllRange = [
          {
            code: 14,
            title: "common.range.d14"
          }, {
            code: 30,
            title: "common.range.d30"
          }, {
            code: 90,
            title: "common.range.m3"
          }, {
            code: 365,
            title: "common.range.m12"
          }, {
            code: 36500,
            title: "common.range.all"
          }
        ];
        $scope.changeDateRange = function(r, p) {
          $scope.data.range = p;
          $scope.$parent.savePortalState();
          $scope.SelectedRange = r;
          return prepareChart();
        };
        buildCriteria = function() {
          var e, eStr, s, sStr, today;
          today = new Date();
          s = new Date();
          s.setDate((new Date()).getDate() - $scope.SelectedRange.code);
          sStr = s.getFullYear() + "." + (s.getMonth() + 1) + "." + s.getDate();
          e = new Date();
          e.setDate((new Date()).getDate() + 1);
          eStr = e.getFullYear() + "." + (e.getMonth() + 1) + "." + e.getDate();
          return sStr + "-" + eStr;
        };
        distanceInMs = function(min, max) {
          return (new Date(max)) - (new Date(min));
        };
        changeChart = function() {
          var convertedValue, i, len, pos, ref, row, val;
          $scope.splineData = [
            {
              "label": $filter('translate')($scope.SelectedType.title) + " (" + $filter('unitTitle')($scope.SelectedType.field, $rootScope.app.layout.unit) + ")",
              "color": "#1C344C",
              "data": []
            }
          ];
          $scope.ticks = [];
          ref = $scope.calcData;
          for (pos = i = 0, len = ref.length; i < len; pos = ++i) {
            row = ref[pos];
            val = row[$scope.SelectedType.field];
            if (!isNaN(val)) {
              convertedValue = $filter('convertUnit')(val, $scope.SelectedType.unit, $rootScope.app.layout.unit);
              $scope.splineData[0].data.push([pos, Math.round(convertedValue * 10) / 10]);
              $scope.ticks.push(row.title);
            }
          }
        };
        prepareChart = function() {
          var criteria, oldKey, points;
          points = 7;
          criteria = buildCriteria();
          $scope.calcData = [];
          oldKey = "";
          $scope.loading = true;
          mojioRemote.GET("Trips", 10000, 0, "VehicleId=" + $scope.AllData.SelectedVehicle._id + ";StartTime=" + criteria, null, function(result) {
            var Key, d, diffDays, i, j, len, len1, maxDate, minDate, oneDay, ref, ref1, rng, row, titleDate1, titleDate2, tripDate;
            $scope.loading = false;
            if (result.Data.length === 0) {
              changeChart();
              return;
            }
            minDate = null;
            maxDate = null;
            ref = result.Data;
            for (i = 0, len = ref.length; i < len; i++) {
              d = ref[i];
              tripDate = new Date(d.StartTime);
              if (tripDate < minDate || minDate === null) {
                minDate = tripDate;
              }
              if (tripDate > maxDate || maxDate === null) {
                maxDate = tripDate;
              }
            }
            oneDay = 24 * 60 * 60 * 1000;
            diffDays = Math.round(Math.abs((minDate.getTime() - maxDate.getTime()) / oneDay));
            if (points > diffDays) {
              points = diffDays;
            }
            rng = distanceInMs(minDate, maxDate);
            ref1 = result.Data;
            for (j = 0, len1 = ref1.length; j < len1; j++) {
              d = ref1[j];
              row = null;
              Key = parseInt(points * distanceInMs(d.StartTime, maxDate) / rng);
              if (Key !== oldKey) {
                titleDate1 = new Date();
                titleDate1.setDate((new Date()).getDate() - (rng / points) * (Key + 0.0) / oneDay);
                titleDate2 = new Date();
                titleDate2.setDate((new Date()).getDate() - (rng / points) * (Key + 1.0) / oneDay);
                row = {
                  title: monthNames[titleDate2.getMonth()] + " " + titleDate2.getDate() + " <br> " + monthNames[titleDate1.getMonth()] + " " + titleDate1.getDate(),
                  trips: 0,
                  distance: 0,
                  duration: 0,
                  fuelConsumption: 0,
                  fuelEfficiency: 0,
                  maxSpeed: 0
                };
                $scope.calcData.push(row);
              } else {
                row = $scope.calcData[$scope.calcData.length - 1];
              }
              oldKey = Key;
              row.trips++;
              if (d.MaxSpeed > row.maxSpeed) {
                row.maxSpeed = d.MaxSpeed;
              }
              row.distance += d.Distance;
              row.duration += Math.abs((new Date(d.EndTime)) - (new Date(d.StartTime))) / (60 * 1000);
              if (d.Distance > 0.1 && d.FuelEfficiency > 1) {
                row.fuelConsumption += d.FuelEfficiency * d.Distance / 100;
                row.fuelEfficiency = 100 * row.fuelConsumption / row.distance;
              }
            }
            return changeChart();
          });
        };
        $scope.ChartTypes = [
          {
            title: "gear.gear_trek_chart.ChartType.MaxSpeed",
            field: "maxSpeed",
            unit: "speed"
          }, {
            title: "gear.gear_trek_chart.ChartType.FuelEfficiency",
            field: "fuelEfficiency",
            unit: "fuelefficiency"
          }, {
            title: "gear.gear_trek_chart.ChartType.FuelConsumption",
            field: "fuelConsumption",
            unit: "fuelconsumption"
          }, {
            title: "gear.gear_trek_chart.ChartType.Distance",
            field: "distance",
            unit: "distance"
          }, {
            title: "gear.gear_trek_chart.ChartType.Duration",
            field: "duration",
            unit: "duration"
          }, {
            title: "gear.gear_trek_chart.ChartType.Trips",
            field: "trips",
            unit: "trips"
          }
        ];
        $scope.changeChartType = function(ct, p) {
          $scope.data.ChartTypes = p;
          $scope.$parent.savePortalState();
          $scope.SelectedType = ct;
          changeChart();
        };
        $scope.AllData = myMojioFactory.Content;
        $scope.$watch('AllData.SelectedVehicle._id', function() {
          return prepareChart();
        });
        return $scope.splineOptions = {
          series: {
            lines: {
              show: false
            },
            points: {
              show: true,
              radius: 4
            },
            splines: {
              show: true,
              tension: 0.2,
              lineWidth: 2,
              fill: 0.3
            }
          },
          grid: {
            borderColor: '#eee',
            borderWidth: 1,
            hoverable: true,
            backgroundColor: '#fcfcfc'
          },
          tooltip: true,
          tooltipOpts: {
            content: function(label, x, y) {
              var val;
              val = "";
              if ($scope.SelectedType.field === "duration") {
                val = Math.round(y / 60) + "hrs and " + Math.round(y % 60) + "min";
              } else {
                val = y + " " + $filter('unitTitle')($scope.SelectedType.field, $rootScope.app.layout.unit);
              }
              return $scope.ticks[x].replace('<br>', ' - ') + ' : ' + val;
            }
          },
          xaxis: {
            tickColor: '#fcfcfc',
            mode: 'category',
            tickFormatter: function(v, axis) {
              if (v !== Math.round(v) || v < 0 || v >= $scope.ticks.length) {
                return "";
              } else {
                return $scope.ticks[v];
              }
            }
          },
          yaxis: {
            tickColor: '#eee',
            position: $scope.app.layout.isRTL ? 'right' : 'left',
            tickFormatter: function(v) {
              if ($scope.SelectedType.field === "duration") {
                return Math.round(v / 60) + "hrs";
              } else {
                return Math.round(v * 10) / 10;
              }
            }
          },
          shadowSize: 0
        };
      }],
      link: function(scope, element, attrs) {
        scope.data = scope.$eval(attrs.data);
        scope.SelectedType = scope.ChartTypes[scope.data.ChartTypes];
        scope.SelectedRange = scope.AllRange[scope.data.range];
      }
    };
  }
]);

App.directive('gearTrekDrivingStat', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', '$timeout', 'myMojioFactory', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http, $timeout, myMojioFactory) {
    return {
      restrict: 'EA',
      templateUrl: 'gear_trek_driving_stat.html',
      controller: ["$rootScope", "$scope", function($rootScope, $scope) {
        var buildCriteria, monthNames, prepareData;
        monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        buildCriteria = function() {
          var e, eStr, s, sStr, today;
          today = new Date();
          s = new Date();
          s.setDate((new Date()).getDate() - 14);
          sStr = s.getFullYear() + "." + (s.getMonth() + 1) + "." + s.getDate();
          e = new Date();
          e.setDate((new Date()).getDate() + 1);
          eStr = e.getFullYear() + "." + (e.getMonth() + 1) + "." + e.getDate();
          return sStr + "-" + eStr;
        };
        prepareData = function() {
          var calcData, criteria;
          criteria = buildCriteria();
          calcData = {
            trips: 0,
            distance: 0,
            duration: 0,
            fuelConsumption: 0,
            fuelEfficiency: 0,
            maxSpeed: 0
          };
          mojioRemote.GET("Trips", 10000, 0, "VehicleId=" + $scope.AllData.SelectedVehicle._id + ";StartTime=" + criteria, null, function(result) {
            var appop, d, i, len, ref;
            ref = result.Data;
            for (i = 0, len = ref.length; i < len; i++) {
              d = ref[i];
              calcData.trips++;
              appop = 12;
              appop++;
              if (d.MaxSpeed > calcData.maxSpeed) {
                calcData.maxSpeed = d.MaxSpeed;
              }
              calcData.distance += d.Distance;
              calcData.duration += ((new Date(d.EndTime)) - (new Date(d.StartTime))) / 1000;
              if (d.Distance > 0.1 && d.FuelEfficiency > 1) {
                calcData.fuelConsumption += d.FuelEfficiency * d.Distance / 100;
                calcData.fuelEfficiency = 100 * calcData.fuelConsumption / calcData.distance;
              }
            }
            $scope.data = angular.copy(calcData);
          });
        };
        $scope.AllData = myMojioFactory.Content;
        return $scope.$watch('AllData.SelectedVehicle', function() {
          return prepareData();
        });
      }],
      link: function(scope, element, attrs) {}
    };
  }
]);

App.directive('gearTrekLastTripMap', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', 'myMojioFactory', '$timeout', 'googlemapFactory', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http, myMojioFactory, $timeout, googlemapFactory) {
    return {
      restrict: 'EA',
      templateUrl: 'gear_trek_last_trip_map.html',
      controller: ["$rootScope", "$scope", function($rootScope, $scope) {
        var createMarker, drawMap, getEvents;
        $scope.showDuration = function(row) {
          if (typeof row === "undefined" || row === null || typeof row.EndTime === "undefined" || typeof row.StartTime === "undefined" || row.EndTime === null || row.StartTime === null) {
            return 0;
          }
          return ((new Date(row.EndTime)) - (new Date(row.StartTime))) / 1000;
        };
        createMarker = function(map, latlng, style, bgcolor, color, classes, text) {
          var allstyle, labelClass, marker;
          if (bgcolor === null) {
            bgcolor = "rgba(255,0,0,0.5)";
          }
          if (color === null) {
            color = "#000000";
          }
          labelClass = "labels";
          if (classes !== null) {
            labelClass += " " + classes;
          }
          allstyle = "font-size:10px;margin-top:1px;padding-top:1px;padding-left:4px;width:15px;height:15px;background-color:" + bgcolor + ";color:" + color + ";";
          if (style !== null) {
            allstyle += style;
          }
          marker = new MarkerWithLabel({
            position: latlng,
            icon: ' ',
            map: map,
            labelContent: text,
            labelClass: labelClass,
            labelAnchor: new google.maps.Point(7, 7)
          });
          marker.setMap(map);
          return marker;
        };
        getEvents = function() {
          myMojioFactory.LastTripEvents().then(function(data) {
            drawMap(data);
          });
        };
        $scope.AllData = myMojioFactory.Content;
        $scope.$watch('AllData.SelectedVehicle.LastContactTime', function() {
          return getEvents();
        });
        return drawMap = function(data) {
          var AllCoordinates, EventCounts, bounds, d, en, enLoc, i, len, points, pos, st, stLoc;
          if ($scope.stMarker !== null) {
            $scope.stMarker.setMap(null);
            $scope.stMarker = null;
          }
          if ($scope.enMarker !== null) {
            $scope.enMarker.setMap(null);
            $scope.enMarker = null;
          }
          if ($scope.tripPath !== null) {
            $scope.tripPath.setMap(null);
            $scope.tripPath = null;
          }
          $scope.data = data;
          bounds = new google.maps.LatLngBounds();
          AllCoordinates = [];
          st = null;
          en = null;
          points = 0;
          EventCounts = data.length;
          for (pos = i = 0, len = data.length; i < len; pos = ++i) {
            d = data[pos];
            if (myMojioFactory.IsValidLocation(d, "Location")) {
              if (st === null) {
                st = d;
              }
              en = d;
              points++;
              if (d.EventType === "OffStatus" || d.EventType === "HeartBeat") {
                continue;
              }
              if (pos === 0 || pos === EventCounts - 1 || d.EventType !== "TripStatus" || myMojioFactory.IsInorderPoint(d, data[pos - 1], data[pos + 1])) {
                AllCoordinates.push(new google.maps.LatLng(d.Location.Lat, d.Location.Lng));
                bounds.extend(new google.maps.LatLng(d.Location.Lat, d.Location.Lng));
              }
            }
          }
          if (points === 0) {
            return;
          }
          $scope.map.fitBounds(bounds);
          $scope.tripPath = new google.maps.Polyline({
            path: AllCoordinates,
            geodesic: false,
            strokeColor: '#0C5B7D',
            strokeOpacity: 0.5,
            strokeWeight: 5
          });
          $scope.tripPath.setMap($scope.map);
          if ($scope.st !== null) {
            stLoc = new google.maps.LatLng(st.Location.Lat, st.Location.Lng);
            $scope.stMarker = createMarker($scope.map, stLoc, null, null, null, "point-start text-circle3", "A");
          }
          if (en !== null) {
            enLoc = new google.maps.LatLng(en.Location.Lat, en.Location.Lng);
            $scope.enMarker = createMarker($scope.map, enLoc, null, null, null, "point-end text-circle3", "B");
          }
        };
      }],
      link: function(scope, element, attrs) {
        var myOptions;
        scope.element = element.find('.map-place');
        myOptions = {
          scrollwheel: false,
          zoom: 4,
          center: new google.maps.LatLng(49, -123),
          disableDefaultUI: true,
          styles: googlemapFactory.MapStyle,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: false,
          zoomControl: true,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.LEFT_CENTER
          },
          scaleControl: false,
          streetViewControl: false
        };
        scope.map = new google.maps.Map(scope.element[0], myOptions);
        scope.tripPath = null;
        scope.stMarker = null;
        scope.enMarker = null;
      }
    };
  }
]);

App.directive('gearTrekVehicleDetails', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    return {
      restrict: 'EA',
      templateUrl: 'gear_trek_vehicle_details.html',
      controller: ["$rootScope", "$scope", function($rootScope, $scope) {
        return $scope.FindTransmissions = function(tData) {
          var i, ipos, len, pos, row;
          if (typeof tData === "undefined" || tData.length === 0) {
            return "";
          }
          ipos = 0;
          for (pos = i = 0, len = tData.length; i < len; pos = ++i) {
            row = tData[pos];
            if (row.Availability === "Default" || row.Availability === "Installed") {
              ipos = pos;
              break;
            }
          }
          return tData[ipos].Name;
        };
      }],
      link: function($rootScope, scope, element, attrs) {}
    };
  }
]);

App.directive('widgetCmsEmbed', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster) {
    return {
      restrict: 'EA',
      templateUrl: 'widget_cms_embed.html',
      scope: {
        data: '='
      },
      controller: ["$rootScope", "$scope", function($rootScope, $scope) {
        console.log($scope);
      }],
      link: function($rootScope, scope, element, attrs) {}
    };
  }
]);

App.directive('widgetDetailApp', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    return {
      restrict: 'EA',
      templateUrl: 'widget_detail_app.html',
      controller: ["$rootScope", "$scope", "mojioRemote", function($rootScope, $scope, mojioRemote) {
        $scope.reset = function() {
          return $scope.rel = {
            mojios: [],
            loadMojios: false,
            vehicles: [],
            loadVehicles: false,
            trips: [],
            moreTrips: false,
            loadTrips: false,
            events: [],
            moreEvents: false,
            loadEvents: false
          };
        };
        $scope.reset();
        $rootScope.$on('MojioObjectSelected', function(event, data) {
          if (data.Type === "User") {
            return $scope.reset();
          }
        });
        $scope.broadcast = function(data) {
          $rootScope.$broadcast('MojioObjectSelected', data);
        };
        $scope.showMyself = function() {
          mojioRemote.GET("Users/Me", null, null, null, null, function(result) {
            $scope.reset();
            return $rootScope.$broadcast('MojioObjectSelected', result);
          });
        };
        $scope.showMojios = function() {
          mojioRemote.GET("Users/" + $scope.data._id + "/Mojios", 1000, 0, null, null, function(result) {
            return $scope.rel.mojios = result.Data;
          });
        };
        $scope.showApps = function() {
          mojioRemote.GET("Apps", 1000, 0, null, null, function(result) {
            return $scope.rel.apps = result.Data;
          });
        };
        $scope.showVehicles = function() {
          mojioRemote.GET("Users/" + $scope.data._id + "/Vehicles", 1000, 0, null, null, function(result) {
            return $scope.rel.vehicles = result.Data;
          });
        };
        $scope.showRecentTrips = function() {
          $scope.rel.loadTrips = true;
          $scope.rel.moreTrips = false;
          mojioRemote.GET("Users/" + $scope.data._id + "/Trips", 10, $scope.rel.trips.length, null, "sortBy=StartTime&desc=true", function(result) {
            $scope.rel.trips = $scope.rel.trips.concat(result.Data);
            $scope.rel.loadTrips = false;
            if (result.TotalRows > $scope.rel.trips.length) {
              return $scope.rel.moreTrips = true;
            } else {
              return $scope.rel.moreTrips = false;
            }
          });
        };
        $scope.showRecentEvents = function() {
          $scope.rel.loadEvents = true;
          $scope.rel.moreEvents = false;
          mojioRemote.GET("Users/" + $scope.data._id + "/Events", 10, $scope.rel.events.length, null, "sortBy=Time&desc=true", function(result) {
            $scope.rel.events = $scope.rel.events.concat(result.Data);
            $scope.rel.loadEvents = false;
            if (result.TotalRows > $scope.rel.events.length) {
              return $scope.rel.moreEvents = true;
            } else {
              return $scope.rel.moreEvents = false;
            }
          });
        };
      }],
      link: function($rootScope, $scope, element, attrs) {
        $scope.data = attrs.data;
      }
    };
  }
]);

App.directive('widgetCmsGithubI1', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    return {
      restrict: 'EA',
      templateUrl: 'widget_cms_github_i1.html',
      scope: {
        data: '='
      },
      controller: ["$rootScope", "$scope", "$http", "$sce", function($rootScope, $scope, $http, $sce) {
        var prepareChild;
        $scope.nodes = [];
        $scope.MasterNode = null;
        $scope.selectedNode = null;
        $scope.selectedNodeChild = [];
        $scope.selectedPage = null;
        prepareChild = function() {
          var cid, i, len, ref, results;
          $scope.selectedNodeChild = [];
          ref = $scope.selectedNode.children;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            cid = ref[i];
            results.push($scope.selectedNodeChild.push($scope.nodes[cid]));
          }
          return results;
        };
        $http.get($scope.data.url.Data).success(function(response) {
          var k, n, ref, results;
          $scope.nodes = response;
          ref = $scope.nodes;
          results = [];
          for (n in ref) {
            k = ref[n];
            if (k.level === 0) {
              $scope.MasterNode = k;
              $scope.SelectNode(k);
              break;
            } else {
              results.push(void 0);
            }
          }
          return results;
        });
        $scope.SelectNode = function(ch) {
          if (ch.type === "folder") {
            $scope.selectedNode = ch;
            prepareChild();
          } else {
            $scope.selectedPage = ch;
            if (typeof ch.content === "undefined") {
              $scope.GetContent(ch);
            }
          }
          $scope.selectedPage = ch;
        };
        $scope.GetContent = function(ch) {
          ch.content = '<div class="text-center"><i class="fa fa-4x fa-spinner fa-pulse"></i></div>';
          $http.get(ch.path + "/" + ch.name).success(function(response) {
            ch.content = $sce.trustAsHtml(response.replace(/(href=")(?!https?:\/\/)(.*?)"\/?/ig, '$1javascript:window.FollowLink(\'$2\')"'));
          });
        };
        $scope.NodeClick = function(node) {
          var page;
          $scope.ViewMode = "html";
          $scope.pages = [];
          page = {
            Title: $scope.FileTitle(node),
            GitHubUrl: $scope.data.github.Data + node.path + "/" + node.name,
            Content: '<i class="fa fa-spinner fa-pulse"></i>'
          };
          $scope.pages.push(page);
          $scope.GetContent(page, node.path + "/" + node.name);
          $scope.LastPage = page;
        };
        $scope.FollowLink = function(url) {
          var page, title;
          $scope.ViewMode = "html";
          title = url;
          if (title.lastIndexOf('/') !== -1) {
            title = title.substring(title.lastIndexOf('/') + 1, title.length - 5);
          }
          if (title.indexOf('_') !== -1) {
            title = title.substring(title.indexOf('_') + 1);
          }
          page = {
            Title: title,
            GitHubUrl: $scope.data.github.Data + url,
            Content: '<i class="fa fa-4x fa-spinner fa-pulse"></i>'
          };
          $scope.pages.push(page);
          $scope.GetContent(page, url);
          $scope.LastPage = page;
        };
        window.FollowLink = $scope.FollowLink;
        $scope.ShowPage = function(page) {
          var ipos;
          ipos = 0;
          while (ipos < $scope.pages.length && $scope.pages[ipos] !== page) {
            ipos++;
          }
          $scope.pages.splice(ipos + 1, $scope.pages.length - (ipos + 1));
          $scope.LastPage = $scope.pages[ipos];
        };
        $scope.ShowTOC = function() {
          $scope.ViewMode = "toc";
        };
      }],
      link: function(scope, element, attrs) {}
    };
  }
]);

App.directive('widgetCmsGithubMenu', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    return {
      restrict: 'EA',
      templateUrl: 'widget_cms_github_menu.html',
      scope: {
        data: '='
      },
      controller: ["$rootScope", "$scope", "$http", "$sce", function($rootScope, $scope, $http, $sce) {
        $http.get($scope.data.url.Data).success(function(response) {
          $scope.node = response;
          return $scope.pages = [];
        });
        $scope.FileTitle = function(node) {
          var title;
          title = node.name;
          if (title.indexOf('_') !== -1) {
            title = title.substring(title.indexOf('_') + 1).replace(/_/g, ' ');
          }
          if (node.type !== 'folder') {
            title = title.substring(0, title.length - 5);
          }
          return title;
        };
        $scope.ViewMode = "toc";
        $scope.GetContent = function(page, url) {
          $http.get(url).success(function(response) {
            page.Content = $sce.trustAsHtml(response.replace(/(href=")(?!https?:\/\/)(.*?)"\/?/ig, '$1javascript:window.FollowLink(\'$2\')"'));
          });
        };
        $scope.NodeClick = function(node) {
          var page;
          $scope.ViewMode = "html";
          $scope.pages = [];
          page = {
            Title: $scope.FileTitle(node),
            GitHubUrl: $scope.data.github.Data + node.path + "/" + node.name,
            Content: '<i class="fa fa-spinner fa-pulse"></i>'
          };
          $scope.pages.push(page);
          $scope.GetContent(page, node.path + "/" + node.name);
          $scope.LastPage = page;
        };
        $scope.FollowLink = function(url) {
          var page, title;
          $scope.ViewMode = "html";
          title = url;
          if (title.lastIndexOf('/') !== -1) {
            title = title.substring(title.lastIndexOf('/') + 1, title.length - 5);
          }
          if (title.indexOf('_') !== -1) {
            title = title.substring(title.indexOf('_') + 1);
          }
          page = {
            Title: title,
            GitHubUrl: $scope.data.github.Data + url,
            Content: '<i class="fa fa-4x fa-spinner fa-pulse"></i>'
          };
          $scope.pages.push(page);
          $scope.GetContent(page, url);
          $scope.LastPage = page;
        };
        window.FollowLink = $scope.FollowLink;
        $scope.ShowPage = function(page) {
          var ipos;
          ipos = 0;
          while (ipos < $scope.pages.length && $scope.pages[ipos] !== page) {
            ipos++;
          }
          $scope.pages.splice(ipos + 1, $scope.pages.length - (ipos + 1));
          $scope.LastPage = $scope.pages[ipos];
        };
        $scope.ShowTOC = function() {
          $scope.ViewMode = "toc";
        };
      }],
      link: function(scope, element, attrs) {}
    };
  }
]);

App.directive('widgetDetailDevice', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    return {
      restrict: 'EA',
      templateUrl: 'widget_detail_device.html',
      controller: ["$rootScope", "$scope", "mojioRemote", function($rootScope, $scope, mojioRemote) {
        $scope.reset = function() {
          return $scope.rel = {
            trips: [],
            moreTrips: false,
            loadTrips: false,
            events: [],
            moreEvents: false,
            loadEvents: false
          };
        };
        $scope.reset();
        $rootScope.$on('MojioObjectSelected', function(event, data) {
          if (data.Type === "Mojio") {
            return $scope.reset();
          }
        });
        $scope.broadcast = function(data) {
          $rootScope.$broadcast('MojioObjectSelected', data);
        };
        $scope.showOwner = function() {
          mojioRemote.GET("Mojios/" + $scope.data._id + "/Owner", null, null, null, null, function(result) {
            return $rootScope.$broadcast('MojioObjectSelected', result);
          });
        };
        $scope.showVehicle = function() {
          mojioRemote.GET("Vehicles/" + $scope.data.VehicleId, null, null, null, null, function(result) {
            return $rootScope.$broadcast('MojioObjectSelected', result);
          });
        };
        $scope.showRecentTrips = function() {
          $scope.rel.loadTrips = true;
          $scope.rel.moreTrips = false;
          mojioRemote.GET("Mojios/" + $scope.data._id + "/Trips", 10, $scope.rel.trips.length, null, "sortBy=StartTime&desc=true", function(result) {
            $scope.rel.trips = $scope.rel.trips.concat(result.Data);
            $scope.rel.loadTrips = false;
            if (result.TotalRows > $scope.rel.trips.length) {
              return $scope.rel.moreTrips = true;
            } else {
              return $scope.rel.moreTrips = false;
            }
          });
        };
        $scope.showRecentEvents = function() {
          $scope.rel.loadEvents = true;
          $scope.rel.moreEvents = false;
          mojioRemote.GET("Mojios/" + $scope.data._id + "/Events", 10, $scope.rel.events.length, null, "sortBy=Time&desc=true", function(result) {
            $scope.rel.events = $scope.rel.events.concat(result.Data);
            $scope.rel.loadEvents = false;
            if (result.TotalRows > $scope.rel.events.length) {
              return $scope.rel.moreEvents = true;
            } else {
              return $scope.rel.moreEvents = false;
            }
          });
        };
      }],
      link: function($rootScope, $scope, element, attrs) {
        $scope.data = attrs.data;
      }
    };
  }
]);

App.directive('widgetDetailEvent', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    return {
      restrict: 'EA',
      templateUrl: 'widget_detail_event.html',
      controller: ["$rootScope", "$scope", "mojioRemote", function($rootScope, $scope, mojioRemote) {
        $scope.reset = function() {
          return $scope.rel = {
            users: [],
            loadUsers: false,
            trips: [],
            moreTrips: false,
            loadTrips: false,
            events: [],
            moreEvents: false,
            loadEvents: false
          };
        };
        $scope.reset();
        $rootScope.$on('MojioObjectSelected', function(event, data) {
          if (data.Type === "Trip") {
            return $scope.reset();
          }
        });
        $scope.broadcast = function(data) {
          $rootScope.$broadcast('MojioObjectSelected', data);
        };
        $scope.showVehicle = function() {
          mojioRemote.GET("Vehicles/" + $scope.data.VehicleId, null, null, null, null, function(result) {
            return $rootScope.$broadcast('MojioObjectSelected', result);
          });
        };
        $scope.showDevice = function() {
          mojioRemote.GET("Mojios/" + $scope.data.MojioId, null, null, null, null, function(result) {
            return $rootScope.$broadcast('MojioObjectSelected', result);
          });
        };
        $scope.showRecentEvents = function() {
          $scope.rel.loadEvents = true;
          $scope.rel.moreEvents = false;
          mojioRemote.GET("Trips/" + $scope.data._id + "/Events", 10, $scope.rel.events.length, null, "sortBy=Time&desc=true", function(result) {
            $scope.rel.events = $scope.rel.events.concat(result.Data);
            $scope.rel.loadEvents = false;
            if (result.TotalRows > $scope.rel.events.length) {
              return $scope.rel.moreEvents = true;
            } else {
              return $scope.rel.moreEvents = false;
            }
          });
        };
      }],
      link: function($rootScope, $scope, element, attrs) {
        $scope.data = attrs.data;
      }
    };
  }
]);

App.directive('widgetDetailInfo', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    return {
      restrict: 'EA',
      templateUrl: 'widget_detail_info.html',
      controller: ["$rootScope", "$scope", function($rootScope, $scope) {
        $scope.data = null;
        $scope.deselect = function() {
          $rootScope.$broadcast('MojioObjectSelected', {
            Type: ''
          });
        };
        $rootScope.$on('MojioObjectSelected', function(event, data) {
          return $scope.data = data;
        });
      }],
      link: function($rootScope, scope, element, attrs) {}
    };
  }
]);

App.directive('widgetDetailTrip', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    return {
      restrict: 'EA',
      templateUrl: 'widget_detail_trip.html',
      controller: ["$rootScope", "$scope", "mojioRemote", function($rootScope, $scope, mojioRemote) {
        $scope.reset = function() {
          return $scope.rel = {
            users: [],
            loadUsers: false,
            trips: [],
            moreTrips: false,
            loadTrips: false,
            events: [],
            moreEvents: false,
            loadEvents: false
          };
        };
        $scope.reset();
        $rootScope.$on('MojioObjectSelected', function(event, data) {
          if (data.Type === "Trip") {
            return $scope.reset();
          }
        });
        $scope.broadcast = function(data) {
          $rootScope.$broadcast('MojioObjectSelected', data);
        };
        $scope.showVehicle = function() {
          mojioRemote.GET("Vehicles/" + $scope.data.VehicleId, null, null, null, null, function(result) {
            return $rootScope.$broadcast('MojioObjectSelected', result);
          });
        };
        $scope.showDevice = function() {
          mojioRemote.GET("Mojios/" + $scope.data.MojioId, null, null, null, null, function(result) {
            return $rootScope.$broadcast('MojioObjectSelected', result);
          });
        };
        $scope.showRecentEvents = function() {
          $scope.rel.loadEvents = true;
          $scope.rel.moreEvents = false;
          mojioRemote.GET("Trips/" + $scope.data._id + "/Events", 10, $scope.rel.events.length, null, "sortBy=Time&desc=true", function(result) {
            $scope.rel.events = $scope.rel.events.concat(result.Data);
            $scope.rel.loadEvents = false;
            if (result.TotalRows > $scope.rel.events.length) {
              return $scope.rel.moreEvents = true;
            } else {
              return $scope.rel.moreEvents = false;
            }
          });
        };
      }],
      link: function($rootScope, $scope, element, attrs) {
        $scope.data = attrs.data;
      }
    };
  }
]);

App.directive('widgetDetailUser', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    return {
      restrict: 'EA',
      templateUrl: 'widget_detail_user.html',
      controller: ["$rootScope", "$scope", "mojioRemote", function($rootScope, $scope, mojioRemote) {
        $scope.reset = function() {
          return $scope.rel = {
            mojios: [],
            loadMojios: false,
            vehicles: [],
            loadVehicles: false,
            trips: [],
            moreTrips: false,
            loadTrips: false,
            events: [],
            moreEvents: false,
            loadEvents: false
          };
        };
        $scope.reset();
        $rootScope.$on('MojioObjectSelected', function(event, data) {
          if (data.Type === "User") {
            return $scope.reset();
          }
        });
        $scope.broadcast = function(data) {
          $rootScope.$broadcast('MojioObjectSelected', data);
        };
        $scope.showMyself = function() {
          mojioRemote.GET("Users/Me", null, null, null, null, function(result) {
            $scope.reset();
            return $rootScope.$broadcast('MojioObjectSelected', result);
          });
        };
        $scope.showMojios = function() {
          mojioRemote.GET("Users/" + $scope.data._id + "/Mojios", 1000, 0, null, null, function(result) {
            return $scope.rel.mojios = result.Data;
          });
        };
        $scope.showApps = function() {
          mojioRemote.GET("Apps", 1000, 0, null, null, function(result) {
            return $scope.rel.apps = result.Data;
          });
        };
        $scope.showVehicles = function() {
          mojioRemote.GET("Users/" + $scope.data._id + "/Vehicles", 1000, 0, null, null, function(result) {
            return $scope.rel.vehicles = result.Data;
          });
        };
        $scope.showRecentTrips = function() {
          $scope.rel.loadTrips = true;
          $scope.rel.moreTrips = false;
          mojioRemote.GET("Users/" + $scope.data._id + "/Trips", 10, $scope.rel.trips.length, null, "sortBy=StartTime&desc=true", function(result) {
            $scope.rel.trips = $scope.rel.trips.concat(result.Data);
            $scope.rel.loadTrips = false;
            if (result.TotalRows > $scope.rel.trips.length) {
              return $scope.rel.moreTrips = true;
            } else {
              return $scope.rel.moreTrips = false;
            }
          });
        };
        $scope.showRecentEvents = function() {
          $scope.rel.loadEvents = true;
          $scope.rel.moreEvents = false;
          mojioRemote.GET("Users/" + $scope.data._id + "/Events", 10, $scope.rel.events.length, null, "sortBy=Time&desc=true", function(result) {
            $scope.rel.events = $scope.rel.events.concat(result.Data);
            $scope.rel.loadEvents = false;
            if (result.TotalRows > $scope.rel.events.length) {
              return $scope.rel.moreEvents = true;
            } else {
              return $scope.rel.moreEvents = false;
            }
          });
        };
      }],
      link: function($rootScope, $scope, element, attrs) {
        $scope.data = attrs.data;
      }
    };
  }
]);

App.directive('widgetDetailVehicle', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    return {
      restrict: 'EA',
      templateUrl: 'widget_detail_vehicle.html',
      controller: ["$rootScope", "$scope", "mojioRemote", function($rootScope, $scope, mojioRemote) {
        $scope.reset = function() {
          return $scope.rel = {
            users: [],
            loadUsers: false,
            trips: [],
            moreTrips: false,
            loadTrips: false,
            events: [],
            moreEvents: false,
            loadEvents: false
          };
        };
        $scope.reset();
        $scope.recent = function() {
          var diff;
          diff = (new Date()) - (new Date($scope.data.LastLocationTime));
          diff = diff / (1000 * 60);
          if ($scope.data.IgnitionOn && diff > 60) {
            return false;
          }
          if (!$scope.data.IgnitionOn && diff > 24 * 60) {
            return false;
          }
          return true;
        };
        $rootScope.$on('MojioObjectSelected', function(event, data) {
          if (data.Type === "Vehicle") {
            return $scope.reset();
          }
        });
        $scope.broadcast = function(data) {
          $rootScope.$broadcast('MojioObjectSelected', data);
        };
        $scope.showOwner = function() {
          mojioRemote.GET("Vehicles/" + $scope.data._id + "/Owner", null, null, null, null, function(result) {
            return $rootScope.$broadcast('MojioObjectSelected', result);
          });
        };
        $scope.showVIN = function() {
          mojioRemote.GET("Vins/" + $scope.data.VIN, null, null, null, null, function(result) {
            return $rootScope.$broadcast('MojioObjectSelected', result);
          });
        };
        $scope.showRecentTrips = function() {
          $scope.rel.loadTrips = true;
          $scope.rel.moreTrips = false;
          mojioRemote.GET("Vehicles/" + $scope.data._id + "/Trips", 10, $scope.rel.trips.length, null, "sortBy=StartTime&desc=true", function(result) {
            $scope.rel.trips = $scope.rel.trips.concat(result.Data);
            $scope.rel.loadTrips = false;
            if (result.TotalRows > $scope.rel.trips.length) {
              return $scope.rel.moreTrips = true;
            } else {
              return $scope.rel.moreTrips = false;
            }
          });
        };
        $scope.showRecentEvents = function() {
          $scope.rel.loadEvents = true;
          $scope.rel.moreEvents = false;
          mojioRemote.GET("Vehicles/" + $scope.data._id + "/Events", 10, $scope.rel.events.length, null, "sortBy=Time&desc=true", function(result) {
            $scope.rel.events = $scope.rel.events.concat(result.Data);
            $scope.rel.loadEvents = false;
            if (result.TotalRows > $scope.rel.events.length) {
              return $scope.rel.moreEvents = true;
            } else {
              return $scope.rel.moreEvents = false;
            }
          });
        };
      }],
      link: function($rootScope, $scope, element, attrs) {
        $scope.data = attrs.data;
      }
    };
  }
]);

App.directive('widgetJson', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    return {
      restrict: 'EA',
      templateUrl: 'widget_json.html',
      controller: ["$rootScope", "$scope", function($rootScope, $scope) {
        $scope.data = null;
        $rootScope.$on('MojioObjectSelected', function(event, data) {
          return $scope.data = data;
        });
      }],
      link: function($rootScope, scope, element, attrs) {}
    };
  }
]);

App.directive('widgetMojioList', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    return {
      restrict: 'EA',
      templateUrl: 'widget_mojio_list.html',
      controller: ["$scope", function($scope) {}],
      link: function($rootScope, scope, element, attrs) {}
    };
  }
]);

App.directive('widgetTripList', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    return {
      restrict: 'EA',
      templateUrl: 'widget_trip_list.html',
      controller: ["$scope", function($scope) {}],
      link: function($rootScope, scope, element, attrs) {}
    };
  }
]);

App.directive('widgetUserList', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    return {
      restrict: 'EA',
      templateUrl: 'widget_user_list.html',
      controller: ["$scope", function($scope) {}],
      link: function($rootScope, scope, element, attrs) {}
    };
  }
]);

App.directive('widgetVehicleList', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    return {
      restrict: 'EA',
      templateUrl: 'widget_vehicle_list.html',
      controller: ["$scope", function($scope) {}],
      link: function($rootScope, scope, element, attrs) {}
    };
  }
]);

App.directive('widgetVehicleReport', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    return {
      restrict: 'EA',
      templateUrl: 'widget_vehicle_report.html',
      controller: ["$rootScope", "$scope", "mojioGlobal", "mojioRemote", function($rootScope, $scope, mojioGlobal, mojioRemote) {
        var tdf, tdt;
        tdf = new Date();
        tdf.setDate((new Date()).getDate() - 30);
        tdt = new Date();
        tdt.setDate((new Date()).getDate() + 1);
        $scope.DateRange = {
          From: tdf,
          To: tdt
        };
        $scope.prepareData = function() {
          if (typeof $scope.UserID === "undefined") {
            $scope.UserID = mojioGlobal.data.user_data.id;
          }
          return mojioRemote.GET("Users/" + $scope.UserID + "/Vehicles", 1000, 0, null, null, function(result) {
            var i, len, next, nextString, past, pastString, ref, row;
            $scope.vehicles = {};
            ref = result.Data;
            for (i = 0, len = ref.length; i < len; i++) {
              row = ref[i];
              $scope.vehicles[row._id] = angular.copy(row);
              $scope.vehicles[row._id].TripsNo = 0;
              $scope.vehicles[row._id].Mileage = 0;
              $scope.vehicles[row._id].Duration = 0;
              $scope.vehicles[row._id].FuelConsumption = 0;
              $scope.vehicles[row._id].FuelEfficency = 0;
            }
            past = $scope.DateRange.From;
            next = $scope.DateRange.To;
            pastString = past.getFullYear() + "." + (past.getMonth() + 1) + "." + past.getDate();
            nextString = next.getFullYear() + "." + (next.getMonth() + 1) + "." + next.getDate();
            return mojioRemote.GET("Users/" + $scope.UserID + "/Trips", 10000, 0, "StartTime=" + pastString + "-" + nextString, null, function(result) {
              var j, len1, ref1, results, rrow;
              ref1 = result.Data;
              results = [];
              for (j = 0, len1 = ref1.length; j < len1; j++) {
                row = ref1[j];
                rrow = $scope.vehicles[row.VehicleId];
                rrow.TripsNo++;
                rrow.Mileage += row.Distance;
                rrow.Duration += ((new Date(row.EndTime)) - (new Date(row.StartTime))) / 1000;
                if (row.Distance > 0.1 && row.FuelEfficiency > 1) {
                  rrow.FuelConsumption += row.Distance / row.FuelEfficiency;
                  results.push(rrow.FuelEfficency = rrow.Mileage / rrow.FuelConsumption);
                } else {
                  results.push(void 0);
                }
              }
              return results;
            });
          });
        };
        $rootScope.$on('MojioObjectSelected', function(event, data) {
          if (data.Type === "User") {
            $scope.UserID = data._id;
            return $scope.prepareData();
          }
        });
        $scope.prepareData();
        $scope.showMyself = function(row) {
          $rootScope.$broadcast('MojioObjectSelected', row);
        };
      }],
      link: function($rootScope, $scope, element, attrs) {
        $scope.data = attrs.data;
      }
    };
  }
]);

App.directive('widgetVehiclesOnMap', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    var showDirection, showLocation, state;
    showDirection = function(model) {
      mojioRemote.GET(model, 10000, 0, "", "sortBy=Time", function(result) {
        var AllCoordinates, bounds, d, data, i, len, maker, marker, myOptions, tripPath;
        data = result.Data;
        myOptions = {
          navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
          },
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        maker = null;
        state.map = new google.maps.Map(state.element, myOptions);
        bounds = new google.maps.LatLngBounds();
        AllCoordinates = [];
        for (i = 0, len = data.length; i < len; i++) {
          d = data[i];
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(d.Location.Lat, d.Location.Lng),
            map: state.map,
            title: d.Name
          });
          AllCoordinates.push(new google.maps.LatLng(d.Location.Lat, d.Location.Lng));
          bounds.extend(marker.getPosition());
        }
        state.map.fitBounds(bounds);
        tripPath = new google.maps.Polyline({
          path: AllCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        return tripPath.setMap(state.map);
      }, function(result) {
        return elm.innerHTML = "?";
      });
    };
    showLocation = function(model) {
      mojioRemote.GET(model, 100, 0, "", "sortBy=LastContactTime&desc=true", function(result) {
        var bounds, d, data, extendPoint1, extendPoint2, i, len, maker, marker, myOptions;
        data = result.Data;
        myOptions = {
          navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
          },
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        maker = null;
        state.map = new google.maps.Map(state.element, myOptions);
        bounds = new google.maps.LatLngBounds();
        for (i = 0, len = data.length; i < len; i++) {
          d = data[i];
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(d.LastLocation.Lat, d.LastLocation.Lng),
            map: state.map,
            title: d.Name
          });
          bounds.extend(marker.getPosition());
        }
        if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
          extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.003, bounds.getNorthEast().lng() + 0.003);
          extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.003, bounds.getNorthEast().lng() - 0.003);
          bounds.extend(extendPoint1);
          bounds.extend(extendPoint2);
        }
        return state.map.fitBounds(bounds);
      }, function(result) {
        return elm.innerHTML = "?";
      });
    };
    state = {
      map: null,
      element: null,
      attrs: null
    };
    return {
      restrict: 'EA',
      controller: ["$rootScope", "$scope", function($rootScope, $scope) {
        return $rootScope.$on('MojioObjectSelected', function(event, data) {
          if (data.Type === "User") {
            showLocation("Users/" + data._id + "/Vehicles");
            return;
          }
          if (data.Type === "Trip") {
            showDirection("Trips/" + data._id + "/Events");
            return;
          }
        });
      }],
      link: function(scope, element, attrs) {
        var notFullScreenHeight, oldRow;
        state.element = element[0];
        state.attrs = attrs;
        notFullScreenHeight = state.element.parentNode.style.height;
        state.element.style.height = state.element.parentNode.style.height;
        oldRow = scope.$parent.v.Row;
        window.setInterval(function() {
          if (screenfull.isFullscreen && oldRow !== -1) {
            state.element.parentNode.style.height = window.innerHeight + "px";
            state.element.style.height = state.element.parentNode.style.height;
            google.maps.event.trigger(state.map, "resize");
            oldRow = -1;
          }
          if (!screenfull.isFullscreen && oldRow === -1) {
            state.element.parentNode.style.height = notFullScreenHeight;
            state.element.style.height = state.element.parentNode.style.height;
            google.maps.event.trigger(state.map, "resize");
            oldRow = scope.$parent.v.Row;
          }
          if (oldRow !== scope.$parent.v.Row && oldRow !== -1) {
            oldRow = scope.$parent.v.Row;
            state.element.style.height = state.element.parentNode.style.height;
            return google.maps.event.trigger(state.map, "resize");
          }
        }, 1000);
        showLocation('vehicles');
      }
    };
  }
]);

App.directive('widgetVehiclesOnStreetview', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    var createStreetView, state;
    createStreetView = function(lat, lng) {
      var addLatLng, computeAngle, googlePos, panorama, service, showPanoData, wrapAngle;
      showPanoData = function(panoData, status) {
        var angle, panoOptions;
        if (status !== google.maps.StreetViewStatus.OK) {
          state.element.innerHTML = 'No StreetView Picture Available';
          return;
        }
        angle = computeAngle(addLatLng, panoData.location.latLng);
        panoOptions = {
          position: addLatLng,
          addressControl: false,
          linksControl: false,
          panControl: false,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
          },
          pov: {
            heading: angle,
            pitch: 10,
            zoom: 1
          },
          enableCloseButton: false,
          visible: true
        };
        panorama.setOptions(panoOptions);
      };
      computeAngle = function(endLatLng, startLatLng) {
        var DEGREE_PER_RADIAN, RADIAN_PER_DEGREE, dlat, dlng, yaw;
        DEGREE_PER_RADIAN = 57.2957795;
        RADIAN_PER_DEGREE = 0.017453;
        dlat = endLatLng.lat() - startLatLng.lat();
        dlng = endLatLng.lng() - startLatLng.lng();
        yaw = Math.atan2(dlng * Math.cos(endLatLng.lat() * RADIAN_PER_DEGREE), dlat) * DEGREE_PER_RADIAN;
        return wrapAngle(yaw);
      };
      wrapAngle = function(angle) {
        if (angle >= 360) {
          angle -= 360;
        } else if (angle < 0) {
          angle += 360;
        }
        return angle;
      };
      googlePos = new google.maps.LatLng(lat, lng);
      panorama = new google.maps.StreetViewPanorama(state.element);
      state.panorama = panorama;
      addLatLng = new google.maps.LatLng(lat, lng);
      service = new google.maps.StreetViewService;
      return service.getPanoramaByLocation(addLatLng, 50, showPanoData);
    };
    state = {
      panorama: null,
      element: null,
      attrs: null
    };
    return {
      restrict: 'EA',
      controller: ["$rootScope", "$scope", function($rootScope, $scope) {
        return $rootScope.$on('MojioObjectSelected', function(event, data) {
          if (data.Type === "Vehicle") {
            createStreetView(data.LastLocation.Lat, data.LastLocation.Lng);
            return;
          }
        });
      }],
      link: function(scope, element, attrs) {
        var notFullScreenHeight, oldRow;
        state.element = element[0];
        state.attrs = attrs;
        notFullScreenHeight = state.element.parentNode.style.height;
        state.element.style.height = state.element.parentNode.style.height;
        oldRow = scope.$parent.v.Row;
        window.setInterval(function() {
          if (screenfull.isFullscreen && oldRow !== -1) {
            state.element.parentNode.style.height = window.innerHeight + "px";
            state.element.style.height = state.element.parentNode.style.height;
            google.maps.event.trigger(state.panorama, "resize");
            oldRow = -1;
          }
          if (!screenfull.isFullscreen && oldRow === -1) {
            state.element.parentNode.style.height = notFullScreenHeight;
            state.element.style.height = state.element.parentNode.style.height;
            google.maps.event.trigger(state.panorama, "resize");
            oldRow = scope.$parent.v.Row;
          }
          if (oldRow !== scope.$parent.v.Row && oldRow !== -1) {
            oldRow = scope.$parent.v.Row;
            state.element.style.height = state.element.parentNode.style.height;
            return google.maps.event.trigger(state.panorama, "resize");
          }
        }, 1000);
      }
    };
  }
]);

App.directive('widgetVehiclesTextDirection', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http) {
    var showDirections, state;
    showDirections = function(eLat, eLng) {
      var directionsDisplay, directionsService, request;
      directionsService = new google.maps.DirectionsService();
      directionsDisplay = new google.maps.DirectionsRenderer();
      directionsDisplay.setPanel(state.element);
      request = {
        origin: new google.maps.LatLng(41.850033, -87.6500523),
        destination: new google.maps.LatLng(eLat, eLng),
        travelMode: google.maps.TravelMode.WALKING
      };
      directionsService.route(request, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          return directionsDisplay.setDirections(response);
        }
      });
    };
    state = {
      map: null,
      element: null,
      attrs: null
    };
    return {
      restrict: 'EA',
      controller: ["$rootScope", "$scope", function($rootScope, $scope) {
        return $rootScope.$on('MojioObjectSelected', function(event, data) {
          if (data.Type === "Vehicle") {
            showDirections(data.LastLocation.Lat, data.LastLocation.Lng);
            return;
          }
        });
      }],
      link: function(scope, element, attrs) {
        var notFullScreenHeight, oldRow;
        state.element = element[0];
        state.attrs = attrs;
        notFullScreenHeight = state.element.parentNode.style.height;
        state.element.style.height = state.element.parentNode.style.height;
        oldRow = scope.$parent.v.Row;
        window.setInterval(function() {
          if (screenfull.isFullscreen && oldRow !== -1) {
            state.element.parentNode.style.height = window.innerHeight + "px";
            state.element.style.height = state.element.parentNode.style.height;
            oldRow = -1;
          }
          if (!screenfull.isFullscreen && oldRow === -1) {
            state.element.parentNode.style.height = notFullScreenHeight;
            state.element.style.height = state.element.parentNode.style.height;
            oldRow = scope.$parent.v.Row;
          }
          if (oldRow !== scope.$parent.v.Row && oldRow !== -1) {
            oldRow = scope.$parent.v.Row;
            return state.element.style.height = state.element.parentNode.style.height;
          }
        }, 1000);
      }
    };
  }
]);

App.directive('serviceOfferEdit', [
  function() {
    return {
      scope: {
        serviceOfferEdit: '=',
        parent: '='
      },
      restrict: 'EA',
      templateUrl: 'service_offer_edit.html',
      controller: ["$scope", function($scope) {
        $scope.AddTag = function(parent) {
          parent.tag.push("");
        };
        $scope.DeleteTag = function(parent, pos) {
          parent.splice(pos, 1);
        };
        $scope.offer = $scope.serviceOfferEdit;
      }],
      link: function(scope, element, attrs) {}
    };
  }
]);

App.directive('serviceAdviceEdit', [
  function() {
    return {
      scope: {
        serviceAdviceEdit: '=',
        parent: '='
      },
      restrict: 'EA',
      templateUrl: 'service_advice_edit.html',
      controller: ["$scope", function($scope) {
        $scope.AddTag = function(parent) {
          parent.tag.push("");
        };
        $scope.DeleteTag = function(parent, pos) {
          parent.splice(pos, 1);
        };
        $scope.advice = $scope.serviceAdviceEdit;
      }],
      link: function(scope, element, attrs) {}
    };
  }
]);

App.directive('cmsBreadcrumb', [
  'contentFactory', function(contentFactory) {
    return {
      restrict: 'EA',
      templateUrl: 'cms_breadcrumb.html',
      controller: ["$scope", function($scope) {
        $scope.Content = contentFactory.Content;
        $scope.Child = contentFactory.Child;
        $scope.Parent = contentFactory.Parent;
        $scope.MenuNodes = contentFactory.MenuNodes;
        return $scope.GotoNode = contentFactory.GotoNode;
      }],
      link: function(scope, element, attrs) {}
    };
  }
]);

App.directive('cmsMenu', [
  'contentFactory', function(contentFactory) {
    return {
      scope: {
        viewmode: '=',
        nodes: '=',
        menuconfig: '='
      },
      restrict: 'EA',
      templateUrl: 'cms_menu.html',
      controller: ["$scope", function($scope) {
        $scope.Content = contentFactory.Content;
        $scope.Child = contentFactory.Child;
        $scope.Parent = contentFactory.Parent;
        $scope.MenuNodes = contentFactory.MenuNodes;
        return $scope.GotoNode = contentFactory.GotoNode;
      }],
      link: function(scope, element, attrs) {}
    };
  }
]);

App.directive('cmsMenuListview', [
  'contentFactory', function(contentFactory) {
    return {
      scope: {
        nodes: '=',
        menuconfig: '='
      },
      restrict: 'EA',
      templateUrl: 'cms_menu_listview.html',
      controller: ["$scope", function($scope) {
        $scope.Content = contentFactory.Content;
        $scope.Child = contentFactory.Child;
        $scope.Parent = contentFactory.Parent;
        $scope.MenuNodes = contentFactory.MenuNodes;
        return $scope.GotoNode = contentFactory.GotoNode;
      }],
      link: function(scope, element, attrs) {}
    };
  }
]);

App.directive('cmsMenuTile', [
  'contentFactory', function(contentFactory) {
    return {
      scope: {
        nodes: '=',
        menuconfig: '='
      },
      restrict: 'EA',
      templateUrl: 'cms_menu_tile.html',
      controller: ["$scope", function($scope) {
        $scope.Content = contentFactory.Content;
        $scope.Child = contentFactory.Child;
        $scope.Parent = contentFactory.Parent;
        $scope.MenuNodes = contentFactory.MenuNodes;
        return $scope.GotoNode = contentFactory.GotoNode;
      }],
      link: function(scope, element, attrs) {}
    };
  }
]);

App.directive('cmsMenuTreeview', [
  'contentFactory', function(contentFactory) {
    return {
      scope: {
        nodes: '=',
        menuconfig: '='
      },
      restrict: 'EA',
      templateUrl: 'cms_menu_treeview.html',
      controller: ["$scope", function($scope) {
        $scope.Content = contentFactory.Content;
        $scope.Child = contentFactory.Child;
        $scope.Parent = contentFactory.Parent;
        $scope.MenuNodes = contentFactory.MenuNodes;
        return $scope.GotoNode = contentFactory.GotoNode;
      }],
      link: function(scope, element, attrs) {}
    };
  }
]);

App.directive('deviceGrid', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster) {
    return {
      restrict: 'EA',
      templateUrl: 'device_grid.html',
      scope: {
        searchProperty: '=',
        searchImei: '=',
        settings: '=',
        rowDetail: '=',
        footer: '=',
        api: '=',
        broadcast: '=',
        adminMode: '=',
        subSubsGrid: '=',
        "delete": '='
      },
      controller: 'mojioGridController',
      link: function(scope, element, attrs) {}
    };
  }
]);

App.directive('eventGrid', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster) {
    return {
      restrict: 'EA',
      templateUrl: 'event_grid.html',
      scope: {
        adminMode: '=',
        settings: '=',
        rowDetail: '=',
        footer: '=',
        api: '=',
        broadcast: '=',
        linkToDetail: '=',
        subSubsGrid: '='
      },
      controller: 'mojioGridController',
      link: function(scope, element, attrs) {}
    };
  }
]);

App.directive('textFileReader', [
  function() {
    return {
      scope: {
        textFileReader: '='
      },
      transclude: false,
      restrict: 'EA',
      controller: ["$scope", function($scope) {}],
      link: function(scope, element, attrs) {
        var input;
        input = document.createElement("input");
        input.type = "file";
        input.addEventListener('change', function() {
          var FR;
          if (input.files && input.files[0]) {
            FR = new FileReader();
            FR.onload = function(e) {
              return scope.$apply(function() {
                return scope.textFileReader(e.target.result);
              });
            };
            return FR.readAsText(input.files[0]);
          }
        });
        element.bind('click', function() {
          return input.click();
        });
      }
    };
  }
]);

App.directive('fuelEfficiencyScore', [
  '$filter', function($filter) {
    return {
      scope: {
        score: '=',
        change: '=',
        stype: '@'
      },
      restrict: 'EA',
      templateUrl: 'fuelEfficiencyScore.html',
      controller: ["$scope", function($scope) {
        var title, v;
        if (typeof $scope.score === "undefined" || $scope.score === null) {
          if ($scope.stype === 'NT' || $scope.stype === 'T') {
            return $filter('translate')("common.FuelEfficiencyScore.NeedMoreData");
          } else {
            return "";
          }
        }
        v = Math.round($scope.score * 10);
        title = "";
        if (v <= 3) {
          title = $filter('translate')("common.FuelEfficiencyScore.poor");
        } else if (v <= 6) {
          title = $filter('translate')("common.FuelEfficiencyScore.average");
        } else {
          title = $filter('translate')("common.FuelEfficiencyScore.good");
        }
        if ($scope.stype === "NT") {
          title = v + " - " + title;
        } else if ($scope.stype === "N") {
          title = v;
        }
        $scope.title = title;
        if (parseFloat($scope.change) > 0) {
          return $scope.arrow = "up";
        } else if (parseFloat($scope.change, 10) === 0) {
          return $scope.arrow = "";
        } else {
          return $scope.arrow = "down";
        }
      }],
      link: function(scope, element, attrs) {}
    };
  }
]);

App.directive('imageUploader', [
  function() {
    return {
      scope: {
        imageUploader: '='
      },
      transclude: false,
      restrict: 'EA',
      controller: ["$scope", function($scope) {}],
      link: function(scope, element, attrs) {
        var input;
        input = document.createElement("input");
        input.type = "file";
        input.addEventListener('change', function() {
          var FR;
          if (input.files && input.files[0]) {
            FR = new FileReader();
            FR.onload = function(e) {
              return scope.$apply(function() {
                return scope.imageUploader = e.target.result;
              });
            };
            return FR.readAsDataURL(input.files[0]);
          }
        });
        element.bind('click', function() {
          return input.click();
        });
      }
    };
  }
]);

App.directive('mymojioFaqCs', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster) {
    return {
      restrict: 'EA',
      templateUrl: 'mymojio_faq_cs.html',
      link: function(scope, element, attrs) {}
    };
  }
]);

App.directive('mymojioFaqEn', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster) {
    return {
      restrict: 'EA',
      templateUrl: 'mymojio_faq_en.html',
      link: function(scope, element, attrs) {}
    };
  }
]);

App.directive('notificationGrid', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster) {
    return {
      restrict: 'EA',
      templateUrl: 'notification_grid.html',
      scope: {
        adminMode: '=',
        settings: '=',
        rowDetail: '=',
        footer: '=',
        api: '=',
        broadcast: '=',
        linkToDetail: '=',
        subSubsGrid: '='
      },
      controller: 'mojioGridController',
      link: function(scope, element, attrs) {}
    };
  }
]);

App.directive('tripDetail', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', 'myMojioFactory', '$timeout', 'googlemapFactory', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http, myMojioFactory, $timeout, googlemapFactory) {
    return {
      restrict: 'EA',
      templateUrl: 'trip_detail.html',
      scope: {
        trip: '=',
        events: '='
      },
      controller: ["$rootScope", "$scope", function($rootScope, $scope) {}],
      link: function(scope, element, attrs) {
        var prepareData;
        prepareData = function(edata, tdata) {
          scope.MaxSpeed = Math.round(scope.trip.MaxSpeed);
          return scope.MaxRPM = Math.round(scope.trip.MaxRPM);
        };
        if (scope.events) {
          prepareData(scope.events);
        } else {
          mojioRemote.GET("Trips/" + scope.trip._id + "/Events", 10000, 0, null, "sortBy=Time&desc=false", function(result) {
            return prepareData(result.Data);
          });
        }
      }
    };
  }
]);

App.directive('tripGrid', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster) {
    return {
      restrict: 'EA',
      templateUrl: 'trip_grid.html',
      scope: {
        adminMode: '=',
        settings: '=',
        rowDetail: '=',
        footer: '=',
        api: '=',
        broadcast: '=',
        linkToDetail: '=',
        subEvent: '=',
        subSubsGrid: '=',
        "export": '='
      },
      controller: 'mojioGridController',
      link: function(scope, element, attrs) {}
    };
  }
]);

App.directive('tripMap', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', '$http', 'myMojioFactory', '$timeout', 'googlemapFactory', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster, $http, myMojioFactory, $timeout, googlemapFactory) {
    return {
      restrict: 'EA',
      scope: {
        tripid: '=',
        events: '='
      },
      controller: ["$rootScope", "$scope", function($rootScope, $scope) {}],
      link: function(scope, element, attrs) {
        var createMarker, drawMap, myOptions;
        createMarker = function(map, latlng, style, bgcolor, color, classes, text) {
          var allstyle, labelClass, marker;
          if (bgcolor === null) {
            bgcolor = "rgba(255,0,0,0.5)";
          }
          if (color === null) {
            color = "#000000";
          }
          labelClass = "labels";
          if (classes !== null) {
            labelClass += " " + classes;
          }
          allstyle = "font-size:10px;margin-top:1px;padding-top:1px;padding-left:4px;width:15px;height:15px;background-color:" + bgcolor + ";color:" + color + ";";
          if (style !== null) {
            allstyle += style;
          }
          marker = new MarkerWithLabel({
            position: latlng,
            icon: ' ',
            map: map,
            labelContent: text,
            labelClass: labelClass,
            labelAnchor: new google.maps.Point(7, 7)
          });
          marker.setMap(map);
          return marker;
        };
        drawMap = function(data) {
          var AllCoordinates, AllEvents, EventCounts, bounds, d, en, enLoc, i, len, points, pos, st, stLoc;
          if (scope.stMarker !== null) {
            scope.stMarker.setMap(null);
            scope.stMarker = null;
          }
          if (scope.enMarker !== null) {
            scope.enMarker.setMap(null);
            scope.enMarker = null;
          }
          if (scope.tripPath !== null) {
            scope.tripPath.setMap(null);
            scope.tripPath = null;
          }
          bounds = new google.maps.LatLngBounds();
          AllCoordinates = [];
          st = null;
          en = null;
          points = 0;
          AllEvents = data;
          EventCounts = AllEvents.length;
          for (pos = i = 0, len = data.length; i < len; pos = ++i) {
            d = data[pos];
            if (myMojioFactory.IsValidLocation(d, "Location")) {
              if (st === null) {
                st = d;
              }
              en = d;
              points++;
              if (d.EventType === "OffStatus" || d.EventType === "HeartBeat") {
                continue;
              }
              if (pos === 0 || pos === EventCounts - 1 || d.EventType !== "TripStatus" || myMojioFactory.IsInorderPoint(d, AllEvents[pos - 1], AllEvents[pos + 1])) {
                AllCoordinates.push(new google.maps.LatLng(d.Location.Lat, d.Location.Lng));
                bounds.extend(new google.maps.LatLng(d.Location.Lat, d.Location.Lng));
              }
            }
          }
          if (points === 0) {
            return;
          }
          scope.map.fitBounds(bounds);
          scope.tripPath = new google.maps.Polyline({
            path: AllCoordinates,
            geodesic: false,
            strokeColor: '#0C5B7D',
            strokeOpacity: 0.5,
            strokeWeight: 5
          });
          scope.tripPath.setMap(scope.map);
          if (scope.st !== null) {
            stLoc = new google.maps.LatLng(st.Location.Lat, st.Location.Lng);
            scope.stMarker = createMarker(scope.map, stLoc, null, null, null, "point-start text-circle3", "A");
          }
          if (en !== null) {
            enLoc = new google.maps.LatLng(en.Location.Lat, en.Location.Lng);
            scope.enMarker = createMarker(scope.map, enLoc, null, null, null, "point-end text-circle3", "B");
          }
        };
        myOptions = {
          scrollwheel: false,
          zoom: 4,
          center: new google.maps.LatLng(49, -123),
          disableDefaultUI: true,
          styles: googlemapFactory.MapStyle,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: false,
          zoomControl: false,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.LEFT_CENTER
          },
          scaleControl: false,
          streetViewControl: false
        };
        scope.map = new google.maps.Map(element[0], myOptions);
        scope.tripPath = null;
        scope.stMarker = null;
        scope.enMarker = null;
        if (scope.events) {
          drawMap(scope.events);
        } else {
          mojioRemote.GET("Trips/" + scope.tripid + "/Events", 10000, 0, null, "sortBy=Time&desc=false", function(result) {
            return drawMap(result.Data);
          });
        }
      }
    };
  }
]);

App.directive('userGrid', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster) {
    return {
      restrict: 'EA',
      templateUrl: 'user_grid.html',
      scope: {
        adminMode: '=',
        settings: '=',
        rowDetail: '=',
        footer: '=',
        api: '=',
        broadcast: '=',
        linkToDetail: '=',
        subDevice: '=',
        subVehicle: '=',
        subSubsGrid: '='
      },
      controller: 'mojioGridController',
      link: function(scope, element, attrs) {}
    };
  }
]);

App.directive('vehicleDropdown', [
  'myMojioFactory', function(myMojioFactory) {
    return {
      scope: {
        vehicles: '=',
        selectedVehicle: '='
      },
      restrict: 'EA',
      templateUrl: 'vehicle_dropdown.html',
      controller: ["$scope", function($scope) {
        $scope.VehicleSearch = "";
        $scope.changeSelectedVehicle = myMojioFactory.changeSelectedVehicle;
        $scope.VehicleColor = myMojioFactory.VehicleColor;
      }],
      link: function(scope, element, attrs) {}
    };
  }
]);

App.directive('vehicleGrid', [
  '$rootScope', '$window', 'mojioRemote', 'mojioLocal', 'mojioGlobal', 'toaster', function($rootScope, $window, mojioRemote, mojioLocal, mojioGlobal, toaster) {
    return {
      restrict: 'EA',
      templateUrl: 'vehicle_grid.html',
      scope: {
        adminMode: '=',
        settings: '=',
        rowDetail: '=',
        footer: '=',
        api: '=',
        broadcast: '=',
        linkToDetail: '=',
        subTrip: '=',
        subEvent: '=',
        subSubsGrid: '='
      },
      controller: 'mojioGridController',
      link: function(scope, element, attrs) {}
    };
  }
]);
