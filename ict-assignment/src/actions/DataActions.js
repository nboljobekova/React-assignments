import axios from "axios";

export const GET_DATA_START = "GET_DATA_START";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAIL = "GET_DATA_FAIL";


const getDataStart = () => ({type: GET_DATA_START});

export const getData = () => {
  console.log("hsd")
  return (dispatch) => {
    dispatch (getDataStart)
    axios.get("http://ictlab.kg/json/proxy_type.json")
      .then((response) => {
        console.log(response.data)
        dispatch({ type: GET_DATA_SUCCESS, payload: response.data })
      })
      .catch((error) => {
        console.log(error)
        dispatch({ type: GET_DATA_FAIL, payload: error })
      })
  }
} 
