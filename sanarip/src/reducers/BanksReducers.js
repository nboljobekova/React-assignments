import { GET_BANKS_START, GET_BANKS_SUCCESS, GET_BANKS_FAIL } from '../actions/BanksActions';

export const BanksReducers = (state = {
    data: [],
    isLoading: true,
    isLoaded: false,
    error: null
}, action) => {
    switch(action.type){
        case GET_BANKS_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case GET_BANKS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isLoaded: true,
                error: null
            };
        case GET_BANKS_FAIL:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                error: action.payload
            };
        default:
            return state;
    }
}