import axios from "axios";

export const CARDS_START = "CARDS_START";
export const CARDS_SUCCESS = "CARDS_SUCCESS";
export const CARDS_FAIL = "CARDS_FAIL";

export const getCards = (data) => {
  console.log(data)
  return dispatch => {
    dispatch({ type: CARDS_START });
    axios
      // .get(`https://dev.yurtah.com/api/v1/listings?size=${data || 1}`)
      .get(`https://dev.yurtah.com/api/v1/listings?size=8`)
      .then(response => {
        console.log("--->", response.data);
        dispatch({ type: CARDS_SUCCESS, payload: response.data });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: CARDS_FAIL, payload: error });
      });
  };
};
