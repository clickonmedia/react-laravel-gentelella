import * as ActionTypes from '../action-types'
import Http from '../../Http'

const initialState = {
    pageTitle: '',
    pageComponent: ''
};

const Info = ( state = initialState, { type, payload = null } ) => {

    switch( type ) {

        case ActionTypes.SET_PAGE_TITLE:
            return setPageTitle(state, payload);

        case ActionTypes.SET_PAGE_COMPONENT:
            return setPageComponent(state);

        default:
            return state;
    }
};

const setPageTitle = (state, payload) => {
	console.log('title reducer');

    state = Object.assign({}, state, {
        pageComponent: 'Component',
        pageTitle: 'Title'
    });

    return state;
};

const setPageComponent = (state) => {

    state = Object.assign({}, state, {
        pageComponent: 'Component',
        pageTitle: 'Title'
    });

    return state;
};

export default Info;
