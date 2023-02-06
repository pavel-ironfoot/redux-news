import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { showStoryAction } from "../../utils/actionCreators";
import { getStory, timeConverter } from "../../utils/usefullUtils";
import ParentComment from "../ParentComment/ParentComment";
import loader from './images/load-animation.gif';
import './NewsPage.scss';

const NewsPage = () => {
    const navegate = useNavigate();
    const { item } = useParams();
    const dispatch = useDispatch();
    const storyShow = useSelector(state => state.story.showStoryRedux);
    
    useEffect(() => {
        const storyId = item.slice(4);
        getStory(storyId).then(data => dispatch(showStoryAction(data)))
    }, []);

    return (
        <div className="news--page">
            <header>
                <h1>News Page</h1>
                <button onClick={() => navegate(-1)}>Go Back</button>
                <NavLink to='/'>MainPage</NavLink>
            </header>
            <main>
                {(storyShow && storyShow.url) ? (<div>
                    <a target={'_blank'} href={storyShow.url}>
                        <p>{storyShow.title}</p>
                    </a>
                    <p>By: {storyShow.by}</p>
                    <p>Data: {timeConverter(storyShow.time)}</p>
                    <p>{storyShow.kids && storyShow.kids.length > 0 ? <>Amount comments: {storyShow.kids.length} </> : <></>}</p>
                    {storyShow.kids && storyShow.kids.length > 0 ? <ParentComment /> : <p>no comments</p>}
                </div>) : (
                    <div>
                        wait, wait, wait...
                    </div>)
                }
            </main>
            <div className="preloader">
                <img src={loader} alt="loader animation" />
            </div>
        </div>
    );
}

export default NewsPage;