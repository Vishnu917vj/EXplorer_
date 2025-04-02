import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProfileContext } from '../context/ProfileContext';
import MapComponent from '../components/MapComponent';

const ProfilePage = () => {
  const { id } = useParams(); // Get profile ID from URL
  const { profiles } = useContext(ProfileContext);

  // Find the profile by ID
  const profile = profiles.find((p) => p.id === parseInt(id));

  // Handle case where profile isn't found
  if (!profile) {
    return (
      <div>
        <h1>Profile Not Found</h1>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <h1>{profile.name}</h1>
      <div className="profile-details">
        <div className="profile-info">
          <img src={profile.photo} alt={profile.name} className="profile-photo" />
          <p><strong>Description:</strong> {profile.description}</p>
          <p><strong>Address:</strong> {profile.address}</p>
          <p><strong>Email:</strong> {profile.details.email}</p>
          <p><strong>Phone:</strong> {profile.details.phone}</p>
          <p><strong>Interests:</strong> {profile.details.interests.join(', ')}</p>
          <p><strong>Bio:</strong> {profile.details.bio}</p>
          <Link to="/" className="back-link">Back to Home</Link>
        </div>
        <div className="map-section">
          <h3>Location</h3>
          <MapComponent profile={profile} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;