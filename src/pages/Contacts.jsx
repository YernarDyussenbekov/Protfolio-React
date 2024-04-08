import React from "react";

function Contacts() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Kazakhstan, Astana</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p>
              <a href="tel:+77754622498">+7 (775) 462-24-98</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:ernar9828@gmail.com">ernar9828@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}
export default Contacts;
