// 3rd party dependency to use 
const app = angular.module("EmployeeApp", ["ngRoute"])

// configure our application - whichModuleYou'reUsing.config. Define the routes for the application in the $routeProvider
angular.module("EmployeeApp").run(function (FIREBASE_CONFIG) {
    firebase.initializeApp(FIREBASE_CONFIG)
})

let isAuth = AuthFactory => new Promise ((resolve, reject) => {

    if (AuthFactory.isAuthenticated()){
        console.log("User is authenticated, resolve route promise")
        resolve()
    } else {
        console.log("User is not authenticated, reject route promise")
        reject()
    }
})

angular.module("EmployeeApp").config(function ($routeProvider) {
    /**
     * Configure all Angular application routes here
     */
    $routeProvider
        .when("/", {
            templateUrl: "app/employees/partials/list.html",
            controller: "EmployeeListCtrl",
            resolve: { isAuth }
        })
        .when("/employees/list", {
            templateUrl: "app/employees/partials/list.html",
            controller: "EmployeeListCtrl",
            resolve: { isAuth }
        })
        .when('/employees/new', {
            templateUrl: 'app/employees/partials/create.html',
            controller: 'EmployeeCreateCtrl',
            resolve: { isAuth }
        })
        .when('/employees/detail/:employeeId', {
            templateUrl: 'app/employees/partials/detail.html',
            controller: 'EmployeeDetailCtrl',
            resolve: { isAuth }
        })
        .when('/auth', {
            templateUrl: 'app/auth/partials/auth.html',
            controller: 'AuthCtrl'
        })
        .otherwise('/auth')
})
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