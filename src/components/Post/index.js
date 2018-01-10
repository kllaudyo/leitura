import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const {id, post} = this.props;
        console.log(post);
        return (
            <div>Ola {id}</div>
        )
    }
}

const mapStateToProps = ({posts}, ownProps) => {
    console.log(posts);
    return {
        id: ownProps.match.params.id
    }
};

// const mapStateToProps = ({ posts },ownProps) => ({
//     id: ownProps.match.params.id,
//     post : posts.filter(post => post.id === ownProps.match.params.id)
// });

export default connect(mapStateToProps)(Post);