angular.module('app', ['ngNewRouter']);

angular.module('app').controller('AppController', AppController);

AppController.$inject = ['$router'];

function AppController($router){
    console.log('AppController instantiated');
    $router.config([
        { path: '/', component: 'home' },
        { path: '/about', component: 'about'},
        { path: '/detail', component: 'detail' }

    ]);
    this.name = "Renan Morais";
}



