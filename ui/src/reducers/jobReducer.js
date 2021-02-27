
const initState = {
    avlJobs : [],
    acceptJobs : []
}

const jobReducer = (state = initState, action) => {
    if (action.type === 'ACCEPT_JOB'){
        console.log(action)
        let newAvlJobs = state.avlJobs.filter(job => {
            return action.id !== job.id
        });
        let tmpAvlJobs = state.avlJobs.filter(job => {
            return action.id === job.id
        });
        state.acceptJobs.push(tmpAvlJobs[0])
        return {
            ...state,
            avlJobs : newAvlJobs
        }
    }
    if (action.type === 'DECLINE_JOB'){
        console.log(action)
        let newAvlJobs = state.avlJobs.filter(job => {
            return action.id !== job.id
        });
        return {
            ...state,
            avlJobs : newAvlJobs
        }
    }
    if (action.type === 'LOAD_JOB'){
        console.log(action)
        return{
            ...state,
            avlJobs : action.data
        }
    }
    if (action.type === 'LOAD_ACC_JOB'){
        console.log(action)
        return{
            ...state,
            acceptJobs : action.data
        }
    }
    return state;
}

export default jobReducer;