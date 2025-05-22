import React from 'react';
import styles from './ServiceCard.module.css';
import { useNavigate } from 'react-router-dom';


const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`./service/${service.serviceId}`, { state: { service } });
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.details}>
        <h2 className={styles.title}>{service.serviceName}</h2>
        <p className={styles.description}>{service.serviceDescription}</p>
        <p><strong>From:</strong> {service.departures}</p>
        <p><strong>To:</strong> {service.destinations}</p>
        <p><strong>Transporter:</strong> {service.transporterName}</p>
        <p>
          <strong>Status:</strong>{' '}
          <span style={{ color: service.permitted ? '#10b981' : '#ef4444' }}>
            {service.permitted ? 'Permitted ✅' : 'Pending ❌'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;