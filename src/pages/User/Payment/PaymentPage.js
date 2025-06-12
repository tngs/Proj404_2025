import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./PaymentPage.module.css";
import { getPayServiceByApplyId } from "../../../utilities/URLs/payment-service";
import requestPay from "./helper";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [paymentData, setPaymentData] = useState({
  });

  useEffect(() => {
    getPayServiceByApplyId(location.state.serviceApplyId).then((obj) => {
      setPaymentData(obj.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(paymentData);
  };

  const handleSubmit = (e) => {
    requestPay(paymentData);
    // e.preventDefault();
    // // Here you would typically process the payment
    // // For now, we'll just navigate to the details page
    // navigate("/payment/details", { state: { paymentData } });
  };
  console.log(location.state);
  return (
    <div className={styles.paymentContainer}>
      <h1 className={styles.title}>Payment</h1>
      <div className={styles.paymentForm}>
        <button type="submit" className={styles.payButton} onClick={handleSubmit}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
