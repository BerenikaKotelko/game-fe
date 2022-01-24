import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import DeathScenario from "./components/DeathScenario";
import "@testing-library/jest-dom/extend-expect";
it("should call setCurrentUser when onclick", () => {
  render(<HomePage />);
  const headerText = screen.getByTestId("header");
  expect(headerText).toHaveTextContent("Welcome to the Sherlock Game");
});

it("should have a pick bottle 1 button", () => {
  render(<HomePage />);
  const headerText = screen.getByTestId("bottle1Button");
  expect(headerText).toHaveTextContent("Drink from bottle 1");
});
it("should have a pick bottle 2 button", () => {
  render(
    <Router>
      {" "}
      <HomePage />{" "}
    </Router>
  );
  const headerText = screen.getByTestId("bottle2Button");
  expect(headerText).toHaveTextContent("Drink from bottle 2");
});

it("should render the Death Scenario page", () => {
  render(
    <Router>
      <DeathScenario />
    </Router>
  );
  const deathGreeting = screen.getByTestId("deathGreeting");
  expect(deathGreeting).toHaveTextContent("You died, sorry!");
});
