import styled from "styled-components";
import mediaQueries from "../constants/mediaQueries";

export const MainWrapper = styled.div`
  .background-image {
    background-size: contain;
    background-repeat: no-repeat;
    height: 0;
    width: 100vw;
    padding-top: 56.26%;
    margin-top: -1px;
  }

  .video-container {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 56.26%;
  }

  .video-container video {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: contain;
    z-index: 0;
  }

  .video-bottom {
    position: absolute;
    overflow: hidden;
    height: auto;
    padding-bottom: 56.26%;
    bottom: 0.1%;
    left: 42%;
    width: 50%;
  }

  .video-bottom video {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: contain;
    z-index: 0;
  }

  .character-1 {
    position: absolute;
    width: 20%;
    top: 65.3%;
    left: 27.9%;
  }

  .character-2 {
    position: absolute;
    width: 20%;
    top: 65.8%;
    left: 46.1%;
  }

  .character-3 {
    position: absolute;
    width: 20%;
    top: 65%;
    left: 63%;
  }

  .character-4 {
    position: absolute;
    width: 20%;
    top: 65.7%;
    left: 80%;
  }

  /* GRID */

  .team-grid {
    position: absolute;
    bottom: 23.5%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    justify-items: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(6, 12vw);
    grid-template-rows: repeat(2, 12vw);
    column-gap: 3vw;
    row-gap: 3vw;
  }

  .team {
    height: 100%;
    width: 100%;
  }

  .social-grid {
    position: absolute;
    bottom: 0.4%;
    left: 32%;
    justify-items: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(5, 5vw);
    grid-template-rows: 5vw;
    width: 15vw;
    height: 5vw;
    grid-column-gap: 2vw;
  }

  .social {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .socialbox {
    width: 100%;
    height: 100%;
  }

  /* MEDIA QUERIES */

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 576px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1400px) {
  }
`;

export const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 3.5vw;
  background-color: #91fe00;
  .lang-button-box {
    display: flex;
    justify-content: space-between;
    margin: 0 1vw;
  }
  .lang-button {
    cursor: pointer;
    border: none;
    background-color: #91fe00;
    color: #fe48d3;
    font-size: 2.5vw;
    letter-spacing: 0.1vw;
  }

  @media (min-width: ${mediaQueries.medium}) {
    height: 2.5vw;
    .lang-button-box {
      margin: 0 0.5vw;
    }
    .lang-button {
      font-size: 1.5vw;
    }
  }
`;

export const MainBackgroundImageContainer = styled.div`
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: contain;
  background-repeat: no-repeat;
  height: 0;
  width: 100vw;
  padding-top: 56.26%;
  margin-top: -1px;
`;
