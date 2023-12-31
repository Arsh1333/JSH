import React from "react";
//import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/give me image f 0.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        {/*<div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>*/}
        <div className="home-text-section">
          <h1 className="primary-heading">
            Discover Your Dream Job and Unleash Your Potential with our
            Innovative Tools
          </h1>
          <p className="primary-text">
            Unlock Endless Career Opportunities with Our website's unique
            feature
          </p>
          <button className="secondary-button">
            Match Your skills Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
