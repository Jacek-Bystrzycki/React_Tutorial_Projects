import { useState, useCallback, useMemo } from 'react';
import { data } from '../../../../data';
import List from './List';
import slowFunction from './slowFunction';
// import Button from './button';

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const value = useMemo(() => slowFunction(), []);
  // const value = useMemo(slowFunction, []);
  console.log(value);

  const remove = useCallback(
    (id) => {
      const newPeople = people.filter((person) => {
        return person.id !== id;
      });
      setPeople(newPeople);
    },
    [people]
  );

  return (
    <section>
      {/* <Button count={count} setCount={setCount} /> */}
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} remove={remove} />
    </section>
  );
};
export default LowerState;
