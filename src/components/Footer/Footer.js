import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
const today = new Date();
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-link-items">
        <h2>Address</h2>
      </div>
   
      <div className="containerI">
        <p>
          <iframe name="Map"
          title="Location"
            className="responsive-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27836.800415336744!2d70.43788870589428!3d29.29406923603454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393a788e77139701%3A0xdd29ec9b0ced9290!2sFazilpur%2C%20Rajanpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1605096267055!5m2!1sen!2s"
            width="400"
            height="100"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </p>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
       

          <small className="website-rights">
            Waqar Ahmad © {today.getFullYear()}
          </small>

          <div className="social-icons">
            <Link
              className="social-icon-link"
              to={"//facebook.com/WaqarBinAmeen"}
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to={
                "/"
              }
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-icon-link"
              to={"//twitter.com/_Waqar_Ch"}
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to={"//linkedin.com/in/waqarch/"}
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
