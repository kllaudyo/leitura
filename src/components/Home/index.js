import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getAllPosts} from "../../utils/ServerApi";

class Home extends Component{

    componentDidMount(){
        const { loadAllPosts } = this.props;
        getAllPosts().then(response => loadAllPosts(response));
    }

    render(){
        return (
            <div>
                Hello Home
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    state,
    ownProps
});

const mapDispatchToProps = dispatch => ({
    loadAllPosts : (posts) => {
        console.log(JSON.stringify(posts));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);