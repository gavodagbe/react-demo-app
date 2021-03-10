import * as actionsTypes from "../actions/actions";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.INCREMENT:
      return {
        ...state,
        counter: ++state.counter,
      };
  }

  return state;
};
export default reducer;
