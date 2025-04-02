import React, { useContext, useState, useEffect } from 'react';
import { ProfileContext } from '../context/ProfileContext';
import ProfileCard from '../components/ProfileCard';
import MapComponent from '../components/MapComponent';
import SearchFilter from '../components/SearchFilter';
import LoadingSpinner from '../components/LoadingSpinner';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Home = () => {
  const { profiles, selectedProfile } = useContext(ProfileContext);
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);

    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      toast.info('Scroll down to see the map!', {
        position: 'top-center',
        autoClose: 5000,
      });
    } else {
      toast.success('Welcome to Profile Explorer!', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  }, []);

  useEffect(() => {
    setFilteredProfiles(profiles);
  }, [profiles]);

  const handleFilter = (filtered) => {
    setFilteredProfiles(filtered);
  };

  return (
    <div className="home">
      <div className="header-container">
        <div className="admin-link">
          <Link to="/admin">Admin</Link>
        </div>
        <h1>Profile Explorer</h1>
      </div>
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