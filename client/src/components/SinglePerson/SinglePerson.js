import React, { Component } from "react";
import { Container, withStyles, Paper } from "@material-ui/core";

import { style } from "./style";
import Axios from "axios";

class SinglePerson extends Component {
    state = {
        person: {}
    };
    componentDidMount() {
        Axios.get(`/api/missingPersons/single/${this.props.match.params.id}`)
            .then(res => this.setState({ person: res.data }))
            .catch(err => this.setState({ person: false }));
    }
    render() {
        const { classes } = this.props;
        const person = this.state.person;
        let personData = null;
        if (person) {
            console.log(person);
            personData = (
                <Paper className={classes.paper}>
                    <img
                        alt={person.imageName}
                        src={"/" + person.imageData}
                        className={classes.bigAvatar}
                    />
                    <h3 className={classes.fields}>Name: {person.name}</h3>
                    <h3 className={classes.fields}>Age: {person.age}</h3>
                    <h3 className={classes.fields}>Gender: {person.sex}</h3>

                    <h3 className={classes.fields}>City: {person.city}</h3>
                    <h3 className={classes.fields}>State: {person.state}</h3>
                    <h3 className={classes.fields}>
                        Details: {person.details}
                    </h3>
                </Paper>
            );
        }
        return (
            <Container maxWidth="lg" className={classes.container}>
                {personData}
            </Container>
        );
    }
}

export default withStyles(style)(SinglePerson);
