export const ADD_POST = 'ADD_POST';
export const ADD_CATEGORY = 'ADD_CATEGORIES';

export const addCategory = ({category}) => ({
    type: ADD_CATEGORY,
    category
});
export const addPost = ({post}) => ({
    type: ADD_POST,
    post
});