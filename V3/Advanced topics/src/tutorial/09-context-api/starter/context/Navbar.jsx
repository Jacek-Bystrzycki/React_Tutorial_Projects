import { useState, createContext, useContext } from 'react';
import Navlinks from './Navlinks';

export const NavbarContext = createContext();

export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <div>
        <Navlinks />
      </div>
    </NavbarContext.Provider>
  );
};

export default Navbar;
