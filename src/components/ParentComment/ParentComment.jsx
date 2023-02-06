import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAttachedCommentsAction, clearParentsCommentsAction, getParentsCommentsAction } from "../../utils/actionCreators";
import { getComments } from "../../utils/usefullUtils";
import Comment from "../Comment/Comment";

const ParentComment = () => {
    const kids = useSelector(state => state.story.showStoryRedux.kids);
    const dispatch = useDispatch();

    const updateComments = () => {
        dispatch(clearAttachedCommentsAction());
        dispatch(clearParentsCommentsAction());

        kids.map(async (elem) => {
            let newData = await getComments(elem);
            dispatch(getParentsCommentsAction(newData,elem));
        })
    }

    useEffect(() => {
        dispatch(clearParentsCommentsAction());

        kids.map(async (elem) => {
            let newData = await getComments(elem)
            dispatch(getParentsCommentsAction(newData,elem));
        })
    }, [kids]);


    return (
        <div>
            <button onClick={updateComments}>Update comments</button>
            <h4>Comments:</h4>
            {kids.map(elem => <Comment key={elem} commentId={elem} />)}
        </div>
    );
}

export default ParentComment;