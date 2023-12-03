import React from "react";
import "./Styles.scss";

const MenuItem = ({ nameprops, imageprops, priceprops }) => {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${imageprops})` }}></div>
      <h1>{nameprops}</h1>

      <p>{priceprops} Euro</p>
    </div>
  );
};
export default MenuItem;
