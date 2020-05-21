import {CHANGE_QUERY} from './types'

export const changeQuery = (query) => (dispatch) => {
    
        

    dispatch({
        type: CHANGE_QUERY, 
        payload: query
    })
};