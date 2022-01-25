// import { useCallback, useState, useEffect } from "react";
// import axios from "axios";
// import { IUser } from "../interfaces/IUser";
import Users from "../components/Users";

export default function DeathScenario() {
  // const baseUrl = process.env.REACT_APP_API_URL ?? "https://localhost:4000";
  // const [users, setUsers] = useState<IUser[]>([])
  // const getUsers= useCallback(
  //   async (endpoint: string) => {
  //     const res = await axios.get(`${baseUrl}/${endpoint}`);
  //     setUsers(res.data.data);
  //   },
  //   [baseUrl]
  // );
  // useEffect(() => {
  //   getUsers(`/`);
  //   return () => {
  //     setUsers([]);
  //   };
  // }, [getUsers]);
  return (
    <>
      <h1 data-testid="deathGreeting">You died, sorry!</h1>
      <Users />
    </>
  );
}
