angular.module("app",['ionic'])
.controller('AppCtrl',function($scope){
//	$scope.data={};
	$scope.name="Allan"
});
var doctorDetails =({
		name:"hello",
		phonenumber:123
	},
	{
		name:"hello1",
		phonenumber:1234
	});
angular.module("app1",['ionic'])
.controller('Caller',function($scope){
//	$scope.data={};
	$scope.doc= doctorDetails;
});


angular.bootstrap(document, ['app','app1']);
//angular.bootstrap(document, ['callcontact']);