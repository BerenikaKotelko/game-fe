import Victims from "./Victims";
import { Link } from "react-router-dom";

export default function DeathScenario() {
  return (
    <>
      <h1 data-testid="deathGreeting">You died, sorry!</h1>
      <Victims />
      <button>
        {" "}
        <Link to="/">Back to the begining</Link>{" "}
      </button>
    </>
  );
}
