import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Categories from './Categories';
import './App.css';
import Post from "./Post";
import {getAllCategories, getAllPosts} from "../utils/ServerApi";
import {addCategory, addPost} from "../actions";

class App extends Component {

    componentDidMount(){

        const { addAllPosts, addAllCategories } = this.props;

        getAllPosts()
            .then(response => addAllPosts(response));

        getAllCategories()
            .then( ({ categories }) => addAllCategories(categories));
    }

    render() {
        return (
            <div className="App">
                <Route exact path="/" render={() => <Home />} />
                <Route path="/categories" render={() => <Categories />} />
                <Route path="/post/:id" render={({match}) => <Post id={match.params.id} />} />
            </div>
        );
    }
}

const mapStateToProps = ({ posts, categories }, ownProps) => ({
    posts,
    categories,
    ownProps
});

const mapDispatchToProps = dispatch => ({
    addAllPosts(posts){
        posts.map(post => dispatch(addPost({post})))
    },
    addAllCategories(categories){
        categories.map(category => dispatch(addCategory({category})));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
