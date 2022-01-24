import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";
import VictoryScenario from "./VictoryScenario";
import "@testing-library/jest-dom/extend-expect";
it("should render the Victory Scenario page", () => {
  render(
    <Router>
      <VictoryScenario />
    </Router>
  );
  const victoryGreeting = screen.getByTestId("victoryGreeting");
  expect(victoryGreeting).toHaveTextContent("Good choice!!!");
});
