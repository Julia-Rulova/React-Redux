import cat from './images/Cat3.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="wrap">
        <div className="card">
            <div className="card__image-container">
                <img className="card__image" src={cat} alt="котик." />
            </div>
        </div>
      </section>
    </div>
  );
}

export default App;
