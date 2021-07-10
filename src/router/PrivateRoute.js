import React from 'react'
import { connect } from 'react-redux'

import { Route, Redirect } from 'react-router-dom';


function PrivateRoute({
    isAuthenticated,
    component: Component,
    ...rest    // something else: path, exact, history,...
}) {
    return (
        <Route
            {...rest}
            component={(props) => (
                isAuthenticated ?
                    (<Component {...props} />)
                    :
                    (<Redirect to="/login" />)
            )}
        />
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.LoginReducer.isAuthUser
})

export default connect(mapStateToProps)(PrivateRoute);

