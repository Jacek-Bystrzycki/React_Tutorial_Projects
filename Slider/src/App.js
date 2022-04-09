import React, { useState, useEffect } from 'react';
import Title from "./title";
import Buttons from "./buttons";
import People from "./people.js";
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const changePerson = (operation) => {
    const maxIndex = people.length - 1;
    if (operation === "next"){
      if (index >= maxIndex){
        setIndex(0)
      } else {
        setIndex((prevIndex) => prevIndex + 1)
      }
    } else if (operation === "prev"){
      if (index <= 0) {
        setIndex(maxIndex)
      } else {
        setIndex((prevIndex) => prevIndex - 1)
      }
    };
  };

  const setClass = (personIndex) => {
    const maxIndex = people.length - 1;
    if (personIndex === index) {
      return "activeSlide";
    } else if ((personIndex === index + 1) || (personIndex === 0 && index === maxIndex)) {
      return "nextSlide";
    } else if ((personIndex === index - 1) || (personIndex === maxIndex && index === 0)) {
      return "lastSlide";
    } else return null;
  };

  const autoPlay = () => {
    const interval = setInterval(() => {
      changePerson("next");
    },5000);
    return () => {clearInterval(interval)}
  };

  useEffect(autoPlay,[index]);

  return <section className='section'>
    <Title/>
    <div className="section-center">
      <People people = {people} setClass = {setClass}/>
      <Buttons changeSlide={changePerson}/>
    </div>
  </section>

};
export default App;
