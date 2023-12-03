import "./Styles.scss";

import React from "react";
import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${about})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <h2> CUISINES </h2>
        <p> (Italian,Pizza, Mediterranean, European) </p>
        <h2>SPECIAL DIETS</h2>
        <p> ( Vegetarian Friendly, Vegan Options, Gluten Free Options)</p>
        <h2> FEATURES</h2>
        <p>
          {" "}
          ( Takeout, Reservations, Outdoor Seating, Seating, Parking Available,
          Television, Highchairs Available, Wheelchair Accessible, Serves
          Alcohol, Free Wifi, Table Service.)
        </p>
      </div>
    </div>
  );
};
export default About;
