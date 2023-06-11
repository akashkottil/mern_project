import React,{ useState } from 'react'
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/LoginPage/Login'
import Register from './pages/RegisterPage/Register'
import LandingPage from './pages/LandingPage/LandingPage'
import AdminLogin from './pages/LoginPage/AdminLogin'

// import NavBar from './Components/NavBar'

import 'bootstrap/dist/css/bootstrap.css';
// import SingleProduct from './Components/SingleProduct'

//categories

import Grocery from './pages/Grocery/Grocery'
import Mobiles from './pages/Mobiles/Mobiles'
import Fashion from './pages/Fashion/Fashion'
import Electronics from './pages/Electronics/Electronics'
import HomeDecor from './pages/HomeDecor/HomeDecor'
import HomeApplainces from './pages/HomeApplainces/HomeApplainces'
import Admin from './pages/Admin/Admin'




function App() {

  return (
      <div>
      
        <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route exact path='/grocery' element={<Grocery/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/adminlogin' element={<AdminLogin/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/shop' element={<LandingPage/>}/>
          <Route exact path='/mobiles' element={<Mobiles/>}/>
          <Route exact path='/fashion' element={<Fashion/>}/>
          <Route exact path='/electronics' element={<Electronics/>}/>
          <Route exact path='/homedecor' element={<HomeDecor/>}/>
          <Route exact path='/homeapplainces' element={<HomeApplainces/>}/>
          <Route exact path='/adminlogin' element={<AdminLogin/>}/>
          <Route exact path='/admin' element={<Admin/>}/>
        </Routes>
        </BrowserRouter>
      </div>
  )
}
export default App
