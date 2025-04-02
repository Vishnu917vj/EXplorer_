import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProfileContext } from '../context/ProfileContext';

const ProfileCard = ({ profile }) => {
  const { setSelectedProfile } = useContext(ProfileContext);

  return (
    <div className="profile-card">
      <Link to={`/profile/${profile.id}`} className="profile-link">
        <img src={profile.photo} alt={profile.name} />
        <h3>{profile.name}</h3>
        <p>{profile.description}</p>
        <p>{profile.address}</p>
      </Link>
      <button onClick={() => setSelectedProfile(profile)}>Summary</button>
    </div>
  );
};

export default ProfileCard;