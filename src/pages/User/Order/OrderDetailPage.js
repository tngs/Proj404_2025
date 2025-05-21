import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./OrderPage.module.css";
import servicesDB from "../../../servicesDB.json";

const OrderPage = () => {
  const { id } = useParams();
  const location = useLocation();
  //////////////////////
  const [service, setService] = useState(location.state?.service);
  const [optionNumber, setOptionNumber] = useState(1);
  //   const [weightRange, setWeightRange] = useState(0);//later send as optionNumber
  /////////////////////
  const weightRangeTable = [
    [0, 100],
    [100, 1000],
    [1000, 9000],
  ];
  useEffect(() => {
    ////////////////
    if (!service) {
      setService(servicesDB.find((p) => p.id === parseInt(id)));
      console.log("service", service);
    }
    ////////////////
  }, []);
  //////////////////////
  if (!service) {
    return <div className={styles.message}>Service data not found.</div>;
  }
  //////////////////////
  const weightConverter = (weight) => {
    if (weight < 1000) return weight + "g";
    return weight / 1000 + "kg";
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
          <div>
            Selected weight:{" "}
            {weightConverter(weightRangeTable[optionNumber][0]) +
              " to " +
              weightConverter(weightRangeTable[optionNumber][1])}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
