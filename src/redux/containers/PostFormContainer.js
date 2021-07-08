import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/PostActions';
import PostForm from '../components/AddPost'
import * as PostActions from '../actions/PostActions';
import { bindActionCreators } from 'redux';


const PostFormContainer = ( props ) => {
        console.log("Props,add form",props)
        return (
                <PostForm addPost={props.addPost} />
        );

}

const mapDispatchToProps = (dispatch) => {
        return {
                addPost: (title, content) => {
                        dispatch(addPost(title, content));
                }
                
                // all action
                //actions: bindActionCreators(PostActions, dispatch)
        }
};

export default connect(null, mapDispatchToProps)(PostFormContainer);