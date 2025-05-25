import React, { useEffect, useState } from "react";
import "./index.css";
import ServiceList from "../../../components/List/ServiceList";
import servicesDB from "../../../servicesDB.json";
import { transport_service } from "../../../utilities/URLs";
import { get } from "../../../utilities/URLs/transport-service";

const Home = () => {
  const [services, setServices] = useState(servicesDB);
  useEffect(() => {
    //TODO setServices
    get().then((obj) => console.log("obj", obj));
  }, []);

  return (
    <div className="container-centers-top">
      <ServiceList services={services} />
    </div>
  );
};

export default Home;
