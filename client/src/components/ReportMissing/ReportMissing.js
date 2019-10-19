import React, { Component } from "react";
import {
    Container,
    withStyles,
    Typography,
    Paper,
    Divider,
    Button
} from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import { style } from "./style";
import { TextFieldInput } from "../Common/InputFields";
import Axios from "axios";
class ReportMissing extends Component {
    state = {
        name: "",
        age: "",
        sex: "",
        city: "",
        state: "",
        details: "",
        fileName: "",
        fileData: "",
        errors: {}
    };

    onChangeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onClickHandler = () => {
        let missingPerson = new FormData();

        missingPerson.append("name", this.state.name);
        missingPerson.append("age", this.state.age);
        missingPerson.append("sex", this.state.sex);
        missingPerson.append("state", this.state.state);
        missingPerson.append("city", this.state.city);
        missingPerson.append("details", this.state.details);
        missingPerson.append("imageName", this.state.fileName);
        missingPerson.append("imageData", this.state.fileData);

        Axios.post("/api/missingPersons/reportMissing", missingPerson)
            .then(res => {
                console.log("Success!");
                this.setState({
                    name: "",
                    age: "",
                    sex: "",
                    city: "",
                    state: "",
                    details: "",
                    fileName: "",
                    fileData: "",
                    errors: {}
                });
            })
            .catch(err => this.setState({ errors: err.response.data }));
    };

    handleFileChange = files => {
        this.setState({
            fileName: "multer-image-" + Date.now(),
            fileData: files[0]
        });
    };

    render() {
        const { classes } = this.props;
        const { errors } = this.state;

        return (
            <Container maxWidth="sm" className={classes.container}>
                <Paper elevation={3}>
                    <Typography variant="h4" className={classes.title}>
                        Report Missing Person
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
                        name="age"
                        label="Age"
                        margin="dense"
                        variant="outlined"
                        value={this.state.age}
                        onChange={this.onChangeHandler}
                        errormsg={errors.age}
                    />
                    <TextFieldInput
                        name="sex"
                        label="Gender"
                        margin="dense"
                        variant="outlined"
                        value={this.state.sex}
                        onChange={this.onChangeHandler}
                        errormsg={errors.sex}
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
                        name="details"
                        label="Details"
                        margin="dense"
                        variant="outlined"
                        value={this.state.details}
                        onChange={this.onChangeHandler}
                        errormsg={errors.details}
                    />
                    <DropzoneArea
                        dropzoneClass={classes.dropzone}
                        onChange={this.handleFileChange}
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

export default withStyles(style)(ReportMissing);
