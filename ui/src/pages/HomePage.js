import React, { Component } from 'react';
import JobCard from './../components/JobCard';
import AcceptedJobCard from './../components/AcceptedJobCard'
import { Container, Button, Card, Image, Tab } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './home.css';

class HomePage extends Component {
    render() {
        console.log(this.props)
        const panes = [
            { menuItem: 'Invited', render: () => <Tab.Pane><JobCard /> </Tab.Pane> },
            { menuItem: 'Accepted', render: () => <Tab.Pane> <AcceptedJobCard /></Tab.Pane> },
        ]

        return (
            <>
                <div className="App-home" >
                    <Container>
                        <Tab menu={{ color: "orange", fluid: true, vertical: true, tabular: true }} panes={panes} />
                    </Container>


                </div>
            </>
        );
    }
}

export default HomePage;