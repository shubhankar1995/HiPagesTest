import React, { Component } from 'react';
import { Button, Segment, Divider, Icon, Grid, Message } from 'semantic-ui-react'
import { connect } from 'react-redux';

class AcceptedJobCard extends Component {

    render(){
    return(
        <>
        {
            (this.props.acceptJobs.length === 0) ?
            <Message
                icon='inbox'
                header="You haven't accepted any jobs yet!"
                content='Click on invited tab and start accepting new invitations.'
            />
            :
            this.props.acceptJobs.map((item) =>
            <Segment>
                {item.contact_name}
                <br />
                {item.updated_at}
                <Divider />
                <Grid columns={4}>
                <Grid.Row>
                <Grid.Column><Icon inverted disabled color="black" name="map marker alternate" /> {item.suburb} {item.postCode}</Grid.Column>
                <Grid.Column><Icon disabled name = "briefcase" /> {item.category}</Grid.Column>
                <Grid.Column>Job ID: {item.id}</Grid.Column>
                <Grid.Column>${item.price} Lead Invitation</Grid.Column>
                </Grid.Row>
                </Grid>
        
                <Divider />
                <div>
                <Icon name="phone" /> {item.contact_phone}
                <Icon name="mail" />{item.contact_email}
                </div>
                <br />

                {item.description}
                
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

export default connect(mapStateToProps) (AcceptedJobCard)