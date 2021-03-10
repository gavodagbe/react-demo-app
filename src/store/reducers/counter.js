import * as actionsTypes from "../actions/actions";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.INCREMENT:
      return {
        ...state,
        counter: ++state.counter,
      };

    case actionsTypes.DECREMENT:
      return {
        ...state,
        counter: --state.counter,
      };

    case actionsTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value,
      };

    case actionsTypes.SUBSTRACT:
      return {
        ...state,
        counter: state.counter - action.value,
      };
  }

  return state;
};
export default counterReducer;
