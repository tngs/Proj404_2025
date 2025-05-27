import React, { useEffect, useState } from "react";
import styles from "./PaidOrders.module.css";
import { getGetPaidByTransportUser } from "../../../../utilities/URLs/transport-apply-service";
import OrderCard from "../../../../components/OrderCard/OrderCard";
import { toast } from "react-toastify";

const PaidOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    //TODO setServices
    getGetPaidByTransportUser()
      .then((obj) => {
        setOrders(obj.data);
      })
      .catch((err) => toast.error(err.message));
  }, []);
  return (
    <div className={styles["container-centers-top"]}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {orders.map((order) => (
            <OrderCard key={order.orderId} {...order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaidOrders;
