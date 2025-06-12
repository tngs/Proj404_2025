import React from "react";
import styles from "./OrderCard.module.css";
import { useNavigate } from "react-router-dom";
import { getDeleteByApplyId } from "../../utilities/URLs/transport-apply-service";
import { toast } from "react-toastify";

const OrderCard = (props) => {
  const navigate = useNavigate();
  const orderDetail = props.orderDetail;
  const paid = props.paid;
  const handleClick = () => {
    //TODO change the arguments
    navigate(`/orderDetail/${orderDetail.serviceApplyId}`, { state: { orderDetail, paid } });
  };
  const payHandler = () => {
    // console.log(orderDetail);
    navigate("/payment", {state: {...orderDetail}})
  };
  const deleteHandler = () => {
    getDeleteByApplyId(orderDetail.serviceApplyId)
      .then((res) => {
        toast.success("Order deleted successfully");
        navigate(0)
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.details}>
        <h2 className={styles.title}>{orderDetail.serviceName}</h2>
        <p className={styles.description}>{orderDetail.description}</p>
        <p>
          <strong>From:</strong> {orderDetail.departure}
        </p>
        <p>
          <strong>To:</strong> {orderDetail.destination}
        </p>
        <p>
          <strong>Transporter:</strong> {orderDetail.transporterName}
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
