import {carsConstant} from '../constants';
import auto from '../helpers/auto';

export const getCars = () => {
    return dispatch => {
        dispatch(getCarsStarted());

        // fetch('/api/get_cars')
        //     .then(response => {return response.json()})
        //     .then(data => {
        //         dispatch(getCarsSuccess(data));
        //     })
        //     .catch(error => {
        //         dispatch(getCarsFailure(error.message));
        //     });

        // it's our fake data from request promise, if request success
        dispatch(getCarsSuccess(auto));
    };

    function getCarsStarted() {
        return {type: carsConstant.GET_CARS_REQUEST}
    };

    function getCarsFailure(message) {
        return {type: carsConstant.GET_CARS_REQUEST_FAILURE, message}
    };

    function getCarsSuccess(data) {
        return {type: carsConstant.GET_CARS_REQUEST_SUCCESS, data}
    }
};
