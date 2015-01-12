/**
 * Created by zhh on 14-12-9.
 * directive 作用域
 *
 *
 * 说明	举例
 * @	传递一个字符串作为属性的值.	str : '@string'
 * &	使用父作用域中的一个函数,可以在指令中调用	getName : '&getUserName'
 * =	使用父作用域中的一个属性，绑定数据到指令的属性中.	name : '=username'
 */

var directiveTest = angular.module("directiveTest",[]);

directiveTest.directive('myCustomer', function() {
    return {
        restrict: 'E',
        scope: {
            val: '=val' //引用val的值
        },
        templateUrl:'../../view/my-customer.html',
        link:function($scope, $element, $attr){
            console.log($attr.val);
//            $scope[$attr.customer]
        }
    };
});

directiveTest.directive("myInput",function(){
    return{
        restrict :"A",
        scope : {
            name : "=name",//双向绑定name的值
            xing: "@", //单向引用xing的值
            onOk: "&" //以wrapper function形式引用on-ok属性的内容
        },
        link:function($scope, $element, $attr){
            $scope.name = "wenzhu";
            console.log($attr.onOk)
        }
    }
});

directiveTest.directive("myCurrentSms",function($timeout,dateFilter){
    return{
        link:function($scope, $element, $attr){
            var timeoutId,format;
            $scope.$watch($attr.myCurrentSms, function(value) { //监听指令的属性值变化
                console.log(value);
                format = value;
                updateTime();
            });
            function updateTime() {
                $scope.uptime = dateFilter(new Date(), $scope.format);
            }
            function scheduleUpdate() {
                // save the timeoutId for canceling
                timeoutId = $timeout(function() {
                    updateTime();
                    scheduleUpdate(); // schedule the next update
                }, 1000);
            }
            $element.on('$destroy', function() {
                $timeout.cancel(timeoutId);
            });
            scheduleUpdate();
        }
    }
});

directiveTest.controller("dirCtrl_1",function($scope){
    $scope.dir1 = { name: 'Naomi', address: '1600 Amphitheatre' };
    $scope.dir2 = { name: 'Igor', address: '123 Somewhere' };
    $scope.format = 'M/d/yy h:mm:ss a';
    $scope.uptime = "";
});
