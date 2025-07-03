import React from "react";
import styles from "./ServiceCardWithComplete.module.css";
import { useNavigate } from "react-router-dom";
import { getSetCompleteByApplyId } from "../../utilities/URLs/transport-apply-service";

const ServiceCardWithComplete = (props) => {
  const navigate = useNavigate();
  const { order } = props;
  // const handleClick = () => {
  //   navigate(`./service/${order.serviceId}`, { state: { service } });
  // };
  const completeHandler = () => {
    getSetCompleteByApplyId(order.serviceApplyId).then((obj) =>
      props.refresh()
    );
  };
  return (
    <div className={styles.card}>
      <div className={styles.details}>
        <h2 className={styles.title}>{order.serviceName}</h2>
        <p className={styles.description}>{order.serviceDescription}</p>
        <p>
          <strong>From:</strong> {order.departure}
        </p>
        <p>
          <strong>To:</strong> {order.destination}
        </p>
        <p>
          <strong>Transporter:</strong> {order.transporterName}
        </p>
      </div>
      <div className={styles.buttonGroup}>
        <button
          className={styles.permitBtn}
          onClick={(e) => {
            e.stopPropagation();
            completeHandler(order.serviceId);
          }}
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default ServiceCardWithComplete;
