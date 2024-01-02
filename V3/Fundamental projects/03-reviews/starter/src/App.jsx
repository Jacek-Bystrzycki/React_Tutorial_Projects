import { useState } from 'react';
import { FaBeer } from 'react-icons/fa';
import data from './data.js';

const App = () => {
  const [index, setIndex] = useState(0);

  const showNext = () => {
    let next = index + 1;
    if (next >= data.length) next = 0;
    setIndex(next);
  };

  const showPrev = () => {
    let prev = index - 1;
    if (prev < 0) prev = data.length - 1;
    setIndex(prev);
  };

  const showRandom = () => {
    const rnd = Math.floor(Math.random() * data.length);
    if (rnd === index) {
      showNext();
      return;
    }
    setIndex(rnd);
  };

  return (
    <div>
      <h2>Reviews Starter</h2>;
      <FaBeer className="beer" />
      <div>
        <h3>Name: {data[index].name}</h3>
        <h4>Job: {data[index].job}</h4>
        <img width={200} src={data[index].image} />
        <p>Review: {data[index].text}</p>
      </div>
      <button onClick={() => showPrev()}>Prev</button>
      <button onClick={() => showRandom()}>Random</button>
      <button onClick={() => showNext()}>Next</button>
    </div>
  );
};
export default App;
