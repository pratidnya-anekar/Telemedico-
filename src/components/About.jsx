import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
        Welcome to <b>TeleMedico!</b> We're a dedicated team of healthcare professionals committed to providing high-quality TeleMedico services. Our mission is to bridge the gap between patients and healthcare providers through modern technology and innovative solutions.
        </p>
        <p className="text-justify lg:text-start">
        At TeleMedico, we prioritize convenience, safety, and satisfaction. Our platform allows patients to connect with experienced doctors, schedule virtual appointments, and access medical consultations from anywhere.
        </p>
        <p className="text-justify lg:text-start">
        Our team consists of skilled professionals dedicated to delivering personalized care and medical guidance. We aim to enhance healthcare accessibility, improve patient outcomes, and promote overall well-being.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
