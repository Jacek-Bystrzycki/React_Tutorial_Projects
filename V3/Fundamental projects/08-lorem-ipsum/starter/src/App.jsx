import { useState } from 'react';
import data from './data.js';

const App = () => {
  const [paraNo, setParaNo] = useState(1);
  const [displayData, setDisplayData] = useState([]);

  const changeHandle = (e) => {
    setParaNo(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = data.filter((_, index) => index < paraNo);
    setDisplayData(newData);
  };

  return (
    <div>
      <form id="form1" onSubmit={handleSubmit}>
        <label>Paragraphs:</label>
        <input
          type="number"
          value={paraNo}
          onChange={changeHandle}
          min="0"
          step="1"
          max={data.length}
        />
        <button type="submit">Generate</button>
      </form>
      <section>
        {displayData.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </section>
    </div>
  );
};
export default App;
