import React from 'react'
import * as AIcon from "react-icons/ai";
import './side.css';
import { useState }  from 'react';
import { Link } from 'react-router-dom';
const Sidebar = ({handleToggle, toggle}) => {
    
    return (
        <div className={`sidebar ${toggle ? "active" : "disabled"} `}>
            <span onClick={handleToggle} className="sidebar__close"><AIcon.AiOutlineClose/></span>
            <ul className="sidebar__menu">
                <li className="sidebar__item"><span><AIcon.AiTwotoneHome/></span><Link to="/">Home</Link></li>
                <li className="sidebar__item"><span><AIcon.AiFillAppstore/></span><Link to="/products">Products</Link></li>
                <li className="sidebar__item"><span><AIcon.AiFillCustomerService/></span><Link to="/services">Services</Link></li>
                <li className="sidebar__item"><span><AIcon.AiTwotoneSetting/></span><Link to="/settings">settings</Link></li>
                <li className="sidebar__item"><span><AIcon.AiOutlineUserSwitch/></span><Link to="/users">users</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar
