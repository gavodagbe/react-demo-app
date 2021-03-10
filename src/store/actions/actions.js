export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBSTRACT = "SUBSTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const add = (value) => {
  return {
    type: ADD,
    value: value,
  };
};

export const substract = (value) => {
  return {
    type: SUBSTRACT,
    value: value,
  };
};

export const saveResult = (nVal) => {
  return {
    type: STORE_RESULT,
    newVal: nVal,
  };
};

export const storeResult = (nVal) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(nVal));
    }, 2000);
    // Appel ajax
  };
};

export const deleteResult = (sLineId) => {
  return {
    type: DELETE_RESULT,
    selectedLineId: sLineId,
  };
};
