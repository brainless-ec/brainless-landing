import "./App.css";
import headerVideo from "./assets/images/header.mp4";
import bottomVideo from "./assets/images/this-is-brainless.mp4";

function App() {
  return (
    <div className="wrapper" data-testid="app">
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src={headerVideo} type="video/mp4" />
        </video>
      </div>
      <div className="background-image no01"></div>
      <div className="background-image no02"></div>
      <div className="background-image no03"></div>
      <div className="background-image no04"></div>
      <div className="background-image no05"></div>
      <div className="background-image no06"></div>
      <div className="background-image no07"></div>
      <div className="background-image no08"></div>
      <div className="background-image no09"></div>
      <div className="background-image no10"></div>
      <div className="background-image no11"></div>
      <div className="background-image no12"></div>
      <div className="background-image no13"></div>

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
        >
          <div className="background-image socialbox social-discord"></div>
        </a>
        <a
          href="https://twitter.com/endparadisenft"
          className="social"
          target="_blank"
        >
          <div className="background-image socialbox social-twitter"></div>
        </a>
        <a
          href="https://www.tiktok.com/@trexendofparadise"
          className="social"
          target="_blank"
        >
          <div className="background-image socialbox social-tiktok"></div>
        </a>
        <a
          href="https://www.instagram.com/trex_endofparadise/"
          className="social"
          target="_blank"
        >
          <div className="background-image socialbox social-instagram"></div>
        </a>
        <a
          href="https://www.brainlessclothing.com"
          className="social"
          target="_blank"
        >
          <div className="background-image socialbox social-web"></div>
        </a>
      </div>
    </div>
  );
}

export default App;
