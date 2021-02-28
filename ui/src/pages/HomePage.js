import React, { Component } from 'react';
import JobCard from './../components/JobCard';
import AcceptedJobCard from './../components/AcceptedJobCard'
import { Container, Tab } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './home.css';
import axios from 'axios';
import { acceptJob, declineJob, loadJobs, loadAcceptedJobs } from './../actions/JobAction';

// The class represents the home page of the application
class HomePage extends Component {

    componentDidMount() {

        // GET the list of all availible jobs
        axios.get("https://localhost:5001/api/v1/jobs/GetAllAvailibleJobs").then((response) => {
            this.props.loadJobs(response.data)
        })

        // GET the list of all the jobs which have been acepted
        axios.get("https://localhost:5001/api/v1/jobs/GetAllJobsAccepted").then((response) => {
            this.props.loadAcceptedJobs(response.data)
        })

    }
    render() {
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

// Map the state to the application properties
const mapStateToProps = (state) => {
    return {
        avlJobs: state.avlJobs,
        acceptJobs: state.acceptJobs
    }
}

// Map the dispatch function to the application properties
const mapDispatchToProps = (dispatch) => {
    return {
        acceptJob: (id) => { dispatch(acceptJob(id)) },
        declineJob: (id) => { dispatch(declineJob(id)) },
        loadJobs: (data) => { dispatch(loadJobs(data)) },
        loadAcceptedJobs: (data) => { dispatch(loadAcceptedJobs(data)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);