import { combineReducers } from 'redux';
import resourcesReducer from './resourcesreducer';
import newResourceReducer from './newResourceReducer'
import searchReducer from './searchReducer'


export default combineReducers({
    resources: resourcesReducer,
    newResource: newResourceReducer,
    searchReducer : searchReducer
})



//Over view of what our store currently looks like 
// eslint-disable-next-line
const store = {
    resources: {
        list: [],
        loading: true,
        errors:{},
        count:0
    },
    newResource : {
        form:{},
        loading:false,
        errors: {}
    },
    searchReducer: {
        list: [],
        query:'',
        loading:false,
        errors:{}
    }
}