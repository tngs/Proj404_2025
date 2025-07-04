import { useEffect, useState } from "react";
import "./index.css";
import ServiceList from "../../../components/List/ServiceList";
import services from "../../../servicesDB.json";
import { useSelector } from "react-redux";
import { getByTransporterId } from "../../../utilities/URLs/transport-service";
import { toast } from "react-toastify";
import CDT from "../../../components/centered_div_text";

const Home = () => {
  const [services, setServices] = useState([]);
  const [placeHolder, setPlaceHolder] = useState(<h1>Loading...</h1>);
  useEffect(() => {
    getByTransporterId()
      .then((obj) => {
        console.log("obj", obj);
        setServices(obj.data);
        setPlaceHolder(<CDT error="No services" />);
      })
      .catch((err) => {
        setPlaceHolder(<CDT error={err.error} message={err.message}/>)
        toast.error(err.message);
      });
  }, []);
  return (
    services.length == 0 ? placeHolder :
    <div className="container-centers-top">
      <ServiceList services={services} />
    </div>
  );
};

export default Home;
