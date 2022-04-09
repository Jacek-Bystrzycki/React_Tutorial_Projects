import React, {useEffect} from 'react';

const Alert = ({alert, removeAlert}) => {

useEffect(()=>{
  const timeout = setTimeout(()=>{
    removeAlert();
  },2000);
  return () => {
    clearTimeout(timeout);
  };
});

  const {type, msg} = alert;
  return <div className={`alert ${type}`}>
    {msg}
  </div>
};

export default Alert;
