import Tour from './Tour';

const Tours = ({ tours, rmv }) => {
  return (
    <div>
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} rmv={rmv} />;
      })}
    </div>
  );
};
export default Tours;
