import React from "react";
import styles from "./OrderCard.module.css";
import { useNavigate } from "react-router-dom";

const OrderCard = (props) => {
  const navigate = useNavigate();
  const { service, payHandler, deleteHandler, paid = false } = props;

  const handleClick = () => {
    //TODO change the arguments
    navigate(`/orderDetail/${service.serviceId}`, { state: { service } });
  };
//DONE
  return (
    <div className={styles.card} onClick={handleClick}>
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
      {!paid && <div className={styles.buttonGroup}>
        <button
          className={styles.permitBtn}
          onClick={(e) => {
            e.stopPropagation();
            payHandler(service.serviceId);
          }}
        >
          Pay
        </button>
        <button
          className={styles.permitBtn}
          style={{backgroundColor:"#cc0404"}}
          onClick={(e) => {
            e.stopPropagation();
            deleteHandler(service.serviceId);
          }}
        >
          Delete
        </button>
      </div>}
    </div>
  );
};

export default OrderCard;
