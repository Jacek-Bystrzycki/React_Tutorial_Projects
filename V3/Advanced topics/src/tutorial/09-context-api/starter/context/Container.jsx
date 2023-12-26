import { useAppContext } from './Navbar';

const Container = (props) => {
  const value = useAppContext();
  return (
    <div>
      <h5>{props.children}</h5>
      {value.user ? (
        <>
          <h1>Hello {value.user.name} </h1>
          <button type="button" onClick={value.logout}>
            Logout user
          </button>
        </>
      ) : (
        <>
          <h3>Please login</h3>
        </>
      )}
    </div>
  );
};

export default Container;
