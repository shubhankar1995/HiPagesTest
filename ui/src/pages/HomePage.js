import React, { Component } from 'react';
import JobCard from './../components/JobCard';
import AcceptedJobCard from './../components/AcceptedJobCard'
import { Container, Button, Card, Image, Tab } from 'semantic-ui-react';
import { connect } from 'react-redux';

class HomePage extends Component {
    render() {
        console.log(this.props)
        const panes = [
            { menuItem: 'Invited', render: () => <Tab.Pane><JobCard /> </Tab.Pane> },
            { menuItem: 'Accepted', render: () => <Tab.Pane> <AcceptedJobCard /></Tab.Pane> },
        ]

        return (
            <>
                <div className="App-home">
                    <Container>
                        <Tab panes={panes} />
                    </Container>


                </div>
            </>
        );
    }
}

export default HomePage;