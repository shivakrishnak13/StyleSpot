
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Admin from "./Admin";
import Login from "./Login";
import Product from './Product'
import SingleProductPage from "./SingleProductPage";
const MainRoutes = () => {
  return (

  <Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/about' element={<HomePage/>}/>
<Route path='/collection' element={<HomePage/>}/>
<Route path='/blog' element={<HomePage/>}/>
<Route path='/fashion' element={<HomePage/>}/>
<Route path='/product' element={<Product/>}/>
<Route path="/product/:productId" element={<SingleProductPage/>} />
    </Routes>

  )

};


export default MainRoutes;
