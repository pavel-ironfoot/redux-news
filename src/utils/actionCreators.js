import { ADD_STORIES, CLEAR_ATTACHED_COMMENTS, CLEAR_PARENT_COMMENTS, CLEAR_STORIES, GET_ATTACHED_COMMENTS, GET_NEWS, GET_PARENT_COMMENTS, SHOW_STORY } from "../consts";

export const clearStoriesAction = () =>{
    return { type: CLEAR_STORIES, };
}
export const clearAttachedCommentsAction = () =>{
    return { type: CLEAR_ATTACHED_COMMENTS, }
}
export const getNewsAction = (data) =>{
    return { type: GET_NEWS, payload: data }
}
export const addStoriesAction = (newData,elem) =>{
    return { type: ADD_STORIES, payload: newData, key: elem };
}
export const showStoryAction = (data) =>{
    return { type: SHOW_STORY, payload: data };
}
export const clearParentsCommentsAction = () =>{
    return { type: CLEAR_PARENT_COMMENTS, };
}
export const getParentsCommentsAction = (newData,elem) =>{
    return { type: GET_PARENT_COMMENTS, payload: newData, key: elem };
}
export const getAttachedCommentsAction = (newData,elem) =>{
    return { type: GET_ATTACHED_COMMENTS, payload: newData, key: elem };
}
