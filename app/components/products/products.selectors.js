import {createSelector} from 'reselect';

const GetProductsState = state => state.products;

export const GetProductsListSelector = createSelector(
    [GetProductsState],
    (productsState) => {
        return productsState.productsList;
    }
);