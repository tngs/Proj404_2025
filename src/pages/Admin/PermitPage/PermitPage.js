import {useState} from "react";
import { getPermitAdministrator } from "../../../utilities/URLs/administration-service";
import { toast } from "react-toastify";

const PermitPage = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value)
  }
  const handleClick = () => {
    getPermitAdministrator(email).then(obj => {
        toast.success("successfully permited " + email)
        console.log("success", obj);
    })
    .catch(err => {
        if(err.status == 500){
            toast.error("non-existing admin")
        }
        else
            toast.error("error")
    })
  }
  return (
    <div
      style={{
        width: "700px",
        margin: "100px auto",
        padding: "30px",
        border: "4px solid #000",
        borderRadius: "25px",
        display: "flex",
        alignItems: "center",
        background: "#fff",
        boxSizing: "border-box",
      }}
    >
      <input
        type="text"
        placeholder="admin to permit"
        value={email}
        onChange={handleChange}
        style={{
          flex: 1,
          height: "45px",
          border: "4px solid #000",
          borderRadius: "12px",
          padding: "0 16px",
          fontSize: "16px",
          outline: "none",
        }}
      />
      <button
        onClick={handleClick}
        style={{
          marginLeft: "20px",
          height: "45px",
          width: "100px",
          border: "4px solid #000",
          borderRadius: "12px",
          background: "#f3f7fe",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        permit
      </button>
    </div>
  );
};

export default PermitPage;
