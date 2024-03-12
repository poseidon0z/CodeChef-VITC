import React from 'react';
import styled from 'styled-components';

const BlogCarousel = ({ imagearr }) => {
  return (
    <CarouselStyle>
      <div className="gallery-logos">
        <div className="gallery-logos-slide">
          {imagearr.map((data, index) => (
            <div className="gallery-custom-box">
              <div className="gallery-card-body d-flex justify-content-between flex-column">
                <img
                  src={data}
                  alt={'img' + index}
                  style={{ width: '325px', height: '225px' }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="gallery-logos-slide">
          {imagearr.map((data, index) => (
            <div className="gallery-custom-box">
              <div className="gallery-card-body d-flex justify-content-between flex-column">
                <img
                  src={data}
                  alt={'img' + index}
                  style={{ width: '325px', height: '225px' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </CarouselStyle>
  );
};

const CarouselStyle = styled.section`
  .gallery-card-body {
    padding: 0 !important;
  }

  min-height: 0;
  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .gallery-custom-box {
    margin: 0 10px; /* Adjusted margin */
    display: flex;
    flex-direction: column; /* Added flex-direction */
    border-radius: 8px !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 6px 12px 0 rgba(0, 0, 0, 0.12);
  }

  .gallery-logos {
    overflow: hidden !important;
    padding: 10px 0 !important;
    background-color: inherit;
    white-space: nowrap;
  }

  .gallery-logos:hover .gallery-logos-slide {
    animation-play-state: paused !important;
  }

  .gallery-logos-slide {
    display: inline-flex !important; /* Updated display property */
    animation: 60s slide infinite linear !important;
  }

  @media screen and (max-width: 820px) {
    .gallery-logos {
      overflow: hidden !important;
    }

    .gallery-custom-box {
      margin: 0 10px; /* Adjusted margin */
    }
  }
`;

export default BlogCarousel;
