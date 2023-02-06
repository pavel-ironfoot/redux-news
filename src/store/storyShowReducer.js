import { SHOW_STORY } from "../consts";
import { defaultState } from "./defaultState";

export const storyShowReducer =(state=defaultState,action) =>{
    switch (action.type){
        case SHOW_STORY:
          return {...state, showStoryRedux:action.payload};
        default : return state;
    }
}