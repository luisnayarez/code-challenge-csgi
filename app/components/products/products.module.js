import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import ProductsComponent from './products.component';
import config from './products.config';

export default angular.module('products', [
    uiRouter,
    ngRedux
])
    .config(config)
    .component('productsApp', ProductsComponent)
    .name;