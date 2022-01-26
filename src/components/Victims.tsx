import { IUser } from "../interfaces/IUser";
import { useState, useEffect } from "react";

export default function Victims() {
  const [users, setUsers] = useState<IUser[]>([]);
  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:4000/victims");
      const jsonData = await response.json();
      setUsers(jsonData);
      console.log(users)
    } catch (err: any) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section data-testid={"victimsTable"}>
      <h2>Your fellow victims are:</h2>
      {users.map((users) => (
        <div key={users.id}>
          <p >{users.name}</p>
        </div>
      ))}
    </section>
  );
}
