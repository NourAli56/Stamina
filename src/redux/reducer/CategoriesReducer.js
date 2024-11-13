import * as types from "../ActionType";

const initState = {
    categories: [],
    loadingCategories: true
}

const CategoriesReducer = (state = initState, action) => {
    switch (action.type) {
        case types.GET_CATEGORIES:
            return { ...state, categories: action.payload, loadingCategories: false }
        default:
            return state;
    }
};

export default CategoriesReducer;
