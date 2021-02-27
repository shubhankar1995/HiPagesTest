import React, { Component } from 'react';
import { Button, Segment, Divider, Icon, Grid } from 'semantic-ui-react'
import _ from 'lodash'
import { connect } from 'react-redux';
import {acceptJob, declineJob, loadJobs, loadAcceptedJobs} from './../actions/JobAction';

class JobCard extends Component {

    handleAccept = (id) => {
        console.log(id)
        this.props.acceptJob(id);
    }

    handleDecline = (id) => {
        console.log(id)
        this.props.declineJob(id);
    }

    render(){
        return(
            <>
            {
                this.props.avlJobs.map((item) =>
                    <Segment>
                        {item.contact_name}
                        <br />
                        {item.updated_at}
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
                        <Button color='green' onClick = {() => this.handleAccept(item.id)}> <Icon name="check" /> Accept </Button>
                        <Button color='red' onClick = {() => this.handleDecline(item.id)}> <Icon name="close" /> Decline </Button>
                        <b>${item.price}</b> Lead Invitation
            </Segment>
                )
            }
        </>
        );
    }
};

const mapStateToProps = (state) => {
    console.log(state)
    return {
        avlJobs: state.avlJobs,
        acceptJobs : state.acceptJobs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        acceptJob : (id) => {dispatch(acceptJob(id))},
        declineJob : (id) => {dispatch(declineJob(id))},
        loadJobs : (data) => {dispatch(loadJobs(data))},
        loadAcceptedJobs : (data) => {dispatch(loadAcceptedJobs(data))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobCard);