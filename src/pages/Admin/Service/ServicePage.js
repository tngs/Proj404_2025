import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import styles from "./ServicePage.module.css";

import {
  getGetServiceByAdministrator,
  getPermitServiceByAdministrator,
} from "../../../utilities/URLs/administration-service";
import { toast } from "react-toastify";
const ServicePage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [service, setService] = useState(location.state?.service);
  const [loader, setLoader] = useState(
    <div className={styles.message}>Service loading...</div>
  );


  useEffect(() => {
    getGetServiceByAdministrator(id).then((obj) => {
      
      setService(obj.data);
      if (obj.data) {
      } else {
        setLoader(<div className={styles.message}>Service not found</div>);
      }
    }).catch((err) => {
      toast.error(err.message);
    });
  }, []);

  if (!service) {
    return loader;
  }
  return (
    <div className={styles.page}>
      <div className={styles.cover} style={{ backgroundColor: "#2c3e50" }}>
        <div className={styles.overlay}>
          <h1 className={styles.coverTitle}>{service.serviceName}</h1>
          <p className={styles.companyName}>
            Transported by {service.transporterName}
          </p>
        </div>
      </div>

      <div className={styles.details}>
        <h2>Description</h2>
        <p>{service.serviceDescription}</p>

        <div className={styles.infoGrid}>
          <div className={styles.infoBox}>
            <h4>Departures</h4>
            <p>{service.departures}</p>
          </div>

          <div className={styles.infoBox}>
            <h4>Destinations</h4>
            <p>{service.destinations}</p>
          </div>

          <div className={styles.infoBox}>
            <h4>Transporter</h4>
            <p>{service.transporterName}</p>
          </div>

          <div className={styles.infoBox}>
            <h4>Transporter ID</h4>
            <p>{service.transporterId}</p>
          </div>

          <div className={styles.infoBox}>
            <h4>Service ID</h4>
            <p>{service.serviceId}</p>
          </div>

          <div className={styles.infoBox}>
            <h4>Permitted</h4>
            <p>{service.permitted ? "✅ Allowed" : "❌ Not Allowed"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
