import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';



function Navbar() {
   
    const [click, setClick] = useState(false)
    // const [isActive, setActive] = useState("false")

    const handleClick=()=>{
        setClick(!click)
    }

    // const handleNavClick=()=>{
    //     console.log("i was clicked")
    //     setActive(!isActive)

    // }
    return (
        
        <>
          <nav className="p-5  shadow-sm">
              <div className="nav-container flex items-center justify-center  ">
                  <div className="hamburger  block lg:hidden flex items-center" >
                     <i className={ click? 'fas fa-times':'fas fa-bars'} onClick={handleClick}  />
                  </div>

                  <Link to="/"><img src="images/logo.svg" className="w-15 ml-4" alt="" /></Link>

              <div className=" nav-links-container hidden lg:block ml-5">
                <Link className="nav-links" to="/Collections"> Collections </Link>
                <Link className="nav-links" to="/Men"> Men </Link>
                <Link className="nav-links" to="/Women"> Women </Link>
                <Link className="nav-links" to="/About"> About </Link>
                <Link className="nav-links" to="/Contact"> Contact </Link>
              </div>

                  <div className="cart-image-and-avatar-container flex items-center ml-auto">
                     <img src="images/icon-cart.svg" className="mr-4 h-5" alt="" /> 
                     <img src="images/image-avatar.png" className="w-8" alt="" />
                  </div>
              </div>

              
              <ul className={ click ? 'nav-menu active' :'nav-menu' }>
                 <li className="list-item">
                   <Link to="/Collections">Collections</Link>
                 </li>
                 <li className="list-item">
                   <Link to="/Men">Men</Link>
                 </li>
                 <li className="list-item">
                   <Link to="/Women">Women</Link>
                 </li>
                 <li className="list-item">
                   <Link to="/About">About</Link>
                 </li>
                 <li className="list-item">
                   <Link to="/contact">Contact</Link>
                 </li>
              </ul>
          </nav>
            
        </>
    )
}

export default Navbar
