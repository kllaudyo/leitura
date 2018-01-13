export const INIT_CATEGORIES = 'INIT_CATEGORIES';
export const ADD_CATEGORY = 'ADD_CATEGORIES';
export const INIT_POSTS = 'INIT_POSTS';
export const ADD_POST = 'ADD_POST';
export const INIT_COMMENTS = 'INIT_COMMENTS';
export const ADD_COMMENTS = 'ADD_COMMENTS';

export const initCategories = ({categories}) => ({
    type: INIT_CATEGORIES,
    categories
});

export const addCategory = ({category}) => ({
    type: ADD_CATEGORY,
    category
});

export const initPosts = ({posts}) => ({
    type: INIT_POSTS,
    posts
});

export const addPost = ({post}) => ({
    type: ADD_POST,
    post
});
