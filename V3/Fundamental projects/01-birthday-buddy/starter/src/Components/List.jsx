import Person from './Person.jsx';

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} person={person} />;
      })}
    </div>
  );
};
export default List;
