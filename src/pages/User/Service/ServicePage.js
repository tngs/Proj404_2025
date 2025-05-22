import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import styles from "./ServicePage.module.css";

const ServicePage = () => {
  const { id } = useParams();
  const location = useLocation();
  const service = location.state?.service;

  const navigate = useNavigate();
  if (!service) {
    return <div className={styles.message}>Service data not found.</div>;
  }
  const handleOrder = () => {
    navigate("../order/" + id);
  };
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
          <>
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
          </>
        </div>

        <div className={styles.buttonWrapper}>
          <button className={styles.orderButton} onClick={handleOrder}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
