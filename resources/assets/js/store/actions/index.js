import * as ActionTypes from '../action-types'


export function authLogin(payload){
    return {
        type: ActionTypes.AUTH_LOGIN,
        payload
    }
}

export function authLogout(){
    return {
        type: ActionTypes.AUTH_LOGOUT
    }
}

export function authCheck(){
    return {
        type:ActionTypes.AUTH_CHECK
    }
}

export function setPageTitle( title ){
    return {
        type: ActionTypes.SET_PAGE_TITLE
    }
}

export function setPageComponent(){
    return {
        type:ActionTypes.SET_PAGE_COMPONENT
    }
}
