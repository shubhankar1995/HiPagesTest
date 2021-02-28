// Set the initial state
const initState = {
    avlJobs: [],
    acceptJobs: []
}

// Function that dteermines the change to the application
const jobReducer = (state = initState, action) => {
    // If the job is accepted
    if (action.type === 'ACCEPT_JOB') {

        // Filter the availible job state to get all ids except for the one accepted
        let newAvlJobs = state.avlJobs.filter(job => {
            return action.id !== job.id
        });

        // Get the job data and add it to the accepted job list
        let tmpAvlJobs = state.avlJobs.filter(job => {
            return action.id === job.id
        });
        state.acceptJobs.push(tmpAvlJobs[0])
        return {
            ...state,
            avlJobs: newAvlJobs
        }
    }

    // If the job is declined
    if (action.type === 'DECLINE_JOB') {
        // Filter the availible job state to get all ids except for the one declined
        let newAvlJobs = state.avlJobs.filter(job => {
            return action.id !== job.id
        });
        return {
            ...state,
            avlJobs: newAvlJobs
        }
    }

    // Load the job invitations
    if (action.type === 'LOAD_JOB') {
        return {
            ...state,
            avlJobs: action.data
        }
    }

    // Load the accepted jobs
    if (action.type === 'LOAD_ACC_JOB') {
        return {
            ...state,
            acceptJobs: action.data
        }
    }
    return state;
}

export default jobReducer;