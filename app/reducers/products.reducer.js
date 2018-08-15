import Immutable from 'seamless-immutable';
import {
    RETRIEVE_PRODUCTS
} from '../actions/products.actions';

export const INITIAL_STATE = Immutable({
    productsList: [],
    error: {}
});

export default function productsReducer(state = INITIAL_STATE, {type, payload = {}}) {
    switch (type) {
        case RETRIEVE_PRODUCTS.BEGIN:
            return state.set('isFetching', true);
        case RETRIEVE_PRODUCTS.FAILURE:
            return state
                .set('error', payload)
                .set('isFetching', false);
        case RETRIEVE_PRODUCTS.SUCCESS:
            return state
                .set('productsList', payload)
                .set('isFetching', false);
        default:
            return state;
    }
}