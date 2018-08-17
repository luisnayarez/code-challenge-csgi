import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import PostsModule from './components/posts/posts.module';
import ProductsModule from './components/products/products.module';
import config from './app.config';
import template from './app.template.html';

const AppComponent = {
    template
};

export default angular.module('app', [
    ngRedux,
    uiRouter,
    PostsModule,
    ProductsModule

])
    .config(config)
    .component('app', AppComponent)
    .name;