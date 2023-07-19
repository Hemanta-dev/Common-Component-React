import React,{useState} from "react";



import Textinput from "./components/Textinput";
import Button from "./components/button";

const Home = () => {
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const onChangeHandleEmail =(data)=>{
      setEmail(data);
  }
  const onChangeHandlePassword =(data)=>{
     setPassword(data);

  }
  const handleLogin = () => {
    console.log("Email",email);
    console.log("Password",password);
  };
  return (
    <div className="New">
      <div className="title">
        <h1>Login</h1>
      </div>
      <div className="Home">
        <Textinput name="email"   placeholder="please enter your email" onChange={onChangeHandleEmail}/>
        <Textinput name="password"  placeholder="please enter your password" onChange={onChangeHandlePassword}/>
      </div>
      <div className="Button">
        <Button value="Login in" onClick={handleLogin} />
        <Button value="Sign Up" />
      </div>  
   </div>
  );
};

export default Home;