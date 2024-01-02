import JobDuties from './JobDuties';

const JobInfo = ({ job }) => {
  const { title, company, dates, duties } = job;
  return (
    <div>
      <h3>Title: {title}</h3>
      <h4>Company: {company}</h4>
      <h5>Dates: {dates}</h5>
      <JobDuties duties={duties} />
    </div>
  );
};
export default JobInfo;
