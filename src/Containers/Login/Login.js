import React from "react";

const Login = props => {
  console.log(props);

  return (
    <div>
      <h2>
        <br />
        <br />
        Login Page
      </h2>
      {props.status ? (
        <div>
          <h1>
            {" "}
            <br />
            <br />
            You are in{" "}
          </h1>
          <button onClick={props.handleLogin}>Log Out</button>
        </div>
      ) : (
        <div>
          <h1>
            {" "}
            <br />
            <br />
            Places login in your account.{" "}
          </h1>
          <button onClick={props.handleLogin}>Log in</button>
        </div>
      )}
    </div>
  );
};

export default Login;
