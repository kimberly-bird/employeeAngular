const app = angular.module("EmployeeMgmt", [])

app.controller("EmployeeCtrl", function($scope, $http) {
    
    $scope.employees = [
        {
            "id": 1,
            "firstName": "Erin",
            "lastName": "Orstrom",
            "employmentStart": 1512140013765,
            "employmentEnd": null
        },
        {
            "id": 2,
            "firstName": "Wayne",
            "lastName": "Hutchinson",
            "employmentStart": 1512139999102,
            "employmentEnd": null
        },
        {
            "id": 3,
            "firstName": "Sarah",
            "lastName": "Story",
            "employmentStart": 1512139999729,
            "employmentEnd": null
        },
        {
            "id": 4,
            "firstName": "Sulaiman",
            "lastName": "Allan",
            "employmentStart": 1512140294571,
            "employmentEnd": null
        },
        {
            "id": 5,
            "firstName": "Ben",
            "lastName": "Marks",
            "employmentStart": 1512200192934,
            "employmentEnd": null
        }
    ]

    $scope.fireEmployee = function (currentEmployee) {
        let employeeIndex = $scope.employees.indexOf(currentEmployee)

        if (employeeIndex >= 0) {
            $scope.employees.splice(employeeIndex, 1)
            currentEmployee.employmentEnd = Date.now()
            console.log(currentEmployee.employmentEnd)
        }
    }
})