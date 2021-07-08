import React, { Component,useEffect } from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux'
function HookReduxContainer(props) {
        console.log("Props1",props)
        const todo = useSelector(state => state.postReducer)
        
        return (
                <>
                        {todo.forEach(function (entry) {
                                console.log(entry);
                        })}
                </>
        )
}
export default HookReduxContainer