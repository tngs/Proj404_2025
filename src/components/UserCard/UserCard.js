import React from 'react';
import styles from './UserCard.module.css';
import { useNavigate } from 'react-router-dom';


const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
    const user = {  email:"email@email.com",
                    username:"username1",
                    transportUserId:"id1",
                    address:"somehwere",}
  const handleClick = () => {
    // navigate(`./service/${service.serviceId}`, { state: { service } }),
  };
/*
    ? email: string;
    ? username: string;
    ? transportUserId: string;
    ? address: string;
  */
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