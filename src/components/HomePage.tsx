import { Link } from "react-router-dom";
import Randomiser from "../utils/randomiser";

import axios from "axios";

interface HomePageProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  
  // getResources: (endpoint: string) => void;
}
export default function HomePage({username, setUsername}: HomePageProps) {
  const userFate = Randomiser();
  


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
    <section className="App">

    <h1>"It's not chance, it's chess"</h1>
    <h2>He says, as he places 2 bottles in front of you.</h2>
    <h3> One will kill you, the other one will let you walk free.</h3>
    <h2>Which do you choose?</h2>
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
      
    </section>
  );
}
