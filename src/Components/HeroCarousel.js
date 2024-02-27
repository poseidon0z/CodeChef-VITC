import React from "react";
import styled from "styled-components";
import { RiDoubleQuotesL } from "react-icons/ri";
import defaultPic from "../Asstes/profileDefault.png";
import vishalKrYadavPic from "../Asstes/vishalKrYadav.jpg";

const HeroCarousel = () => {
  const testimonialData = [
    {
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe, error iste, impedit veniam modi neque obcaecati, laborum ullam aperiam delectus autem eveniet. Ullam deserunt, ab nesciunt quis doloremque eaque?",
      fname: "Vishal Kumar Yadav",
      position: "Design Lead (2023-24)",
      profileImg: vishalKrYadavPic,
    },
    {
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe, error iste, impedit veniam modi neque obcaecati, laborum ullam aperiam delectus autem eveniet. Ullam deserunt, ab nesciunt quis doloremque eaque?",
      fname: "Sidhhart Tiwari",
      position: "President (2023-24)",
    },
  ];

  return (
    <CarouselStyle>
      <div className="logos">
        <div className="logos-slide">
          {testimonialData?.map((message, index) => (
            <div className="custom-box" key={index}>
              <div className="card-body d-flex justify-content-between flex-column">
                <div className="card-text">
                  <RiDoubleQuotesL className="doubleQuotes" />
                  <p
                    style={{
                      fontSize: "14px !important",
                      color: "#546e7a !important",
                    }}
                  >
                    {message.msg}
                  </p>
                </div>
                <div>
                  <img
                    src={message.profileImg ? message.profileImg : defaultPic}
                    className="rounded-circle mb-2"
                    style={{
                      height: "50px",
                      width: "50px",
                      objectFit: "cover",
                    }}
                    alt={index}
                  />
                  <p
                    className="card-subtitle"
                    style={{
                      fontWeight: "600",
                      fontSize: "14px !important",
                      color: "#546e7a !important",
                    }}
                  >
                    {message.fname}
                  </p>
                  <p className="designation" style={{ fontWeight: "200" }}>
                    {message.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="logos-slide">
          {testimonialData?.map((message, index) => (
            <div className="custom-box" key={index}>
              <div className="card-body d-flex justify-content-between flex-column">
                <div className="card-text">
                  <RiDoubleQuotesL className="doubleQuotes" />
                  <p
                    style={{
                      fontSize: "14px !important",
                      color: "#546e7a !important",
                    }}
                  >
                    {message.msg}
                  </p>
                </div>
                <div>
                  <img
                    src={message.profileImg ? message.profileImg : defaultPic}
                    className="rounded-circle mb-2"
                    style={{
                      height: "50px",
                      width: "50px",
                      objectFit: "cover",
                    }}
                    alt={index}
                  />
                  <p
                    className="card-subtitle"
                    style={{
                      fontWeight: "600",
                      fontSize: "14px !important",
                      color: "#546e7a !important",
                    }}
                  >
                    {message.fname}
                  </p>
                  <p style={{ fontWeight: "200" }}>{message.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CarouselStyle>
  );
};

const CarouselStyle = styled.section`
  min-height: 0;
  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .custom-box {
    font-size: 14px !important;
    color: #546e7a !important;
    line-height: 160% !important;
    width: 250px !important;
    height: 400px !important;
    margin: 0 20px; /* Adjusted margin */
    display: flex;
    flex-direction: column; /* Added flex-direction */
    justify-content: space-between; /* Added space-between */
    white-space: normal;
    background: #fff;
    border-radius: 8px !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 6px 12px 0 rgba(0, 0, 0, 0.12);
  }

  .doubleQuotes {
    font-size: 20px;
  }

  .logos {
    overflow: hidden !important;
    padding: 20px 0 !important;
    background-color: inherit;
    white-space: nowrap;
  }

  .logos:hover .logos-slide {
    animation-play-state: paused;
  }

  .logos-slide {
    display: inline-flex !important; /* Updated display property */
    animation: 15s slide infinite linear;
  }

  @media screen and (max-width: 820px) {
    .logos {
      overflow: hidden !important;
    }

    .custom-box {
      font-size: 12px !important;
      width: 250px !important;
      height: 325px !important;
      margin: 0 10px; /* Adjusted margin */
    }

    .rounded-circle {
      height: 42px !important;
      width: 42px !important;
    }

    .card-subtitle {
      font-size: 12px !important;
    }

    .designation {
      font-size: 12px !important;
    }
  }
`;

export default HeroCarousel;
