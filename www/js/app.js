angular.module("app",['ionic'])
.controller('AppCtrl',function($scope){
	$scope.data={};
	$scope.name="Allan"
});


angular.module("call",['ionic'])
.controller('Caller',function($scope){
	$scope.data={};
	$scope.Doctor= [
	{
		name:'xyz',
		number:23
	// },
	// 	{
	// 	name:'xyz',
	// 	number:23
	}
	];
});


angular.bootstrap(document, ['app']);
angular.bootstrap(document, ['call']);