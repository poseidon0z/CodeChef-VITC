import React from 'react';
import BlogNavbar from '../BlogComponents/BlogNavbar';
import Footer from '../../Components/Footer';

const BlogLayout = ({ children }) => {
  return (
    <>
      <BlogNavbar />
      {children}
      <Footer />
    </>
  );
};

export default BlogLayout;
