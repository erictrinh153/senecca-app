import axios from "axios";
import { useRef } from "react";
import "./SignUp.css";

export default function Register() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();

  const handleSignup = async (e) => {
    e.preventDefault();
    const newUser = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        name: nameRef.current.value
    }
    try{
    await axios.post("auth/register", newUser);
    }catch(error){
    console.log("Error:", error);
    }
    // login({ email, password }, dispatch);

  };
  return (
    <div className="Signup">
      <div className="form">
     <form onSubmit={handleSignup}>
       <div className="input-container">
         <label>Email </label>
         <input type="text" name="uname" required ref={emailRef}/>
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="password" required ref={passwordRef}/>
       </div>
       <div className="input-container">
         <label>Name </label>
         <input type="text" name="name" required ref={nameRef}/>
       </div>
       <p className="interactiveText"><a href="/">Back to Home</a></p>
       <div className="input-container">
       </div>
       <div className="button-container">
         <input type="submit" value="Log In"/>
       </div>
     </form>
   </div>
    </div>
  );
}