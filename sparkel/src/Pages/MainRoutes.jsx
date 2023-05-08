
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Product from "./Product";
import Admin from "./Admin";
import Login from "./Login";

import Cart from "./Cart"
import Payment from "./Payment";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<HomePage />} />
      <Route path="/collection" element={<HomePage />} />
      <Route path="/blog" element={<HomePage />} />
      <Route path="/fashion" element={<HomePage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />

    </Routes>
  )


};

export default MainRoutes;
