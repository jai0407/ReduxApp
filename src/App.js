// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Shop from './Shop';

function App() {
  return (

    <>
    <div className="App">

  <Navbar title="Bank Of Jai"/>

  <div className='Container'>
    <Shop/>
  </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}

{/* <h1>Hello world</h1> */}







    </div>

    </>
  );
}

export default App;
