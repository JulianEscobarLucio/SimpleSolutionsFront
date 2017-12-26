(function(){
	angular
		.module('agregarPruebaApp')
		.service('pruebaService',pruebaService);
        pruebaService.$inject = ['$http','$q'];

	function pruebaService($http,$q){
        var self = this;
        var ipserver = 'http://localhost:8080'; 
        self.listarAplicacion = listarAplicacion;
        self.listarVersiones  = listarVersiones;
        self.agregarPrueba = agregarPrueba;
        self.listarPruebas = listarPruebas;

     
        
        function listarPruebas(){
                var promesa = $q.defer();
                $http.get(ipserver+"/Prueba/rest/PruebaService/listaPruebas")
                    .success(function(data){
                        promesa.resolve({
                            resultado:data
                        })
                    })
                    .error(function(err){
                        promesa.resolve({
                            resultado:err
                        })
                    })
                    return promesa.promise
       }
         

        function listarAplicacion(){
            var promesa = $q.defer();
            $http.get(ipserver+"/Prueba/rest/PruebaService/listaAplicaciones")
                .success(function(data){
                    promesa.resolve({
                        resultado:data
                    })
                })
                .error(function(err){
                    promesa.resolve({
                        resultado:err
                    })
                })
                return promesa.promise
        }

        function agregarPrueba(json){
            var promesa = $q.defer();
            $http.post(ipserver+"/Prueba/rest/PruebaService/agregaPrueba",json)
                .success(function(data){
                    promesa.resolve({
                        resultado:data
                    })
                })
                .error(function(err){
                    promesa.resolve({
                        resultado:err
                    })
                })
            return promesa.promise
        }

        function listarVersiones(json){
            var promesa = $q.defer();
            $http.post(ipserver+"/Prueba/rest/PruebaService/listaVersiones",json)
                .success(function(data){
                    promesa.resolve({
                        resultado:data
                    })
                })
                .error(function(err){
                    promesa.resolve({
                        resultado:err
                    })
                })
            return promesa.promise
        }

    } 
})();    