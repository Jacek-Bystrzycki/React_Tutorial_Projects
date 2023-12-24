import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from "./context";

const Home = () => {
  const {setSidebar, setModal} = useGlobalContext();
  return <main>
    <button className='sidebar-toggle' onClick={setSidebar}>
      <FaBars/>
    </button>
    <button className='btn' onClick={setModal}>
      show modal
    </button>
  </main>
};

export default Home;
