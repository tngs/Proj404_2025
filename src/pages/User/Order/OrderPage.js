import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import styles from "./OrderPage.module.css";
import {postApplyByTransportUser} from '../../../utilities/URLs/transport-apply-service'

const OrderPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [service, setService] = useState(location.state?.service);
  const navigate = useNavigate();

  const weightRangeTable = [
    [0, 100],
    [100, 1000],
    [1000, 9000],
  ];
  const [weightRange, setWeightRange] = useState(0);

  if (!service) {
    return <div className={styles.message}>Service data not found.</div>;
  }

  const handleChange = (e) => {
    setWeightRange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postApplyByTransportUser({
      erviceId: id,
      weight: weightRangeTable[weightRange],
    }).then(obj => console.log('obj', obj));
    alert("Order added");
    navigate("../orderDetail/" + id, {state: {service, serviceId: id,
      weightReport: weightRangeTable[weightRange][0] + " to " + weightRangeTable[weightRange][1]},});
  };

  const weightConverter = (weight) => {
    return weight < 1000 ? `${weight}g` : `${weight / 1000}kg`;
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

          {/* <div className={styles.infoBox}>
            <h4>Transporter ID</h4>
            <p>{service.transporterId}</p>
          </div>

          <div className={styles.infoBox}>
            <h4>Service ID</h4>
            <p>{service.serviceId}</p>
          </div> */}

          {/* Dropdown Form */}
        </div>
        <form onSubmit={handleSubmit} className={styles.formGroup}>
          <label htmlFor="weightRanges">Choose Weight Range</label>
          <select
            id="weightRanges"
            value={weightRange}
            onChange={handleChange}
            className={styles.selectInput}
          >
            {weightRangeTable.map((w, i) => (
              <option key={i} value={i}>
                {weightConverter(w[0])} to {weightConverter(w[1])}
              </option>
            ))}
          </select>
          <input type="submit" value="Submit" className={styles.submitButton} />
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
