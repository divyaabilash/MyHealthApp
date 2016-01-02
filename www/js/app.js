var app = angular.module("app",['ionic']);

app.controller('AppCtrl',function($scope){
//	$scope.data={};
	$scope.name="Allan"
});


app.controller('Caller',function($scope){
	var doctorDetails =[{
		name:"hello",
		phonenumber:123
	},
	{
		name:"hello1",
		phonenumber:1234
	}];
//	$scope.data={};
	$scope.doc = doctorDetails;
});


angular.bootstrap(document, ['app']);
//angular.bootstrap(document, ['callcontact']);