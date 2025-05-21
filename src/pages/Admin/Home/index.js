import React from "react";
import "./index.css";
import ServiceList from "../../../components/List/ServiceList";
import services from "../../../servicesDB.json";

const Home = () => {
  return (
    <div className="container-centers-top">
      <ServiceList services={services} />
    </div>
  );
};

export default Home;
