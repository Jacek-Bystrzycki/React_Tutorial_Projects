import React, { useState, useRef, useEffect } from 'react';
import { useGloblaContext } from './context';

const Submenu = () => {

const {isSubmenuOpen, location, page:{page, links}} = useGloblaContext();
const containerRef = useRef(null);
const [columns, setColumns] = useState("col-2");

useEffect(() => {
  setColumns("col-2");
  containerRef.current.style.left = `${location.center}px`;
  containerRef.current.style.top = `${location.bottom}px`;
  if (links.length === 3) setColumns("col-3");
  if (links.length > 3) setColumns("col-4");
},[location, links]);

  return <aside className={`submenu${isSubmenuOpen?" show":""}`} ref={containerRef}>
    <h4>{page}</h4>
    <div className={`submenu-center ${columns}`}>
      {links.map((link, index) => {
            return <a key={index} href={link.url}>
            {link.icon}
            {link.label}
            </a>
          })}
    </div>
  </aside>
};

export default Submenu;
