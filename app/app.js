// 3rd party dependency to use 
const app = angular.module("EmployeeApp", ["ngRoute"])

// angular.module("EmployeeApp").config(function ($routeProvider) {
    
//     $routeProvider.
//     when("/employees/list", {
//         templateUrl: "app/employees/partials/list.html",
//         controller: "EmployeeListCtrl",
//     })
//     .when('/employees/new', {
//         templateUrl: 'app/employees/partials/create.html',
//         controller: 'EmployeeCreateCtrl'
//     })
    
//     .when('/employees/detail/:employeeId', { // <-- Magic happens here
//         templateUrl: 'app/employees/partials/detail.html',
//         controller: 'EmployeeDetailCtrl'
//     })
//     .otherwise('/employees/list')
// })

// angular.module("EmployeeApp").config(function ($routeProvider) {
//     /**
//      * Configure all Angular application routes here
//      */
//     $routeProvider
//         .when("/employees/list", {
//             templateUrl: "app/employees/partials/list.html",
//             controller: "EmployeeListCtrl"
//         })
// })

// app.controller("EmployeeListCtrl", function($scope, $http) {
    

//     // empty array for employees
//     $scope.employees = []

//     //function to add new employee objects
//     $scope.addEmployee = function () {
//         const newE = {
//             "firstName": $scope.newEmployeeFirstName,
//             "lastName": $scope.newEmployeeLastName,
//             "employmentStart": Date.now(),
//             "employmentEnd": 0
//         }

//     // $http to get new employees to firebase
//     // $http({
//     //     method: "POST",
//     //     url: "https://employees-c9afe.firebaseio.com/employees/.json",        
//     //     data: JSON.stringify(newE)
//     //     }).then(() => {
//     //         $scope.newEmployeeFirstName = ""
//     //         $scope.newEmployeeLastName = ""
//     //         getEmployees()
//     //     })
//     // } 

//     // getEmployee function to pull from firebase and display to DOM
//     // const getEmployees = function () {
//     //     $http({
//     //         method: "GET",
//     //         url: "https://employees-c9afe.firebaseio.com/employees/.json"
//     //     }).then(response => {
//     //         $scope.employees = response.data
//     //     })
//     // }

//     // function to add employee end date to firebase and removes from DOM
//     $scope.fireEmployee = function (currentEmployee, key) {
//         currentEmployee.employmentEnd = Date.now()

//         $http
//         .put(`https://employees-c9afe.firebaseio.com/employees/${key}/.json`,
//             currentEmployee
//         )
//         .then(getEmployees)
//     }

//     //function to delete employee from firebase and DOM
//     $scope.deleteEmployee = function (key) {
//         $http
//         .delete(`https://employees-c9afe.firebaseio.com/employees/${key}/.json`)
//         .then(getEmployees)
//     }

//     getEmployees()
    
// })