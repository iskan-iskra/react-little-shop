import service from '../API/ProductsService'

const defaultState = {
  searchProduct: null,
  products: [],
};

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: service.getAll(),
      };
      case "GET_PRODUCT":
      return {
        ...state,
        searchProduct: service.getOneById(action.payload),
      };
    default:
      return state;
  }
};
