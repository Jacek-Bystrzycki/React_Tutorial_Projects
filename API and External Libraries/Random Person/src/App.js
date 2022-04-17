import React, { useState, useEffect, useCallback } from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock
} from 'react-icons/fa';

const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';


function App() {

const [loading, setLoading] = useState(true);
const [person, setPerson] = useState(null);
const [title, setTitle] = useState("name");
const [value, setValue] = useState("random person");
const [tempLabel, setTempLabel] = useState("");

const handleValue = (ev) => {
  if (ev.currentTarget.classList.contains("icon")){
    if (ev.currentTarget.dataset.label !== tempLabel){
      displayData(ev.currentTarget.dataset.label);
    };
  };
};

const displayData = useCallback((dataType) => {
  setTempLabel(dataType);
  const tempValue = person[dataType];
  setTitle(dataType);
  setValue(tempValue);
  const btns = document.querySelectorAll(".icon");
  btns.forEach(btn => {
    btn.classList.remove("active");
  });
  const btn = document.querySelector(`[data-label=${dataType}]`);
  btn.classList.add("active");
},[person]);

const fetchPerson = () => {
  setLoading(true);
  fetch(url).then(resp => resp.json()).then(person => {
    setPerson(parseData(person));
    setLoading(false);
  });
};

const parseData = (data) => {
  if (!data) return null;
  const {cell:phone, email, login:{password}, location:{street:{...address}}, dob:{age}, name:{first, last}, picture:{large:image}} = data.results[0];
  const name = `${first} ${last}`;
  const street = `${address.name} ${address.number}`;
  return {phone, email, password, street, age, name, image};
};

useEffect(fetchPerson,[]);

useEffect(()=>{
  if (person) {
    displayData("name");
  };
},[person, displayData]);

  return <main>
    <div className="block bgc-black"></div>
    <div className="block">
      <div className="container">
        <img src={(person && person.image) || defaultImage} alt="random user" className='user-img' />
        <p className="user-title">My {title} is</p>
        <p className="user-value">{value}</p>
        <div className="values-list">
          <button className="icon active" data-label="name" onMouseOver={handleValue}><FaUser/></button>
          <button className="icon" data-label="email" onMouseOver={handleValue}><FaEnvelopeOpen/></button>
          <button className="icon" data-label="age" onMouseOver={handleValue}><FaCalendarTimes/></button>
          <button className="icon" data-label="street" onMouseOver={handleValue}><FaMap/></button>
          <button className="icon" data-label="phone" onMouseOver={handleValue}><FaPhone/></button>
          <button className="icon" data-label="password" onMouseOver={handleValue}><FaLock/></button>
        </div>
        <button className="btn" type='button' onClick={fetchPerson}>{loading?"loading...":"random user"}</button>
      </div>
    </div>
  </main>
};

export default App;
