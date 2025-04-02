import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProfileProvider } from './context/ProfileContext';
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';
import AdminPage from './pages/AdminPage';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ProfileProvider>
      <Router>
        <div className="App">
        <ToastContainer
        position="top-right" // Position of the toast
        autoClose={3000} // Auto-close after 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </div>
      </Router>
    </ProfileProvider>
  );
}

export default App;