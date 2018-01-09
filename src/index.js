import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import posts from './reducers';
import {getAllPosts} from "./utils/ServerApi";
import {addPost} from "./actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const callsMiddleWare = store => next => action => {
    console.log("Middleware triggered: ", action, store.getState());
    next(action);
};

const store = createStore(
    posts,
    composeEnhancers(
        applyMiddleware(callsMiddleWare)
    )
);

getAllPosts().then(posts => {
    posts.map(post => store.dispatch(addPost({post})));
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
