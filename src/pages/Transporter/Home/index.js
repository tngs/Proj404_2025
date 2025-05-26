import { useEffect } from "react";
import "./index.css";
import ServiceList from "../../../components/List/ServiceList";
import services from "../../../servicesDB.json";
import { useSelector } from "react-redux";
import { get } from "../../../utilities/URLs/transport-service";

const Home = () => {
  const user = useSelector((state) => state.account.user);
  useEffect(() => {
    get().then((obj) => console.log("obj", obj));
  }, []);

  console.log("user", user);
  console.log("services", services);
  const filteredServices = services.filter(
    (service) => service.transporterId === user.id
  );
  console.log("filteredServices", filteredServices);
  return (
    <div className="container-centers-top">
      <ServiceList services={filteredServices} />
    </div>
  );
};

export default Home;
