import angular from 'angular';
import newPost from './addPost/addpost.component';

const ComponentsModule = angular.module('app.components', [
    newPost.name,
]);

export default ComponentsModule;