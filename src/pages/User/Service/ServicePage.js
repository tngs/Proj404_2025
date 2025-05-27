import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import styles from "./ServicePage.module.css";
import { getByServiceId } from "../../../utilities/URLs/transport-service";
import { toast } from "react-toastify";

const ServicePage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [service, setService] = useState();
  const [loader, setLoader] = useState(
    <div className={styles.message}>Service data not found.</div>
  );

  const navigate = useNavigate();
  console.log("service", service);
  useEffect(() => {
    if (!service) {
      getByServiceId(id)
        .then((obj) => setService(obj.data))
        .catch((err) => toast.error(err.message));
    }
  }, []);

  if (!service) {
    return <div className={styles.message}>Service data not found.</div>;
  }

  const handleOrder = () => {
    navigate("../order/" + id, { state: { service } });
  };

  return (
    <div className={styles.page}>
      <div className={styles.cover} style={{ backgroundColor: "#2c3e50" }}>
        <div className={styles.overlay}>
          <h1 className={styles.coverTitle}>{service.serviceName}</h1>
          <p className={styles.companyName}>
            Transported by {service.transporterName}
          </p>
        </div>
      </div>

      <div className={styles.details}>
        <h2>Description</h2>
        <p>{service.serviceDescription}</p>

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
