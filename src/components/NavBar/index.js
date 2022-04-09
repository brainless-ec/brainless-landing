import React from "react";
import { NavBarWrapper } from "../styled-components";

const NavBar = ({ onClick, language }) => {
  return (
    <NavBarWrapper>
      <div className="lang-button-box">
        <button className="lang-button" type="button" onClick={onClick}>
          LANG: {language}
        </button>
      </div>
    </NavBarWrapper>
  );
};

export default NavBar;
