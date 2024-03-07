import defaultPfp from '../Asstes/profileDefault.png';
import '../Styles/ProfileCard.css';

const ProfileCard = (props) => {
  return (
    <div className="profile-card">
      <div class="text-center">
        <img
          src={props.img ? props.img : defaultPfp}
          width="100"
          height="100"
          alt="profile"
          style={{ borderRadius: '50%', position: 'center center' }}
        />
      </div>

      <div class="text-center mt-3">
        <h5 class="mt-2 mb-0">{props.name}</h5>
        <span>{props.year}</span>

        <div class="px-4 mt-1">
          <p class="fonts">{props.content}</p>
        </div>
        <div className="single-box">
          <a
            href={props.linkedin}
            className="connection-link"
            style={{ textDecoration: 'none' }}
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
            href={props.insta}
            className="connection-link"
            style={{ textDecoration: 'none' }}
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
  );
};

export default ProfileCard;
