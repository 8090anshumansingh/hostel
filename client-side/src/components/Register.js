import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
 import axios from "../axios.js";
 import './Register.css';


function Register() {

const history = useHistory();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    studentId:"",
    
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitHandler = async () => {
    console.log(user);
    try {
      const res = await axios.post("/user/register", user);
      console.log(res.data);
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        studentId:"",
       
      });
      history.push("/login");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <React.Fragment>
     

      <div className="register" >
        
          <div className="inner">
            <h3>Register</h3>

            <div >
              <label>Student Id</label>
              <input
                name="studentId"
                onChange={inputChangeHandler}
                type="text"
                placeholder="Student Id"
                value={user.studentId}
              />
            </div>

            <div >
              <label>First name</label>
              <input
                name="firstName"
                onChange={inputChangeHandler}
                type="text"
              
                placeholder="First name"
                value={user.firstName}
              />
            </div>

            <div >
              <label>Last name</label>
              <input
                name="lastName"
                onChange={inputChangeHandler}
                type="text"
                
                placeholder="Last name"
                value={user.lastName}
              />
            </div>

            <div >
              <label>Email</label>
              <input
                name="email"
                onChange={inputChangeHandler}
                type="email"
                
                placeholder="Enter email"
                value={user.email}
              />
            </div>

            <div >
              <label>Password</label>
              <input
                name="password"
                onChange={inputChangeHandler}
                type="password"
                
                placeholder="Enter password"
                value={user.password}
              />
            </div>
            <div >
              <button
                onClick={submitHandler}
              >
                Register
              </button>
            </div>
          
          </div>
        </div>
      
    </React.Fragment>
  );
}

export default Register;


  