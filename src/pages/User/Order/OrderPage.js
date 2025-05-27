import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import styles from "./OrderPage.module.css";
import { postApplyByTransportUser } from "../../../utilities/URLs/transport-apply-service";
import { getByServiceId } from "../../../utilities/URLs/transport-service";
import { toast } from "react-toastify";

const OrderPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [service, setService] = useState(location.state?.service);
  const [loader, setLoader] = useState(
    <div className={styles.message}>Service loading...</div>
  );

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
    // navigate("/orderDetails/" + id, { state: { service } });
    postApplyByTransportUser(id, "10kg", {
      departure: service.departures,
      destination: service.destinations,
      description: service.serviceDescription,
    })
      .then((obj) => {
        toast.success("Order placed successfully");
        navigate("/orderDetail/" + obj.data.orderId, {
          state: { order: obj.data },
        });
      })
      .catch((err) => {
        console.log("postApplyByTransportUser err", err);
      });
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
        <button onClick={handleOrder} className={styles.submitButton}>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
