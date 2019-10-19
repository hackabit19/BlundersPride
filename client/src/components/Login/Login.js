import React, { Component } from "react";
import {
    Container,
    Paper,
    withStyles,
    Typography,
    Divider,
    Button
} from "@material-ui/core";
import { style } from "./style";
import { TextFieldInput } from "../Common/InputFields";
import Axios from "axios";

class Login extends Component {
    state = {
        errors: {},
        email: "",
        password: ""
    };

    onChangeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onClickHandler = () => {
        const user = {
            email: this.state.email,
            password: this.state.password
        };
        Axios.post("/api/users/login", user)
            .then(res => {
                // Get the token
                const { token } = res.data;

                // Store token in local storage
                localStorage.setItem("jwt", token);

                Axios.defaults.headers.common["Authorization"] = token;
                window.location.href = "/home";
            })
            .catch(err => this.setState({ errors: err.response.data }));
    };

    render() {
        const { classes } = this.props;
        const { errors } = this.state;

        return (
            <Container maxWidth="sm" className={classes.container}>
                <Paper elevation={3}>
                    <Typography variant="h4" className={classes.title}>
                        Login
                    </Typography>
                    <Divider />
                    <TextFieldInput
                        name="email"
                        label="Email"
                        type="email"
                        margin="dense"
                        variant="outlined"
                        value={this.state.email}
                        onChange={this.onChangeHandler}
                        errormsg={errors.email}
                    />
                    <TextFieldInput
                        name="password"
                        label="Password"
                        type="password"
                        margin="dense"
                        variant="outlined"
                        value={this.state.password}
                        onChange={this.onChangeHandler}
                        errormsg={errors.password}
                    />

                    <Button
                        type="submit"
                        variant="outlined"
                        className={classes.registerButton}
                        onClick={this.onClickHandler}
                    >
                        Submit
                    </Button>
                </Paper>
            </Container>
        );
    }
}
export default withStyles(style)(Login);
