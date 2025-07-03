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
//*   {
//*     "serviceApplyId": "01f32e4f-b3f0-4a0e-8271-7b658550262b",
//*     "departure": "Busan",
//*     "destination": "Seoul",
//*     "serviceName": "TransportServiceNo1",
//*     "transporterName": "transporter",
//*     "transportUserId": "TransportUsere3244eb6-ce4f-4aa9-875b-21b685b972f1",
//*     "weightRange": {
//*         "minWeight": "0",
//*         "maxWeight": "100kg",
//*         "price": 100
//*     },
//*     "description": "7",
//*     "date": "2025-06-17"
//* }
  return (
    <div className={styles["container-centers-top"]}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {orders.map((order) => (
            <OrderCard key={order.serviceApplyId} orderDetail={order} paid={true}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaidOrders;
