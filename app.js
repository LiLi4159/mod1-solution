(function(){
    'use strict';
    var x="hello";
    angular.module('LunchCheck',[])
    .controller('LunchCheckController', lunchCheckController);

    lunchCheckController.$inject=['$scope', '$filter'];
    function lunchCheckController($scope, $filter){
        $scope.lunch="";
        var messages=['Please enter data first',"Too much!","Enjoy!"];
   
        $scope.processLunch=function(){
            var lunchList=[];
            var temp=$scope.lunch.split(",");
            for(var i=0; i<temp.length;i++){
                var menu=temp[i].trim();
                if(menu.length>0){
                    lunchList.push(menu);
                }
            }
            
            $scope.lunch=lunchList.join(',');
            if(lunchList.length==0){
                $scope.msgIdx=0;
            }
            else if(lunchList.length>3){
                $scope.msgIdx=1;
            }
            else{
                $scope.msgIdx=2;
            }

            $scope.message=messages[$scope.msgIdx];
        }
    }
})();
