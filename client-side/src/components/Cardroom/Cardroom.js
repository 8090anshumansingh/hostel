import '../../App.css';
import './Cardroom.css';
import React from 'react';
const Cardroom = (props) =>{
  const mystyle = {
    backgroundImage: `url(${props.img})`,
    backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  boxShadow:  "inset 20px 200px 200px 1000px rgba(0,0,0, 0.4)",
      height:"300px",
      width:"500px"
    };
 return (
   <>
    <div className="cardroom-container">
     <div  style={mystyle}>
      <div className="cardroom-place">
        <div className="place-title">{props.place}</div>
      </div>
    </div>
    <div className="cardroom-details">
    <div className="price-section">


    </div>
    <div className="cardroom-rating">
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star-half-alt"></i>
    </div>
    <div className="cardroom-info"> {props.details} </div>
    <div className="cardroom-icons">
    <i className="fas fa-shopping-cart icon"></i>
     <i className="fas fa-bed icon"></i>
    <i class="fas fa-shuttle-van icon"></i>
    <i class="fas fa-luggage-cart icon"></i>
    </div>
    <div className="cardroom-button">
      <button className="button-styles"> Read more
      </button>
    </div>
     </div>
   </div>
   </>
 );
};
export default Cardroom;
