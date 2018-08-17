import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import PostsComponent from './posts.component';
import AddPost from '../addPost/addpost.component';
import config from './posts.config';

export default angular.module('posts', [
    uiRouter,
    ngRedux,
    AddPost.name
])
    .config(config)
    .component('postsApp', PostsComponent)
    .name;