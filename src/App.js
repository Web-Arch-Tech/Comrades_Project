import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Info from "./components/Info";

function App() {
  return (
    <div>
      <img src="./images/back.svg" alt="" />
      <Navbar />
      <Main />
      <Info />
    </div>
  );
}

export default App;
