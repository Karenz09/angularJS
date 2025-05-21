var app = angular.module('miApp', []);
app.controller('AlumnosController', function($scope){
            $scope.alumnos = [
                {nombre: "Juan Bianco", telefono: "123456789", curso: "segundo ESO"},
                {nombre: "Ana Martiño", telefono: "546789213", curso: "tercero ESO"},
                {nombre: "Felipe Mondragon", telefono: "592310876", curso: "primerp ESO"}
            ];

    $scope.Save=function(){
        $scope.alumnos.push({nombre: $scope.nuevoAlumno.nombre,
                            telefono: $scope.nuevoAlumno.telefono,
                            curso: $scope.nuevoAlumno.curso
        });
        $scope.formVisibility = false;
        console.log($scope.formVisibility);
    }

    $scope.formVisibility = false;
    $scope.ShowForm = function(){
        $scope.formVisibility = true;
        console.log($scope.formVisibility);
    }
     });   

