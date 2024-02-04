import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { UserRoutes } from '../types';

const Header = (): ReactElement => {
  return (
    <header className="bg-neutral py-2 text-neutral-content grid sm:grid-cols-2 justify-center">
      <div className="hidden pl-6 sm:flex justify-start">logo</div>
      <div className="align-element flex justify-center sm:justify-end">
        {/* USER */}
        {/* LINKS */}
        <div className="flex gap-x-6 justify-center items-center">
          <Link to={UserRoutes.login} className="link link-hover text-xs sm:text-sm">
            Sign in / Guest
          </Link>
          <Link to={UserRoutes.register} className="link link-hover text-xs sm:text-sm">
            Create account
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
