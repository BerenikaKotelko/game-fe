import { IUser } from "../interfaces/IUser";
import { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState<IUser[]>([]);
  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:4000/");
      const jsonData = await response.json();
      setUsers(jsonData);
    } catch (err: any) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users.map((users) => (
        <tr key={users.id}>
          <td>{users.name}</td>
        </tr>
      ))}
    </div>
  );
}
