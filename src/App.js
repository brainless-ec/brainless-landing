import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import {
  MainWrapper,
  MainBackgroundImageContainer,
} from "./components/styled-components";

//
import headerVideo from "./assets/images/header.mp4";
import bottomVideo from "./assets/images/this-is-brainless.mp4";
import image1_es from "./assets/background-es/1.gif";
import image2_es from "./assets/background-es/2.gif";
import image3_es from "./assets/background-es/3.gif";
import image4_es from "./assets/background-es/4.gif";
import image5_es from "./assets/background-es/5.gif";
import image6_es from "./assets/background-es/6.gif";
import image7_es from "./assets/background-es/7.gif";
import image8_es from "./assets/background-es/8.gif";
import image9_es from "./assets/background-es/9.gif";
import image10_es from "./assets/background-es/10.gif";
import image11_es from "./assets/background-es/11.gif";
import image12_es from "./assets/background-es/12.gif";
import image13_es from "./assets/background-es/13.gif";
import image1_en from "./assets/background-en/1.gif";
import image2_en from "./assets/background-en/2.gif";
import image3_en from "./assets/background-en/3.gif";
import image4_en from "./assets/background-en/4.gif";
import image5_en from "./assets/background-en/5.gif";
import image6_en from "./assets/background-en/6.gif";
import image7_en from "./assets/background-en/7.gif";
import image8_en from "./assets/background-en/8.gif";
import image9_en from "./assets/background-en/9.gif";
import image10_en from "./assets/background-en/10.gif";
import image11_en from "./assets/background-en/11.gif";
import image12_en from "./assets/background-en/12.gif";
import image13_en from "./assets/background-en/13.gif";
//

const App = () => {
  const [language, setLanguage] = useState("es");

  const handleLanguage = () => {
    if (language === "es") {
      setLanguage("en");
    } else {
      setLanguage("es");
    }
  };

  return (
    <MainWrapper>
      <NavBar
        onClick={handleLanguage}
        language={language === "es" ? "ESPAÑOL" : "ENGLISH"}
      />
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src={headerVideo} type="video/mp4" />
        </video>
      </div>
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image1_es : image1_en}
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image2_es : image2_en}
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image3_es : image3_en}
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image4_es : image4_en}
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image5_es : image5_en}
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image6_es : image6_en}
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image7_es : image7_en}
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image8_es : image8_en}
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image9_es : image9_en}
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image10_es : image10_en}
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image11_es : image11_en}
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image12_es : image12_en}
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image13_es : image13_en}
      />

      <div className="background-image character-1"></div>
      <div className="background-image character-2"></div>
      <div className="background-image character-3"></div>
      <div className="background-image character-4"></div>

      {/* <div className="team-grid">
        <div className="background-image team team-1"></div>
        <div className="background-image team team-2"></div>
        <div className="background-image team team-3"></div>
        <div className="background-image team team-4"></div>
        <div className="background-image team team-5"></div>
        <div className="background-image team team-6"></div>
        <div className="background-image team team-7"></div>
        <div className="background-image team team-8"></div>
        <div className="background-image team team-9"></div>
        <div className="background-image team team-10"></div>
      </div> */}

      <div className="video-bottom">
        <video autoPlay muted loop playsInline>
          <source src={bottomVideo} type="video/mp4" />
        </video>
      </div>

      <div className="social-grid">
        <a
          href="https://discord.gg/PJG9HdXN"
          className="social"
          target="_blank"
          rel="noreferrer"
        >
          <div className="background-image socialbox social-discord"></div>
        </a>
        <a
          href="https://twitter.com/endparadisenft"
          className="social"
          target="_blank"
          rel="noreferrer"
        >
          <div className="background-image socialbox social-twitter"></div>
        </a>
        <a
          href="https://www.tiktok.com/@trexendofparadise"
          className="social"
          target="_blank"
          rel="noreferrer"
        >
          <div className="background-image socialbox social-tiktok"></div>
        </a>
        <a
          href="https://www.instagram.com/trex_endofparadise/"
          className="social"
          target="_blank"
          rel="noreferrer"
        >
          <div className="background-image socialbox social-instagram"></div>
        </a>
        <a
          href="https://www.brainlessclothing.com"
          className="social"
          target="_blank"
          rel="noreferrer"
        >
          <div className="background-image socialbox social-web"></div>
        </a>
      </div>
    </MainWrapper>
  );
};

export default App;
