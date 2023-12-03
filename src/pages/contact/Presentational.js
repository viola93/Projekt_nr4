import React from "react";

import contact from "../../assets/contact.jpeg";
import "./Styles.scss";
const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contact})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="Post">
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="Enter your full name..."
            type="text"
          />

          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter your email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message"
            name="message"
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
