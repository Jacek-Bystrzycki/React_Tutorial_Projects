const Person = ({ person }) => {
  return (
    <div>
      <img src={person.image} width={200} />
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
    </div>
  );
};
export default Person;
