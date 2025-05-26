import React from "react";
import styles from "./ServiceCardWithComplete.module.css";
import { useNavigate } from "react-router-dom";
import { getSetCompleteByApplyId } from "../../utilities/URLs/transport-apply-service";

const ServiceCardWithComplete = (props) => {
  const navigate = useNavigate();
  const { service } = props;
  const handleClick = () => {
    navigate(`./service/${service.serviceId}`, { state: { service } });
  };
  const completeHandler = () => {
    getSetCompleteByApplyId(props.service.serviceId).then((obj) =>
      console.log("obj", obj)
    );
  };
  return (
    <div className={styles.card}>
      <div className={styles.details}>
        <h2 className={styles.title}>{service.serviceName}</h2>
        <p className={styles.description}>{service.serviceDescription}</p>
        <p>
          <strong>From:</strong> {service.departures}
        </p>
        <p>
          <strong>To:</strong> {service.destinations}
        </p>
        <p>
          <strong>Transporter:</strong> {service.transporterName}
        </p>
      </div>
      <div className={styles.buttonGroup}>
        <button
          className={styles.permitBtn}
          onClick={(e) => {
            e.stopPropagation();
            completeHandler(service.serviceId);
          }}
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default ServiceCardWithComplete;
