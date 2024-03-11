import React from "react";
import "../Styles/Blogs.css";
import BlogCard from "../Components/BlogCard";
import Expo24 from "../Asstes/Blogs/expo-24.jpg";
import TShirt from "../Asstes/Blogs/tShirt.jpg";
import PreVibrance24 from "../Asstes/Blogs/preVibrance-24.jpg";

const Blogs = () => {
  const blogsArr = [
    {
      blogImg: Expo24,
      blogHeading: "Expo 2024",
      blogText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nobis",
      blogLink: "/",
    },
    {
      blogImg: TShirt,
      blogHeading: "Club T-Shirt",
      blogText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nobis",
      blogLink: "/",
    },
    {
      blogImg: PreVibrance24,
      blogHeading: "Pre-Vibrance 2024",
      blogText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nobis",
      blogLink: "/",
    },
  ];
  return (
    <div className="blogs-header">
      <h1 className="text-center">Blogs</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nobis
        perferendis vitae ullam magni cumque dolor dolores cupiditate officiis
        asperiores?
      </p>
      <div className="blog-cards">
        {blogsArr.map((ele, index) => (
          <BlogCard key={index} blogData={ele} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
