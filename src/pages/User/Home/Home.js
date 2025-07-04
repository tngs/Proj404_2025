import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import ServiceList from "../../../components/List/ServiceList";
import CDT from "../../../components/centered_div_text";
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
  const [placeHolder, setPlaceHolder] = useState(<h1>Loading...</h1>);
  useEffect(() => {
    getServices()
      .then((obj) => {
        setServices(obj.data);
        setPlaceHolder(<CDT error="No services available"/>)
      })
      .catch((err) => {
        console.log(err);
        setPlaceHolder(<CDT error={err.error} message={err.message}/>)
        toast.error(err.message);
      });
  }, []);
  const enterHandler = (e) => {
    if (e.key === "Enter") {
      getByServiceName(search)
        .then((obj) => setServices([obj.data]))
        .catch((err) => toast.error(err.message));
    }
  };
  const eventHandler = (e) => {
    setSearch(e.target.value);
  };
  console.log(services.length);
  return (
    services.length == 0 ? placeHolder :
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
