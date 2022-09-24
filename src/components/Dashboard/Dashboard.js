import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Dashboard() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();

  const navigate = useNavigate();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      navigate('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <div>
      <h2>Profile</h2>
      {error && <p>{error}</p>}
      <strong>Email: </strong> {currentUser.email}
      <p>
        <Link to='/update-profile'>Update Profile</Link>
      </p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
