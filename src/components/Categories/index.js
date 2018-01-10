import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategory } from "../../actions";
import { getAllCategories } from "../../utils/ServerApi";

class Categories extends Component{

    componentDidMount(){
        const { addAllCategories } = this.props;
        getAllCategories()
            .then( response => {
                const { categories } = response;
                addAllCategories(categories)
            });
    }

    render(){
        const { categories } = this.props;
        return (
            <ul>
                { categories.map( category => <li key={category.name}>{category.name}</li>)}
            </ul>
        )
    }
}

const mapStateToProps = ({categories}, ownProps) => ({
    categories,
    ownProps
});

const mapDispatchToProps = dispatch => ({
    addAllCategories(categories){
        categories.map(category => dispatch(addCategory({category})));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);