import React, { createContext, useState } from 'react';
import { mockProfiles } from '../data/mockProfiles';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState(mockProfiles);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const addProfile = (profile) => setProfiles([...profiles, { ...profile, id: Date.now() }]);
  const editProfile = (id, updatedProfile) =>
    setProfiles(profiles.map((p) => (p.id === id ? { ...p, ...updatedProfile } : p)));
  const deleteProfile = (id) => setProfiles(profiles.filter((p) => p.id !== id));

  return (
    <ProfileContext.Provider
      value={{ profiles, selectedProfile, setSelectedProfile, addProfile, editProfile, deleteProfile }}
    >
      {children}
    </ProfileContext.Provider>
  );
};