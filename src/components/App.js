import { useSelector } from 'react-redux';

import './App.css';
import cat from '../images/Cat3.webp';

import Likes from './Likes';
import Title from './Title';
import Comments from './Comments';
import Spin from './Spin';

function App() {
    const error = useSelector(state => state.appReducer.error);

    return (
        <div className="App">
            <section className="wrap">
                <Spin />
                <div className="card">
                    {error && (
                        <span className="error-message">{error}</span>
                    )}
                    <div className="card__image-container">
                        <img className="card__image" src={cat} alt="котик." />
                        <Title />
                        <Likes />
                    </div>
                    <Comments />
                </div>
            </section>
        </div>
    );
}

export default App;
