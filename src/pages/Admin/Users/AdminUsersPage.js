// AdminUsersPage.js
import React, { useEffect, useState } from "react";
import styles from "./AdminUsersPage.module.css";
import ServiceCardWithEditAndDelete from "../../../components/ServiceCardWithEditAndDelete/ServiceCardWithEditAndDelete";
import servicesDB from "../../../servicesDB.json";
import { getGetServicesByEmail } from "../../../utilities/URLs/administration-service";
import { object } from "framer-motion/client";

const AdminUsersPage = () => {
  alert("AdminUsersPage make!");
  const [services, setServices] = useState(servicesDB);
  useEffect(() => {
    getGetServicesByEmail().then((obj) => {
      // console.log("obj", obj)
    });
  }, []);

  const transporterOptions = [
    ...new Set(services.map((service) => service.transporterName)),
  ];
  const permitHandler = (id) => {
    //TEST //!TEST
    setServices(
      services.map((service) =>
        service.serviceId === id ? { ...service, permitted: true } : service
      )
    );
  };
  return (
    <div className={styles.page}>
      {/* <header className={styles.header}>
        <h1 className={styles.title}>Transport Services Admin</h1>
        <div className={styles.filters}>
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          >
            <option value="all">All</option>
            <option value="permitted">Permitted</option>
            <option value="pending">Pending</option>
          </select>
          <select
            value={filters.transporter}
            onChange={(e) =>
              setFilters({ ...filters, transporter: e.target.value })
            }
          >
            <option value="all">All Transporters</option>
            {transporterOptions.map((name, i) => (
              <option key={i} value={name}>
                {name}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
        </div>
      </header> */}
      <main className={styles.main}>
        {services.map((service) => (
          <ServiceCardWithEditAndDelete
            key={service.serviceId}
            service={service}
            permitHandler={permitHandler}
          />
        ))}
      </main>
    </div>
  );
};

export default AdminUsersPage;
