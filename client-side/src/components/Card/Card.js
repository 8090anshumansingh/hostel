import '../../App.css';
import React from 'react';
import './Card.css'
const Card = (props) =>{
  const mystyle = {
    backgroundImage: `url(${props.img})`,
    backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  boxShadow:  "inset 20px 200px 200px 1000px rgba(0,0,0, 0.4)",
      height:"400px",
      width:"300px"
    };
 return (
   <>
   <div className="card-container">
   <div style={mystyle} >
   <div className="date-info">
    <div className ="date-style"> For your comfort</div>
    </div>
    <div className="title-text">
    <h1>{props.title} </h1>
    </div>
     <div className="price-text">From $ {props.price}
     </div>
     <div className="buttons">
     <button className="button-style">See More ..</button>
     </div>
  </div>
  </div>

   </>
 );
};
export default Card;
