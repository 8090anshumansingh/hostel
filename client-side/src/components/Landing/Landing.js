import '../../App.css';

import Home from '../Home/Home';
import Display from '../Display/Display';
import Room from '../Room/Room';
import Client from '../Client/Client';

import Footer from '../Footer/Footer.js';

import React from 'react';
const Landing = () =>{
 return (
   <>
   <Home  />
   <Display />
   <Room />
   <Client/>

   <Footer />
   </>
 );
};
export default Landing;
