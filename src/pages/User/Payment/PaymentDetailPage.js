import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './PaymentDetailPage.module.css';

const PaymentDetailPage = () => {
  const location = useLocation();
  const { paymentData } = location.state || {};

  const formatCardNumber = (number) => {
    return `**** **** **** ${number.slice(-4)}`;
  };

  return (
    <div className={styles.detailContainer}>
      <h1 className={styles.title}>Payment Details</h1>
      
      {paymentData ? (
        <div className={styles.detailCard}>
          <div className={styles.detailRow}>
            <span className={styles.label}>Card Number:</span>
            <span className={styles.value}>{formatCardNumber(paymentData.cardNumber)}</span>
          </div>
          
          <div className={styles.detailRow}>
            <span className={styles.label}>Amount Paid:</span>
            <span className={styles.value}>${paymentData.amount}</span>
          </div>
          
          <div className={styles.detailRow}>
            <span className={styles.label}>Payment Status:</span>
            <span className={styles.status}>Successful</span>
          </div>
          
          <div className={styles.detailRow}>
            <span className={styles.label}>Transaction Date:</span>
            <span className={styles.value}>{new Date().toLocaleString()}</span>
          </div>

          <div className={styles.message}>
            Thank you for your payment! A confirmation email has been sent to your registered email address.
          </div>
        </div>
      ) : (
        <div className={styles.noData}>
          No payment details available
        </div>
      )}
    </div>
  );
};

export default PaymentDetailPage; 