import React, { Component } from "react";
import {
    Container,
    withStyles,
    Typography,
    Paper,
    Divider,
    Button
} from "@material-ui/core";
import { style } from "./style";
import { TextFieldInput } from "../Common/InputFields";
import Axios from "axios";
class Register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        userType: "common",
        city: "",
        state: "",
        phoneNumber: "",
        bloodGroup: "",
        errors: {}
    };

    onChangeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onClickHandler = () => {
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            userType: this.state.userType,
            city: this.state.city,
            state: this.state.state,
            phoneNumber: this.state.phoneNumber,
            bloodGroup: this.state.bloodGroup
        };
        Axios.post("/api/users/register", newUser)
            .then(res => this.props.history.push("/login"))
            .catch(err => this.setState({ errors: err.response.data }));
    };

    render() {
        const { classes } = this.props;
        const { errors } = this.state;

        return (
            <Container maxWidth="sm" className={classes.container}>
                <Paper elevation={3}>
                    <Typography variant="h4" className={classes.title}>
                        Register
                    </Typography>
                    <Divider />
                    <TextFieldInput
                        name="name"
                        label="Name"
                        margin="dense"
                        variant="outlined"
                        value={this.state.name}
                        onChange={this.onChangeHandler}
                        errormsg={errors.name}
                    />
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
                    <TextFieldInput
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        margin="dense"
                        variant="outlined"
                        value={this.state.confirmPassword}
                        onChange={this.onChangeHandler}
                        errormsg={errors.confirmPassword}
                    />
                    <TextFieldInput
                        name="city"
                        label="City"
                        margin="dense"
                        variant="outlined"
                        value={this.state.city}
                        onChange={this.onChangeHandler}
                        errormsg={errors.city}
                    />
                    <TextFieldInput
                        name="state"
                        label="State"
                        margin="dense"
                        variant="outlined"
                        value={this.state.state}
                        onChange={this.onChangeHandler}
                        errormsg={errors.state}
                    />
                    <TextFieldInput
                        name="phoneNumber"
                        label="Phone Number"
                        margin="dense"
                        variant="outlined"
                        value={this.state.phoneNumber}
                        onChange={this.onChangeHandler}
                        errormsg={errors.phoneNumber}
                    />
                    <TextFieldInput
                        name="bloodGroup"
                        label="Blood Group"
                        margin="dense"
                        variant="outlined"
                        value={this.state.bloodGroup}
                        onChange={this.onChangeHandler}
                        errormsg={errors.bloodGroup}
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

export default withStyles(style)(Register);
