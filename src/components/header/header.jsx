import React from "react";
import "./style.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Header() {
  const [text] = useTypewriter({
    words: ["Yernar"],
    loop: {},
    typeSpeed: 120,
  });

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is{" "}
            <span style={{ fontWeight: "bold", color: "#5c62ec" }}>{text}</span>
          </strong>
          <span style={{ color: "light" }}>
            <Cursor cursorStyle="|" />
          </span>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://hh.kz/resume/47d11f4aff07a9f6410039ed1f734a32773579?from=share_ios"
          className="btn"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}

export default Header;
