import Immutable from 'seamless-immutable';
import {
    RETRIEVE_POSTS,ADD_POST,SAVE_POSTS
} from '../actions/posts.actions';

export const INITIAL_STATE = Immutable({
    postsList: [],
    error: {},
    isFetching: false,
    newPosts: []
});

export default function postReducer(state = INITIAL_STATE, {type, payload = {}}) {
    switch (type) {
        case RETRIEVE_POSTS.BEGIN:
            return state.set('isFetching', true);
        case RETRIEVE_POSTS.FAILURE:
            return state
                .set('error', payload)
                .set('isFetching', false);
        case RETRIEVE_POSTS.SUCCESS:
            return state
                .set('postsList', payload)
                .set('isFetching', false);
        case ADD_POST:
            return state
                .set('postsList', [...state.postsList, payload])
                .set('isFetching', false)
                .set('newPosts', [...state.newPosts, payload]);
        case SAVE_POSTS.BEGIN:
            return state.set('isFetching', true);
        case SAVE_POSTS.FAILURE:
            return state
                .set('isFetching', false);
        case SAVE_POSTS.SUCCESS:
            return state
                .set('isFetching', false);
        default:
            return state;
    }
}