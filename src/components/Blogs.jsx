import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

const Blogs = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
          Awareness
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          "Health awareness emphasizes the significance of balanced nutrition, exercise, <br />rest, and stress management.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          <BlogCard img={img1} headlines="Unraveling the Mysteries of Sleep" description1="" />
          <BlogCard img={img2} headlines="The Heart-Healthy Diet"  description1 =""/>
          <BlogCard
            img={img3}
            headlines="Health Awareness Campaigns" description1 =""/>
          <BlogCard img={img4} headlines="Navigating Mental Health"  description1 =""/>
          <BlogCard img={img5} headlines="The Importance of Regular Exercise" description1 ="" />
          <BlogCard img={img6} headlines="Disease Specific Information"  description1 =""/>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
