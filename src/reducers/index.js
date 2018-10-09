import { combineReducers } from 'redux';
import { carsConstant } from '../constants';

const initialState = {
    loading: false,
    list: [],
    error: null
};

export const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case carsConstant.GET_CARS_REQUEST: 
            return {
                ...state,
                loading: true
            };
        case carsConstant.GET_CARS_REQUEST_SUCCESS:
            return {
                list: action.data,
                loading: false,
                error: null
            };
        case carsConstant.GET_CARS_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    cars: carsReducer
});

export default rootReducer;
