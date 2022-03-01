import axios from 'axios';

export const GET_BANKS_START = "GET_BANKS_START";
export const GET_BANKS_SUCCESS = "GET_BANKS_SUCCESS";
export const GET_BANKS_FAIL = "GET_BANKS_FAIL";

const getBanksStart = () => ({ type: GET_BANKS_START});

export const getBanks = () => {
    return (dispatch) => {
        dispatch(getBanksStart())
        axios.get('http://localhost:4000/banks')
        .then((response) => {
            dispatch({type: GET_BANKS_SUCCESS, payload: response.data})
        })
        .catch((error) => {
            dispatch({type: GET_BANKS_FAIL, payload: error})
        })
    }
}