import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import styles from "./OrderPage.module.css";
import { getByServiceId } from "../../../utilities/URLs/transport-service";
import { postApplyByTransportUser } from "../../../utilities/URLs/transport-apply-service";
import { toast } from "react-toastify";

const ServicePage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [service, setService] = useState(location.state?.service);
  const [loader, setLoader] = useState(
    <div className={styles.message}>Service loading...</div>
  );
  const [selectedRange, setSelectedRange] = useState(0);

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
  if (!service.departure) {
    setService({
      ...service,
      departure: service.departures,
      destination: service.destinations,
      description: "",
    });
  }
  if (!service) {
    return loader;
  }

  const handleOrder = () => {
    if (selectedRange === 0) {
      toast.error("Please select a weight range");
      return;
    }
    postApplyByTransportUser(id, selectedRange, service)
      .then((obj) => {
        console.log(obj);
        navigate("../orderDetail/" + obj.data.serviceApplyId, {
          state: { orderDetail: obj.data },
        });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  console.log(service);
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
            <input
              type="text"
              value={service.departure || service.departures}
              onChange={(e) =>
                setService({ ...service, departure: e.target.value })
              }
            />
          </div>

          <div className={styles.infoBox}>
            <h4>Destinations</h4>
            <p>{service.destinations}</p>
            <input
              type="text"
              value={service.destination || service.destinations}
              onChange={(e) =>
                setService({ ...service, destination: e.target.value })
              }
            />
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
          <h4>Item Description</h4>
          <input
            type="text"
            value={service.description || service.serviceDescription}
            onChange={(e) =>
              setService({ ...service, description: e.target.value })
            }
          />
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
                  <td style={{ padding: "12px" }}>
                    <input
                      type="radio"
                      name="weightRange"
                      value={range.id}
                      style={{ marginRight: "8px" }}
                      onChange={(e) => {
                        console.log(e.target.value);
                        setSelectedRange(e.target.value);
                      }}
                    />
                    {range.minWeight}
                  </td>
                  <td style={{ padding: "12px" }}>{range.maxWeight}</td>
                  <td style={{ padding: "12px" }}>{range.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.orderButton} onClick={handleOrder}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
