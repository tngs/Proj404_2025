import React, { useEffect, useState } from "react";
import "./index.css";
import ServiceList from "../../../components/List/ServiceList";
import servicesDB from "../../../servicesDB.json";
import {transport_service} from '../../../utilities/URLs'
import axios from 'axios'

const Home = () => {
  const [services, setServices] = useState(servicesDB);
  useEffect(() => {
    const response = transport_service.get();
    console.log('response', response)
    // /transport-service
    return () => {};
  }, []);

  return (
    <div className="container-centers-top">
      <ServiceList services={services} />
    </div>
  );
};

export default Home;
