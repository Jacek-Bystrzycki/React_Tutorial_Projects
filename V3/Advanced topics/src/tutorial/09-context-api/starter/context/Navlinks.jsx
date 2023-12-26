import Container from './Container';

const Navlinks = ({ user, logout }) => {
  return (
    <div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <Container>
        <p>Children props</p>
      </Container>
    </div>
  );
};

export default Navlinks;
