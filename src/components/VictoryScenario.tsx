import Sherlocks from "./Sherlocks";
import { Link } from "react-router-dom";
export default function VictoryScenario() {
  return (
    <section className="ResultPage">
      <h1 data-testid="victoryGreeting">Good choice!!!</h1>
      <Sherlocks />
      <button>
        {" "}
        <Link to="/">Back to the begining</Link>{" "}
      </button>
    </section>
  );
}
