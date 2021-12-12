const defaultState = {
  products: [],
};

export const basketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, action.payload] };
    case "REMOVE_PRODUCT":
      return { ...state, products: state.products.filter(product=>product.id!==action.payload.id )};
    case "CLEAR_PRODUCTS":
      return { ...state, products: [] };
    default:
      return state;
  }
};