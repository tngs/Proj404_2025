// AdminPage.js
import { useEffect, useState } from "react";
import styles from "./AdminPage.module.css";
import ServiceCardWithEditAndDelete from "../../../components/ServiceCardWithEditAndDelete/ServiceCardWithEditAndDelete";
import servicesDB from "../../../servicesDB.json";
import { getGetServicesByEmail, getPermitServiceByAdministrator } from "../../../utilities/URLs/administration-service";


const AdminPage = () => {
  const [services, setServices] = useState(servicesDB);
  useEffect(() => {
    getGetServicesByEmail().then((obj) => {
      // console.log("obj", obj)
    });
  }, []);
  const permitHandler = (id) => {
    //TEST //!TEST
    getPermitServiceByAdministrator(id).then(obj => console.log('obj', obj))
    setServices(
      services.map((service) =>
        service.serviceId === id ? { ...service, permitted: true } : service
      )
    );
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {services.map((service) => (
          <ServiceCardWithEditAndDelete
            key={service.serviceId}
            service={service}
            permitHandler={permitHandler}
          />
        ))}
      </main>
    </div>
  );
};

export default AdminPage;
