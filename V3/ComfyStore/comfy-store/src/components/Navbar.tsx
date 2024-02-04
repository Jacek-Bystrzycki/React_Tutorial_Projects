import { ReactElement, useEffect, useState } from 'react';
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { UserRoutes } from '../types';
import { NavLinks } from '../components/NavLinks';
import Themes from '../types/themes';
import { useAppSelector } from '../store';

const getThemeFromLocal = (): Themes => {
  return localStorage.getItem('theme') === Themes.winter ? Themes.winter : Themes.dracula;
};

const Navbar = (): ReactElement => {
  const [theme, setTheme] = useState<Themes>(getThemeFromLocal());
  const { totalCount } = useAppSelector((store) => store.cart.totals);

  const toggleTheme = (): void => {
    const newTheme: Themes = theme === Themes.dracula ? Themes.winter : Themes.dracula;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start capitalize">
          <NavLink to={UserRoutes.root} className="hidden lg:flex items-center btn btn-primary text-3xl">
            C
          </NavLink>
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu menu-sm shadow mt-3 p-2 z-[1] bg-base-200 rounded-box w-52">
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex capitalize">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={toggleTheme} checked={theme === Themes.dracula ? false : true} />
            <BsMoonFill className="swap-on" />
            <BsSunFill className="swap-off" />
          </label>
          <NavLink to={UserRoutes.cart} className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="indicator-item badge badge-primary">{totalCount}</span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
