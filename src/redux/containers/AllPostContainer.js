import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllPost from '../components/AllPost';
import { bindActionCreators } from 'redux';
import * as PostActions from '../actions/PostActions';

const AllPostContainer = ( props ) => {

        return (
                <AllPost posts={props.posts} actions={props.actions} />
        );

}

const mapStateToProps = (state) => {
        console.log("State",state)
        return {
                
                posts: state.postReducer,
                users: state.userReducer

        }
};

const mapDispatchToProps = (dispatch) => {
        return {
                actions: bindActionCreators(PostActions, dispatch)
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPostContainer);