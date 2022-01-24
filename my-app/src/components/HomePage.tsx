import { Link } from "react-router-dom";
import Randomiser from "../utils/randomiser"
export default function HomePage() {
    const userFate = Randomiser()
  return (
    <>
      <h1>Hello World</h1>
      <div className="App">
        <header className="App-header" data-testid={"header"}>
          Welcome to the Sherlock Game
        </header>
        <div className="choiceButtons" data-testid="buttonComponent">
          <button>
          <Link
          data-testid={"bottle1Button"}
                  to={userFate}
                  data-cy="button-1-click"
                >
                  Drink from bottle 1
                </Link>
             
              </button>
          <button> <Link
          data-testid={"bottle2Button"}
                  to={userFate}
                  data-cy="button-2-click"
                >
                  Drink from bottle 2
                </Link> </button>
        </div>
      </div>
    </>
  );
}
