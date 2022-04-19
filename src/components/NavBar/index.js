/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import {
  NavBarWrapper,
  NavIconImage,
  NavItemImage,
  BrainlessButton,
} from "../styled-components";

import storyImageEs from "../../assets/header/st-es.svg";
import storyImageEn from "../../assets/header/st-en.svg";
import inverstorImageEs from "../../assets/header/inv-es.svg";
import inverstorImageEn from "../../assets/header/inv-en.svg";
import stagesImageEs from "../../assets/header/et-es.svg";
import stagesImageEn from "../../assets/header/et-en.svg";
import benefitsImageEs from "../../assets/header/ben-es.svg";
import benefitsImageEn from "../../assets/header/ben-en.svg";
import mintImageEn from "../../assets/header/mint.svg";
import featImageEs from "../../assets/header/char-es.svg";
import featImageEn from "../../assets/header/char-en.svg";
import rewardsImageEs from "../../assets/header/rew-es.svg";
import rewardsImageEn from "../../assets/header/rew-en.svg";
import teamImageEs from "../../assets/header/te-es.svg";
import teamImageEn from "../../assets/header/te-en.svg";
import brainlessMainImageEn from "../../assets/header/brainless_main.png";
import endMainImageEn from "../../assets/header/end_main.png";
import imageEs from "../../assets/header/esp.svg";
import imageEn from "../../assets/header/eng.svg";
import langImage from "../../assets/header/lang.svg";

const NavBar = ({
  onClick,
  language,
  storyScroll,
  investorScroll,
  stagesScroll,
  benefitScroll,
  mintScroll,
  featScroll,
  rewardsScroll,
  teamScroll,
}) => {
  console.log(language);
  return (
    <NavBarWrapper>
      <div className="brainless-icons-box">
        <a
          className="brain-nav"
          href="https://www.brainlessclothing.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={brainlessMainImageEn} alt="brainless skull" />
        </a>
        <a
          className="brain-nav"
          href="https://www.brainlessclothing.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={endMainImageEn} alt="end of paradise logo" />
        </a>
      </div>
      <div className="language-box">
        <BrainlessButton
          type="button"
          onClick={onClick}
          backgroundImage={langImage}
        ></BrainlessButton>
        <BrainlessButton
          type="button"
          onClick={onClick}
          backgroundImage={language === "es" ? imageEn : imageEs}
        ></BrainlessButton>
      </div>
      <ul className="nav-items-box">
        <NavItemImage
          backgroundImage={language === "es" ? storyImageEs : storyImageEn}
        >
          <button className="nav-button" onClick={storyScroll}></button>
        </NavItemImage>
        <NavItemImage
          backgroundImage={
            language === "es" ? inverstorImageEs : inverstorImageEn
          }
        >
          <button className="nav-button" onClick={investorScroll}></button>
        </NavItemImage>
        <NavItemImage
          backgroundImage={language === "es" ? stagesImageEs : stagesImageEn}
        >
          <button className="nav-button" onClick={stagesScroll}></button>
        </NavItemImage>
        <NavItemImage
          backgroundImage={
            language === "es" ? benefitsImageEs : benefitsImageEn
          }
        >
          <button className="nav-button" onClick={benefitScroll}></button>
        </NavItemImage>
        <NavItemImage backgroundImage={mintImageEn}>
          <button className="nav-button" onClick={mintScroll}></button>
        </NavItemImage>
        <NavItemImage
          backgroundImage={language === "es" ? featImageEs : featImageEn}
        >
          <button className="nav-button" onClick={featScroll}></button>
        </NavItemImage>
        <NavItemImage
          backgroundImage={language === "es" ? rewardsImageEs : rewardsImageEn}
        >
          <button className="nav-button" onClick={rewardsScroll}></button>
        </NavItemImage>
        <NavItemImage
          backgroundImage={language === "es" ? teamImageEs : teamImageEn}
        >
          <button className="nav-button" onClick={teamScroll}></button>
        </NavItemImage>
      </ul>
    </NavBarWrapper>
  );
};

export default NavBar;
