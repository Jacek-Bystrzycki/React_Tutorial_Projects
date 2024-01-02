import { v4 as uuidv4 } from 'uuid';

const JobDuties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => {
        return <p key={uuidv4()}>{duty}</p>;
      })}
    </div>
  );
};
export default JobDuties;
