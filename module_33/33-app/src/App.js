import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nayok></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function Nayok(){
  const nayokStyle = {
    border : '2px solid purple',
    margin : '20px'
  }
  return (
    <div style={nayokStyle}>
      <p>ami khol  nayok</p>
      <h1>ami pagol</h1>
    </div>
  )
}

export default App;
