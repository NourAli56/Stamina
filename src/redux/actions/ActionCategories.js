import axios from "axios";
import * as types from "../ActionType";

const get = (arr, type) => {
    return ({
        type: type,
        payload: arr
    })
}

export const loadCategories = () => {
    return function (dispatch) {
        axios.get(`https://www.stamina.babkisanresturant.com/api/categories`).then((res) => {

            console.log('data', res.data.data)
            dispatch(get(res.data.data, types.GET_CATEGORIES));

        }).catch((err) => {
            // notifyError(err.response.data.message)
        })
    }
}