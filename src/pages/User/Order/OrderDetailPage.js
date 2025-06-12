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
  const paid = location.state.paid ? location.state.paid : false;

  const [orderDetail, setOrderDetail] = useState(location.state.orderDetail);
  const [editMode, setEditMode] = useState(false);

  const [loader, setLoader] = useState(
    <div className={styles.message}>Order loading...</div>
  );
  useEffect(() => {
    getGetByApplyId({ applyId: id })
      .then((obj) => {
        setOrderDetail(obj.data);
      })
      .catch((err) => {
        setLoader(<div className={styles.message}>Something went wrong</div>);
        toast.error(err.message);
      });
  }, []);

  if (!orderDetail) {
    return loader;
  }

  const handleInputChange = (field, value) => {
    setOrderDetail(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePay = () => {
    navigate("/payment", {state: {...orderDetail}})
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
      postUpdateByApplyId(id, orderDetail)
        .then((obj) => {
          toast.success("Updated successfully!");
          console.log(obj.data);
          // setOrderDetail(obj.data);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
    setEditMode(!editMode);
  };

  return (
    <div className={styles.page}>
      <div className={styles.cover} style={{ backgroundColor: "#2c3e50" }}>
        <div className={styles.overlay}>
          <h1 className={styles.coverTitle}>
            {orderDetail.serviceName || orderDetail.title}
          </h1>
          <p className={styles.companyName}>
            Transported by {orderDetail.companyName}
          </p>
        </div>
      </div>

      <div className={styles.details}>
        <h2>Item Description</h2>
        {editMode ? (
          <textarea
            className={styles.selectInput}
            value={orderDetail.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            rows={4}
            style={{ width: '100%', marginBottom: '24px', resize: 'vertical' }}
          />
        ) : (
          <p>{orderDetail.description}</p>
        )}

        <div className={styles.infoGrid}>
          <div className={styles.infoBox}>
            <h4>Departure</h4>
            {editMode ? (
              <input
                type="text"
                className={styles.selectInput}
                value={orderDetail.departure}
                onChange={(e) => handleInputChange('departure', e.target.value)}
              />
            ) : (
              <p>{orderDetail.departure}</p>
            )}
          </div>

          <div className={styles.infoBox}>
            <h4>Destination</h4>
            {editMode ? (
              <input
                type="text"
                className={styles.selectInput}
                value={orderDetail.destination}
                onChange={(e) => handleInputChange('destination', e.target.value)}
              />
            ) : (
              <p>{orderDetail.destination}</p>
            )}
          </div>

          <div className={styles.infoBox}>
            <h4>Transporter</h4>
            <p>{orderDetail.transporterName}</p>
          </div>
          <div
            className={styles.infoBox}
            style={{ width: "100%", marginTop: "20px", gridColumn: "1 / -1" }}
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
                  <tr style={{ borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: "12px" }}>{orderDetail.weightRange.minWeight}</td>
                    <td style={{ padding: "12px" }}>{orderDetail.weightRange.maxWeight}</td>
                    <td style={{ padding: "12px" }}>{orderDetail.weightRange.price}</td>
                  </tr>
              </tbody>
            </table>
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
