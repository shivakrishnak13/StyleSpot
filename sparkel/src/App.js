// import './App.css';

import { SlInfo } from "react-icons/sl";
import HomePage from "./Pages/HomePage";
import SingleProductPage from "./Pages/SingleProductPage";
import Navbar from "./Components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


function App() {
  return (
    <div className="App">
      <Navbar/>
  <SingleProductPage/>
    </div>
  );
}

export default App;
