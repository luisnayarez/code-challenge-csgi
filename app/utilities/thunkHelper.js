export default function thunkHelper(dispatch, types, config) {
    const $http = getHttpService();
    const $q = getQService();
    const deferred = $q.defer();

    const [requestType, successType, errorType] = types;

    dispatch({type: requestType});

    $http(config).then(response => {
        dispatch({
            type: successType,
            payload: response.data
        });
        deferred.resolve(response.data);
    }).catch(error => {
        dispatch({
            type: errorType,
            payload: error
        });

        deferred.reject('There was an error');
    });
}

const getInjector = () => {
    return angular.element(document.querySelector('[ng-app]') || document.querySelector('[ng-controller]')).injector();
};

const getHttpService = () => {
    return getInjector().get('$http');
};

const getQService = () => {
    return getInjector().get('$q');
};