import logo from './logo.svg';
import './App.css';
import Tabs from "./Components/Tabs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img className="inlineBlock App-logo" src={logo} alt="Cancer Knot"/>
          <h1 className="inlineBlock"> Skin Cancer Detection </h1>
        </div>
      </header>
      <Tabs/>
    </div>
  );
}

export default App;
