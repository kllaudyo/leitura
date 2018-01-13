import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Categories from './Categories';
import './App.css';
import Post from "./Post";
import {getAllCategories, getAllPosts} from "../utils/ServerApi";
import {initCategories, initPosts} from "../actions";
import {NavBar, NavBrand, NavItem} from "./NavBar";

class App extends Component {

    componentDidMount(){

        const { initCategories, initPosts } = this.props;

        getAllCategories()
            .then( response => initCategories(response));

        getAllPosts()
            .then( response => initPosts(response));

    }

    render() {
        console.log(this.props.categories);
        const {categories} = this.props;
        return (
            <div className="App">

                <NavBar>
                    <NavBrand href="#" title="Prosa" />
                    {categories.map(category => <NavItem action={category.name} />)}
                </NavBar>

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
    initCategories(categories){
        dispatch(initCategories(categories));
    },
    initPosts(posts){
        dispatch(initPosts(posts));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
