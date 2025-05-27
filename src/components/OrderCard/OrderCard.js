import React from "react";
import styles from "./OrderCard.module.css";
import { useNavigate } from "react-router-dom";
import { getDeleteByApplyId } from "../../utilities/URLs/transport-apply-service";
import { toast } from "react-toastify";

const OrderCard = (props) => {
  const navigate = useNavigate();
  const { orderId, serviceId, userId, paid, detailed } = props;
  const order = detailed;
  const handleClick = () => {
    //TODO change the arguments
    navigate(`/orderDetail/${orderId}`, { state: { order: props } });
  };
  //? departure:"Daegu"
  //? description:"Gift box for event"
  //? destination:"Jeonju"
  //? serviceName:"RoyalPost"
  //? transportUserName:"royal_jang"
  //? transporterName:"PostPlus"
  //? weightRange:"0g - 300g"
  const payHandler = () => {
    toast.info(`Paying ${order.serviceName}...`);
  };
  const deleteHandler = () => {
    getDeleteByApplyId(orderId)
      .then((res) => {
        console.log("deleted", res);
        toast.success("Order deleted successfully");
        navigate(0)
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className={styles.card} onClick={handleClick}>
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
      {!paid && (
        <div className={styles.buttonGroup}>
          <button
            className={styles.permitBtn}
            onClick={(e) => {
              e.stopPropagation();
              payHandler();
            }}
          >
            Pay
          </button>
          <button
            className={styles.permitBtn}
            style={{ backgroundColor: "#cc0404" }}
            onClick={(e) => {
              e.stopPropagation();
              deleteHandler();
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderCard;
