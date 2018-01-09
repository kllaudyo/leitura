import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import './App.css';

class App extends Component {
    render() {
        const { posts } = this.props;
        return (
            <div className="App">
                <Home />
                { posts.filter( post => !post.delete ).map( post => {
                    return (
                        <div key={post.id}>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                            <hr />
                        </div>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    posts: state
});

export default connect(mapStateToProps)(App);
