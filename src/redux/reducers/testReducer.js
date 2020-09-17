const INITIAL_STATE = {
  message: ""
};

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "MESSAGE":
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};
export default testReducer;
