//
// import React from "react"
// import { navigate } from "@reach/router"
// import { isAuthenticated, login } from "../utils/auth"
//
// class PrivateRoute extends React.Component {
//   render() {
//     const { component: Component, location, ...rest } = this.props
//     if (!isAuthenticated()) {
//       login()
//       return <p>Redirecting to login...</p>
//     }
//     return <Component {...rest} />
//   }
// }

//export default PrivateRoute

import React from 'react';
import PropTypes from 'prop-types';
import {navigate, Router} from '@reach/router';
import {isAuthenticated, isBrowser} from '../utils/auth';

const PrivateRoute = ({component: Component, ...rest}) => {
    if (isBrowser && !isAuthenticated()) {
        // If we’re not logged in, redirect to the login page.
        navigate(`/`);
        return null;
    }

    return (
        <Router>
            <Component {...rest} />
        </Router>
    );
};

PrivateRoute.propTypes = {
    component: PropTypes.any.isRequired
};

export default PrivateRoute;
