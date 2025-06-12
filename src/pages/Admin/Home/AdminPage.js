// AdminPage.js
import { useEffect, useState } from "react";
import styles from "./AdminPage.module.css";
import ServiceCardWithEditAndDelete from "../../../components/ServiceCardWithEditAndDelete/ServiceCardWithEditAndDelete";
// import servicesDB from "../../../servicesDB.json";
import {
  getGetServicesByEmail,
  getPermitServiceByAdministrator,
} from "../../../utilities/URLs/administration-service";
import { toast } from "react-toastify";

const AdminPage = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {}, []);
  const permitHandler = (id) => {
    getPermitServiceByAdministrator(id)
      .then((obj) => {
        toast.success("Service permitted");
        getGetServicesByEmail()
          .then((obj) => {
            setServices(obj.data);
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
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
