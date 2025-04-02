import React, { useContext, useState, useEffect } from 'react'; // Add useEffect
import { ProfileContext } from '../context/ProfileContext';
import { toast } from 'react-toastify'; // Import toast

const AdminPanel = () => {
  const { profiles, addProfile, editProfile, deleteProfile } = useContext(ProfileContext);
  const [newProfile, setNewProfile] = useState({
    name: '',
    photo: '',
    description: '',
    address: '',
    lat: '',
    lng: '',
    details: { email: '', phone: '', interests: [], bio: '' },
  });
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState('');

  // Add welcome message on component mount
  useEffect(() => {
    toast.success('Welcome to the Admin Panel!', {
      position: 'top-center',
      autoClose: 4000, // 4 seconds
      style: {
        background: '#2196f3', // Blue background for admin theme
        color: '#fff', // White text
      },
    });
  }, []); // Empty dependency array to run only on mount

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prev) => ({
      ...prev,
      details: { ...prev.details, [name]: value },
    }));
  };

  const handleAddOrUpdate = () => {
    if (!newProfile.name || !newProfile.address || !newProfile.lat || !newProfile.lng) {
      setError('Name, Address, Latitude, and Longitude are required.');
      return;
    }

    if (editId) {
      editProfile(editId, newProfile);
      setEditId(null);
    } else {
      addProfile({ ...newProfile, id: Date.now() });
    }

    setNewProfile({
      name: '',
      photo: '',
      description: '',
      address: '',
      lat: '',
      lng: '',
      details: { email: '', phone: '', interests: [], bio: '' },
    });
    setError('');
  };

  const handleEdit = (profile) => {
    setNewProfile(profile);
    setEditId(profile.id);
    setError('');
  };

  const handleCancelEdit = () => {
    setNewProfile({
      name: '',
      photo: '',
      description: '',
      address: '',
      lat: '',
      lng: '',
      details: { email: '', phone: '', interests: [], bio: '' },
    });
    setEditId(null);
    setError('');
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <div className="add-profile">
        <h3>{editId ? 'Edit Profile' : 'Add New Profile'}</h3>
        {error && <p className="error">{error}</p>}
        <input
          name="name"
          value={newProfile.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          name="photo"
          value={newProfile.photo}
          onChange={handleInputChange}
          placeholder="Photo URL"
        />
        <input
          name="description"
          value={newProfile.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <input
          name="address"
          value={newProfile.address}
          onChange={handleInputChange}
          placeholder="Address"
        />
        <input
          name="lat"
          value={newProfile.lat}
          onChange={handleInputChange}
          placeholder="Latitude"
          type="number"
          step="any"
        />
        <input
          name="lng"
          value={newProfile.lng}
          onChange={handleInputChange}
          placeholder="Longitude"
          type="number"
          step="any"
        />
        <input
          name="email"
          value={newProfile.details.email}
          onChange={handleDetailsChange}
          placeholder="Email"
        />
        <input
          name="phone"
          value={newProfile.details.phone}
          onChange={handleDetailsChange}
          placeholder="Phone"
        />
        <input
          name="interests"
          value={newProfile.details.interests.join(', ')}
          onChange={(e) =>
            handleDetailsChange({
              target: { name: 'interests', value: e.target.value.split(', ') },
            })
          }
          placeholder="Interests (comma-separated)"
        />
        <textarea
          name="bio"
          value={newProfile.details.bio}
          onChange={handleDetailsChange}
          placeholder="Bio"
        />
        <div className="form-actions">
          <button onClick={handleAddOrUpdate}>
            {editId ? 'Update Profile' : 'Add Profile'}
          </button>
          {editId && <button onClick={handleCancelEdit}>Cancel</button>}
        </div>
      </div>
      <div className="profile-list">
        <h3>Existing Profiles</h3>
        <ul>
          {profiles.map((profile) => (
            <li key={profile.id}>
              {profile.name}
              <button onClick={() => handleEdit(profile)}>Edit</button>
              <button onClick={() => deleteProfile(profile.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;