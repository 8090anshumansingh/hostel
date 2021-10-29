import React from "react";
import axios from "../axios.js";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {

    const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
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
      try {
       
      
      } catch (e) {
        console.log(e);
      }
    };
  
    
  
    return (
      <React.Fragment>
       
        <div className="login" >
          
            <div className="inner">
              <h3>Log in</h3>
  
              <div >
                <label>Email</label>
                <input
               
                  value={user.email}
                  onChange={inputChangeHandler}
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
              </div>
  
              <div >
                <label>Password</label>
                <input
                 
                  value={user.password}
                  onChange={inputChangeHandler}
                  name="password"
                  type="password"
                  
                  placeholder="Enter password"
                />
              </div>
  
             
              
              <div>
                <button
                 
                  onClick={submitHandler}
                >
                  Log in
                </button>
              </div>
            
            </div>
          </div>
        
      </React.Fragment>
    );
  }
  
  export default Login;