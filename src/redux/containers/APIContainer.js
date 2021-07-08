import React, { Component,useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/APIAction'

const APIContainer = (props) => {
    // componentDidMount
    useEffect(() => {
        props.fetchData(); // dispatch action to call API and save Store
       
    }, [])


    return (
        <div >
            <div>Redux Examples</div>
            <button onClick={() => props.fetchData()}>fetch data</button>
            <div>
                {
                    props.apiData.isFetching && <div>Loading</div>
                }
                {
                    props.apiData.data.length ? (
                        props.apiData.data.map((person, i) => {
                            return <div key={i} >
                                <div>Name: {person.name}</div>
                                <div>Age: {person.age}</div>
                            </div>
                        })
                    ) : null
                }
            </div>

        </div>
    );

}

const mapStateToProps = (state) => {
    console.log("State", state)
    return {

        apiData: state.dataReducer

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        //actions: bindActionCreators(PostActions, dispatch)
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(APIContainer);