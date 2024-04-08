import React from "react";
import "./style.css";
import vk from "./../../img/icons/vk.svg";
import twitter from "./../../img/icons/twitter.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import instagram from "./../../img/icons/instagram.svg";
import gitHub from "./../../img/icons/gitHub.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            {/* <li className="social__item">
              <a href="#!">
                <img src={vk} alt="Link" />
              </a>
            </li> */}
            <li className="social__item">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/d.yernar/"
              >
                <img src={instagram} alt="Link" />
              </a>
            </li>
            {/* <li className="social__item">
              <a href="#!">
                <img src={twitter} alt="Link" />
              </a>
            </li> */}
            <li className="social__item">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/YernarDyussenbekov"
              >
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li target="_blank" rel="noreferrer" className="social__item">
              <a href="https://www.linkedin.com/">
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>
              Made with ❤️ at{" "}
              <a
                target="_blank"
                rel="noreferrer"
                style={{ color: "red" }}
                href="https://www.nfactorial.school/"
              >
                nFactorial
              </a>{" "}
              in 2024.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
