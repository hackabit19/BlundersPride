// React Imports
import React, { Component } from "react";
import { Box, withStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Axios from "axios";
import jwt_decode from "jwt-decode";

// Other Imports
import "./App.css";

// Custom Component Imports
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Aux from "./hoc/Aux";
import Home from "./components/Home/Home";
import ReportMissing from "./components/ReportMissing/ReportMissing";
import SinglePerson from "./components/SinglePerson/SinglePerson";

const style = {
    container: {
        margin: "30px"
    }
};

// Authentication check
const token = localStorage.jwt;
let isAuthenticated = false;
let userData = {};

if (token) {
    // Set auth header
    // Apply token to all requests
    Axios.defaults.headers.common["Authorization"] = token;

    // Decode token
    userData = jwt_decode(token);
    isAuthenticated = true;
    const currentTime = Date.now() / 1000;
    if (userData.exp < currentTime) {
        window.location.href = "/login";
        isAuthenticated = false;
    }
}

class App extends Component {
    render() {
        const { classes } = this.props;

        let authRoutes = (
            <Aux>
                <Route
                    exact
                    path="/login"
                    render={props => (
                        <Login {...props} isAuth={isAuthenticated} />
                    )}
                />
                <Route exact path="/register" component={Register} />
            </Aux>
        );
        if (isAuthenticated) {
            authRoutes = (
                <Aux>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/single/:id" component={SinglePerson} />
                </Aux>
            );
        }
        let authorityRoutes = null;
        if (userData.userType === "police") {
            authorityRoutes = (
                <Aux>
                    <Route
                        exact
                        path="/reportMissing"
                        component={ReportMissing}
                    />
                </Aux>
            );
        }
        return (
            <Router>
                <Box>
                    <Navbar isAuth={isAuthenticated} user={userData} />
                    <Box className={classes.container}>
                        {authRoutes}
                        {authorityRoutes}
                    </Box>
                </Box>
            </Router>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(style)(App);
