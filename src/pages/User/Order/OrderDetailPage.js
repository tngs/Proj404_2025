import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./OrderDetailPage.module.css";
import servicesDB from "../../../servicesDB.json";
import { getGetByApplyId } from "../../../utilities/URLs/transport-apply-service";

const OrderDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [service, setService] = useState(location.state?.service || null);
  const [weightRange, setWeightRange] = useState(
    location.state?.weightReport || null
  );

  const weightRangeTable = [
    [0, 100],
    [100, 1000],
    [1000, 9000],
  ];

  //? departure: departures;
  //? destination: destinations;
  //? serviceName: serviceName;
  //? transporterName: transporterName;
  //? transportUserName: none;
  //? weightRange: weightRange;
  //? description: description;

  useEffect(() => {
    //TODO have to setService later
    getGetByApplyId({ applyId: id }).then((obj) => console.log("obj", obj));
    if (!service) {
      const found = servicesDB.find(
        (p) => p.serviceId === id || p.id === parseInt(id)
      );
      if (found) setService(found);
    }
  }, [id, service]);

  const weightConverter = (weight) => {
    return weight < 1000 ? `${weight}g` : `${weight / 1000}kg`;
  };

  if (!service) {
    return <div className={styles.message}>Service data not found.</div>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.cover} style={{ backgroundColor: "#2c3e50" }}>
        <div className={styles.overlay}>
          <h1 className={styles.coverTitle}>
            {service.serviceName || service.title}
          </h1>
          <p className={styles.companyName}>
            Transported by {service.transporterName || service.companyName}
          </p>
        </div>
      </div>

      <div className={styles.details}>
        <h2>Description</h2>
        <p>{service.serviceDescription || service.description}</p>

        <div className={styles.infoGrid}>
          <div className={styles.infoBox}>
            <h4>Departures</h4>
            <p>{service.departures}</p>
          </div>

          <div className={styles.infoBox}>
            <h4>Destinations</h4>
            <p>{service.destinations}</p>
          </div>

          <div className={styles.infoBox}>
            <h4>Transporter</h4>
            <p>{service.transporterName}</p>
          </div>

          {/* <div className={styles.infoBox}>
            <h4>Transporter ID</h4>
            <p>{service.transporterId}</p>
          </div>

          <div className={styles.infoBox}>
            <h4>Service ID</h4>
            <p>{service.serviceId || service.id}</p>
          </div> */}

          <div className={styles.infoBox}>
            <h4>Selected Weight</h4>
            <p>{weightRange}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;
