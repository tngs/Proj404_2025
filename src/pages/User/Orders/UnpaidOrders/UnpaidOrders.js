import React, { useEffect, useState } from "react";
import styles from "./UnpaidOrders.module.css";
import servicesDB from "../../../../servicesDB.json";
import { getGetUnpaidByTransportUser } from "../../../../utilities/URLs/transport-apply-service";
import OrderCard from "../../../../components/OrderCard/OrderCard";
import {getDeleteByApplyId} from '../../../../utilities/URLs/transport-apply-service'

const UnpaidOrders = () => {
  const [services, setServices] = useState(servicesDB);
  const [orders, setOrders] = useState([{}]);
  useEffect(() => {
    //TODO setServices
    getGetUnpaidByTransportUser().then((obj) => console.log("obj", obj));
  }, []);

  const payHandler = (id) => {
    alert("Pay: "+id);
  };
  const deleteHandler = (id) => {
    getDeleteByApplyId(id).then(obj => console.log('obj', obj))
  };
  return (
    <div className={styles["container-centers-top"]}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {services.map((service) => (
            <OrderCard
              key={service.serviceId}
              service={service}
              orders={orders}
              paid={false}
              payHandler={payHandler}
              deleteHandler={deleteHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnpaidOrders;
