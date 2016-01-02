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

app.controller('medicinelist',function($scope){
var drug = [
{
	name: "tylenol",
	dosage:1
},
{
	name:"Acetaminophen",
	dosage:2
}
}];
});

// .config(function ContentController($scope, $ionicSideMenuDelegate) {
//   $scope.toggleLeft = function() {
//     $ionicSideMenuDelegate.toggleLeft();
//   };
// });



angular.bootstrap(document, ['app']);
//angular.bootstrap(document, ['callcontact']);