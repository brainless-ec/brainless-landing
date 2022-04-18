import { useState, useRef } from "react";
import "./App.css";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import {
  MainWrapper,
  MainBackgroundImageContainer,
  TeamImageContainer,
  DiscordLink,
} from "./components/styled-components";
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
import team_fabricio from "./assets/images/team-FABRICIO-1.gif";
import team_albanu from "./assets/images/team-ALBANU-1.gif";
import team_dario from "./assets/images/team-DARIO-1.gif";
import team_sisa from "./assets/images/team-SISA-1.gif";
import team_carlitos from "./assets/images/team-CARLITOS-1.gif";
import team_alvaro from "./assets/images/team-ALVARO-1.gif";
import team_jordy from "./assets/images/team-JORDY-1.gif";
import team_teo from "./assets/images/team-TEO-1.gif";
import team_tamy from "./assets/images/team-TAMY-1.gif";
import team_oso from "./assets/images/team-OSO-1.gif";

import fabricio from "./assets/images/FABRICIO.gif";
import albanu from "./assets/images/ALBANU.gif";
import dario from "./assets/images/DARIO.gif";
import sisa from "./assets/images/SISA.gif";
import carlitos from "./assets/images/CARLITOS.gif";
import alvaro from "./assets/images/ALVARO.gif";
import jordy from "./assets/images/JORDY.gif";
import teo from "./assets/images/TEO.gif";
import tamy from "./assets/images/TAMY.gif";
import oso from "./assets/images/OSO.gif";

const App = () => {
  const [show, setShow] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState(null);
  const [modalUrl, setModalUrl] = useState(null);
  const [language, setLanguage] = useState("es");
  const handleLanguage = () => {
    if (language === "es") {
      setLanguage("en");
    } else {
      setLanguage("es");
    }
  };

  const showModal = (image, title, url) => {
    setModalImage(image);
    setModalTitle(title);
    setModalUrl(url);
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const storyRef = useRef(null);
  const storyScroll = () => storyRef.current.scrollIntoView();
  const investorRef = useRef(null);
  const investorScroll = () => investorRef.current.scrollIntoView();
  const stagesRef = useRef(null);
  const stagesScroll = () => stagesRef.current.scrollIntoView();
  const benefitsRef = useRef(null);
  const benefitScroll = () => benefitsRef.current.scrollIntoView();
  const mintRef = useRef(null);
  const mintScroll = () => mintRef.current.scrollIntoView();
  const featRef = useRef(null);
  const featScroll = () => featRef.current.scrollIntoView();
  const rewardsRef = useRef(null);
  const rewardsScroll = () => rewardsRef.current.scrollIntoView();
  const teamRef = useRef(null);
  const teamScroll = () => teamRef.current.scrollIntoView();

  return (
    <MainWrapper>
      <NavBar
        onClick={handleLanguage}
        language={language}
        storyScroll={storyScroll}
        investorScroll={investorScroll}
        stagesScroll={stagesScroll}
        benefitScroll={benefitScroll}
        mintScroll={mintScroll}
        featScroll={featScroll}
        rewardsScroll={rewardsScroll}
        teamScroll={teamScroll}
      />
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src={headerVideo} type="video/mp4" />
        </video>
      </div>
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image1_es : image1_en}
        marginTop="-1%"
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image2_es : image2_en}
        ref={storyRef}
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image3_es : image3_en}
        ref={investorRef}
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image4_es : image4_en}
        ref={stagesRef}
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image5_es : image5_en}
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image6_es : image6_en}
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image7_es : image7_en}
        ref={benefitsRef}
        marginTop="-0.1%"
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image8_es : image8_en}
        ref={mintRef}
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image9_es : image9_en}
        ref={featRef}
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image10_es : image10_en}
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image11_es : image11_en}
        ref={rewardsRef}
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image12_es : image12_en}
        ref={teamRef}
      />
      <MainBackgroundImageContainer
        backgroundImage={language === "es" ? image13_es : image13_en}
      />

      <div className="background-image character-1"></div>
      <div className="background-image character-2"></div>
      <div className="background-image character-3"></div>
      <div className="background-image character-4"></div>

      <div className="team-grid">
        <TeamImageContainer
          backgroundImage={team_fabricio}
          onClick={() =>
            showModal(
              fabricio,
              "Fabricio",
              "https://www.instagram.com/fabriciobrainless/"
            )
          }
        />
        <TeamImageContainer
          backgroundImage={team_albanu}
          onClick={() =>
            showModal(
              albanu,
              "Albanu",
              "https://www.instagram.com/juanbanu_gc/"
            )
          }
        />
        <TeamImageContainer
          backgroundImage={team_dario}
          onClick={() =>
            showModal(dario, "Albanu", "https://www.instagram.com/juanbanu_gc/")
          }
        />
        <TeamImageContainer
          backgroundImage={team_sisa}
          onClick={() =>
            showModal(sisa, "Sisa", "https://www.instagram.com/paul_sisalima/")
          }
        />
        <TeamImageContainer
          backgroundImage={team_carlitos}
          onClick={() =>
            showModal(
              carlitos,
              "Carlitos",
              "https://www.instagram.com/carlitosvi92/"
            )
          }
        />
        <TeamImageContainer
          backgroundImage={team_alvaro}
          onClick={() =>
            showModal(alvaro, "Alvaro", "https://www.instagram.com/alvapazz/")
          }
        />
        <TeamImageContainer
          backgroundImage={team_jordy}
          onClick={() =>
            showModal(jordy, "Jordy", "https://www.instagram.com/jordycues/")
          }
        />
        <TeamImageContainer
          backgroundImage={team_teo}
          onClick={() =>
            showModal(
              teo,
              "Teo",
              "https://www.instagram.com/sebastiantorresll/"
            )
          }
        />
        <TeamImageContainer
          backgroundImage={team_tamy}
          onClick={() =>
            showModal(tamy, "Tamy", "https://www.instagram.com/ceo.tamy/")
          }
        />
        <TeamImageContainer
          backgroundImage={team_oso}
          onClick={() =>
            showModal(oso, "Oso", "hhttps://www.instagram.com/osoojara420/")
          }
        />
      </div>
      <Modal
        modalImage={modalImage}
        modalTitle={modalTitle}
        modalUrl={modalUrl}
        handleClose={hideModal}
        show={show}
      />

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

      <DiscordLink
        className="discord-link"
        href="https://discord.gg/PJG9HdXN"
        target="_blank"
        rel="noreferrer"
        top={"56.22%"}
        left={"39%"}
      >
        https://discord.gg/PJG9HdXN
      </DiscordLink>

      <DiscordLink
        className="discord-link"
        href="https://discord.gg/PJG9HdXN"
        target="_blank"
        rel="noreferrer"
        top={"41.6%"}
        left={"29%"}
      >
        https://discord.gg/PJG9HdXN
      </DiscordLink>
    </MainWrapper>
  );
};

export default App;
