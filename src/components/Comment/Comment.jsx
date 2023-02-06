import { useState } from "react";
import { useSelector } from "react-redux";
import KidComment from "../KidComment/KidComment";
import './Comment.scss';

const Comment = ({ commentId }) => {
    const [showKids, setShowKids] = useState(false);

    const parentKids = useSelector(state => state.parentComments.parentKids);
    const parentCommentsData = parentKids[commentId];

    const handleShowing = () => {
        setShowKids(!showKids);
    }

    return (
        <div className="comment">
            {parentCommentsData && parentCommentsData.text ?
                <div>

                    <p className="comment--by">by: {parentCommentsData.by}</p>
                    <p className="comment--text">{parentCommentsData.text}</p>
                    {parentCommentsData.kids ? <><button onClick={handleShowing}>Show Attached Comments</button></> : <h4>No Attached Comments</h4>}
                    <div>
                        {showKids ? <>
                            here you can see kids comments
                            <KidComment kidsId={parentCommentsData.kids} />
                        </> : <></>}
                    </div>
                </div>
                :
                <div>wait...</div>
            }

        </div>
    );
}

export default Comment;