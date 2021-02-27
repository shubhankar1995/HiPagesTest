import React, { Component } from 'react';
import { Button, Segment, Divider, Icon, Grid, Message } from 'semantic-ui-react'
import _ from 'lodash'
import { connect } from 'react-redux';
import { acceptJob, declineJob, loadJobs, loadAcceptedJobs } from './../actions/JobAction';
import axios from 'axios';

// This class renders all the jobs which are available
class JobCard extends Component {

    // Function which takes the job id as the parameter
    // and performs an update operation on the state using reducer
    // to mark the job as accepted
    handleAccept = (id) => {

        // Send PATCH request for changing status from new to accepted
        axios.patch(`https://localhost:5001/api/v1/jobs/UpdateContract/${id}`, [{
            op: "replace",
            path: "/status",
            value: "accepted"
        }]).then((response) => { console.log(this.props.acceptJob(id)) })
    }

    // Function which takes the job id as the parameter
    // and performs an update operation on the state using reducer
    // to mark the job as declined
    handleDecline = (id) => {
        
        // Send PATCH request for changing status from new to declined
        axios.patch(`https://localhost:5001/api/v1/jobs/UpdateContract/${id}`, [{
            op: "replace",
            path: "/status",
            value: "declined"
        }]).then((response) => { console.log(this.props.declineJob(id)) })
    }

    render() {
        return (
            <>
                {
                    (this.props.avlJobs.length === 0) ?
                        <Message
                            icon='inbox'
                            header='You have no new Invitations'
                            content='Hang in there and you will soon receive invitations'
                        />
                        :
                        this.props.avlJobs.map((item) =>
                            <Segment>
                                <Grid >
                                    <Grid.Column>
                                        <Button circular color="orange" disabled>{item.contact_name.substring(0, 1)}</Button>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        {item.contact_name}

                                        <br />
                                        {item.updated_at}
                                    </Grid.Column>
                                </Grid>

                                <Divider />
                                <Grid columns={3}>
                                    <Grid.Row>
                                        <Grid.Column><Icon inverted disabled color="black" name="map marker alternate" /> {item.suburb} {item.postCode}</Grid.Column>
                                        <Grid.Column><Icon disabled name="briefcase" /> {item.category}</Grid.Column>
                                        <Grid.Column>Job ID: {item.id}</Grid.Column>
                                    </Grid.Row>
                                </Grid>
                                <Divider />
                                {item.description}
                                <Divider />
                                <Button color='green' onClick={() => this.handleAccept(item.id)}> <Icon name="check" /> Accept </Button>
                                <Button color='red' onClick={() => this.handleDecline(item.id)}> <Icon name="close" /> Decline </Button>
                                <b>${item.price}</b> Lead Invitation
            </Segment>
                        )
                }
            </>
        );
    }
};

// Map the state to the application properties
const mapStateToProps = (state) => {
    console.log(state)
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

// Connect the state and dispach with the class
export default connect(mapStateToProps, mapDispatchToProps)(JobCard);