import axios from 'axios';

export const GET_TRANSACTIONS_START = 'GET_TRANSACTIONS_START';
export const GET_TRANSACTIONS_SUCCESS = 'GET_TRANSACTIONS_SUCCESS';
export const GET_TRANSACTIONS_FAIL = 'GET_TRANSACTIONS_FAIL';

export const ADD_TRANSACTION_SUCCESS = 'ADD_TRANSACTION_SUCCESS';
export const ADD_TRANSACTION_FAIL = 'ADD_TRANSACTION_FAIL';

export const DELETE_TRANSACTION_SUCCESS = 'DELETE_TRANSACTION_SUCCESS';
export const DELETE_TRANSACTION_FAIL = 'DELETE_TRANSACTION_FAIL';

const getTransactionsStart = () => ({ type: GET_TRANSACTIONS_START });

export const getTransactions = () => {
    return (dispatch) => {
        dispatch(getTransactionsStart())
        axios.get('http://localhost:4000/transactions')
        .then((response) => {
            dispatch({type: GET_TRANSACTIONS_SUCCESS, payload: response.data})
        })
        .catch((error) => {
            dispatch({type: GET_TRANSACTIONS_FAIL, payload: error})
        })
    }
}

export const addTransaction = (payload) => {
    return (dispatch) => {
        return axios.post('http://localhost:4000/transactions/', payload)
        .then((response) => {
            payload.id = response.data.id;
            dispatch({type: ADD_TRANSACTION_SUCCESS, payload: payload})
            return true
        })
        .catch((error) => {
            dispatch({type: ADD_TRANSACTION_FAIL, payload: error})
            return false
        })
    }
}

export const deleteTransaction = (payload) => {
    return (dispatch) => {
        return axios.delete('http://localhost:4000/transactions/' + payload)
        .then((response) => {
            dispatch({type: DELETE_TRANSACTION_SUCCESS, payload: payload})
        })
        .catch((error) => {
            dispatch({type: DELETE_TRANSACTION_FAIL, payload: error})
        })
    }
}