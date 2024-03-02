import React from "react";
import "../Styles/Home.css";
import "../Styles/Departments.css";
import defaultPic from "../Asstes/profileDefault.png";
import HeroCarousel from "../Components/HeroCarousel";

const Home = () => {
  return (
    <>
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
      <div className="main-departments">
        <div className="departments">
          <h2>Our Departments</h2>
          <div className="departments-list">
            <div className="depatment-card">
              <div className="card-top">
                <h3>Competitive Programming</h3>
                <img
                  src="https://cdn.codechef.com/images/self-learning/icons/python.svg"
                  alt="CP Logo"
                />
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                dolorum cupiditate nam omnis eius, alias id qui eaque molestias
                harum in aut neque. Minima quae voluptas rerum harum qui
                similique!
              </p>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    src={defaultPic}
                    className="rounded-circle mx-1"
                    style={{
                      height: "38px",
                      width: "38px",
                      objectFit: "cover",
                    }}
                    alt="Lead Profile Pic"
                  />
                  <div>
                    <p
                      className="card-subtitle"
                      style={{
                        fontWeight: "500",
                        fontSize: "14px !important",
                        color: "#546e7a !important",
                      }}
                    >
                      <a
                        href="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Nikhil Iyer
                      </a>
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src={defaultPic}
                    className="rounded-circle mx-1"
                    style={{
                      height: "38px",
                      width: "38px",
                      objectFit: "cover",
                    }}
                    alt="Lead Profile Pic"
                  />
                  <div>
                    <p
                      className="card-subtitle"
                      style={{
                        fontWeight: "500",
                        fontSize: "14px !important",
                        color: "#546e7a !important",
                      }}
                    >
                      <a
                        href="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Aditi Jha
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="department-members">20 Members</div>
            </div>
            <div className="depatment-card">
              <div className="card-top">
                <h3>Design & Content</h3>
                <img
                  src="https://cdn.codechef.com/images/self-learning/icons/python.svg"
                  alt="CP Logo"
                />
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                dolorum cupiditate nam omnis eius, alias id qui eaque molestias
                harum in aut neque. Minima quae voluptas rerum harum qui
                similique!
              </p>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    src={defaultPic}
                    className="rounded-circle mx-1"
                    style={{
                      height: "38px",
                      width: "38px",
                      objectFit: "cover",
                    }}
                    alt="Lead Profile Pic"
                  />
                  <div>
                    <p
                      className="card-subtitle"
                      style={{
                        fontWeight: "500",
                        fontSize: "14px !important",
                        color: "#546e7a !important",
                      }}
                    >
                      <a
                        href="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Nikhil Iyer
                      </a>
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src={defaultPic}
                    className="rounded-circle mx-1"
                    style={{
                      height: "38px",
                      width: "38px",
                      objectFit: "cover",
                    }}
                    alt="Lead Profile Pic"
                  />
                  <div>
                    <p
                      className="card-subtitle"
                      style={{
                        fontWeight: "500",
                        fontSize: "14px !important",
                        color: "#546e7a !important",
                      }}
                    >
                      <a
                        href="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Aditi Jha
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="department-members">20 Members</div>
            </div>
            <div className="depatment-card">
              <div className="card-top">
                <h3>Web Development</h3>
                <img
                  src="https://cdn.codechef.com/images/self-learning/icons/python.svg"
                  alt="CP Logo"
                />
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                dolorum cupiditate nam omnis eius, alias id qui eaque molestias
                harum in aut neque. Minima quae voluptas rerum harum qui
                similique!
              </p>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    src={defaultPic}
                    className="rounded-circle mx-1"
                    style={{
                      height: "38px",
                      width: "38px",
                      objectFit: "cover",
                    }}
                    alt="Lead Profile Pic"
                  />
                  <div>
                    <p
                      className="card-subtitle"
                      style={{
                        fontWeight: "500",
                        fontSize: "14px !important",
                        color: "#546e7a !important",
                      }}
                    >
                      <a
                        href="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Nikhil Iyer
                      </a>
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src={defaultPic}
                    className="rounded-circle mx-1"
                    style={{
                      height: "38px",
                      width: "38px",
                      objectFit: "cover",
                    }}
                    alt="Lead Profile Pic"
                  />
                  <div>
                    <p
                      className="card-subtitle"
                      style={{
                        fontWeight: "500",
                        fontSize: "14px !important",
                        color: "#546e7a !important",
                      }}
                    >
                      <a
                        href="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Aditi Jha
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="department-members">20 Members</div>
            </div>
            <div className="depatment-card">
              <div className="card-top">
                <h3>Marketing & Out Reach</h3>
                <img
                  src="https://cdn.codechef.com/images/self-learning/icons/python.svg"
                  alt="CP Logo"
                />
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                dolorum cupiditate nam omnis eius, alias id qui eaque molestias
                harum in aut neque. Minima quae voluptas rerum harum qui
                similique!
              </p>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    src={defaultPic}
                    className="rounded-circle mx-1"
                    style={{
                      height: "38px",
                      width: "38px",
                      objectFit: "cover",
                    }}
                    alt="Lead Profile Pic"
                  />
                  <div>
                    <p
                      className="card-subtitle"
                      style={{
                        fontWeight: "500",
                        fontSize: "14px !important",
                        color: "#546e7a !important",
                      }}
                    >
                      <a
                        href="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Nikhil Iyer
                      </a>
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src={defaultPic}
                    className="rounded-circle mx-1"
                    style={{
                      height: "38px",
                      width: "38px",
                      objectFit: "cover",
                    }}
                    alt="Lead Profile Pic"
                  />
                  <div>
                    <p
                      className="card-subtitle"
                      style={{
                        fontWeight: "500",
                        fontSize: "14px !important",
                        color: "#546e7a !important",
                      }}
                    >
                      <a
                        href="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Aditi Jha
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="department-members">20 Members</div>
            </div>
            <div className="depatment-card">
              <div className="card-top">
                <h3>Managment</h3>
                <img
                  src="https://cdn.codechef.com/images/self-learning/icons/python.svg"
                  alt="CP Logo"
                />
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                dolorum cupiditate nam omnis eius, alias id qui eaque molestias
                harum in aut neque. Minima quae voluptas rerum harum qui
                similique!
              </p>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    src={defaultPic}
                    className="rounded-circle mx-1"
                    style={{
                      height: "38px",
                      width: "38px",
                      objectFit: "cover",
                    }}
                    alt="Lead Profile Pic"
                  />
                  <div>
                    <p
                      className="card-subtitle"
                      style={{
                        fontWeight: "500",
                        fontSize: "14px !important",
                        color: "#546e7a !important",
                      }}
                    >
                      <a
                        href="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Nikhil Iyer
                      </a>
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src={defaultPic}
                    className="rounded-circle mx-1"
                    style={{
                      height: "38px",
                      width: "38px",
                      objectFit: "cover",
                    }}
                    alt="Lead Profile Pic"
                  />
                  <div>
                    <p
                      className="card-subtitle"
                      style={{
                        fontWeight: "500",
                        fontSize: "14px !important",
                        color: "#546e7a !important",
                      }}
                    >
                      <a
                        href="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Aditi Jha
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="department-members">20 Members</div>
            </div>
            <div className="depatment-card">
              <div className="card-top">
                <h3>Social Media</h3>
                <img
                  src="https://cdn.codechef.com/images/self-learning/icons/python.svg"
                  alt="CP Logo"
                />
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                dolorum cupiditate nam omnis eius, alias id qui eaque molestias
                harum in aut neque. Minima quae voluptas rerum harum qui
                similique!
              </p>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    src={defaultPic}
                    className="rounded-circle mx-1"
                    style={{
                      height: "38px",
                      width: "38px",
                      objectFit: "cover",
                    }}
                    alt="Lead Profile Pic"
                  />
                  <div>
                    <p
                      className="card-subtitle"
                      style={{
                        fontWeight: "500",
                        fontSize: "14px !important",
                        color: "#546e7a !important",
                      }}
                    >
                      <a
                        href="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Nikhil Iyer
                      </a>
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src={defaultPic}
                    className="rounded-circle mx-1"
                    style={{
                      height: "38px",
                      width: "38px",
                      objectFit: "cover",
                    }}
                    alt="Lead Profile Pic"
                  />
                  <div>
                    <p
                      className="card-subtitle"
                      style={{
                        fontWeight: "500",
                        fontSize: "14px !important",
                        color: "#546e7a !important",
                      }}
                    >
                      <a
                        href="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Aditi Jha
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="department-members">20 Members</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
