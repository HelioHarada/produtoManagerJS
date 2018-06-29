angular.module('ControleFinanceiro').controller('DashboardCtrl', [
  '$http',
  'consts',
  DashboardController
])

function DashboardController($http, consts) {
  const ViewMod = this
  ViewMod.getSummary = function() {
    const url = `${consts.apiUrl}/billingSummary`;
    $http.get(url).then(function(response) {
      const {credit = 0, debt = 0} = response.data
      ViewMod.credit = credit
      ViewMod.debt = debt
      ViewMod.total = credit - debt
    })
  }

  ViewMod.getSummary()
}
