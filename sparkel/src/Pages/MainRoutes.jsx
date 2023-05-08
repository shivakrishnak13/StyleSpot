
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Product from "./Product";
import Admin from "./Admin";
import Login from "./Login";
import Cart from './Cart';

const MainRoutes = () => {
  return (


  <Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/about' element={<HomePage/>}/>
<Route path='/collection' element={<HomePage/>}/>
<Route path='/blog' element={<HomePage/>}/>
<Route path='/fashion' element={<HomePage/>}/>
<Route path='/product' element={<Product/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/admin' element={<Admin/>}/>

    </Routes>
  )


};

export default MainRoutes;
