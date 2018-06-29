angular.module('ControleFinanceiro').constant('consts', {
  appName: 'Controle Financeiro',
  owner: '',
  year: '2018',
  apiUrl: 'http://localhost:3003/api',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
