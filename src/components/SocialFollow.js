import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a href="http://youtube.com" className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="http://facebook.com" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="http://instagram.com" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="http://twitter.com" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    </div>
  );
}
