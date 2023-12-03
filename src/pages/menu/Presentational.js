import React from "react";

import "./Styles.scss";
import MenuItem from "../../components/menuitem/Presentational";
import MenuList from "../../helpers/menulist/Presentational";

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((item, index) => (
          <MenuItem
            key={index}
            nameprops={item.name}
            imageprops={item.image}
            priceprops={item.price}
          />
        ))}
      </div>
    </div>
  );
};
export default Menu;
