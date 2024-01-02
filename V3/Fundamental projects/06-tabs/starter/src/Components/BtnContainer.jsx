const BtnContainer = ({ jobs, setActiveItem, activeItem }) => {
  return (
    <div>
      {jobs.map((job, index) => {
        let color;
        if (index === activeItem) color = 'red';
        else color = 'black';
        return (
          <button
            style={(color = { color })}
            key={index}
            onClick={() => setActiveItem(index)}
          >
            {job.title}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
