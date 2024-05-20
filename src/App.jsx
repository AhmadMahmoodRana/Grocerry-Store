import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import FrontPage from './Pages/FrontPage'
import ByCategory from './Pages/ByCategory'
import Products from './Pages/Products'
import AddProduct from './Pages/AddProduct'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { CartProvider } from 'react-use-cart'
import Detail from './Pages/Detail'
import AddToCart from './Components/AddToCart'
import PrivateRoutes from './Components/PrivateRoutes'
import UserRoutes from './Components/UserRoutes'
import Profile from './Pages/Profile'

const App = () => {
  const [open, setOpen] = useState(false)
 




  return (
    <div>

    <CartProvider>
      <Navbar open={open} setOpen={setOpen} />
      <AddToCart open={open} setOpen={setOpen} />
    <Routes>
    <Route element={<UserRoutes/>}>
    <Route exact path='/addproduct' element={<AddProduct/>} />

    </Route>
    <Route exact path='/bycategory/:category' element={<ByCategory/>} />
    <Route exact path='/' element={<FrontPage open={open} setOpen={setOpen} />} />
    <Route exact path='/products' element={<Products/>} />
    <Route exact path='/signup' element={<Signup/>} />
    <Route exact path='/login' element={<Login/>} />
    <Route exact path='/detail/:id' element={<Detail open={open} setOpen={setOpen}/>} />
    <Route exact path='/user' element={ <Profile/>}/>


    
    </Routes>
    </CartProvider>
    </div>
  )
}

export default App
