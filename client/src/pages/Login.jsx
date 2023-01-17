import { useContext, useState } from "react";
import { login } from "../context/apiCalls";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);


  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
    navigate('/');
  };
  return (
    <div className="Login">
      <div className="form">
     <form onSubmit={handleLogin}>
       <div className="input-container">
         <label>Email </label>
         <input type="text" name="email" required onChange={(e)=>setEmail(e.target.value)}/>
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="password" required onChange={(e)=>setPassword(e.target.value)}/>
       <p>New to Application? <a href="/register">Sign Up</a></p>
       </div>
       <div className="button-container">
         <input type="submit" value="Log In"/>
       </div>
     </form>
   </div>
    </div>
  );
}