import React from "react";

import Textinput from "./components/Textinput";
import Button from "./components/button";

const Home = () => {
  return (
    <div className="New">
      <div className="title">
        <h1>Login</h1>
      </div>
      <div className="Home">
        <Textinput name="email" placeholder="please enter your email"/>
        <Textinput name="password" placeholder="please enter your password"/>
      </div>
      <div className="Button">
        <Button value="Login in" />
        <Button value="Sign Up" />
      </div>  
   </div>
  );
};

export default Home;