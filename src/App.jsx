import "./App.scss";
import ButtonsStore from "./components/ButtonsStore";
import Footer from "./components/Footer/Footer";
import Iphone from "./components/Iphone";

function App() {
  return (
    <div className="App">
      <div>
        <Iphone />
        <ButtonsStore />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
