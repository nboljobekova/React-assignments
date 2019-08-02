import {
  CARDS_START,
  CARDS_SUCCESS,
  CARDS_FAIL
} from "../actions/CardsActions";

const CardsReducer = (
  state = {
    cards: [],
    status: null,
    error: null
  },
  action
) => {
  switch (action.type) {
    case CARDS_START:
      return {
        ...state,
        status: "loading"
      };
    case CARDS_SUCCESS:
      return {
        ...state,
        status: "success",
        cards: action.payload
      };
    case CARDS_FAIL:
      return {
        ...state,
        status: "error",
        error: action.payload
      };
    default:
      return state;
  }
};

export default CardsReducer