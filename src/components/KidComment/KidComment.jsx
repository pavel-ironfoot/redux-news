import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAttachedCommentsAction } from "../../utils/actionCreators";
import { getStory } from "../../utils/usefullUtils";
import Kid from "../Kid/Kid";

const KidComment = ({ kidsId }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        kidsId.map(async (elem) => {
            let newData = await getStory(elem)
            dispatch(getAttachedCommentsAction(newData,elem));
        })
    }, []);

    return (
        <div>
            <h3>Atteched comments</h3>
            {kidsId && kidsId.length > 0 ? <>{kidsId.map(elem =>
                <div key={elem}>
                    <Kid id={elem} />
                </div>)}</> : <>wait...</>}

        </div>
    );
}

export default KidComment;