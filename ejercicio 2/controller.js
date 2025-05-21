angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoController", function($scope, localStorageService){
    if(localStorageService.get("angular-todolist")){
        $scope.todo = localStorageService.get("angular-todolist");
    }
    else{
        $scope.todo =  [];
    }
    
    //Funcion watch
    $scope.$watchCollection('todo', function(newValue, oldValue){
        localStorageService.set("angular-todolist",$scope.todo);
    });

    //Agregar actividad
    $scope.addActv = function(){
        $scope.todo.push($scope.newActv);
        $scope.newActv = {};
        
    }

    //Limpiar actividades
    $scope.clean = function(){
        $scope.todo = [];
    }
});