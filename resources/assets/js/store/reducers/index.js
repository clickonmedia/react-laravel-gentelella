import {combineReducers} from 'redux'
import Auth from './Auth'
import Info from './Info'
import persistStore from './persistStore'

const RootReducer = combineReducers({ Auth, Info, persistStore });

export default RootReducer;