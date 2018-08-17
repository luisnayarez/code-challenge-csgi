import { retrievePosts } from '../../actions/posts.actions';
import { GetPostsListSelector,IsFetchingListSelector } from './posts.selectors';
import './posts.scss';

class PostsController {
    constructor($ngRedux) {
        this.$ngRedux = $ngRedux;
    }

    $onInit() {
        this.controllerActions = {
            retrievePosts
        };

        this.disconnectRedux = this.$ngRedux.connect(this.mapStateToTarget, this.controllerActions)((state, actions) => {
            this.state = state;
            this.actions = actions;
        });
    }

    mapStateToTarget(state) {
        return {
            postsList: GetPostsListSelector(state),
            isFetching: IsFetchingListSelector(state)
        }
    }

    retrievePosts() {
        this.actions.retrievePosts(response => {
            console.log('response:', response);
        });
    }

    $onDestroy() {
        this.disconnectRedux();
    }
}

export default {
    template: require('./posts.template.html'),
    controller: PostsController
}