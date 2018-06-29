angular.module('ControleFinanceiro').config([ // configurar rotas
  '$stateProvider', // iu-roter_ navegar - dependencias
  '$urlRouterProvider',//
  function($stateProvider, $urlRouterProvider) { //injeção de dependencia
    $stateProvider.state('dashboard', {
      url: "/dashboard", // atualizar para a tela dashboard
      templateUrl: "dashboard/dashboard.html"
    }).state('billingCycle', {
      url: "/billingCycles?page",
      templateUrl: "billingCycle/tabs.html"
    })

    $urlRouterProvider.otherwise('/dashboard') // estado padrão
}])
