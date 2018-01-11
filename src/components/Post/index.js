import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
    render(){
        const {post} = this.props;
        return (
            <div>Ola {JSON.stringify(post)}</div>
        )
    }
}

const mapStateToProps = ({posts}, ownProps) => ({
    post: posts.filter(post => post.id === ownProps.id).pop()
});


// const mapStateToProps = ({ posts },ownProps) => ({
//      id: ownProps.match.params.id,
//      post : posts.filter(post => post.id === ownProps.match.params.id)
// });

export default connect(mapStateToProps)(Post);