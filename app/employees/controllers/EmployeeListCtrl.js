
// angular
// .module("EmployeeApp")
// .controller("EmployeeListCtrl", function ($scope, $http) {
//     $scope.employees = []

//     const getEmployees = () => {
//         $http({
//             method: "GET",
//             url: "https://employees-c9afe.firebaseio.com/employees/.json"
//         })
//         .then(response => {
//             $scope.employees = Object.keys(response.data).map(e => {
//                 return response.data[e]
//             })
//         })
//     }

//     getEmployees()
// })

angular
.module("EmployeeApp")
.controller("EmployeeListCtrl", function ($scope, EmployeeFactory) {
    $scope.employees = []

    EmployeeFactory.list(true).then(data => {
        $scope.employees = data
    })
})