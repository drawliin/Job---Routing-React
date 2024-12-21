import React from 'react'
import {useAuth} from './auth'
import {NavLink} from 'react-router-dom'

export default function Navbar() {

  const {user} = useAuth();


  return (
    <nav className='primary-nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        {
          !user && (<NavLink to='/login'>Login</NavLink>)
        }

    </nav>
  )
}
