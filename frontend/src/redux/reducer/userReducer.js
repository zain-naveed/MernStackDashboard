import {USER_GET,USER_ADD,USER_ERROR,USER_LOGIN, USER_CURRENT} from '../type/user';
const initialState = {
    user:[],
    login:false,
    data: {}
}
const userReducer = (state = initialState,action)=>{
    
    switch(action.type){
            case USER_GET:
                return {
                    ...state,
                    user: action.payload
                }
            case USER_LOGIN:
                return {
                    ...state,
                    login:action.login,
                    data: action.payload,
                }
                case USER_CURRENT:
                    return {
                        ...state,
                        login:true,
                        data: action.payload
                    }

            default:
                return state;
    }
}
export default  userReducer;