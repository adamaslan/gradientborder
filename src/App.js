import logo from './logo.svg';
import './App.css';
import Mixer from './mixer.gif';
import './gradientborder.css'; 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="rainbow">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div class="rainbow">
        <img 
          src={Mixer}
        />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
