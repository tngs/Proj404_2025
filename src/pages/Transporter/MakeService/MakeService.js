import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./MakeService.module.css";
import { getMakingService } from "../../../utilities/URLs/transport-service";

const MakeService = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [service, setService] = useState({});
  console.log("location.state", location.state);
  const [weightRange, setWeightRange] = useState(
    location.state?.weightReport || "0g to 100g"
  ); //!hard value fix it

  const [editMode, setEditMode] = useState(true);

  const weightRangeTable = [
    [0, 100],
    [100, 1000],
    [1000, 9000],
  ];
  const weightConverter = (weight) => {
    return weight < 1000 ? `${weight}g` : `${weight / 1000}kg`;
  };

  if (!service) {
    return <div className={styles.message}>Service data not found.</div>;
  }
  const weightChange = (e) => {
    setWeightRange(e.target.value);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setService((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleCreate = () => {
    getMakingService(id); //?why not using the other inputs
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
            <h4>Departures</h4>
            {!editMode && <p>{service.departures}</p>}
            {editMode && (
              <input
                name="departures"
                className={styles.input}
                value={service.departures}
                onChange={handleChange}
              />
            )}
          </div>

          <div className={styles.infoBox}>
            <h4>Destinations</h4>
            {!editMode && <p>{service.destinations}</p>}
            {editMode && (
              <input
                name="destinations"
                className={styles.input}
                value={service.destinations}
                onChange={handleChange}
              />
            )}
          </div>

          <div className={styles.infoBox}>
            <h4>Transporter</h4>
            {!editMode && <p>{service.transporterName}</p>}
            {editMode && (
              <input
                name="transporterName"
                className={styles.input}
                value={service.transporterName}
                onChange={handleChange}
              />
            )}
          </div>
          <div className={styles.infoBox}>
            <h4>Selected Weight</h4>
            {!editMode && <p>{weightRange}</p>}
            {editMode && (
              <select
                id="weightRanges"
                value={weightRange}
                onChange={weightChange}
                className={styles.selectInput}
              >
                {weightRangeTable.map((w, i) => (
                  <option
                    key={i}
                    value={`${weightConverter(w[0])} to ${weightConverter(
                      w[1]
                    )}`}
                  >
                    {weightConverter(w[0])} to {weightConverter(w[1])}
                  </option>
                ))}
              </select>
            )}
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
