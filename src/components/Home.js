import React from "react";
import masthead from "../images/personal site.svg"

export default function portfolio(props) {

  return (
    <div className="home">
      
      <div>
      <img src={masthead} alt="masthead" width="70%"></img>      </div>
       <div className="homeAllText">
         <h2 className="homeMainText"> I'm Bahaeddin Dabbagh <br/> I am a <span className="changingContent"></span><br/> </h2>
         <h3>I'm a seasoned salesman and a digital marketing expert with a passion for programming.<br/>
           I'm always working on developing myself and learning something new. <br/>
           {/* I am also very happy when I give training on technichal or soft skills */}
         </h3>
         </div>
   
    </div>
  );
}
