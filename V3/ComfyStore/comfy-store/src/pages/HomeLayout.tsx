import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Navbaar } from '../components';

const HomeLayout = (): ReactElement => {
  return (
    <>
      <Header />
      <Navbaar />
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;
