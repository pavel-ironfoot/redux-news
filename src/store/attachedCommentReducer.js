import { CLEAR_ATTACHED_COMMENTS, GET_ATTACHED_COMMENTS } from "../consts";
import { defaultState } from "./defaultState";

export const attachedCommentReducer =(state=defaultState,action) =>{
    switch (action.type){
        case GET_ATTACHED_COMMENTS:
            return {...state, attachedComments:{...state.attachedComments,[action.key]:action.payload}};
        case CLEAR_ATTACHED_COMMENTS:
                return {...state, attachedComments:{}} ;
        default : return state;
    }
}