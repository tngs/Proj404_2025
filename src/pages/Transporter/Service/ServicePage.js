import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./ServicePage.module.css";
import {
  getByServiceId,
  postMakingWeightRange,
  postModifyService,
  getDeleteServiceByServiceId,
  getDeleteWeightRange,
  postUpdateWeightRange,
} from "../../../utilities/URLs/transport-service";
import { toast } from "react-toastify";
import { deleteIcon, editIcon } from "../../../components/icon";

const ServicePage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [service, setService] = useState(location.state?.service);
  const [loader, setLoader] = useState(
    <div className={styles.message}>Service loading...</div>
  );
  const [weightRanges, setWeightRanges] = useState({
    minWeight: "",
    maxWeight: "",
    price: 0,
  });
  const [editMode, setEditMode] = useState(false);
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
      });
  }, []);

  if (!service) {
    return loader;
  }

  const handleDelete = () => {
    getDeleteServiceByServiceId(id)
      .then((obj) => {
        toast.success("Service deleted");
        navigate("../");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const handleEdit = () => {
    if (editMode) {
      postModifyService(id, {
        serviceName: service.serviceName,
        serviceDescription: service.serviceDescription,
        departures: service.departures,
        destinations: service.destinations,
      })
        .then((obj) => {
          toast.success("Service updated");
          obj.data.responseWeightRanges = service.responseWeightRanges;
          setService(obj.data);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
    setEditMode(!editMode);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);
    setService((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleAddRange = () => {
    postMakingWeightRange(id, weightRanges)
      .then((res) => {
        getByServiceId(id)
          .then((obj) => {
            setService(obj.data);
            if (obj.data) {
            } else {
              setLoader(
                <div className={styles.message}>Service not found</div>
              );
            }
          })
          .catch((err) => {
            setLoader(
              <div className={styles.message}>Something went wrong</div>
            );
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const handleWeightChange = (field, value) => {
    setWeightRanges((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleWeightDelete = (weight) => {
    const { id } = weight;
    getDeleteWeightRange(id)
      .then((obj) => {
        console.log(obj);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleWeightEdit = (weight) => {
    console.log(weight);
    postUpdateWeightRange(weight.id, weight).then(obj => {

    })
    .catch(err => {
      console.log(err);
    })
    // getDeleteWeightRange(id)
    //   .then((obj) => {
    //     console.log(obj);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  const handleWeighValChange = (_name, id, val) => {
    let wr = service.responseWeightRanges;
    wr.map((e) => {
      if (e.id == id) {
        e[_name] = val;
      }
      return e;
    });
    setService((prev) => {
      return { ...prev, responseWeightRanges: wr };
    });
    // console.log({_name, id, val});
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
            <h4>Service Name</h4>
            {!editMode && <p>{service.serviceName}</p>}
            {editMode && (
              <input
                name="serviceName"
                className={styles.input}
                value={service.serviceName}
                onChange={handleChange}
              />
            )}
          </div>

          <div className={styles.infoBox}>
            <h4>Service Description</h4>
            {!editMode && <p>{service.serviceDescription}</p>}
            {editMode && (
              <input
                name="serviceDescription"
                className={styles.input}
                value={service.serviceDescription}
                onChange={handleChange}
              />
            )}
          </div>

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

          {editMode && (
            <div style={{ gridColumn: "1 / -1" }}>
              <div className={styles.infoBox} style={{ width: "100%" }}>
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
                      <th
                        style={{
                          padding: "12px",
                          textAlign: "left",
                          borderBottom: "2px solid #ddd",
                        }}
                      >
                        Edit
                      </th>
                      <th
                        style={{
                          padding: "12px",
                          textAlign: "left",
                          borderBottom: "2px solid #ddd",
                        }}
                      >
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.responseWeightRanges.map((range, index) => (
                      <tr
                        key={index}
                        style={{ borderBottom: "1px solid #eee" }}
                      >
                        <td style={{ padding: "12px" }}>
                          <input
                            className={styles.input}
                            style={{ width: "auto" }}
                            placeholder="Min Weight"
                            value={range.minWeight}
                            name="minWeight"
                            onChange={(e) => {
                              handleWeighValChange(
                                e.target.name,
                                range.id,
                                e.target.value
                              );
                            }}
                          />
                        </td>
                        <td style={{ padding: "12px" }}>
                          <input
                            className={styles.input}
                            style={{ width: "auto" }}
                            placeholder="Max Weight"
                            value={range.maxWeight}
                            name="maxWeight"
                            onChange={(e) => {
                              handleWeighValChange(
                                e.target.name,
                                range.id,
                                e.target.value
                              );
                            }}
                          />
                        </td>
                        <td style={{ padding: "12px" }}>
                          <input
                            className={styles.input}
                            style={{ width: "auto" }}
                            placeholder="Price"
                            value={range.price}
                            name="price"
                            onChange={(e) => {
                              handleWeighValChange(
                                e.target.name,
                                range.id,
                                e.target.value
                              );
                            }}
                          />
                        </td>
                        <td style={{ padding: "12px" }}>
                          <button
                            onClick={() => handleWeightEdit(range)}
                            style={{ border: 0 }}
                          >
                            <img className={styles.img} src={editIcon} />
                          </button>
                        </td>
                        <td style={{ padding: "12px" }}>
                          <button
                            onClick={() => handleWeightDelete(range)}
                            style={{ border: 0 }}
                          >
                            <img className={styles.img} src={deleteIcon} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Input section for new weight range */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "10px",
                    padding: "16px",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "8px",
                    marginBottom: "12px",
                  }}
                >
                  <input
                    className={styles.input}
                    placeholder="Min Weight"
                    onChange={(e) =>
                      handleWeightChange("minWeight", e.target.value)
                    }
                  />
                  <input
                    className={styles.input}
                    placeholder="Max Weight"
                    onChange={(e) =>
                      handleWeightChange("maxWeight", e.target.value)
                    }
                  />
                  <input
                    className={styles.input}
                    placeholder="Price"
                    onChange={(e) =>
                      handleWeightChange("price", e.target.value)
                    }
                  />
                </div>

                <button className={styles.button} onClick={handleAddRange}>
                  Add Weight Range
                </button>
              </div>
            </div>
          )}
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
