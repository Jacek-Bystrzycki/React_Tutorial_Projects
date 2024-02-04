import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../utils/links';

export const NavLinks = (): ReactElement => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink to={url}>{text}</NavLink>
          </li>
        );
      })}
    </>
  );
};
