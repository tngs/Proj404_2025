import React, { useEffect, useState } from "react";
import styles from "./PaidOrders.module.css";
import servicesDB from "../../../../servicesDB.json";
import { getGetPaidByTransportUser } from "../../../../utilities/URLs/transport-apply-service";
import OrderCard from "../../../../components/OrderCard/OrderCard";

const PaidOrders = () => {
  const [services, setServices] = useState(servicesDB);
  const [orders, setOrders] = useState([{}]);
  useEffect(() => {
    //TODO setServices
    getGetPaidByTransportUser().then((obj) => console.log("obj", obj));
  }, []);
  return (
    <div className={styles["container-centers-top"]}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {services.map((service) => (
            <OrderCard
              key={service.serviceId}
              service={service}
              orders={orders}
              paid={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaidOrders;
