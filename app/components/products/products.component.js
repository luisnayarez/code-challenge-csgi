import { retrieveProducts } from '../../actions/products.actions';
import { GetProductsListSelector } from './products.selectors';
import './products.scss';

class ProductsController {
    constructor($ngRedux) {
        this.$ngRedux = $ngRedux;
    }

    $onInit() {
        this.controllerActions = {
            retrieveProducts
        };

        this.disconnectRedux = this.$ngRedux.connect(this.mapStateToTarget, this.controllerActions)((state, actions) => {
            this.state = state;
            this.actions = actions;
        });
    }

    mapStateToTarget(state) {
        return {
            productsList: GetProductsListSelector(state)
        }
    }

    retrieveProducts() {
        this.actions.retrieveProducts(response => {
            console.log('response:', response);
        });
    }

    $onDestroy() {
        this.disconnectRedux();
    }
}

export default {
    template: require('./products.template.html'),
    controller: ProductsController
}