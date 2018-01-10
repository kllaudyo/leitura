import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const callsMiddleWare = store => next => action => {
    console.log("Middleware triggered: ", action, store.getState());
    next(action);
};

// getAllPosts().then(posts => {
//     posts.map(post => store.dispatch(addPost({post})));
// });

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(callsMiddleWare)
    )
);
