import { ADD_POST } from "../actions";

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

export default posts;