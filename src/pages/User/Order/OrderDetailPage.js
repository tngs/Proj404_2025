import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./OrderDetailPage.module.css";
import servicesDB from "../../../servicesDB.json";
import { getGetByApplyId } from "../../../utilities/URLs/transport-apply-service";
import { getPayServiceByApplyId } from "../../../utilities/URLs/payment-service";
import {
  getDeleteByApplyId,
  postUpdateByApplyId,
} from "../../../utilities/URLs/transport-apply-service";

const OrderDetailPage = () => {
  
  // const { orderId, serviceId, userId, paid, detailed } = props;
  // const order = detailed;

  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const paid = location.state?.paid ? location.state.paid : false;
  const [service, setService] = useState(location.state?.service || null);
  console.log("location.state", location.state);
  const [weightRange, setWeightRange] = useState(
    location.state?.weightReport || "0g to 100g"
  ); //!hard value fix it

  const [editMode, setEditMode] = useState(false);

  const weightRangeTable = [
    [0, 100],
    [100, 1000],
    [1000, 9000],
  ];

  //? departure: departures;
  //? destination: destinations;
  //? serviceName: serviceName;
  //? transporterName: transporterName;
  //? transportUserName: none;
  //? weightRange: weightRange;
  //? description: description;

  useEffect(() => {
    //TODO have to setService later
    getGetByApplyId({ applyId: id }).then((obj) => console.log("obj", obj));
    if (!service) {
      const found = servicesDB.find(
        (p) => p.serviceId === id || p.id === parseInt(id)
      );
      if (found) setService(found);
    }
  }, [id, service]);

  const weightConverter = (weight) => {
    return weight < 1000 ? `${weight}g` : `${weight / 1000}kg`;
  };

  if (!service) {
    return <div className={styles.message}>Service data not found.</div>;
  }
  const handlePay = () => {
    getPayServiceByApplyId(id).then((obj) => console.log("obj", obj));
    alert("Payed: " + id);
  };
  const handleDelete = () => {
    getDeleteByApplyId(id).then((obj) => console.log("obj", obj));
    alert("Deleted: " + id);
    navigate("../");
  };
  const handleEdit = () => {
    if (!paid && editMode) {
      postUpdateByApplyId(id, {
        departure: service.departure,
        destination: service.destination,
        description: service.serviceDescription,
      }).then(obj=>console.log('obj', obj));
    }
    setEditMode(!editMode);
  };
  const handleChange = (e) => {
    setWeightRange(e.target.value);
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
            <p>{service.serviceId || service.id}</p>
          </div> */}

          <div className={styles.infoBox}>
            <h4>Selected Weight</h4>
            {!editMode && <p>{weightRange}</p>}
            {editMode && (
              <select
                id="weightRanges"
                value={weightRange}
                onChange={handleChange}
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
          {!paid && (
            <div className={styles.infoBox}>
              <h4>Edit</h4>
              <button className={styles.button} onClick={handleEdit}>
                {!editMode ? "Edit" : "Save"}
              </button>
            </div>
          )}
          {!paid && (
            <div className={styles.infoBox}>
              <h4>Delete</h4>
              <button
                className={styles.button}
                style={{ backgroundColor: "#F21313" }}
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          )}
          <div className={styles.infoBox}>
            <h4>{paid ? "Paid" : "Unpaid"}</h4>
            {!paid && (
              <button className={styles.button} onClick={handlePay}>
                Pay
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;
