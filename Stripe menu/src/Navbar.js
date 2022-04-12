import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import sublinks from "./data";
import { useGloblaContext } from './context';

const Navbar = () => {

const {openSidebar, openSubmenu, closeSubmenu} = useGloblaContext();

const displaySubmenu = (ev) => {
  const page = ev.target.textContent;
  const {bottom:tempBottom, left, right} = ev.target.getBoundingClientRect();
  const center = (left + right) / 2;
  const bottom = tempBottom - 3;

  openSubmenu(page, {center, bottom});
  
};

const closeMenu = (ev) => {
  if (!ev.target.classList.contains("link-btn")){
    closeSubmenu();
  };
};

  return <nav className='nav' onMouseOver={closeMenu}>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="stripe" className="nav-logo"/>
        <button className="btn toggle-btn" onClick={openSidebar}>
          <FaBars/>
        </button>
      </div>
    
    <ul className="nav-links">
      {sublinks.map((link, index) =>{
        return <li key={index}>
          <button className="link-btn" onMouseOver={displaySubmenu}>
            {link.page}
          </button>
        </li>
      })}
    </ul>
    <button className="btn signin-btn">Sign in</button>
    </div>
    </nav>;
};

export default Navbar;
