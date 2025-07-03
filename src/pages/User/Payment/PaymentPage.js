import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./PaymentPage.module.css";
import {
  getPayServiceByApplyId,
  postPayment,
} from "../../../utilities/URLs/payment-service";
import requestPay from "./helper";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [paymentData, setPaymentData] = useState({});
  // console.log(location.state);
  useEffect(() => {
    getPayServiceByApplyId(location.state.serviceApplyId)
      .then((obj) => {
        console.log(obj);
        setPaymentData(obj.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setPaymentData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  //   console.log(paymentData);
  // };

  const handleSubmit = (e) => {
    const rqst = requestPay(paymentData);
    rqst.then((obj) => console.log(obj)).catch((err) => console.error(err));
  };
  console.log(location.state);
  /*
   *  {
   *    "serviceApplyId": "01f32e4f-b3f0-4a0e-8271-7b658550262b",
   *    "departure": "Busan",
   *    "destination": "Seoul",
   *    "serviceName": "TransportServiceNo1",
   *    "transporterName": "transporter",
   *    "transportUserId": "TransportUsere3244eb6-ce4f-4aa9-875b-21b685b972f1",
   *    "weightRange": {
   *        "minWeight": "0",
   *        "maxWeight": "100kg",
   *        "price": 100
   *    },
   *    "description": "7",
   *    "date": "2025-06-17"
   *  }
   */
  return (
    <div className={styles.paymentContainer}>
      <h1 className={styles.title}>Confirm Your Payment</h1>

      <div className={styles.summaryCard}>
        <div className={styles.summaryRow}>
          <span className={styles.label}>Service:</span>
          <span>{location.state.serviceName}</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.label}>From:</span>
          <span>{location.state.departure}</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.label}>To:</span>
          <span>{location.state.destination}</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.label}>Description:</span>
          <span>{location.state.description}</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.label}>Transporter:</span>
          <span>{location.state.transporterName}</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.label}>Date:</span>
          <span>{location.state.date}</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.label}>Price:</span>
          <span className={styles.price}>
            {location.state.weightRange.price}₩
          </span>
        </div>
      </div>

      <button type="submit" className={styles.payButton} onClick={handleSubmit}>
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
