import React from "react";
import styles from "./ServiceCardWithEditAndDelete.module.css";
import { useNavigate } from "react-router-dom";

const ServiceCardWithEditAndDelete = (props) => {
  const navigate = useNavigate();
  const { service, deleteHandler, editHandler } = props;

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
          <strong>Status:</strong>{" "}
          <span style={{ color: service.permitted ? "#10b981" : "#ef4444" }}>
            {service.permitted ? "Permitted ✅" : "Pending ❌"}
          </span>
        </p>
        <div className={styles.buttonGroup}>
          <button
            className={styles.editBtn}
            onClick={(e) => {
              e.stopPropagation();
              editHandler(service.serviceId);
            }}
          >
            Edit
          </button>
          <button
            className={styles.deleteBtn}
            onClick={(e) => {
              e.stopPropagation();
              deleteHandler(service.serviceId);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardWithEditAndDelete;
