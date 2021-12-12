
const defaultState = {
  products: [],
};

export const orderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_ORDER":
      return {
        ...state,
        products: action.payload,
      };
      case "CLEAR_ORDER":
      return {
        ...state,
        products: [],
      };
    default:
      return state;
  }
};