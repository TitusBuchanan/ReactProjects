import { combineReducers } from 'redux';
import resourcesReducer from './resourcesreducer';
import newResourceReducer from './newResourceReducer'


export default combineReducers({
    resources: resourcesReducer,
    newResource: newResourceReducer
})