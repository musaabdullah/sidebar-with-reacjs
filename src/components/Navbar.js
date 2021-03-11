import React from 'react'
import './navbar.css';
import   * as FIcon  from "react-icons/fa";
function Navbar({handleToggle, toggle}) {
    return (
        <div className="navbar">
            <div  onClick={handleToggle} className="navbar__icon">
             <FIcon.FaBars/>
            </div>
        </div>
    )
}

export default Navbar
