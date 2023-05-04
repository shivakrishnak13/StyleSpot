import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'

const MainRoutes = () => {

  return (
    <Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/about' element={<HomePage/>}/>
<Route path='/collection' element={<HomePage/>}/>
<Route path='/blog' element={<HomePage/>}/>
<Route path='/fashion' element={<HomePage/>}/>
    </Routes>
  )
}

export default MainRoutes;