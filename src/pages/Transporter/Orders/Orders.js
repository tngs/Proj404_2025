import { useEffect, useState } from "react";
import styles from './Orders.module.css'
import { useSelector } from "react-redux";
import { getGetAppliesByTransporter } from "../../../utilities/URLs/transport-apply-service";
import ServiceCardWithComplete from '../../../components/ServiceCardWithComplete/ServiceCardWithComplete'

const Orders = () => {
  const [paidOrders,setOrders] = useState([])
  const user = useSelector((state) => state.account.user);
  useEffect(() => {
    getGetAppliesByTransporter().then((obj) => setOrders(obj.data));
  }, []);
  const refresh = () => {
    getGetAppliesByTransporter().then((obj) => setOrders(obj.data));
  }
  console.log(paidOrders);
  return (
    <div className={styles["container-centers-top"]}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {paidOrders.map((order) => (
            <ServiceCardWithComplete key={order.serviceApplyId} order={order} refresh={refresh}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
