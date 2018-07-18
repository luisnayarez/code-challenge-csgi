const $http = angular.injector(['ng']).get("$http");
export default function thunkHelper(dispatch, types, config) {
    const [requestType, successType, errorType] = types;
    //Dispatch BEGIN action
    dispatch({type: requestType});

    $http(config).then(response => {
        //Dispatch SUCCESS action
        dispatch({
            type: successType,
            payload: response.data
        });
    }).catch(error => {
        //Dispatch ERROR action
        dispatch({
            type: errorType,
            payload: error
        });
    });
}