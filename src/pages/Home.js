import React, { useContext, useState, useEffect } from 'react';
import { ProfileContext } from '../context/ProfileContext';
import ProfileCard from '../components/ProfileCard';
import MapComponent from '../components/MapComponent';
import SearchFilter from '../components/SearchFilter';
import LoadingSpinner from '../components/LoadingSpinner';
import { toast } from 'react-toastify'; // Import toast

const Home = () => {
  const { profiles, selectedProfile } = useContext(ProfileContext);
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000); // Simulate API call

    // Detect if the user is on a mobile device
    const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
    if (isMobile) {
      toast.info('Scroll down to see the map!', {
        position: 'top-center', // Centered for better visibility on mobile
        autoClose: 5000, // 5 seconds
      });
    } else {
      toast.success('Welcome to Profile Explorer!', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  }, []);

  useEffect(() => {
    setFilteredProfiles(profiles); // Sync with context profiles
  }, [profiles]);

  const handleFilter = (filtered) => {
    setFilteredProfiles(filtered);
  };

  return (
    <div className="home">
      <h1>Profile Explorer</h1>
      <SearchFilter profiles={profiles} onFilter={handleFilter} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="content">
          <div className="profile-list">
            {filteredProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
          <div className="map-container">
            <MapComponent profile={selectedProfile} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;