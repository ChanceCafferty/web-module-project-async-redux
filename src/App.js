import { connect } from 'react-redux';
import './App.css';
import GifList from '.components/GifList';
import data from './data/gifs';
import GifForm from './components/GifForm';

function App(props) {
  return (
    <div className="App">
      <h1>Search for Gifs</h1>
      <GifForm />

      {
        loading ? <h3>Loading...</h3> : <GifList gifs={gifs}/>
      }

    </div>
  );
}

export default App;