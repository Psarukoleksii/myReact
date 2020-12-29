import {combineReducers} from "redux";
import cart from "./cart";
import wishList from "./wishList";
import products from "./products";

export const reducer = combineReducers({
    cart,
    wishList,
    products,
})
