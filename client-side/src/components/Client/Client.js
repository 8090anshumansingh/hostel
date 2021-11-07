import '../../App.css';
import React from 'react';
import Clientcard from '../Clientcard/Clientcard';
import img1 from '../../images/client-1.jpg';
import img2 from '../../images/client-2.jpg';
import img3 from '../../images/client-3.jpg';
import './Client.css';
const Client = () =>{
 return (
   <>
    <div className="client-container">
      <h1 className="client-title">WHAT OUR STUDENT SAY ABOUT US</h1>
      <div className="client-card-container">
      <Clientcard
       img={img1}
       name='CARLA SMITH'
       date = 'Batch 2017'
       quote ='Best hostel ever'
       detail = 'Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.'
       />
       <Clientcard
        img={img2}
        name='CHRISTIAN'
        date = 'Batch 2014'
        quote ='Quite Relaxig experience'
        detail = 'Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.'
        />
        <Clientcard
         img={img3}
         name='NOAH FELIX'
         date = 'Batch 2019'
         quote ='Enjoyed a lot'
         detail = 'Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.'
         />
      </div>
    </div>

   </>
 );
};
export default Client;
