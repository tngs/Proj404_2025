import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import styles from "./ServicePage.module.css";
import { getByServiceId } from "../../../utilities/URLs/transport-service";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ServicePage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [service, setService] = useState(location.state?.service);
  const [loader, setLoader] = useState(
    <div className={styles.message}>Service loading...</div>
  );
  const account = useSelector((state) => state.account);
  const navigate = useNavigate();
  useEffect(() => {
    getByServiceId(id)
      .then((obj) => {
        setService(obj.data);
        if (obj.data) {
        } else {
          setLoader(<div className={styles.message}>Service not found</div>);
        }
      })
      .catch((err) => {
        setLoader(<div className={styles.message}>Something went wrong</div>);
        toast.error(err.message);
      });
  }, []);

  if (!service) {
    return loader;
  }

  const handleOrder = () => {
    navigate("../order/" + id, { state: { service } });
  };

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
        </div>
        <div
          className={styles.infoBox}
          style={{ width: "100%", marginTop: "20px" }}
        >
          <h4 style={{ marginBottom: "12px" }}>Weight Ranges</h4>

          {/* Display existing weight ranges as table */}
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "20px",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f5f5f5" }}>
                <th
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    borderBottom: "2px solid #ddd",
                  }}
                >
                  Min Weight
                </th>
                <th
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    borderBottom: "2px solid #ddd",
                  }}
                >
                  Max Weight
                </th>
                <th
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    borderBottom: "2px solid #ddd",
                  }}
                >
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {service.responseWeightRanges.map((range, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "12px" }}>{range.minWeight}</td>
                  <td style={{ padding: "12px" }}>{range.maxWeight}</td>
                  <td style={{ padding: "12px" }}>{range.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.orderButton} onClick={handleOrder} disabled={!account.loggedIn || account.role !== "user"} style={{ backgroundColor: !account.loggedIn || account.role !== "user" ? "gray" : "#0077cc" }}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
