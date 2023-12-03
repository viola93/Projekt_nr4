import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

import "./Styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/saporita_pizzeria/">
          <InstagramIcon />
        </a>

        <a
          href="
         https://www.facebook.com/p/Pizzeria-Saporita-100063620139650/"
        >
          <FacebookIcon />
        </a>
        <a href="mailto:cucina@hotmail.com?body=Cucina Italiana">
          <EmailIcon />
        </a>
      </div>
      <p> &copy; 2000 cucinaitalina.com </p>
    </div>
  );
};
export default Footer;
