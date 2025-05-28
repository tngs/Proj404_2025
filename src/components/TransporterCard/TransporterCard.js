import React from 'react';
import styles from './TransporterCard.module.css';
import { useNavigate } from 'react-router-dom';


const TransporterCard = ({ transporter }) => {
  const navigate = useNavigate();
  const handleClick = () => {
  };
  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.details}>
        <h2 className={styles.title}>{transporter.username}</h2>
        <p><strong>Email:</strong> {transporter.email}</p>
        <p className={styles.description}>{transporter.address}</p>
      </div>
    </div>
  );
};

export default TransporterCard;