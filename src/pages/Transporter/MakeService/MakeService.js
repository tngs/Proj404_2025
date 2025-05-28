import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./MakeService.module.css";
import { getMakingService } from "../../../utilities/URLs/transport-service";
import { postMakingWeightRange} from "../../../utilities/URLs/transport-service"
import { toast } from "react-toastify";
const MakeService = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [service, setService] = useState({
    serviceName: "",
    serviceDescription: "",
    departures: "",
    destinations: "",
    transporterName: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setService((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleCreate = () => {
    getMakingService(service)
      .then((res) => {
        toast.success("Service created");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className={styles.page}>
      <div className={styles.cover} style={{ backgroundColor: "#2c3e50" }}>
        <div className={styles.overlay}>
          <h1 className={styles.coverTitle}>
            {service.serviceName || service.title}
          </h1>
          <p className={styles.companyName}>
            Transported by {service.transporterName || service.companyName}
          </p>
        </div>
      </div>

      <div className={styles.details}>
        <h2>Description</h2>
        <p>{service.serviceDescription || service.description}</p>

        <div className={styles.infoGrid}>
          <div className={styles.infoBox}>
            <h4>Service Name</h4>
            <input
              name="serviceName"
              className={styles.input}
              value={service.serviceName}
              onChange={handleChange}
            />
          </div>
          <div className={styles.infoBox}>
            <h4>Description</h4>
            <input
              name="serviceDescription"
              className={styles.input}
              value={service.serviceDescription}
              onChange={handleChange}
            />
          </div>
          <div className={styles.infoBox}>
            <h4>Departures</h4>
            <input
              name="departures"
              className={styles.input}
              value={service.departures}
              onChange={handleChange}
            />
          </div>

          <div className={styles.infoBox}>
            <h4>Destinations</h4>
            <input
              name="destinations"
              className={styles.input}
              value={service.destinations}
              onChange={handleChange}
            />
          </div>
          

          <div className={styles.infoBox}>
            <h4>Create</h4>
            <button className={styles.button} onClick={handleCreate}>
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeService;
