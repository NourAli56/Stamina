import {combineReducers} from "redux"
import ProductReducer from "./ProductReducer"
import CategoriesReducer from "./CategoriesReducer"

export default combineReducers({
    productsState: ProductReducer,
    categoriesState: CategoriesReducer
})