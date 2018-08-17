import ThunkHelper from '../utilities/thunkHelper';
const API_URL = 'http://localhost:3005';


export const RETRIEVE_PRODUCTS = {
    BEGIN: 'RETRIEVE_PRODUCTS_BEGIN',
    SUCCESS: 'RETRIEVE_PRODUCTS_SUCCESS',
    FAILURE: 'RETRIEVE_PRODUCTS_FAILURE'
};

const RETRIEVE_PRODUCTS_EVENTS = [
    RETRIEVE_PRODUCTS.BEGIN,
    RETRIEVE_PRODUCTS.SUCCESS,
    RETRIEVE_PRODUCTS.FAILURE
];

export const retrieveProducts = () => {
    return dispatch => {
        return ThunkHelper(dispatch, RETRIEVE_PRODUCTS_EVENTS, {
            method: 'get',
            url: `${API_URL}/products`
        });
    }
};


