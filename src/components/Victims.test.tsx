import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Victims from "./Victims";
import "@testing-library/jest-dom/extend-expect";

it("should display a list of users", () => {
  render(
    <Router>
      <Victims />
    </Router>
  );
  const userTable = screen.getByTestId("victimsTable");
  expect(userTable).toHaveValue("Ada");
});
