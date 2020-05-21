import {CHANGE_QUERY} from './types'

export const changeQuery = (query,list) => (dispatch) => {
    
        const newList = list.filter(resource => {
            if (resource.title.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                return true;
            }
            if(resource.summary.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                return true;
            }
            return false;
        });

    dispatch({
        type: CHANGE_QUERY, 
        payload: {
            query,
           newList
    }
    })
};