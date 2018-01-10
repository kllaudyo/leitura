
const api = "http://localhost:3001";
const token = Math.random().toString(36).substr(-8);
const headers = {
    'Authorization': token
};

export function getAllCategories(){
    return fetch(`${api}/categories`, { headers })
        .then(response => response.json());
        // .then(response => ({ categories } = response));
}

export function getPostsByCategory(category){
    return fetch(`${api}/${category}/posts`, { headers })
        .then(response => response.json());
}

export function getAllPosts(){
    return fetch(`${api}/posts`, { headers })
        .then(response => response.json());
}

export function insertPost(post){
    return fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ post })
    }).then( response => response.json());
}

export function updatePost(post){
    const {id, title, body} = post;
    return fetch(`${api}/posts/${id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, body })
    }).then( response => response.json());
}

export function deletePost(post) {
    const { id } = post;
    return fetch(`${api}/posts/${id}`, {
        method: 'DELETE',
        headers
    }).then( response => response.json());
}

export function getPostsById(id){
    return fetch(`${api}/posts/${id}`, { headers })
        .then(response => response.json());
}

export function getCommentsByPost(post_id){
    return fetch(`${api}/posts/${post_id}/comments`, { headers })
        .then(response => response.json());
}

export function getCommentsById(id){
    return fetch(`${api}/comments/${id}`, { headers })
        .then(response => response.json());
}