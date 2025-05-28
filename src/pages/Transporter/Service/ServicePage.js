import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./ServicePage.module.css";
import { getByServiceId } from "../../../utilities/URLs/transport-service";
import {
  postModifyService,
  getDeleteServiceByServiceId,
} from "../../../utilities/URLs/transport-service";
import { postMakingWeightRange} from "../../../utilities/URLs/transport-service"
import { toast } from "react-toastify";

const ServicePage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [service, setService] = useState(location.state?.service);
  const [loader, setLoader] = useState(
    <div className={styles.message}>Service loading...</div>
  );
  const [weightRanges, setWeightRanges] = useState([{minWeight: "", maxWeight: "",price: 0}]);
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    getByServiceId(id)
      .then((obj) => {
        console.log("obj", obj.data);
        setService(obj.data);
        if (obj.data) {
        } else {
          setLoader(<div className={styles.message}>Service not found</div>);
        }
      })
      .catch((err) => {
        setLoader(<div className={styles.message}>Something went wrong</div>);
      });
  }, []);

  if (!service) {
    return loader;
  }

  const handleDelete = () => {
    getDeleteServiceByServiceId(id).then((obj) => {
      toast.success("Service deleted"); 
      navigate("../");
    }).catch((err) => {
      toast.error(err.message);
    });
  };
  const handleEdit = () => {
    if (editMode) {
      postModifyService(id, {
        serviceName: service.name,
        serviceDescription: service.description,
        departures: service.departures,
        destinations: service.destinations,
        transporterName: service.transporterName,
        price: 0,
      }).then((obj) => {
        toast.success("Service updated");
        setService(obj.data);
      }).catch((err) => {
        toast.error(err.message);
      });
    }
    setEditMode(!editMode);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setService((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleAddRange = () => {
    postMakingWeightRange(id, weightRanges[0]).then((res) => {
      console.log("res", res);
    })
    .catch((err) => {
      toast.error(err.message);
    });
    // setWeightRanges([
    //   ...weightRanges,
    //   { minWeight: "", maxWeight: "", price: "" },
    // ]);
  };
  const handleWeightChange = (index, field, value) => {
    const updatedRanges = [...weightRanges];
    updatedRanges[index][field] = value;
    setWeightRanges(updatedRanges);
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
            {editMode &&
            <div style={{ gridColumn: "1 / -1" }}>
            <div className={styles.infoBox} style={{ width: "100%" }}>
              <h4 style={{marginBottom: "12px"}}>Weight Ranges</h4>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "10px",
                  marginBottom: "12px",
                  padding: "12px",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                }}
              >
                <div>
                  <strong>Min Weight</strong>
                </div>
                <div>
                  <strong>Max Weight</strong>
                </div>
                <div>
                  <strong>Price</strong>
                </div>
              </div>
              {weightRanges.map((range, index) => (
                <div
                  key={index}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "10px",
                    marginBottom: "16px",
                    padding: "12px",
                    backgroundColor: "#fff", 
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    borderTop: index === 0 ? "none" : "1px solid #eee"
                  }}
                >
                  <input
                    className={styles.input}
                    type="number"
                    placeholder="Min"
                    value={range.minWeight}
                    onChange={(e) =>
                      handleWeightChange(index, "minWeight", e.target.value)
                    }
                  />
                  <input
                    className={styles.input}
                    type="number"
                    placeholder="Max"
                    value={range.maxWeight}
                    onChange={(e) =>
                      handleWeightChange(index, "maxWeight", e.target.value)
                    }
                  />
                  <input
                    className={styles.input}
                    type="number"
                    placeholder="Price"
                    value={range.price}
                    onChange={(e) =>
                      handleWeightChange(index, "price", e.target.value)
                    }
                  />
                </div>
              ))}
              <button className={styles.button} onClick={handleAddRange}>
                Add Weight Range
              </button>
            </div>
          </div>
            }
          <div className={styles.infoBox}>
            <h4>Edit</h4>
            <button className={styles.button} onClick={handleEdit}>
              {!editMode ? "Edit" : "Save"}
            </button>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
