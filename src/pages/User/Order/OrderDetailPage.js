import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./OrderDetailPage.module.css";
import {
  getGetByApplyId,
  getDeleteByApplyId,
  postUpdateByApplyId,
} from "../../../utilities/URLs/transport-apply-service";
import { getPayServiceByApplyId } from "../../../utilities/URLs/payment-service";
import { toast } from "react-toastify";

const OrderDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const initialOrder = location.state?.order?.detailed || {};
  const [orderDetail, setOrderDetail] = useState(initialOrder);
  let { orderId, paid, serviceId, userId } = location.state?.order || {};

  const [departure, setDeparture] = useState(initialOrder.departure || "");
  const [destination, setDestination] = useState(
    initialOrder.destination || ""
  );
  const [description, setDescription] = useState(
    initialOrder.serviceDescription || initialOrder.description || ""
  );
  const [transporterName, setTransporterName] = useState(
    initialOrder.transporterName || ""
  );
  const [weight, setWeight] = useState(location.state?.weight || "0g to 100g");
  const [editMode, setEditMode] = useState(false);
  const [loader, setLoader] = useState(
    <div className={styles.message}>Order loading...</div>
  );

  useEffect(() => {
    getGetByApplyId({ applyId: id })
      .then((obj) => {
        ({ orderId, paid, serviceId, userId } = obj.data);
        setOrderDetail(obj.data.detailed);
        setDeparture(obj.data.detailed.departure);
        setDestination(obj.data.detailed.destination);
        setDescription(
          obj.data.detailed.serviceDescription || obj.data.detailed.description
        );
        setTransporterName(obj.data.detailed.transporterName);
      })
      .catch((err) => {
        setLoader(<div className={styles.message}>Something went wrong</div>);
        toast.error(err.message);
      });
  }, []);

  if (!orderDetail) {
    return loader;
  }

  const handlePay = () => {
    toast.info("Paying: " + id);
  };

  const handleDelete = () => {
    getDeleteByApplyId(id)
      .then(() => {
        toast.success("Deleted: " + id);
        navigate("/unpaid-orders");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleEdit = () => {
    if (!paid && editMode) {
      postUpdateByApplyId(id, {
        departure,
        destination,
        description,
        transporterName,
      })
        .then(() => {
          toast.success("Updated: " + id);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
    setEditMode(!editMode);
  };

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  return (
    <div className={styles.page}>
      <div className={styles.cover} style={{ backgroundColor: "#2c3e50" }}>
        <div className={styles.overlay}>
          <h1 className={styles.coverTitle}>
            {orderDetail.serviceName || orderDetail.title}
          </h1>
          <p className={styles.companyName}>
            Transported by {transporterName || orderDetail.companyName}
          </p>
        </div>
      </div>

      <div className={styles.details}>
        <h2>Description</h2>
        {editMode ? (
          <textarea
            value={description}
            onChange={handleInputChange(setDescription)}
            className={styles.selectInput}
          />
        ) : (
          <p>{description}</p>
        )}

        <div className={styles.infoGrid}>
          <div className={styles.infoBox}>
            <h4>Departures</h4>
            {editMode ? (
              <input
                value={departure}
                onChange={handleInputChange(setDeparture)}
                className={styles.selectInput}
              />
            ) : (
              <p>{departure}</p>
            )}
          </div>

          <div className={styles.infoBox}>
            <h4>Destinations</h4>
            {editMode ? (
              <input
                value={destination}
                onChange={handleInputChange(setDestination)}
                className={styles.selectInput}
              />
            ) : (
              <p>{destination}</p>
            )}
          </div>

          <div className={styles.infoBox}>
            <h4>Transporter</h4>
            {editMode ? (
              <input
                value={transporterName}
                onChange={handleInputChange(setTransporterName)}
                className={styles.selectInput}
              />
            ) : (
              <p>{transporterName}</p>
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
