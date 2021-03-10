import * as actionsTypes from "../actions/actions";

const initialState = {
  results: [],
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.STORE_RESULT:
      return {
        ...state,
        results: [...state.results, { id: Date.now(), value: action.newVal }],
      };

    case actionsTypes.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter((x) => x.id !== action.selectedLineId),
      };
  }

  return state;
};
export default resultReducer;
