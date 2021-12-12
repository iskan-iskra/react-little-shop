import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer } from "./productsReducer";
import { basketReducer } from "./basketReducer";
import { orderReducer } from "./orderReducer";
const rootReducer = combineReducers({
    productsReducer, basketReducer, orderReducer
})

export const store = createStore(rootReducer, composeWithDevTools())