import '../../App.css';
import React from 'react';
import Card from '../Card/Card';
import './Display.css';
import img1 from '../../images/card-img-1.jpg';
import img2 from '../../images/card-img-2.jpg';
import img3 from '../../images/card-img-3.jpg';
const Display = () =>{
 return (
   <>
   <div className ="display-container">
     <div className="main-heading">
      <h1>We have the best service</h1>
     </div>
     <div className="travel-text-main">
     <p className="travel-text">We provide the best services to make your hostel days memorable.</p>
     <p className="travel-text"> So just pack your bags and visit your dream hostel.</p>
     </div>
     <div className="card-item">
     <Card
      img = {img1}
      title = 'Clean rooms'
      price = '1450'
      />
      <Card
       img = {img2}
       title = 'Quick service'
       price = '1750'
       />
       <Card
        img = {img3}
        title = 'Best meal'
        price = '1250'
        />
     </div>

   </div>




   </>
 );
};
export default Display;
