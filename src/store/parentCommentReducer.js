import { CLEAR_PARENT_COMMENTS, GET_PARENT_COMMENTS } from "../consts";
import { defaultState } from "./defaultState";

export const parentCommentReducer =(state=defaultState,action) =>{
    switch (action.type){
        case GET_PARENT_COMMENTS:
            return {...state, parentKids:{...state.parentKids,[action.key]:action.payload}};
        case CLEAR_PARENT_COMMENTS:
                return {...state, parentKids:{}} ;
        default : return state;
    }
}