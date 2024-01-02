import { useState } from 'react';

const Tour = ({ tour, rmv }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      <h2>{tour.name}</h2>
      <img src={tour.image} width={200} />

      {readMore ? (
        <div>
          <h4>Tour description:</h4>
          <p>{tour.info}</p>
          <h5>Price: {tour.price}</h5>
          <button onClick={() => setReadMore(false)}>hide</button>
        </div>
      ) : (
        <button onClick={() => setReadMore(true)}>show more</button>
      )}

      <button onClick={() => rmv(tour.id)}>remove tour</button>
    </div>
  );
};
export default Tour;
