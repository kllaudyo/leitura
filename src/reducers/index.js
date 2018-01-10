import {ADD_CATEGORY, ADD_POST} from "../actions";
import { combineReducers } from "redux";

const categories = (state = [], action ) => {
    const { category } = action;
    switch (action.type){
        case ADD_CATEGORY:
            return [
                ...state,
                category
            ];
        default:
            return state;
    }
};

const posts = (state = [], action) => {
    const { post } = action;
    switch (action.type){
        case ADD_POST:
            return [
                ...state,
                post
            ];
        default:
            return state;
    }
};

export default combineReducers({categories, posts}) ;