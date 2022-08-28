import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid  from 'uniqid';

import { commentCreate, commentsLoad } from "../redux/actions";
import Comment from "./Comment";

function Comments() {
    const [textComment, setTextComment] = useState('');
    const dispatch = useDispatch();
    const comments = useSelector(state => {
        const { commentsReducer } = state;
        return commentsReducer.comments;
    })

    function handleInput(e) {
        setTextComment(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTextComment('');

        const id = uniqid();
        dispatch(commentCreate(textComment, id));
    }

    useEffect(() => {
        dispatch(commentsLoad());
    }, []);

    return (
        <div className="card__comments">
            <form className="comments__item_create" onSubmit={handleSubmit}>
                <input className="comments__input" type="text" value={textComment} onChange={handleInput} />
                <input className="comments__input" type="submit" hidden />
            </form>
            {!!comments.length && comments.map(res => {
                return <Comment key={res.id} data={res} />
            })}
        </div>
    )
}

export default Comments;