import React from "react";
import "../src/Home.css"
import { useNavigate } from "react-router-dom";
import Slider from "react-slick"; 
import love1 from "../src/Pics/lovee.jpg";
import love2 from "../src/Pics/love2.jpg";
import love3 from "../src/Pics/love3.jpg";
import love4 from "../src/Pics/love4.jpg";
import music from "../src/Music/Song.mp3";
import rose from "../src/Pics/rose.webp";
function Home(){
  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate("/Quotes");
  };
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 1000,
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 2000, 
  };
  return(
    <div id="two">
      <audio src={music} autoPlay loop>
        Your browser does not support the audio element.
      </audio>
      <center><h1>Happy Anniversary Mumma and Papa!</h1></center>
      <center><h2>Celebrating 29 Years of Love and Togetherness ❤️</h2></center>
      <div id="slider-container">
        <center>
        <Slider {...settings}>
          <div><img id="ii" src={love1} alt="Love 1" /></div>
          <div><img id="ii" src={love2} alt="Love 2" /></div>
          <div><img id="ii" src={love3} alt="Love 3" /></div>
          <div><img id="ii" src={love4} alt="Love 4"/></div>
        </Slider>
        </center>
        <div><p>"Happy Anniversary to my dearest Mumma and Papa !</p>
        <p>From the bottom of my heart, I want to celebrate the love and bond that you both have nurtured over the years. You are not just my parents but my greatest inspiration, showing me the true meaning of love, partnership, and togetherness.
        Watching you both laugh together, support one another, and conquer life’s ups and downs hand in hand fills my heart with joy and pride.
        I’m so lucky to have been raised in a home filled with so much love and warmth. Your journey of 29 years (and counting!) is nothing short of magical, and it’s a testament to the power of love and patience.
        Here’s to many more years of laughter, adventures, and cherished memories.
        I love you both more than words can ever express. ❤️</p>
      <p>With all my love, Your Daughter"</p></div>
      </div>
      <center><div><img id="iii" src={rose} alt="Gift" onClick={handleImageClick} style={{ cursor: "pointer" }} /></div></center>
      <center><p>"Click on this rose to sprinkle love and joy on your beautiful journey together!" 🌹</p></center>
      <br></br>
      <center><div>With love, Saloni ❤️ </div></center>
    </div>
  )
}
export default Home