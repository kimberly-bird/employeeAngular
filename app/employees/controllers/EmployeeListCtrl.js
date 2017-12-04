// employee factory is being injected. Factories in Angular are not bound and can be used to do data operations. Controllers will do the same data operations over again. The factory becomes a common utility to be used. Any controller can access the factory.
angular
.module("EmployeeApp")
// name of factory gets injects as a parameter to be used in the controller - can add as many parameters as needed -- ($scope, EmployeeFactory, anotherParameter, ETC) and order doesn't matter where they are called in the parameter. Function arguments are dependencies.
.controller("EmployeeListCtrl", function ($scope, EmployeeFactory) {
    $scope.employees = []

    // renders list of employees
    EmployeeFactory.list().then(data => {
        $scope.employees = data
    })
})


