// AdminPage.js
import React, { useEffect, useState } from "react";
import styles from "./AdminPage.module.css";
import ServiceCardWithEditAndDelete from "../../../components/ServiceCardWithEditAndDelete/ServiceCardWithEditAndDelete";

const AdminPage = () => {
  const [services, setServices] = useState([]);
  const [filters, setFilters] = useState({
    status: "all",
    transporter: "all",
    search: "",
  });

  useEffect(() => {
    // Mock data fetching
    const fetchData = async () => {
      const data = [
        {
          serviceId: "1",
          serviceName: "Express Bus Service",
          serviceDescription:
            "Fast and comfortable bus service with minimal stops",
          departures: "New York",
          destinations: "Boston",
          transporterName: "East Coast Transit",
          permitted: true,
        },
        {
          serviceId: "2",
          serviceName: "City Shuttle",
          serviceDescription:
            "Frequent shuttle service connecting major city landmarks",
          departures: "Downtown",
          destinations: "Airport",
          transporterName: "Metro Connect",
          permitted: true,
        },
        {
          serviceId: "3",
          serviceName: "Rural Connection",
          serviceDescription:
            "Service connecting rural communities to urban centers",
          departures: "Farmville",
          destinations: "Central City",
          transporterName: "Country Roads Transport",
          permitted: false,
        },
        {
          serviceId: "4",
          serviceName: "Tourist Explorer",
          serviceDescription:
            "Scenic route connecting major tourist attractions",
          departures: "Hotel District",
          destinations: "National Park",
          transporterName: "Vacation Transit",
          permitted: true,
        },
        {
          serviceId: "5",
          serviceName: "Night Owl",
          serviceDescription: "Late night service for evening commuters",
          departures: "Entertainment District",
          destinations: "Residential Areas",
          transporterName: "Metro Connect",
          permitted: false,
        },
      ];
      setServices(data);
    };
    fetchData();
  }, []);

  const filteredServices = services.filter((service) => {
    const matchStatus =
      filters.status === "all" ||
      (filters.status === "permitted" && service.permitted) ||
      (filters.status === "pending" && !service.permitted);

    const matchTransporter =
      filters.transporter === "all" ||
      service.transporterName === filters.transporter;

    const matchSearch =
      filters.search === "" ||
      [
        service.serviceName,
        service.serviceDescription,
        service.departures,
        service.destinations,
        service.transporterName,
      ]
        .join(" ")
        .toLowerCase()
        .includes(filters.search.toLowerCase());

    return matchStatus && matchTransporter && matchSearch;
  });

  const transporterOptions = [
    ...new Set(services.map((service) => service.transporterName)),
  ];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
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
      </header>
      <main className={styles.main}>
        {filteredServices.map((service) => (
            <ServiceCardWithEditAndDelete key = {service.serviceId} service={service} editHandler={()=>{}} deleteHandler={()=>{}}/>
        ))}
      </main>
    </div>
  );
};

export default AdminPage;
