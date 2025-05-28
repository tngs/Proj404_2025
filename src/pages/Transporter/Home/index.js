import { useEffect, useState } from "react";
import "./index.css";
import ServiceList from "../../../components/List/ServiceList";
import services from "../../../servicesDB.json";
import { useSelector } from "react-redux";
import { getByTransporterId } from "../../../utilities/URLs/transport-service";
import { toast } from "react-toastify";
const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    getByTransporterId().then((obj) => {
      console.log("obj", obj);
      setServices(obj.data);
    }).catch((err) => {
      toast.error(err.message);
    });
  }, []);
  return (
    <div className="container-centers-top">
      <ServiceList services={services} />
    </div>
  );
};

export default Home;
