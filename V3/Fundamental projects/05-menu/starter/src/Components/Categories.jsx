const Categories = ({ data, filter }) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <button
            onClick={() => {
              filter(item);
            }}
            key={item}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
