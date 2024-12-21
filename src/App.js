import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './pages/Navbar'
import OrderSummary from './pages/OrderSummary'
import NoMatch from './pages/NoMatch'
import Products from './pages/Products'
import FeaturedP from './pages/FeaturedP'
import NewP from './pages/NewP'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'
import Profile from './pages/Profile'
import {AuthProvider} from './pages/auth'
import Login from './pages/Login'
import { RequireAuth } from './pages/RequireAuth'

function App() {
  return (
        <AuthProvider>
          <Navbar/>

          <Routes>
              <Route index element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/ordersummary' element={<OrderSummary/>} />

              <Route path='/products' element={<Products/>}>
                <Route index element={<FeaturedP/>}/>
                <Route path='featured' element={<FeaturedP/>}/>
                <Route path='new' element={<NewP/>}/>
              </Route>

              <Route path='/profile' element={<RequireAuth><Profile/></RequireAuth>}/>
              <Route path='/login' element={<Login/>}/>

              <Route path='/users' element={<Users/>}>
                <Route path=':userId' element={<UserDetails/>}/>
              </Route>

              <Route path="*" element={<NoMatch/>} />   
          </Routes>
        </AuthProvider>  
  );
}

export default App
