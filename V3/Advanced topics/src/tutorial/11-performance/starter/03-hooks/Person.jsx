const Person = ({ name, id, remove }) => {
  console.log('render');
  return (
    <div>
      <h4>{name}</h4>
      <button type="button" onClick={() => remove(id)}>
        remove
      </button>
    </div>
  );
};
export default Person;
