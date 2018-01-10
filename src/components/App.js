import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Categories from './Categories';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" render={ () => <Home />} />
                <Route path="/categories" render={() => <Categories/>} />
            </div>
        );
    }
}

export default connect()(App);
