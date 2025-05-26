import { useEffect } from "react";
import styles from './Orders.module.css'
import services from "../../../servicesDB.json";
import { useSelector } from "react-redux";
import { getGetPaidByTransportUser } from "../../../utilities/URLs/transport-apply-service";
import ServiceCardWithComplete from '../../../components/ServiceCardWithComplete/ServiceCardWithComplete'

const Orders = () => {
  const user = useSelector((state) => state.account.user);
  useEffect(() => {
    getGetPaidByTransportUser().then((obj) => console.log("obj", obj));
  }, []);

  console.log("user", user);
  console.log("services", services);
  const filteredServices = services.filter(
    (service) => service.transporterId === user.id
  );
  console.log("filteredServices", filteredServices);
  return (
    <div className={styles["container-centers-top"]}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCardWithComplete key={service.serviceId} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
