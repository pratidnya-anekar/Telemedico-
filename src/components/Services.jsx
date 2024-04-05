import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";


const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          
            "TeleMedico provides convenient virtual healthcare services for personalized care."
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard icon={icon1} title="Comprehensive Doctor Directory" description="  We offer a comprehensive directory of healthcare professionals, allowing patients to search for doctors based on specialty, location, availability, and patient reviews.
" />
        <ServicesCard icon={icon2} title="Appointment scheduling" description=" With teleMedico, you can schedule appointments with top-rated healthcare providers from the comfort of your own home. No more long commutes or waiting room delays."/>
        <ServicesCard icon={icon3} title="Telemedicine Shopping cart" description=" Streamline your telehealth experience with our convenient telemedicine shopping cart feature. Easily select, and purchase essential telemedicine equipment and accessories directly from our platform." />
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard icon={icon1} title="Awareness of Unknown Diseases"  description= "Our platform is dedicated to raising awareness about lesser-known diseases and health conditions that often go unnoticed.Stay informed, stay proactive, and join us in our mission to bring attention to diseases that are often overlooked."/>
        <ServicesCard icon={icon2} title="Medical Literature Search" description= "Empowering doctors with comprehensive access to the latest medical research, our platform provides a robust medical literature search tool. Easily navigate through a vast database of research papers, clinical trials, and scholarly articles relevant to your specialty or area of interest" />
        <ServicesCard icon={icon3} title="Medicine Remainder Alarm" description= "Never miss a dose again with our personalized medicine reminder service. Our user-friendly platform allows you to input your medication schedule, set reminders, and receive timely notifications directly to your preferred device."/>
      </div>
    </div>
  );
};

export default Services;
