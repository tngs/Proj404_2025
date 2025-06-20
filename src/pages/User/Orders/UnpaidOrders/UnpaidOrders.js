import React, { useEffect, useState } from "react";
import styles from "./UnpaidOrders.module.css";
import { getGetUnpaidByTransportUser } from "../../../../utilities/URLs/transport-apply-service";
import OrderCard from "../../../../components/OrderCard/OrderCard";
import { toast } from "react-toastify";

const PaidOrders = () => {
  const [orders, setOrders] = useState([]);
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    //TODO setServices
    getGetUnpaidByTransportUser()
      .then((obj) => {
        setOrders(obj.data);
      })
      .catch((err) => toast.error(err.message));
  }, [trigger]);
  const reloadTrigger = () => {
    setTrigger(true);
  };
  return (
    <div className={styles["container-centers-top"]}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {orders.map((order) => (
            <OrderCard key={order.serviceApplyId} orderDetail={order} paid={false}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaidOrders;
