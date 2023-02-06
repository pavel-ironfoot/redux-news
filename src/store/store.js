import { newsReducer } from "./newsReducer";
import { combineReducers, legacy_createStore as createStore, } from 'redux';
import { storyShowReducer } from "./storyShowReducer";
import { filteredStoriesReducer } from "./filteredStoriesReducer";
import { parentCommentReducer } from "./parentCommentReducer";
import { attachedCommentReducer } from "./attachedCommentReducer";

const rootReducer = combineReducers({
    news:newsReducer,
    story:storyShowReducer,
    stories:filteredStoriesReducer,
    parentComments:parentCommentReducer,
    attachedComment:attachedCommentReducer,
});
export const store = createStore(rootReducer);