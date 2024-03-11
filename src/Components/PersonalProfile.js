import React from "react";
import "../Styles/PersonalProfile.css";

const PersonalProfile = ({ profileObj }) => {
  //console.log(profileObj, " from personal profile");
  return (
    <div>
      <div className="profile-box">
        <div className="profile-left">
          <img
            src={profileObj.img}
            className="rounded-circle mb-1"
            style={{
              height: "120px",
              width: "120px",
              objectFit: "cover",
            }}
            alt="1"
          />
          <h4>{profileObj.name}</h4>
          <p>{profileObj.position}</p>
        </div>
        <div className="profile-right">
          <div className="">
            <h5>Information</h5>
            <hr />
            <div className="profile-email-regno">
              <div className="profile-email">
                <h6>Email</h6>
                <p>{profileObj.email}</p>
              </div>
              <div className="profile-regno">
                <h6>Registration No.</h6>
                <p>{profileObj.regNo}</p>
              </div>
            </div>
          </div>
          <div className="">
            <h5>Connect On</h5>
            <hr />
            <div className="profile-connect-box">
              <a
                href={profileObj.linkedIn}
                rel="noreferrer"
                className=""
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
                href={profileObj.instagram}
                rel="noreferrer"
                className=""
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
    </div>
  );
};

export default PersonalProfile;
