import React, { Component } from 'react';
import JobCard from './../components/JobCard';
import AcceptedJobCard from './../components/AcceptedJobCard'
import { Container, Button, Card, Image, Tab } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './home.css';
import axios from 'axios';
import {acceptJob, declineJob, loadJobs, loadAcceptedJobs} from './../actions/JobAction';

class HomePage extends Component {

    componentDidMount() {
        axios.get("https://localhost:5001/api/v1/jobs/GetAllAvailibleJobs").then((response) => {
            this.props.loadJobs(response.data)
        })

        axios.get("https://localhost:5001/api/v1/jobs/GetAllJobsAccepted").then((response) => {
            this.props.loadAcceptedJobs(response.data)
        })

    }
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
                        <Tab menu={{ color: "orange", fluid: true, vertical: false, tabular: true }} panes={panes} />
                    </Container>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        avlJobs: state.avlJobs,
        acceptJobs: state.acceptJobs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        acceptJob: (id) => { dispatch(acceptJob(id)) },
        declineJob: (id) => { dispatch(declineJob(id)) },
        loadJobs : (data) => {dispatch(loadJobs(data))},
        loadAcceptedJobs : (data) => {dispatch(loadAcceptedJobs(data))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);