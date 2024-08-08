import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import bars from '../../assets/bars-solid.svg';
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import Avatar from '../Avatar/Avatar'


function Navbar() {
  var user = null;
  return (
    <nav className="main-nav">
      <div className="navbar">
        <button className="slide-in-icon">
          <img src={bars} alt="bars" width='15' />
        </button>
        <div className="navbar-1">
          <Link to='/' className='nav-item nav-logo'><img src={logo} alt="logo" /></Link>
          <Link to='/' className='nav-item nav-btn nav-res'>About</Link>
          <Link to='/' className='nav-item nav-btn nav-res'>Products</Link>
          <Link to='/' className='nav-item nav-btn nav-res'>For teams</Link>
          <form><input type = 'text' placeholder='Search'/>
          <img src={search} alt="search" width = '18' className='search-icon' />
          </form>
        </div>
        <div className="navbar2">
          {user === null ?(
            <Link to = '/' className='nav-item nav-link'>Log in</Link>
          ):(
            <>
            <Avatar backgroundColor= '#009dff' px = '10px' py = '7px' borderRadius='50%' color = 'white'>
              <Link style = {{color : 'white', textDecoration: "none"}}></Link>
            </Avatar>
            <button className="nav-item nav-link">Log out</button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar