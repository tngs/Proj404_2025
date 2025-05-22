import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import styles from "./OrderPage.module.css";
import servicesDB from "../../../servicesDB.json";

const OrderPage = () => {
  const { id, state } = useParams();
  const location = useLocation();
  const [service, setService] = useState(location.state?.service);
  const navigate = useNavigate();
  const weightRangeTable = [
    [0, 100],
    [100, 1000],
    [1000, 9000],
  ];
  const [weightRange, setWeightRange] = useState(0); //later send as optionNumber

  if (!service) {
    return <div className={styles.message}>Service data not found.</div>;
  }
  /////////////////////////////////

  const handleChange = (e) => {
    setWeightRange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with your actual form handling logic
    console.log("Selected weight id:", weightRange);
    navigate("../orderDetail/" + id);
  };
  ////////////////////////////////////
  const weightConverter = (weight) => {
    if (weight < 1000) return weight + "g";
    return weight / 1000 + "kg";
  };
  return (
    <div className={styles.page}>
      <div
        className={styles.cover}
        style={{ backgroundImage: `url(${service.companyImage})` }}
      >
        <div className={styles.overlay}>
          <h1 className={styles.coverTitle}>{service.title}</h1>
          <p className={styles.companyName}>{service.companyName}</p>
        </div>
      </div>

      <div className={styles.details}>
        <h2>Description</h2>
        <p>{service.description}</p>

        <div className={styles.infoGrid}>
          <div className={styles.infoBox}>
            <h4>Location</h4>
            <p>{service.location}</p>
          </div>

          <div className={styles.infoBox}>
            <h4>Service Type</h4>
            <p>{service.serviceType}</p>
          </div>

          <div className={styles.infoBox}>
            <h4>Rating</h4>
            <p>⭐ {service.rating} / 5</p>
          </div>

          <div className={styles.infoBox}>
            <h4>Service ID</h4>
            <p>{service.id}</p>
          </div>
          <form onSubmit={handleSubmit} className={styles.formGroup}>
            <label htmlFor="weightRanges">Choose the weight range:</label>
            <select
              name="weight ranges"
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
            <input
              type="submit"
              value="Submit"
              className={styles.submitButton}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
