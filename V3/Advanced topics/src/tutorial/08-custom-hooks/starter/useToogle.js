import { useState } from 'react';

const useToogle = (defaultState) => {
  const [show, setShow] = useState(defaultState);
  const toggle = () => {
    setShow(!show);
  };
  return [show, toggle];
};

export default useToogle;
