import React, { useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from '../Button/Button';
import './Home.css';
import '../../App.css'


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
      <div className='hero-container'>

   <h1>MANAGE YOUR HOSTEL BETTER!!</h1>
  <p>What are you waiting for?</p>
  <div className='hero-btns'>
    <Button
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
      onClick={registerHandler}
    >
 Register
    </Button>
    <Button
      className='btns'
      buttonStyle='btn--primary'
      buttonSize='btn--large'
    onClick={loginHandler}
    >
      Login <i className='far fa-play-circle' />
    </Button>
  </div>

 </div>

          
      </div>
    );
  }

  export default Home;
