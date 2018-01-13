import { INIT_CATEGORIES, ADD_CATEGORY, INIT_POSTS, ADD_POST, INIT_COMMENTS, ADD_COMMENTS } from "../actions";
import { combineReducers } from "redux";

const categories = (state = [], action ) => {
    const { category, categories } = action;
    switch (action.type){
        case INIT_CATEGORIES:
            return categories;
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
    const { post, posts } = action;
    switch (action.type){
        case INIT_POSTS:
            return posts;
        case ADD_POST:
            return [
                ...state,
                post
            ];
        default:
            return state;
    }
};

const comments = (state = [], action ) => {
    const { comment, comments } = action;
    switch (action.type){
        case INIT_COMMENTS:
            return comments;
        case ADD_COMMENTS:
            return [
                ...state,
                comment
            ];
        default:
            return state;
    }
};

export default combineReducers({categories, posts, comments}) ;