import React from 'react';
import { Link } from 'react-router-dom';
import AdminPanel from '../components/AdminPanel';

const AdminPage = () => {
  return (
    <div className="admin-page">
      <Link to="/" className="back-link">Back to Home</Link>
      <AdminPanel />
    </div>
  );
};

export default AdminPage;