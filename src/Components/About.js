import React from "react";
//import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/give me image f 1.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      {/*<div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>*/}
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">Empowering Your Career Journey</h1>
        <p className="primary-text">
          Welcome to Job Portal, your trusted partner in finding the perfect job
          and advancing your career. At Job Portal, we understand the challenges
          job seekers face in today's competitive market. That's why we've
          created a platform that offers innovative solutions to make your job
          search more efficient and rewarding.
        </p>
        <p className="primary-text">
          Our mission is to empower job seekers by providing the tools and
          resources they need to succeed in their career journey. We believe
          that everyone deserves the opportunity to find a fulfilling job that
          matches their skills, aspirations, and lifestyle.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
