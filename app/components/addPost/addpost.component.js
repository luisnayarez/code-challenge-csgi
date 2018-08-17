import angular from 'angular';
import template from './addpost.template.html';
import {addPosts,savePosts} from "../../actions/posts.actions";
import {GetPostsListSelector,GetNewPostsListSelector} from "../../components/posts/posts.selectors";

class NewPostController {
    constructor($ngRedux) {
        this.$ngRedux = $ngRedux;
    }

    $onInit() {
        this.controllerActions = {
            addPosts,savePosts
        };

        this.disconnectRedux = this.$ngRedux.connect(this.mapStateToTarget, this.controllerActions)((state, actions) => {
            this.state = state;
            this.actions = actions;
        });
    }

    mapStateToTarget(state) {
        return {
            postsList: GetPostsListSelector(state),
            newPosts: GetNewPostsListSelector(state),
            isFetching: state.isFetching
        }
    }

    addPosts(title,body) {
        if (title && body){
            let maxId = Math.max.apply(Math, this.state.postsList.map(function(o) { return o.id; }))
            const payload = {id:maxId+1,title: title, author: body };
            this.actions.addPosts(this.state,payload);
        }

    }

    savePosts(){
        this.state.newPosts.forEach(post => this.actions.savePosts(post));
    }

    $onDestroy() {
        this.disconnectRedux();
    }
}

const NewPostComponent = {
    bindings: {
        title: '=',
        body:'='
    },
    bindToController: true,
    template,
    controller: NewPostController
};

const NewPostModule = angular.module('newPost', [])
    .component('newPost', NewPostComponent);

export default NewPostModule;