import React from "react";
import "../src/Quotes.css";
import onee from "../src/Pics/onee.jpg";
import two from "../src/Pics/two.avif";
import three from "../src/Pics/three.jpg";
import { useNavigate } from "react-router-dom";
import shadi from "../src/Pics/shadi.jpg";
import musicc from "../src/Music/musical.mp3"
function Quotes(){
  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate("/Love");
  };
  return(
    <div id="three">
      <audio src={musicc} autoPlay loop>
        Your browser does not support the audio element.
      </audio>
      <center><h3>"Celebrating 29 Years of Eternal Love and Joy – Happy Anniversary, Mumma & Papa! ❤️✨</h3></center>
      <center><p>"आपके बारे में क्या लिखूं, मम्मा-पापा? आपने तो खुद मुझे लिखा है।</p>
              <p>आप ही मेरे दिल की धड़कन और मेरी प्यारी सी दुनिया हो। ❤️"</p>
              <center><div><img id="iii" src={onee} alt="Gift" onClick={handleImageClick} style={{ cursor: "pointer" }} /></div></center>
              <p>"Click on these beautiful anniversary image to sprinkle more love and joy into your celebration! 💖✨"</p>
              <br></br>
              <p>आपका प्यार मेरे जीवन की सबसे बड़ी ताकत है।</p>
              <p>आपकी हंसी मेरी सबसे बड़ी खुशी है।</p>
              <p>और आपका साथ मेरी सबसे बड़ी दौलत।</p>
              <p>"मां की ममता और पिता का साया,</p>
              <p>जिनके बिना अधूरा हर सपना हमारा।"</p>
              <center><div><img id="iii" src={two} alt="Gift" onClick={handleImageClick} style={{ cursor: "pointer" }} /></div></center>
              <p>"Tap on these heartfelt anniversary image to make your celebration even more magical and full of love! 💕🎉"</p>
              <br></br>
              <p>"To the perfect pair who’ve set the gold standard for love and togetherness—Happy Anniversary, Mumma and Papa! Your journey inspires us every day." ❤️</p>
              <p>"You two are living proof that soulmates exist. Your love story is the most beautiful chapter in our family’s book. Happy Anniversary!" ✨</p>
              <p>"29 years of love, laughter, and memories. May your bond continue to blossom like a rose in full bloom. Happy Anniversary to the best parents ever!" 🌹</p>
              <p>"Mumma and Papa, your love is like a fine wine—it gets better, richer, and more precious with every passing year. Cheers to your beautiful journey together!" 🥂</p>
              <p>"You’ve shown us all that marriage isn’t just about finding the perfect partner; it’s about building the perfect life together. Happy Anniversary!" 💕</p>
              <center><div><img id="iii" src={three} alt="Gift" onClick={handleImageClick} style={{ cursor: "pointer" }} /></div></center>
              <p>"Click on these beautiful anniversary image to fill your day with love, joy, and cherished memories! ❤️✨"</p>
              <br></br>
              <p>"Happy Anniversary to the most incredible parents! Your love for each other is a true blessing, and we’re so lucky to call you ours." 🏡</p>
              <p>"Your love is the glue that holds our family together. Wishing you another year filled with happiness, love, and endless memories!" 🌟</p>
              <p>"To the couple who taught me the meaning of true love and commitment—Happy Anniversary, Mumma and Papa! Your journey together is a beautiful masterpiece, and I’m so blessed to be a part of your story. Love you endlessly! ❤️🌹"</p>
              <p>"You both are my greatest example of love, patience, and partnership. Wishing you the happiest anniversary filled with all the joy you deserve!" 🌈</p>
              <p>"Mumma and Papa, your love story is my favorite. It’s one of trust, respect, and unconditional love. Happy Anniversary to my role models!" 💖</p>
              <center><div><img id="iii" src={shadi} alt="Gift" onClick={handleImageClick} style={{ cursor: "pointer" }} /></div></center>
              <p>"Tap on these heartfelt anniversary image to sprinkle more love and magic into your celebration! 💖🎉"</p>
              <br></br>
              <p>आपका रिश्ता सच्चे प्यार का अद्वितीय उदाहरण है, और मैं बहुत आभारी हूं कि मैंने इसे अपनी पूरी जिंदगी में देखा है। मैं आप दोनों को बहुत प्यार करती हूं। एक और साल की यादों, सफलताओं, हंसी और सबसे बढ़कर, प्यार के लिए बधाई। आपके एक-दूसरे के प्रति समर्पण से मैं बहुत प्रेरित हूं, और मुझे आपके बच्चे होने पर बहुत गर्व है।</p>
              <div>With love, Saloni ❤️ </div>

              
              
              </center>
    </div>
  )
}
export default Quotes