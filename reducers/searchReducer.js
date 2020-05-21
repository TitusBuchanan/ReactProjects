import {CHANGE_QUERY} from '../actions/types'
import resources from '../mock/resource'



const INITIAL_STORE = {
    searchList: [...resources],
    query:"",
    loading:false,
    errors:{}
}


export default( store = INITIAL_STORE, action) => {
  
    switch(action.type) {
        case CHANGE_QUERY:
            return {
                ...store,
                query: action.payload.query,
                newList:action.payload.newList
            }
        default:
            return store
    }
}