import React from "react";
import "../Styles/Home.css";
import HeroCarousel from "../Components/HeroCarousel";

const Home = () => {
  return (
    <div className="main">
      <div className="row g-0 main-row">
        <div className="col-sm-6 col-md-6 text-col">
          <h1 className="main-heading">
            Start your club
            <br /> journey with us!
          </h1>
          <p className="main-para px-1">
            Join us to craft your college journey: hone skills, forge
            friendships and create cherished memories.
          </p>
          <div className="main-input d-flex justify-content-start align-items-center">
            <input
              className="input-box"
              type="email"
              placeholder="Enter email"
            />
            <button className="btn primary-button">Join Us Today</button>
          </div>
          <div className="connect-with-us my-3">
            <div className="connect-msg">connect with us on</div>
            <div className="connection-links">
              <div className="single-box">
                <a
                  href="/"
                  className="connection-link"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <button>
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/color/48/linkedin.png"
                      alt="linkedin"
                    />
                    <span>LinkedIn</span>
                  </button>
                </a>
                <a
                  href="/"
                  className="connection-link"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <button>
                    <img
                      width="94"
                      height="94"
                      src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
                      alt="instagram-new"
                    />
                    <span>Instagram</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6">
          {/*<img
            src="https://cdn.codechef.com/images/home/coding_boy.svg"
            alt="Coding Boy"
  />*/}
          <HeroCarousel />
        </div>
      </div>
    </div>
  );
};

export default Home;
