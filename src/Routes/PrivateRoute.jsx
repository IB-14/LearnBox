import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../Utils'

const PrivateRoute = ({component: Component, ...rest}) => {
    console.log(rest);
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;