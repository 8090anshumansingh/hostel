import '../../App.css';
import React from 'react';
import './Clientcard.css';
const Clientcard = (props) =>{
  const mystyle = {
    backgroundImage: `url(${props.img})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
     backgroundSize: "cover",
    boxShadow:  "inset 20px 200px 200px 1000px rgba(0,0,0, 0.1)",
      height:"400px",
      width:"300px"
    };
 return (
   <>
    <div className="client-card">
    <div style={mystyle}>
    <div className="client">
    <div className="client-info">
      <div className="client-name">{props.name} </div>
      <div className ="client-date">{props.date} </div>
    </div>
    </div>
    <div className="client-detail">
     <div className="client-quote"> "{props.quote}"</div>
     <div className="client-description"> {props.detail}</div>
     </div>
     </div>
     </div>
   </>
 );
};
export default Clientcard;
