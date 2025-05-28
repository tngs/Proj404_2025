// AdminTransporterPage.js
import React, { useEffect, useState } from "react";
import styles from "./AdminUsersPage.module.css";
import UserCard from "../../../components/UserCard/UserCard";
import { getTransportUser } from "../../../utilities/URLs/transport-user-service";
import { toast } from "react-toastify";
const AdminTransporterPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getTransportUser().then((obj) => {
      setUsers(obj.data);
    }).catch((err) => {
      toast.error(err.message);
    });
  }, []);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {users.map((user) => (
          <UserCard
            key={user.email}
            user={user}
          />
        ))}
      </main>
    </div>
  );
};

export default AdminTransporterPage;
