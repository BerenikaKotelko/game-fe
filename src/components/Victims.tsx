import { IUser } from "../interfaces/IUser";
import { useState, useEffect, useCallback } from "react";


export default function Victims()  {
  const baseUrl = process.env.REACT_APP_API_URL ?? "https://localhost:4000";
  const [users, setUsers] = useState<IUser[]>([]);
  const getUsers = useCallback( async () => {
    try {
      const response = await fetch(`${baseUrl}/victims`);
      const jsonData = await response.json();
      setUsers(jsonData);
      console.log(users);
    } catch (err: any) {
      console.error(err.message);
    }
  }, [users, baseUrl]);
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className="VictimsTable" data-testid={"victimsTable"}>
      <h2>Your fellow victims are:</h2>
      {users.map((users) => (
        <div key={users.id}>
          <p>{users.name}</p>
        </div>
      ))}
    </section>
  );
}
