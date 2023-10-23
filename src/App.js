import logo from './logo.svg';
import './App.css';
import Mybutton from './component/Mybutton';
import ImageComponent from './component/ImageComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent UrlGattino="https://placekitten.com/201" DescrizioneGattino="Testo alternativo" />
        <img src={logo} className="App-logo" alt="logo" />
        <Mybutton bottone="cliccami" />
        <p>
          Hey guys!
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello word
        </a>

      </header>
    </div>
  );
}

export default App;
