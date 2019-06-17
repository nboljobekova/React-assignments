import {
  GET_DATA_START, GET_DATA_SUCCESS, GET_DATA_FAIL
} from "../actions/DataActions"

const DataReducer = (state = {
  data: [],
  status: null,
  error: null,
}, action) => {
  switch (action.type) {
    case GET_DATA_START:
      return {
        ...state,
        status: "loading"
      }
    case GET_DATA_SUCCESS:
      return {
        ...state,
        status: "success",
        data: action.payload
      }
    case GET_DATA_FAIL:
      return {
        ...state,
        status: "error",
        error: action.payload
      }

    default:
      return state
  }
}

export default DataReducer 