(function(){
    'use strict';
    var x="hello";
    angular.module('LunchCheck',[])
    .controller('LunchCheckController', lunchCheckController);

    lunchCheckController.$inject=['$scope', '$filter'];
    function lunchCheckController($scope, $filter){
        $scope.lunch="";
        //$scope.lunchList=[];
        $scope.processLunch=function(){
            var lunchList=[];
            var temp=$scope.lunch.split(",");
            for(var i=0; i<temp.length;i++){
                var menu=temp[i].trim();
                if(menu.length>0){
                    lunchList.push(menu);
                }
            }
            //$scope.lunchList=lunchList;
            $scope.lunch=lunchList.join(',');
            if(lunchList.length==0){
                $scope.message="Please enter data first";
            }
            else if(lunchList.length>3){
                $scope.message="Too much!";
            }
            else{
                $scope.message="Enjoy!";
            }
        }
    }
})();
