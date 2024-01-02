import { useState } from 'react';
import data from './data.js';
import List from './Components/List.jsx';

const App = () => {
  const [people, setPeople] = useState(data);

  const resetPeople = () => {
    setPeople([]);
  };

  return (
    <>
      <h2>{people.length} birthdays today.</h2>
      <List people={people} />
      <button onClick={() => resetPeople()}>clear birthdays</button>
    </>
  );
};
export default App;
