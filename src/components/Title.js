import { useDispatch, useSelector } from 'react-redux';
import { inputText } from '../redux/actions';

function Title() {
    const dispatch = useDispatch();
    const text = useSelector(state => {
        const { inputReducer } = state;
        return inputReducer.text;
    });

    function handleChange(e) {
        dispatch(inputText(e.target.value));
    }

    return (
        <>
            <div className="card__title">
                <input className="card__input" type="text" onChange={handleChange} />
            </div>
            <p className="card__paragraph">{text}</p>
        </>
    )
}

export default Title;