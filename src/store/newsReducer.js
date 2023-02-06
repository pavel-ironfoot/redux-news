import { GET_NEWS } from "../consts";
import { defaultState } from "./defaultState";

export const newsReducer =(state=defaultState,action) =>{
    switch (action.type){
        case GET_NEWS:
          return {...state, newsRedux:action.payload};
        default : return state;
    }
}