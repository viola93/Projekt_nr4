import React from "react";
import { Link } from "react-router-dom";
import cucina from "../../assets/cucina.jpg";
import "./Styles.scss";
const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${cucina})` }}>
      <div className="headerContainer">
        <h1>Cucina Italiana</h1>
        <p> Fit any taste!</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
