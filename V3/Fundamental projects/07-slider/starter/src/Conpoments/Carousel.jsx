import { useEffect, useState } from 'react';
import { shortList, list, longList } from '../data.js';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  const [people, setPeople] = useState(longList);
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    const limit = (-people.length + 1) * 100;
    if (activeSlide >= 0) return setActiveSlide(limit);
    else setActiveSlide((prev) => prev + 100);
  };
  const nextSlide = () => {
    const limit = -(people.length - 1) * 100;
    if (activeSlide <= limit) return setActiveSlide(0);
    else setActiveSlide((prev) => prev - 100);
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => {
      clearInterval(sliderId);
    };
  }, [activeSlide]);

  return (
    <section className="slider-container">
      {people.map((person, index) => {
        const { id, image, name, title, quote } = person;
        const slide = index * 100 + activeSlide;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${slide}%)`,
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={() => prevSlide()}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={() => nextSlide()}>
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Carousel;
