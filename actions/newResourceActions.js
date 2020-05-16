
import { SUBMIT_FORM, CHANGE_FORM} from '../actions/types'


export const changeForm = (field,value) => (dispatch) => {
        dispatch({
            type:CHANGE_FORM,
            payload:{
                field,
                value,
            }
        });  
};


export const submitForm = (data) => (dispatch) => {
    data.categories = data.categories.split(/\s*,\s*/gm);
    dispatch({
        type: SUBMIT_FORM ,
        payload:data,
    });
   


};