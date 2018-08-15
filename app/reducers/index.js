import {combineReducers} from 'redux';
import PostsReducer from './posts.reducer';
import ProductsReducer from './products.reducer'

export const RootReducer = combineReducers({
    posts: PostsReducer,
    products: ProductsReducer
});