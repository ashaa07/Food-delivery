import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
const Navbar = ({setShowLogin}) => {

 let[menu,setMenu]=useState("home")

 const{getTotalCartAmount}=useContext(StoreContext)

  return (
    <div className='navbar'>
   <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
   <ul className="nav-menu">
    <Link to='/' onClick={()=>setMenu("home")}  className={menu==="home" ? "active":""}>home</Link>
    <a href='#menu' onClick={()=>setMenu("menu")}  className={menu==="menu" ? "active" : ""}>menu</a>
    <a href='#AppDownload' onClick={()=>setMenu("mobile-app")}  className={menu==="mobile-app" ? "active" : ""}>mobile-app</a>
    <a href='#footer' onClick={()=>setMenu("contact-us")}  className={menu==="contact-us" ? "active" : ""}>contact us</a>
   </ul>
   <div className="nav-right">
    <img src ={assets.search_icon} alt="" />
    <div className="nav-search-icon">
       <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
        <div className={getTotalCartAmount()===0 ?"":"dot"}></div>
    </div>
    <button onClick={()=>setShowLogin(true)}>sign in</button>
    </div>   

    </div>
  )
}

export default Navbar