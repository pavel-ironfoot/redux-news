
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import './Story.scss';
import { timeConverter } from "../../utils/usefullUtils";

const Story = ({ storyId }) => {

    const story = useSelector(state => state.stories.filteredStories);
    const StoryData = story[storyId];

    return StoryData && StoryData.url ? (<div className="story">
        <NavLink to={`/NewsPage/item${storyId}`}>{StoryData.title}</NavLink>
        <p>Score: {StoryData.score}</p>
        <p>By: {StoryData.by}</p>
        <p>Data: {timeConverter(StoryData.time)}</p>
    </div>) : (
        <div>
            Maybe it will be show later
        </div>
    )
}

export default Story;