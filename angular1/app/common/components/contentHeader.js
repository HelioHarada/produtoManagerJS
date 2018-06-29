angular.module('ControleFinanceiro').component('contentHeader', {
   bindings: {
      name: '@',
   },
   template: `
      <section class="content-header">
        <h1>{{ $ctrl.name }}</h1>
      </section>
   `
});
