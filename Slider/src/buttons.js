import React from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Buttons = ({changeSlide}) => {
return <React.Fragment> 
<button className="prev" onClick={()=>{changeSlide("prev")}}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={()=>{changeSlide("next")}}>
        <FiChevronRight />
      </button>
    </React.Fragment> 
};

export default Buttons;