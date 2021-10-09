import {AUTH,LOGOUT} from "../constants/actions"

const authReducer=(state={authData:null},action)=>{
    switch(action.type){
        case AUTH:
            localStorage.setItem(action.user,JSON.stringify({...action?.data}));
            return {...state,authData:action?.data};
        case LOGOUT:
            localStorage.removeItem(action.user);
            return {...state,authData:null};
        default:
            return state;
    }
}

export default authReducer;