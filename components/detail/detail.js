/**
 * Created by Renan on 30/06/2015.
 */
angular.module('app').controller('DetailController', DetailController);
function DetailController($routeParams){
    this.id = $routeParams.id;
    console.log('HomeController instantiated');
}