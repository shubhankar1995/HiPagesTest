// Action to accept the job
export const acceptJob = (id) => {
    return {
        type: 'ACCEPT_JOB',
        id
    }
}

// Action to decline the job
export const declineJob = (id) => {
    return {
        type: 'DECLINE_JOB',
        id
    }
}

// Action to load all the available jobs
export const loadJobs = (data) => {
    return {
        type: 'LOAD_JOB',
        data
    }
}

// Action to load all the accepted jobs
export const loadAcceptedJobs = (data) => {
    return {
        type: 'LOAD_ACC_JOB',
        data
    }
}