import React, { useEffect, useState } from "react";
import "./index.css";
import ServiceList from "../../../components/List/ServiceList";
import servicesDB from "../../../servicesDB.json";
import { transport_service } from "../../../utilities/URLs";
import { get as getServices, getByServiceName } from "../../../utilities/URLs/transport-service";
import Searchbar from '../../../components/Searchbar/Searchbar'

const Home = () => {
  const [services, setServices] = useState(servicesDB);
  useEffect(() => {
    //TODO setServices
    getServices().then((obj) => console.log("obj", obj));
  }, []);
  const enterHandler = (e) => {
  if (e.key === 'Enter') {
    console.log('e.target.value', e.target?.value)
    //TODO setServices
    getByServiceName(e.taget?.value).then(obj => console.log('obj', obj))
  }
};
  return (
    <div className="container-centers-top">
      
      <Searchbar onKeyDown={enterHandler}/>
      <ServiceList services={services} />
    </div>
  );
};

export default Home;
