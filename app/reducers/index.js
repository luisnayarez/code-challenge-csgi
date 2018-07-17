import {combineReducers} from 'redux';
import PostsReducer from './posts.reducer';

export const RootReducer = combineReducers({
    posts: PostsReducer
});