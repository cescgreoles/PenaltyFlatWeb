import "./App.scss";
import ButtonsStore from "./components/ButtonsStore";
import Iphone from "./components/Iphone";

function App() {
  return (
    <div className="App">
      <div className="firstContainer">
        <Iphone />
        <ButtonsStore />
      </div>
    </div>
  );
}

export default App;
