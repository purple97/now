/**
 * Created by zhh on 14-12-10.
 * 路由
 */

var routeTest = angular.module("routeTest",["ngRoute"]);

routeTest.config(['$routeProvider','$locationProvider',function ($routeProvider) {
    $routeProvider
        .when('/list', {
            templateUrl: '../../view/list.html',
            controller: 'RouteListCtl'
        })
        .when('/list/:id', {
            templateUrl: '../../view/detail.html',
            controller: 'RouteDetailCtl'
        })
        .otherwise({
            redirectTo: 'list'
        });
}]);
routeTest.controller('RouteListCtl',function($scope) {

});
routeTest.controller('RouteDetailCtl',function($scope, $routeParams) {
    $scope.id = $routeParams.id;
});
routeTest.run(['$rootScope', '$window', '$location', '$log', function ($rootScope, $window, $location, $log) {
    //绑定跳转事件,分别是：地址改变前、改变后、路由开始前、路由跳转后；
    //route是监控location.url的，然后采取操作的。所以事件的触发应该是先location后route事件。
    var locationChangeStartOff   = $rootScope.$on('$locationChangeStart' , locationChangeStart);
    var locationChangeSuccessOff = $rootScope.$on('$locationChangeSuccess' , locationChangeSuccess);
    var routeChangeStartOff      = $rootScope.$on('$routeChangeStart' , routeChangeStart);
    var routeChangeSuccessOff    = $rootScope.$on('$routeChangeSuccess' , routeChangeSuccess);

    function locationChangeStart(event) {
        $log.log('locationChangeStart');
        $log.log(arguments);
    }
    function locationChangeSuccess(event) {
        $log.log('locationChangeSuccess');
        $log.log(arguments);
    }
    function routeChangeStart(event) {
        $log.log('routeChangeStart');
        $log.log(arguments);
    }
    function routeChangeSuccess(event) {
        $log.log('routeChangeSuccess');
        $log.log(arguments);
    }

    function locationChangeStartAll(event, newUrl) {
        $log.log('locationChangeStart');
        $log.log(arguments);

        var ret = $window.confirm('Are you sure to give it up? ');
        if (ret) {
            locationChangeStartOff(); //Stop listening for location changes or you can do others
            $location.path(newUrl);
            return;
        }
        event.preventDefault();
        return;
    }
}]);
