import { SlInfo } from "react-icons/sl";
import HomePage from "./Pages/HomePage";
import SingleProductPage from "./Pages/SingleProductPage";
import Navbar from "./Components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainRoutes from "./Pages/MainRoutes";
import Footer from "./Components/Footer";
import { useLocation } from "react-router-dom";
function App() {
  let location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/admin" ? <Navbar /> : null}
      <MainRoutes />
      {location.pathname !== "/admin" ? <Footer /> : null}
    </div>
  );
}

export default App;
