
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Post = (props) => {
    const propTypes = {
        post: PropTypes.shape({
                id: PropTypes.number,
                title: PropTypes.string,
                content: PropTypes.string
        }).isRequired,
        editPost: PropTypes.func.isRequired,
        deletePost: PropTypes.func.isRequired
};


        return (
                <div>
                        <h2>
                                {props.post.title}
                        </h2>
                        <p>
                                {props.post.content}
                        </p>
                        <button onClick={() => props.editPost(props.post.id)}>
                                Edit
                        </button>
                        <button onClick={() => props.deletePost(props.post.id)}>
                                Delete
                        </button>
                </div>
        );

}

export default Post;