import { profilePicsBasePath } from "../utilities/globalVariables";

function Profile({ id, name, interests, profilePic }) {
  const profilePicPath = profilePicsBasePath + profilePic;

  return (
    id && (
      <div className="profile-card" id={id}>
        {profilePic && (
          <div className="profile-image">
            <img src={profilePicPath} alt={name} />
          </div>
        )}
        <div className="profile-info">
          <ul>
            <li>
              <b>Name: </b>
              {name}
            </li>
            <li>
              <b>Interests: </b>
              {interests}
            </li>
          </ul>
        </div>
      </div>
    )
  );
}

export default Profile;
