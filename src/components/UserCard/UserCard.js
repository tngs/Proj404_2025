import React from 'react';
import styles from './UserCard.module.css';
import { useNavigate } from 'react-router-dom';


const ServiceCard = ({ user }) => {
  const navigate = useNavigate();
  const handleClick = () => {
  };
  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.details}>
        <h2 className={styles.title}>{user.username}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p className={styles.description}>{user.address}</p>
      </div>
    </div>
  );
};

export default ServiceCard;