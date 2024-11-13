import axios from "axios";
import * as types from "../ActionType";

const get = (arr, type) => {
    return ({
        type: type,
        payload: arr
    })
}
const emptyGeneral = (empty, typee) => {
    return ({
        type: typee,
        payload: empty
    })
}

export const loadProducts = () => {
    return function (dispatch) {
        axios.get(`https://www.stamina.babkisanresturant.com/api/products`).then((res) => {

            console.log('data', res.data.data)
            dispatch(get(res.data.data, types.GET_PRODUCTS));

        }).catch((err) => {
            // notifyError(err.response.data.message)
        })
    }
}
export const loadOneProducts = (slug) => {
    return function (dispatch) {
        axios.get(`https://www.stamina.babkisanresturant.com/api/products/${slug}`).then((res) => {

            console.log('data', res.data.data)
            dispatch(get(res.data.data, types.GET_ONE_PRODUCTS));

        }).catch((err) => {
            // notifyError(err.response.data.message)
        })
    }
}
export const emptyOneProducts  = () => {
    return function (dispatch) {
        let emptyy = {}
        dispatch(emptyGeneral(emptyy, types.EMPTY_ONE_PRODUCTS))
    }
}

export const loadProductsByCategory = (categorySlug, page = 1) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(
                `https://www.stamina.babkisanresturant.com/api/categories/${categorySlug}?page=${page}`);

            dispatch(get(response.data.data, 'GET_PRODUCTS_BY_CATEGORY'));
        } catch (error) {
            console.error('Error fetching products by category:', error);
        }
    };
};

export const emptyProductsByCategory = () => {
    return function (dispatch) {
        let emptyy = {}
        dispatch(emptyGeneral(emptyy, types.EMPTY_PRODUCTS_BY_CATEGORY))
    }
}