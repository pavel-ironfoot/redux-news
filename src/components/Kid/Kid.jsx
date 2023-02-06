import { useSelector } from "react-redux";
import './Kid.scss';

const Kid = ({ id }) => {
    const kids = useSelector(state => state.attachedComment.attachedComments);
    const oneKid = kids[id];
    
    return (
        <div className="kid">
            {oneKid && oneKid.by ? <div>
                <p className="kid--name">{oneKid.by}</p>
                <p className="kid--text">{oneKid.text}</p></div> : <div>wait...</div>}

        </div>
    );
}

export default Kid;