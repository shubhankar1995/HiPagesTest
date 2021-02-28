import React, { Component } from 'react';
import { Button, Segment, Divider, Icon, Grid, Message } from 'semantic-ui-react'
import { connect } from 'react-redux';


// This class renders all the jobs which have been accepted
class AcceptedJobCard extends Component {

    render() {
        return (
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
                                <Grid >
                                    <Grid.Column>
                                        <Button circular color="orange" disabled>{item.contact_name.substring(0, 1)}</Button>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        {item.contact_name}

                                        <br />
                                        {(new Date(item.updated_at)).toUTCString()}
                                    </Grid.Column>
                                </Grid>
                                <Divider />
                                <Grid columns={4}>
                                    <Grid.Row>
                                        <Grid.Column><Icon inverted disabled color="black" name="map marker alternate" /> {item.suburb} {item.postCode}</Grid.Column>
                                        <Grid.Column><Icon disabled name="briefcase" /> {item.category}</Grid.Column>
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

// Map the state to the application properties
const mapStateToProps = (state) => {
    console.log(state)
    return {
        avlJobs: state.avlJobs,
        acceptJobs: state.acceptJobs
    }
}

// Connect the state with the class
export default connect(mapStateToProps)(AcceptedJobCard)