import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Categories from './Categories';
import './App.css';
import Post from "./Post";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" component={Home} />
                <Route path="/categories" component={Categories} />
                <Route path="/post/:id" component={Post} />
            </div>
        );
    }
}

export default connect()(App);
