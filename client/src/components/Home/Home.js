import React, { Component } from "react";
import { Container, withStyles, Paper, Avatar, List } from "@material-ui/core";

import { style } from "./style";
import Axios from "axios";
import * as Ably from "ably";

class Home extends Component {
    state = {
        persons: []
    };
    componentDidMount() {
        Axios.get("/api/missingPersons/all")
            .then(res => this.setState({ persons: res.data }))
            .catch(err => console.log(err));
        const ably = new Ably.Realtime("0BeZCQ.p_xJxQ:kVy3m7kzD63IqtwN");
        const channel = ably.channels.get("light");
        channel.attach();
        channel.once("attached", () => {});
        channel.subscribe(message => {
            this.setState(prev => {
                let newPersons = prev.persons;
                newPersons.push(message.data);
                return {
                    persons: newPersons.reverse()
                };
            });
        });
    }
    render() {
        const { classes } = this.props;

        let missingPersons = null;
        if (this.state.persons.length > 0) {
            missingPersons = this.state.persons.map((person, index) => (
                <a key={index} href={`/single/${person._id}`}>
                    <Paper className={classes.paper}>
                        <Avatar
                            alt={person.imageName}
                            src={person.imageData}
                            className={classes.bigAvatar}
                        />
                        <h3 className={classes.fields}>Name: {person.name}</h3>
                        <h3 className={classes.fields}>Age: {person.age}</h3>
                        <h3 className={classes.fields}>Gender: {person.sex}</h3>

                        <h3 className={classes.fields}>City: {person.city}</h3>
                        <h3 className={classes.fields}>
                            State: {person.state}
                        </h3>
                        <h3 className={classes.fields}>
                            Details: {person.details}
                        </h3>
                    </Paper>
                </a>
            ));
        }

        return (
            <Container maxWidth="lg" className={classes.container}>
                <h1>Missing People</h1>
                <List>{missingPersons}</List>
            </Container>
        );
    }
}

export default withStyles(style)(Home);
