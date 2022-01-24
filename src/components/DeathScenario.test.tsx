import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import DeathScenario from "./DeathScenario";
import "@testing-library/jest-dom/extend-expect";
it("should render the Death Scenario page", () => {
  render(
    <Router>
      <DeathScenario />
    </Router>
  );
  const deathGreeting = screen.getByTestId("deathGreeting");
  expect(deathGreeting).toHaveTextContent("You died, sorry!");
});
