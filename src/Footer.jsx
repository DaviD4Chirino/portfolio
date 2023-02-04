import React from "react";
import "./css/footer.css";
export function Footer() {
  return (
    <footer className="no-margin no-padding">
      <div className="padding">
        <p>Social Media</p>
        <div id="logos">
          <a
            href="https://github.com/DaviD4Chirino"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="mailto:genarodavid@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-google"></i>
          </a>
          <a
            href="https://twitter.com/developer_logos"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
