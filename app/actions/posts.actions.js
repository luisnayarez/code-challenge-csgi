import ThunkHelper from '../utilities/thunkHelper';
const API_URL = 'http://localhost:3004';

export const RETRIEVE_POSTS = {
    BEGIN: 'RETRIEVE_POSTS_BEGIN',
    SUCCESS: 'RETRIEVE_POSTS_SUCCESS',
    FAILURE: 'RETRIEVE_POSTS_FAILURE'
};

export const SAVE_POSTS = {
    BEGIN: 'SAVE_POSTS_BEGIN',
    SUCCESS: 'SAVE_POSTS_SUCCESS',
    FAILURE: 'SAVE_POSTS_FAILURE'
};

const RETRIEVE_POSTS_EVENTS = [
    RETRIEVE_POSTS.BEGIN,
    RETRIEVE_POSTS.SUCCESS,
    RETRIEVE_POSTS.FAILURE
];

export const ADD_POST = 'ADD_POST';

const SAVE_POSTS_EVENTS = [
    SAVE_POSTS.BEGIN,
    SAVE_POSTS.SUCCESS,
    SAVE_POSTS.FAILURE
];

export const retrievePosts = () => {
    return dispatch => {
        return ThunkHelper(dispatch, RETRIEVE_POSTS_EVENTS, {
            method: 'get',
            url: `${API_URL}/posts`
        });
    }
};

export const addPosts = (state,payload) => {
    return {
        type: ADD_POST,
        payload: payload
    };
};

export const savePosts = (post) => {
    console.log(post);
    return dispatch => {
        return ThunkHelper(dispatch, SAVE_POSTS_EVENTS, {
            method: 'post',
            url: `${API_URL}/posts`,
            headers: {'Content-Type': 'application/json'},
            data: post

        });
    }
};

