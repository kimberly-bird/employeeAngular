angular
.module("EmployeeApp")
.controller("EmployeeCreateCtrl", function ($scope, EmployeeFactory) {
    $scope.newEmployee = {}
    $scope.employees = []

    $scope.addEmployee = function () {
        const employee = {
            "firstName": $scope.newEmployee.firstName,
            "lastName": $scope.newEmployee.lastName,
            "employmentStart": Date.now(),
            "employmentEnd": 0
        }

        EmployeeFactory.add(employee).then(() => {
            $scope.newEmployee.firstName = ""
            $scope.newEmployee.lastName = ""
            
            $scope.employees.push(employee)
        })
    }
    EmployeeFactory.list().then(data => {
        $scope.employees = data
    })
})


