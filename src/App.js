import "./App.css";

import Navbar from "./components/Navbar";
import Info from "./components/Info";
import { Route, Routes } from "react-router-dom";
/* import { BrowserRouter, Link } from "react-router-dom"; */
import Verification from "./components/Verification";
import Signup from "./components/Signup";
import Volunteer from "./components/Volunteer";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <img src="./images/back.svg" alt="" />

      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Navbar />

      {/* <Route path="/" element={<Main />} />
        <Route path="/" element={<Info />} />
        <Route path="/" element={<Verification />} /> */}
      {/*  <Main /> */}
      <Info />
      <Verification />
      <Volunteer />
      <Footer />
    </div>
  );
}

export default App;
