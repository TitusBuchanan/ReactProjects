import { combineReducers } from 'redux';
import resourcesReducer from './resourcesreducer';


export default combineReducers({
    resources: resourcesReducer,
})