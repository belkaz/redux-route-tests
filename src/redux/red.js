import initState from './initState';

let redd = ( state = initState, action ) => {
    switch ( action.type ) {
        case 'ALOGIN' : 
            return {
                ...state,
                curUser : action.newUser,
                curScreen : 'main'
            }            
        default : return state            
    }
}

export default redd