export default function config($stateProvider) {
    $stateProvider.state('app.products', {
        url: '/products',
        template: "<products-app></products-app>"
    });
}