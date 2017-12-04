
angular
.module("EmployeeApp")
.controller("EmployeeDetailCtrl",
// $routeParams can hold the URL that catches the employeeId from :employeeId
    function ($scope, $location, $routeParams, EmployeeFactory) {
        $scope.employee = {}

        // goes to Firebase and grabs the data from the URL and then brings it back as an object so you can use it in other controllers. $location can redirect to the new URL. Change the view the user is looking at on a click event
        EmployeeFactory.single($routeParams.employeeId).then(employee => {
            $scope.employee = employee
        })
        // bound to ng-click
        $scope.fireEmployee = () => 
        EmployeeFactory.fire($scope.employee, $routeParams.employeeId).then(() =>
        $location.url("/"))
        
        // bound to ng-click
        $scope.deleteEmployee = () => 
            EmployeeFactory.delete($routeParams.employeeId).then(() => $location.url("/"))
        
    }
)