import '../../App.css';
import './Room.css';
import React from 'react';
import Cardroom from '../Cardroom/Cardroom';
import img1 from '../../images/cardroom-1.jpg';
import img2 from '../../images/cardroom-2.jpg';
import img3 from '../../images/cardroom-3.jpg';
import img4 from '../../images/cardroom-4.jpg';

const Room = () =>{
 return (
   <>
   <div className = "room-container">
      <div className="room-title">OTHER FACULITIES WITH ROOMS</div>
      <div className ="cardroom-align-top">
      <Cardroom
       img = {img1}

       place = "Playing ground"
       details = "Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor."
       />
       <Cardroom
        img = {img2}

        place = "Canteen"
        details = "Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor."
        />
        </div>
        <div className ="cardroom-align-bottom">
        <Cardroom
         img = {img3}

         place = "GYM"
         details = "Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor."
         />
         <Cardroom
          img = {img4}

          place = "LIBRARY"
          details = "Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor."
          />
          </div>

   </div>
   </>
 );
};
export default Room;
