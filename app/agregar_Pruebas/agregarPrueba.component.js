'use strict';
angular
  .module('agregarPruebaApp',[])
  .controller('ComponentController',ComponentController)
  .component("agregarPrueba", {
    templateUrl: "./agregar_Pruebas/prueba.component.html",
    styleUrls: ['./agregar_Pruebas/agregarPrueba.component.css']  
  });
  

  function ComponentController ($scope, pruebaService) { 
    var vm = this; 

    //funciones
    vm.agregarPrueba = agregarPrueba;
    vm.listarAplicacion = listarAplicacion;
    vm.listarVersiones = listarVersiones;
    vm.cancelar = cancelar;
    vm.listaPruebas = listaPruebas;
    vm.functionVersion = functionVersion;
    vm.functionNombre = functionNombre;
    vm.functionMetrica1 = functionMetrica1;
    vm.functionMetrica2 = functionMetrica2;
    vm.functionMetrica3 = functionMetrica3;
    vm.functionMetrica4 = functionMetrica4;
    vm.functionMetrica5 = functionMetrica5;

    //Propiedades
    vm.btnHabilitado = true;
    vm.mensaje = "";


    listarAplicacion();    
    listaPruebas();
    

    function functionMetrica1(){
      vm.mensajeMetrica1 = "";
    }
    function functionMetrica2(){
      vm.mensajeMetrica2 = "";
    }
    function functionMetrica3(){
      vm.mensajeMetrica3 = "";
    }
    function functionMetrica4(){
      vm.mensajeMetrica4 = "";
    }
    function functionMetrica5(){
      vm.mensajeMetrica5 = "";
    }

    function listaPruebas(){
        pruebaService.listarPruebas().then(function(data){
            vm.listaPrueba = data.resultado;
            console.log(vm.listaPrueba);
        });
    }
      
    function agregarPrueba(){
      if(vm.aplicacion == undefined || vm.aplicacion == "0" ){
        vm.mensajeAplicacion = "Debes seleccionar una opción";
         return;
       }
       if(vm.pruevaVersion == undefined || vm.pruevaVersion == '0'){
         vm.mensajeVersion = "Debes seleccionar una opción";
        return;
     }
       if(vm.nombre == undefined  || vm.nombre == ''){
         vm.mensajeNombre = "Debes llenar este campo";
         return;
       }
      if(vm.metrica1 == undefined  || vm.metrica1 == ''){
        vm.mensajeMetrica1 = "Debes llenar este campo";
        return;
      }
      if(vm.metrica2 == undefined  || vm.metrica2 == ''){
        vm.mensajeMetrica2 = "Debes llenar este campo";
        return;
      }
      if(vm.metrica3 == undefined  || vm.metrica3 == ''){
        vm.mensajeMetrica3 = "Debes llenar este campo";
        return;
      }
      if(vm.metrica4 == undefined  || vm.metrica4 == ''){
        vm.mensajeMetrica4 = "Debes llenar este campo";
        return;
      }
      if(vm.metrica5 == undefined  || vm.metrica5 == ''){
        vm.mensajeMetrica5 = "Debes llenar este campo";
        return;
      }
      
      var requestJson = {
        "idAplicacion": vm.aplicacion,
        "idVersion": vm.pruevaVersion,
        "nombreCiclo": vm.nombre,
        "cantPruebas": vm.metrica1,
        "cantEjecutadas": vm.metrica2,
        "cantFallidas": vm.metrica3,
        "cantCompletadas": vm.metrica4,
        "cantBloqueantes": vm.metrica5
      };
      vm.btnHabilitado = false; 
      pruebaService.agregarPrueba(requestJson).then(function(data){
        vm.aplicacion = '';
        vm.pruevaVersion = '';
        vm.nombre='';
        vm.metrica1='';
        vm.metrica2='';
        vm.metrica3='';
        vm.metrica4='';
        vm.metrica5='';
        listaPruebas();
        console.log(data);
        vm.agregado = true;
        vm.mensaje = "Registro agregado";
        vm.btnHabilitado = true;
      });
    }

    function listarAplicacion(){
      pruebaService.listarAplicacion().then(function(data){
        vm.listaAplicacion = data.resultado;
        console.log(vm.listaAplicacion);
      });
    }

    function listarVersiones(){
      if(vm.aplicacion != undefined && vm.aplicacion != "0" ){
        vm.mensajeAplicacion ="";
        var requestJson= {
              "idAplicacion":vm.aplicacion
        }
        pruebaService.listarVersiones(requestJson).then(function(data){
          vm.listaVersion = data.resultado;
          console.log(vm.listaVersion);
        });
     }
    }

    function functionVersion(){
      if(vm.pruevaVersion != undefined && vm.pruevaVersion != '0'){
        vm.mensajeVersion = "";
      }
    }
    
    function functionNombre(){
      if(vm.nombre != undefined  && vm.nombre != ''){
        vm.mensajeNombre = "";
        return;
      }
    }

    function cancelar(){
      vm.aplicacion = '';
      vm.pruevaVersion = '';
      vm.nombre='';
      vm.metrica1='';
      vm.metrica2='';
      vm.metrica3='';
      vm.metrica4='';
      vm.metrica5='';
    }

  }