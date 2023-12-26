const Container = (props) => {
  return (
    <div>
      <h5>{props.children}</h5>
      {props.userHandler.user ? (
        <>
          <h1>Hello {props.userHandler.user.name} </h1>
          <button type="button" onClick={props.userHandler.logout}>
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
