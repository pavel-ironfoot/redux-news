import { ADD_STORIES, CLEAR_STORIES } from "../consts";
import { defaultState } from "./defaultState";

export const filteredStoriesReducer =(state=defaultState,action) =>{
    switch (action.type){
        case ADD_STORIES:
            return {...state, filteredStories:{...state.filteredStories,[action.key]:action.payload}};
        case CLEAR_STORIES:
            return {...state, filteredStories:{}} ;
          default : return state;
    }
}