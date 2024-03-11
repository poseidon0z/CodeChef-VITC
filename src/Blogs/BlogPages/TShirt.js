import '../BlogStyles/Blog.css';
import PreVibrance24 from '../../Asstes/Blogs/preVibrance-24.jpg';
import Expo24 from '../../Asstes/Blogs/expo-24.jpg';
import BlogCard from '../../Components/BlogCard';
import BlogCarousel from '../BlogComponents/BlogCarousel';

import image1 from '../../Asstes/Blogs/TShirt/IMG_5312.jpg';
import image2 from '../../Asstes/Blogs/TShirt/itsCooking.png';
import image3 from '../../Asstes/Blogs/TShirt/siddhartTiwari.jpeg';
import image4 from '../../Asstes/Blogs/TShirt/tShirt.jpg';

const TShirt = () => {
  const imagearr = [image1, image2, image3, image4];
  const blogsArr = [
    {
      blogImg: Expo24,
      blogHeading: 'Expo 2024',
      blogText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nobis',
      blogLink: '/expo24',
    },
    {
      blogImg: PreVibrance24,
      blogHeading: 'Pre-Vibrance 2024',
      blogText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nobis',
      blogLink: '/previbrance24',
    },
  ];
  return (
    <div className="blogpage">
      <h1>Club T-Shirt</h1>
      <div className="blogcarousel">
        <BlogCarousel imagearr={imagearr} />
      </div>
      <div className="blog-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          voluptatum sunt ipsum sit modi optio possimus tempore eaque amet
          veritatis accusamus sequi voluptas quaerat deserunt, harum accusantium
          incidunt provident recusandae officiis? Doloremque rerum molestiae
          facere, odit magni non, mollitia recusandae facilis voluptate eum
          consectetur? Vel debitis quidem vero commodi!
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores,
          doloribus ipsam quae aliquam facere labore magnam vero eaque omnis vel
          laudantium minus corrupti aperiam fuga quam optio et facilis eius
          nulla maxime illo ea, dicta pariatur quibusdam. Laboriosam similique
          aspernatur architecto, et quod dolore rem delectus nemo fugit
          consequatur sapiente maxime, iste commodi corporis, ex omnis explicabo
          quas necessitatibus quibusdam ipsa. Aut veritatis odit, nostrum fuga
          sequi maiores! Nesciunt magnam vero iusto. Neque inventore qui vel
          distinctio nemo! Harum, aliquam.
        </p>
      </div>
      <div className="more-section">
        <h2>More like this:</h2>
        <div className="other-blogs">
          {blogsArr.map((ele, index) => (
            <BlogCard key={index} blogData={ele} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TShirt;
