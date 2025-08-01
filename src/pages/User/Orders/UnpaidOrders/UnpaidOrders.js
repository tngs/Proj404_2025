import React, { useEffect, useState } from "react";
import styles from "./UnpaidOrders.module.css";
import { getGetUnpaidByTransportUser } from "../../../../utilities/URLs/transport-apply-service";
import OrderCard from "../../../../components/OrderCard/OrderCard";
import { toast } from "react-toastify";
import CDT from "../../../../components/centered_div_text";

const UnpaidOrders = () => {
  const [orders, setOrders] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [placeHolder, setPlaceHolder] = useState(<h1>Loading...</h1>);
  useEffect(() => {
    //TODO setServices
    getGetUnpaidByTransportUser()
      .then((obj) => {
        setOrders(obj.data);
        setPlaceHolder(<CDT error="No orders" />);
      })
      .catch((err) => {
        setPlaceHolder(<CDT error={err.error} message={err.message} />);
        toast.error(err.message);
      });
  }, [trigger]);
  const reloadTrigger = () => {
    setTrigger(true);
  };
  return (
    orders.length == 0 ? placeHolder :
    <div className={styles["container-centers-top"]}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {orders.map((order) => (
            <OrderCard
              key={order.serviceApplyId}
              orderDetail={order}
              paid={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnpaidOrders;
