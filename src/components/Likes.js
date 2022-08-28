import { connect } from 'react-redux';
import { incrementLikes, decrementLikes } from '../redux/actions';

function Likes(props) {
    return (
        <div className="button__container">
            <button className="button__item" onClick={props.onIncrementLikes}>❤ {props.likes}</button>
            <button className="button__item" onClick={props.onDecrementLikes}>dislike</button>
        </div>
    )
}

function mapStatetoProps(state) {
    const { likesReducer } = state;

    return {
        likes: likesReducer.likes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () =>  dispatch(incrementLikes()),
        onDecrementLikes: () =>  dispatch(decrementLikes())
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Likes);