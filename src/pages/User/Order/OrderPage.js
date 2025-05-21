import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./OrderPage.module.css";

const OrderPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const service = location.state?.service;

  if (!service) {
    return <div className={styles.message}>Service data not found.</div>;
  }

  return (
    <div className={styles.page}>
      <div
        className={styles.cover}
        style={{ backgroundImage: `url(${service.companyImage})` }}
      >
        <div className={styles.overlay}>
          <h1 className={styles.coverTitle}>{service.title}</h1>
          <p className={styles.companyName}>{service.companyName}</p>
        </div>
      </div>

      <div className={styles.details}>
        <h2>Description</h2>
        <p>{service.description}</p>

        <div className={styles.infoGrid}>
          <div className={styles.infoBox}>
            <h4>Location</h4>
            <p>{service.location}</p>
          </div>

          <div className={styles.infoBox}>
            <h4>Service Type</h4>
            <p>{service.serviceType}</p>
          </div>

          <div className={styles.infoBox}>
            <h4>Rating</h4>
            <p>⭐ {service.rating} / 5</p>
          </div>

          <div className={styles.infoBox}>
            <h4>Service ID</h4>
            <p>{service.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
