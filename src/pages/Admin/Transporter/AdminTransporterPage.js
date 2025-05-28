// AdminTransporterPage.js
import React, { useEffect, useState } from "react";
import styles from "./AdminTransporterPage.module.css";
import TransporterCard from "../../../components/TransporterCard/TransporterCard";
import { getTransporter } from "../../../utilities/URLs/transporter-service";
import { toast } from "react-toastify";
const AdminTransporterPage = () => {
  const [transporters, setTransporters] = useState([]);
  useEffect(() => {
    getTransporter().then((obj) => {
      setTransporters(obj.data);
    }).catch((err) => {
      toast.error(err.message);
    });
  }, []);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {transporters.map((transporter) => (
          <TransporterCard
            key={transporter.email}
            transporter={transporter}
          />
        ))}
      </main>
    </div>
  );
};

export default AdminTransporterPage;
