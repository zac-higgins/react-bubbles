import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState({ username: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value })
  };

  const login = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", user)
      .then(res => {
        console.log("Axios Response", res)
        const { data } = res;
        sessionStorage.setItem("token", data.payload);
        setIsLoggedIn({ ...isLoggedIn, isLoggedIn: true });
        props.history.push('/')
      });
  };

  return (
    <div>
      <form onSubmit={login}>
        <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username" />
        <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
        <button htmlType="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
