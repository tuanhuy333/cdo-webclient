import React from 'react'
import { connect } from 'react-redux'

import { Route, Redirect } from 'react-router-dom';


function PublicRoute({
    isAuthenticated,
    component: Component,
    ...rest    // something else: path, exact, history,...
}) {
    return (
        <Route
            {...rest}
            component={(props) => (
                isAuthenticated ?
                    (<Redirect to="/home" />)
                    :
                    (<Component {...props} />)

            )}
        />
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.LoginReducer.isAuthUser
})

export default connect(mapStateToProps)(PublicRoute);

