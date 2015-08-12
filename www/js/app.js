var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("http://183.82.111.146/otcdeal/GetCategories.php")
    .success(function (response) {$scope.names = response.children;});
$scope.otc = true;

$scope.toggleCustom = function() {
  
  alert("hai");
$scope.otc1=false;
  $scope.otc = $scope.otc == false ? true: false;
  $scope.otc1 = $scope.otc1 == false ? true: false;
   
  
}

$scope.toggleCustom1 = function() {



  
   alert("hai1");
   $scope.otc1 = $scope.otc1 == false ? true: false;
}



});



/*
       <li ng-repeat="y in x.children.slice(0,children.length)" ng-show="$first" ng-click="Custom1()">{{y.name}}
       <ol>  <li ng-repeat="z in y.children">{{z.name}}
 <ol></li>
        <li ng-repeat="y in x.children.slice(1,children.length)" ng-show="$first" ng-click="Custom1()">{{y.name}}</li>

 <li ng-repeat="y in x.children.slice(2,children.length)" ng-show="$first" ng-click="Custom1()">{{y.name}}</li>

 <li ng-repeat="y in x.children.slice(3,children.length)" ng-show="$first" ng-click="Custom1()">{{y.name}}</li>

 <li ng-repeat="y in x.children.slice(4,children.length)" ng-show="$first" ng-click="Custom1()">{{y.name}}</li>
 <li ng-repeat="y in x.children.slice(5,children.length)" ng-show="$first" ng-click="Custom1()">{{y.name}}</li>
 <li ng-repeat="y in x.children.slice(6,children.length)" ng-show="$first" ng-click="Custom1()">{{y.name}}</li>
 <li ng-repeat="y in x.children.slice(7,children.length)" ng-show="$first" ng-click="Custom1()">{{y.name}}</li>
 <li ng-repeat="y in x.children.slice(8,children.length)" ng-show="$first" ng-click="Custom1()">{{y.name}}</li>
<li ng-repeat="y in x.children.slice(9,children.length)" ng-show="$first" ng-click="Custom1()">{{y.name}}</li>*/


/*<li ng-repeat=" y in x.children.slice(0,children.length)" ng-show="$first" ng-click="Custom1()">{{y.name}}


     <div ng-hide="condition"> 
     
 <ol>  <li ng-repeat="z in y.children.slice(0,children.length)" ng-show="$first"  ng-click="Custom2()">{{ z.name}}

<div ng-hide="custom1"> 
 <ol>  <li ng-repeat="a in z.children" >{{a.name}}</li></ol>
</div> 
</li></ol> </div> 
<div ng-hide="condition1"> 
     
 <ol>  <li ng-repeat="z in y.children.slice(1,children.length)" ng-show="$first"  ng-click="Custom2()">{{ z.name}}

<div ng-hide="custom1"> 
 <ol>  <li ng-repeat="a in z.children" >{{a.name}}</li></ol>
</div> 
</li></ol> </div> 
<div ng-hide="condition2"> 
     
 <ol>  <li ng-repeat="z in y.children.slice(2,children.length)" ng-show="$first"  ng-click="Custom2()">{{ z.name}}

<div ng-hide="custom1"> 
 <ol>  <li ng-repeat="a in z.children" >{{a.name}}</li></ol>
</div> 
</li></ol> </div> 
<div ng-hide="condition3"> 
     
 <ol>  <li ng-repeat="z in y.children.slice(3,children.length)" ng-show="$first"  ng-click="Custom2()">{{ z.name}}

<div ng-hide="custom1"> 
 <ol>  <li ng-repeat="a in z.children" >{{a.name}}</li></ol>
</div> 
</li></ol> </div> 
 </li>



  </ol>*/