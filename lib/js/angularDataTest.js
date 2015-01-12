/**
 * Created by zhh on 14-12-9.
 * 测试两个兄弟控制器中传值
 */

var angularDataTest = angular.module("angularDataTest",[]);
angularDataTest.factory('instance', function(){
    return {};
});
angularDataTest.controller("control_1",function($scope, instance){
    $scope.change = function(){
        instance.name = $scope.inputValue;
    }
});
angularDataTest.controller("control_2",function($scope, instance){
    $scope.show = function(){
       $scope.name = instance.name;
    }
});