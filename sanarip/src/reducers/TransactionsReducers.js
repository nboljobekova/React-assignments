import { GET_TRANSACTIONS_START, GET_TRANSACTIONS_SUCCESS, GET_TRANSACTIONS_FAIL, ADD_TRANSACTION_SUCCESS, DELETE_TRANSACTION_SUCCESS, ADD_TRANSACTION_FAIL } from "../actions/TransactionsActions";

export const TransactionsReducers = ( state = {
    data: [],
    isLoading: true,
    isLoaded: false,
    error: null
}, action) => {
    switch(action.type){
        case GET_TRANSACTIONS_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case GET_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isLoaded: true,
                error: null
            };
        case GET_TRANSACTIONS_FAIL:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                error: action.payload
            };
        
        case ADD_TRANSACTION_SUCCESS:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        
        case DELETE_TRANSACTION_SUCCESS:
            // let index = state.transations.findIndex((x) => x.id === action.payload) 
            // state.transactions.splice(index, 1)
            return {
                data: state.data.filter(item => item.id !== action.payload)
            };

        default:
            return state;
    }
}