import React from 'react';
import styles from './ServiceCard.module.css';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`./service/${service.id}`, { state: { service } });
  };
  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.details}>
        <h2 className={styles.title}>{service.title}</h2>
        <p className={styles.description}>{service.description}</p>
        <p className={styles.fares}>Fares: ${service.fares || 'N/A'}</p>
      </div>
      <div className={styles.imageWrapper}>
        <img
          src={service.companyImage}
          alt={service.companyName}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default ServiceCard;