import { Link } from "react-router-dom";
import Randomiser from "../utils/randomiser";
import { useState } from "react";
import axios from "axios";
export default function HomePage() {
  const userFate = Randomiser();
  const [username, setUsername] = useState<string>("");
  const handleAddUsername = async (username: string) => {
    console.log(username);
    await axios.post(`http://localhost:4000/username`, {
      userName: username,
    });
  };
  const handleDeadUser = async (username: string) => {
    await axios.put(`http://localhost:4000/you-died`, {
      userName: username,
    });
  };
  const handleAliveUser = async (username: string) => {
    await axios.put(`http://localhost:4000/you-survived`, {
      userName: username,
    });
  };
  return (
    <>
      <h1>Hello World</h1>
      <div className="App">
        <header className="App-header" data-testid={"header"}>
          Welcome to the Sherlock Game
        </header>
        <input
          placeholder="Pick a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <button onClick={() => handleAddUsername(username)}>
          Submit username
        </button>
        <div className="choiceButtons" data-testid="buttonComponent">
          <button>
            <Link
              data-testid={"bottle1Button"}
              to={userFate}
              onClick={() => {
                if (userFate === "result/death") {
                  handleDeadUser(username);
                } else if (userFate === "result/victory") {
                  handleAliveUser(username);
                }
              }}
              data-cy="button-1-click"
            >
              Drink from bottle 1
            </Link>
          </button>
          <button>
            {" "}
            <Link
              data-testid={"bottle2Button"}
              to={userFate}
              onClick={() => {
                if (userFate === "result/death") {
                  handleDeadUser(username);
                } else if (userFate === "result/victory") {
                  handleAliveUser(username);
                }
              }}
              data-cy="button-2-click"
            >
              Drink from bottle 2
            </Link>{" "}
          </button>
        </div>
      </div>
    </>
  );
}
