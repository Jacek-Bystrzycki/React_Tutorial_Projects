const Dashboard = ({user}) => {

  const {name, email} = user;

  return (
    <section className='section'>
      <h4>Dashboard</h4>
      <h3>Hello {name}!</h3>
      <h3>Your email is as follows: {email}</h3>
    </section>
  );
};
export default Dashboard;
