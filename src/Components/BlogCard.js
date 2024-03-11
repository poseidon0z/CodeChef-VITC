import React from "react";
import styled from "styled-components";

const BlogCard = ({ blogData }) => {
  return (
    <BlogCardStyle>
      <div class="card" style={{ width: "18rem" }}>
        <img src={blogData.blogImg} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{blogData.blogHeading}</h5>
          <p class="card-text">{blogData.blogText}</p>
          <a href={blogData.blogLink} class="">
            Read More...
          </a>
        </div>
      </div>
    </BlogCardStyle>
  );
};

const BlogCardStyle = styled.section`
  .card {
    box-shadow: 0 10px 20px -2px rgba(0, 0, 0, 0.04),
      0 10px 20px -2px rgba(0, 0, 0, 0.07);
  }
`;

export default BlogCard;
