import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import InertiaLogo from "./InertiaLogo/InertiaLogo";
import { RegisterButton, NavButton } from "../Common/Buttons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Aux from "../../hoc/Aux";

import "./Navbar.css";
import { style } from "./style";
import { withStyles } from "@material-ui/core/styles";
import Axios from "axios";

class Navbar extends Component {
    onLogoutClick = () => {
        delete Axios.defaults.headers.common["Authorization"];
        localStorage.removeItem("jwt");
        window.location.href = "/";
    };
    render() {
        const { classes } = this.props;

        let authOptions = (
            <Aux>
                <Link
                    to="/login"
                    style={{ color: "inherit", textDecoration: "none" }}
                >
                    <NavButton disableFocusRipple color="inherit">
                        Login
                    </NavButton>
                </Link>
                <Link
                    to="/register"
                    style={{ color: "inherit", textDecoration: "none" }}
                >
                    <RegisterButton
                        disableFocusRipple
                        className={classes.registerButton}
                        variant="outlined"
                    >
                        Register
                    </RegisterButton>
                </Link>
            </Aux>
        );
        let authorityOptions = null;

        if (this.props.user.userType === "police") {
            authorityOptions = (
                <Aux>
                    <Link
                        to="/reportMissing"
                        style={{ color: "inherit", textDecoration: "none" }}
                    >
                        <NavButton disableFocusRipple color="inherit">
                            Report Missing
                        </NavButton>
                    </Link>
                </Aux>
            );
        }
        if (this.props.isAuth) {
            authOptions = (
                <Aux>
                    {authorityOptions}
                    <Link
                        to="/home"
                        style={{ color: "inherit", textDecoration: "none" }}
                    >
                        <NavButton disableFocusRipple color="inherit">
                            Home
                        </NavButton>
                    </Link>
                    <Link
                        to="/"
                        style={{ color: "inherit", textDecoration: "none" }}
                    >
                        <RegisterButton
                            disableFocusRipple
                            className={classes.registerButton}
                            variant="outlined"
                            onClick={this.onLogoutClick}
                        >
                            Logout
                        </RegisterButton>
                    </Link>
                </Aux>
            );
        }
        return (
            <div className={classes.root}>
                <AppBar position="sticky" className={classes.appBar}>
                    <Container maxWidth="lg">
                        <Toolbar variant="dense">
                            <Typography variant="h6" className={classes.title}>
                                <InertiaLogo />
                            </Typography>
                            {authOptions}
                        </Toolbar>
                    </Container>
                </AppBar>
            </div>
        );
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(style)(Navbar);
