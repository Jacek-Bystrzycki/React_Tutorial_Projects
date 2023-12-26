const Person = ({ name, id, removePerson }) => {
  console.log('render');
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};
export default Person;
