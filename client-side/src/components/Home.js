import React, { useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";


function Home() {
   
    const history = useHistory();
   
  
    const loginHandler = () => {
      history.push("/login");
    };
    const registerHandler = () => {
      history.push("/register");
    };
  
    return (
      <div className="home">
            <button   onClick={loginHandler}>
              Login
            </button>
            <button   onClick={registerHandler}>
              Register
            </button>
      </div>
    );
  }
  
  export default Home;