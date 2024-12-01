import React from "react";
import jaan from "../src/Pics/jaan.jpg";
import "../src/Love.css";
import musice from "../src/Music/loving.mp3"
function Love(){
  return(
    <div id="abc">
      <audio src={musice} autoPlay loop>
        Your browser does not support the audio element.
      </audio>
      <center>
      <h1>Best Parents Ever 🩷 </h1>
      <center><div><img id="iv" src={jaan} alt="Gift"/></div></center>
      <h4>Thank you so much mumma papa for giving me such a beautiful life. Love you so much</h4>
      <div id="lo">With love, Saloni ❤ </div>

      <div className="hearts">
        {[...Array(20)].map((_, i) => (
          <div className="heart" key={i}></div>
        ))}
      </div>

    
       <div className="snow">
         {[...Array(100)].map((_, i) => (
           <div className="flake" key={i}></div>
         ))}
       </div>
      <div className="sparkles">
        {[...Array(50)].map((_, i) => (
          <div className="sparkle" key={i}></div>
        ))}
      </div>

      </center>
    </div>
  )
}
export default Love
