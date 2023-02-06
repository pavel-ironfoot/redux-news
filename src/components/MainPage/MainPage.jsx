import { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStoriesAction, clearAttachedCommentsAction, clearStoriesAction, getNewsAction } from '../../utils/actionCreators';
import { getStory, getStoryIds } from '../../utils/usefullUtils';
import Story from '../Story/Story';
import loader from './images/main-loader.gif';
import './MainPage.scss';

const MainPage = () => {
    const dispatch = useDispatch();
    const newsRedux = useSelector(state => state.news.newsRedux)

    const getStoriesFrom = () => {
        dispatch(clearStoriesAction());
        dispatch(clearAttachedCommentsAction());
        getStoryIds()
            .then(data => {
                dispatch(getNewsAction(data));
                data.map(async (elem) => {
                    let newData = await getStory(elem)
                    dispatch(addStoriesAction(newData,elem));
                })
            });
    }

    useEffect(() => {
        getStoryIds()
            .then(data => {
                dispatch(getNewsAction(data));
                data.map(async (elem) => {
                    let newData = await getStory(elem)
                    dispatch(addStoriesAction(newData,elem));
                })
            });

        const flagInterval = setInterval(() => {
            getStoriesFrom();
        }, 60000);
        return () => clearInterval(flagInterval)

    }, []);

    const handleUpdate = () => {
        getStoriesFrom();
    }

    return (
        <div className='main--page'>
            <header>
                <h1>Hacker News</h1>
                <button onClick={handleUpdate}>Update news</button>
            </header>
            <main>
                {newsRedux && newsRedux.length > 0 ? newsRedux.map(elem => <Story key={elem} storyId={elem} />) : <p>wait</p>}
            </main>
            <div className="preloader">
                <img src={loader} alt="loader animation" />
            </div>
        </div>
    );
}

export default MainPage;