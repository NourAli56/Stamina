import * as types from "../ActionType";

const initState = {
    productsData: {},
    loadingProducts: true,
    currentPage: 1,
    totalPages: 1,
    oneProduct: {},
    loadingOneProduct: true
}

const ProductReducer = (state = initState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return {
                ...state,
                productsData: action.payload.products,
                loadingProducts: false
            };
        case types.GET_PRODUCTS_BY_CATEGORY:
            return { ...state, productsData: action.payload, loadingProducts: false }
        case types.EMPTY_PRODUCTS_BY_CATEGORY:
            return { ...state, productsData: action.payload, loadingProducts: true }
        case types.GET_ONE_PRODUCTS:
            return { ...state, oneProduct: action.payload, loadingOneProduct: false }
            case types.EMPTY_ONE_PRODUCTS:
            return { ...state, oneProduct: action.payload, loadingOneProduct: true }
        default:
            return state;
    }
};

export default ProductReducer;

