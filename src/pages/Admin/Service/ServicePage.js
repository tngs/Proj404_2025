import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import styles from "./ServicePage.module.css";
import * as request from "../../../utilities/URLs";
import { useSelector } from "react-redux";

const ServicePage = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.account.user);
  const location = useLocation();
  const service = location.state?.service;
  const [modifyMode, setModifyMode] = React.useState(false);

  const [formData, setFormData] = useState(service);
  useEffect(() => {
    request.transport_service.getByServiceId(id);
  }, [id]);

  if (!service) {
    return <div className={styles.message}>Service data not found.</div>;
  }

  const handleModify = () => {
    if (user.id == service.transporterId || user.role == "admin") setModifyMode(true);
  };
  const handleSave = () => {
    if (user.id == service.transporterId || user.role == "admin") {
      console.log("Updated Data:", formData);
      setModifyMode(false); // exit modify mode after save
    }
  };
  console.log('modifyMode', modifyMode)
  return (
    <div className={styles.page}>
      <div className={styles.cover} style={{ backgroundColor: "#2c3e50" }}>
        <div className={styles.overlay}>
          <h1
            className={styles.coverTitle}
            contentEditable={modifyMode}
            suppressContentEditableWarning={true}
            style={{ border: `${modifyMode ? 1 : 0}px solid white` }}
            onChange={(e) => {
              setFormData({ ...formData, serviceName: e.target.value });
            }}
          >
            {formData.serviceName}
          </h1>
          <p className={styles.companyName}>
            Transported by {formData.transporterName}
          </p>
        </div>
      </div>

      <div className={styles.details}>
        <h2>Description</h2>
        <p
          contentEditable={modifyMode}
          suppressContentEditableWarning={true}
          style={{ border: `${modifyMode ? 1 : 0}px solid black` }}
          onChange={(e) => {
            setFormData({ ...formData, serviceDescription: e.target.value });
          }}
        >
          {formData.serviceDescription}
        </p>

        <div className={styles.infoGrid}>
          <div className={styles.infoBox}>
            <h4>Departures</h4>
            <p
              contentEditable={modifyMode}
              suppressContentEditableWarning={true}
              style={{ border: `${modifyMode ? 1 : 0}px solid black` }}
              onChange={(e) => {
                setFormData({ ...formData, departures: e.target.value });
              }}
            >
              {formData.departures}
            </p>
          </div>

          <div className={styles.infoBox}>
            <h4>Destinations</h4>
            <p
              contentEditable={modifyMode}
              suppressContentEditableWarning={true}
              style={{ border: `${modifyMode ? 1 : 0}px solid black` }}
              onChange={(e) => {
                setFormData({ ...formData, destinations: e.target.value });
              }}
            >
              {formData.destinations}
            </p>
          </div>

          <div className={styles.infoBox}>
            <h4>Transporter</h4>
            <p>{formData.transporterName}</p>
          </div>

          <div className={styles.infoBox}>
            <h4>Transporter ID</h4>
            <p>{formData.transporterId}</p>
          </div>

          <div className={styles.infoBox}>
            <h4>Service ID</h4>
            <p>{formData.serviceId}</p>
          </div>

          <div className={styles.infoBox}>
            <h4>Permitted</h4>
            {modifyMode ? (
              <select
                value={formData.permitted ? "true" : "false"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    permitted: e.target.value === "true",
                  })
                }
                className={styles.inputInline}
              >
                <option value="true">✅ Allowed</option>
                <option value="false">❌ Not Allowed</option>
              </select>
            ) : (
              <p>{formData.permitted ? "✅ Allowed" : "❌ Not Allowed"}</p>
            )}
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <button
            className={styles.orderButton}
            onClick={() => (modifyMode ? handleSave() : handleModify())}
          >
            {modifyMode ? "Save" : "Modify"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
