import { useState } from 'react';
import Navlinks from './Navlinks';

const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' });
  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      <Navlinks user={user} logout={logout} />
    </div>
  );
};

export default Navbar;
