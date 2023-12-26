import Item from './Person';
import { memo } from 'react';

const List = ({ people, remove }) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} remove={remove} />;
      })}
    </div>
  );
};
export default memo(List);
