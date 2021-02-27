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