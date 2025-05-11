import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = ({ user }) => {
  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-2">Profile Information</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
};

export default ProfileInfo;