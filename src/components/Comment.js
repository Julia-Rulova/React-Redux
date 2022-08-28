import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { commentUpdate, commentDelete } from '../redux/actions';

function Comment({ data }) {
    const { text, id } = data;
    const [commentText, setCommentText] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (text) {
            setCommentText(text);
        }
    }, [text]);

    function handleInput(e) {
        setCommentText(e.target.value);
    }

    function handleUpdate(e) {
        e.preventDefault();
        dispatch(commentUpdate(commentText, id));
    }

    function handleDelete(e) {
        e.preventDefault();
        dispatch(commentDelete(id));
    }

    return (
        <form className="comments__item" onSubmit={handleUpdate}>
            <div className="comments__item_delete" onClick={handleDelete}>&times;</div>
            <input className="comment__input" type="text" value={commentText} onChange={handleInput} />
            <input className="comments__input" type="submit" hidden />
        </form>
    )
}

export default Comment;