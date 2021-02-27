export const acceptJob = (id) => {
    return {
        type: 'ACCEPT_JOB',
        id
    }
}

export const declineJob = (id) => {
    return {
        type: 'DECLINE_JOB',
        id
    }
}

export const loadJobs = (data) => {
    return {
        type: 'LOAD_JOB',
        data
    }
}

export const loadAcceptedJobs = (data) => {
    return {
        type: 'LOAD_ACC_JOB',
        data
    }
}