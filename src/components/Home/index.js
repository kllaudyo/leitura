import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from "../../utils/ServerApi";
import { addPost } from "../../actions";

class Home extends Component{

    componentDidMount(){
        const { addAllPosts } = this.props;
        getAllPosts().then(response => addAllPosts(response));
    }

    render(){
        const { posts } = this.props;
        return (
            <div>
                {posts.filter( post => !post.delete ).map( post => {
                    return (
                        <div key={post.id}>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = ({ posts }, ownProps) => ({
    posts,
    ownProps
});

const mapDispatchToProps = dispatch => ({
    addAllPosts(posts){
        posts.map(post => dispatch(addPost({post})))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);