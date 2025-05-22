import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import styles from './ServiceList.module.css';

const ServiceList = ({ services }) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {services.map((service) => (
          <ServiceCard
            key={service.serviceId}
            service={service}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;