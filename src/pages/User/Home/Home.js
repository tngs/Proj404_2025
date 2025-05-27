import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import ServiceList from "../../../components/List/ServiceList";
// import servicesDB from "../../../servicesDB.json";
import {
  get as getServices,
  getByServiceName,
} from "../../../utilities/URLs/transport-service";
import Searchbar from "../../../components/Searchbar/Searchbar";
import { toast } from "react-toastify";

const Home = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getServices()
      .then((obj) => {
        setServices(obj.data);
      })
      .catch((err) => toast.error(err.message));
  }, []);
  const enterHandler = (e) => {
    if (e.key === "Enter") {
      getByServiceName(search)
        .then((obj) => setServices(obj.data))
        .catch((err) => toast.error(err.message));
    }
  };
  const eventHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className={styles["container-centers-top"]}>
      <Searchbar
        onKeyDown={enterHandler}
        onChange={eventHandler}
        value={search}
      />
      <ServiceList services={services} />
    </div>
  );
};

export default Home;
