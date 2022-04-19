import styled from "styled-components";
import mediaQueries from "../constants/mediaQueries";

export const MainWrapper = styled.div`
  .background-wrapper {
    margin-top: -0.6%;
    height: auto;
  }

  .background-image {
    background-size: contain;
    background-repeat: no-repeat;
    height: 0;
    padding-top: 56.26%;
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
    margin-top: -0.5%;
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
    top: 65.5%;
    left: 27.9%;
  }

  .character-2 {
    position: absolute;
    width: 20%;
    top: 66%;
    left: 46.1%;
  }

  .character-3 {
    position: absolute;
    width: 20%;
    top: 65.2%;
    left: 63%;
  }

  .character-4 {
    position: absolute;
    width: 20%;
    top: 65.8%;
    left: 80%;
  }

  /* GRID */

  .team-grid {
    position: absolute;
    bottom: 8%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    justify-items: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(5, 12vw);
    grid-template-rows: repeat(2, 12vw);
    column-gap: 3vw;
    row-gap: 3vw;
  }

  .team {
    position: relative;
    height: 100%;
    width: 100%;
    cursor: pointer;
    &:hover {
      &:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        margin-top: -56.26%;
        background: rgba(254, 72, 211, 0.5);
      }
    }
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
    width: 14vw;
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

  .modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 100;
  }

  .modal-main {
    position: fixed;
    color: white;
    width: 75vw;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;

    .modal-body {
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        margin-right: 10%;
      }
    }
  }

  .display-block {
    display: block;
  }

  .display-none {
    display: none;
  }
`;

export const NavBarWrapper = styled.div`
  padding: 0.5vw;
  display: flex;
  width: 100vw;
  height: 3.5vw;
  background-color: #91fe00;

  .brainless-icons-box {
    display: flex;
    flex: 1;

    a {
      flex: 1;
      display: flex;
      justify-content: space-around;

      img {
        width: auto;
        height: 2.5vw;
      }
    }
  }

  .language-box {
    display: flex;
    flex: 1;
    margin: 0 2vw;
  }

  .nav-items-box {
    display: flex;
    flex: 8;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0;

    .nav-button {
      height: 100%;
      width: 100%;
      background: none;
      border: none;
    }
  }

  @media (min-width: ${mediaQueries.medium}) {
  }
`;

export const MainBackgroundImageContainer = styled.div`
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: contain;
  background-repeat: no-repeat;
  height: 0;
  width: 100%;
  padding-top: 56.26%;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "-0.15%")};
`;

export const NavItemImage = styled.li`
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 8vw;
  height: 1.5vw;
`;

export const BrainlessButton = styled.button`
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 50%;
  height: 100%;
  background-color: #91fe00;
  border: none;
  cursor: pointer;
  margin: 0.1vw;
`;

export const TeamImageContainer = styled.div`
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: contain;
  background-repeat: no-repeat;
  height: 0;
  width: 100vw;
  padding-top: 56.26%;
  position: relative;
  height: 100%;
  width: 100%;
  cursor: pointer;
  &:hover {
    &:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      margin-top: -56.26%;
      background: rgba(254, 72, 211, 0.5);
    }
  }
`;

export const ModalImageContainer = styled.div`
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: contain;
  background-repeat: no-repeat;
  height: 0;
  padding-top: 56.26%;
  cursor: pointer;
  width: 50%;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const DiscordLink = styled.a`
  font-size: 1.2vw;
  color: black;
  position: absolute;
  top: ${(props) => (props.top ? props.top : 0)};
  left: ${(props) => (props.left ? props.left : 0)};
  z-index: 300;
  font-style: italic;
  &:hover {
    color: rgba(254, 72, 211, 1);
  }
`;
