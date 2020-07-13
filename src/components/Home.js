import React, { useState, useEffect } from "react";
// import Column from "./Column";
// import database from "./firebaseConfig";
import masthead from "../images/personal site.svg"

export default function portfolio(props) {

  return (
    <div className="home">
      
      <div>
      <img src={masthead}></img>      </div>
       <div>
         <h2 className="tezy"> I'm Bahaeddin Dabbagh <br/> I am a <span className="changingContent"></span><br/> </h2>
         <h3>I'm a seasoned salesman and a digital marketing expert with a passion for prgramming.<br/>
           I'm always working on developing myself and learning something new. <br/>
           {/* I am also very passionate about training on technichal and soft skills */}
           {/* In fact, there's a really big chance that by the time you looked at this website I learned something new and I will add it soon to this website */}
         </h3>
         </div>
   
    </div>
  );
}
