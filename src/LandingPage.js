import React from "react";
import { useNavigate } from "react-router-dom";
import gift from "../src/Pics/gift.jpg"
import "../src/LandingPage.css"
function LandingPage(){
  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate("/Home");
  };
  return(
    <div id="giftbox">
      <div><img id="i" src={gift} alt="Gift" onClick={handleImageClick} style={{ cursor: "pointer" }} /></div>
      <center><p>"Click on this gift to unwrap the celebration of your beautiful love story!" 🎁</p></center>
    </div>
  )
}
export default LandingPage;
