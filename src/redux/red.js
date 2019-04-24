import initState from './initState';

let redd = ( state = initState, action ) => {
    switch ( action.type ) {
        case 'ALOGIN' : 
            //send data to server & check 
            return {
                ...state,
                curUser : action.newUser,
                curScreen : 'main'
            }  
        case 'ACLOSE_TASK' : 
            let tt = [];
            state.tasks.forEach( el => {
                if (el.IND !== action.idToClose) {
                    tt.push (el)
                }
            })     
            //send changes to serverAPI       
            return {
                ...state, 
                tasks : tt
            }  
        case 'AADDCLOSE' :  
            let newEl =  {
                TYPE : 'CLOSE',
                TASK_CLOSE : '-',
                WHO : action.data.who,
                REASON : action.data.reason,
                CLOSE_DATE : action.data.when,
                IND : state.tasks.length + 1
            }   
            let newArr = state.tasks
            newArr.push (newEl)               
            return {                
                ...state,
                tasks : newArr                               
            }     
        default : return state            
    }
}

export default redd