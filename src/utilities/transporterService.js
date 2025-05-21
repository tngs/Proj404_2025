import axios from "../axios";

export const postTransporter = ({
  username = throwIfMissing("username"),
  password = throwIfMissing("password"),
  email = throwIfMissing("email"),
  address = throwIfMissing("address"),
}) => {
    // axios
    //   .post("/organization/organizationById", {
    //     id: this.props.data.organization_id,
    //   })
    //   .then((result) => {
    //     this.setState({ name: result.data?.organization?.name });
    //   });
  return axios.post("/transporter-service/transporter", {
    username,
    password,
    email,
    address,
  });
  /*
  email
  username
  transporterId
  address
  */
    //making a user of type transporter
};

export const getTransporter = (transporterId) => {
    return axios.get(`/transporter-service/transporter/${transporterId}`);
}

// export get = () => {
//     return axios.get('/')
// }