import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";
import "@testing-library/jest-dom/extend-expect";
// it("should confirm the header 'welcome to the Sherlock Game", () => {
//   render(
//     <Router>
//       {" "}
//       <HomePage />{"username"}
//     </Router>
//   );
//   const headerText = screen.getByTestId("header");
//   expect(headerText).toHaveTextContent("Welcome to the Sherlock Game");
// });

// it("should have a pick bottle 1 button", () => {
//   render(
//     <Router>
//       {" "}
//       <HomePage />{" "}
//     </Router>
//   );
//   const headerText = screen.getByTestId("bottle1Button");
//   expect(headerText).toHaveTextContent("Drink from bottle 1");
// });
// it("should have a pick bottle 2 button", () => {
//   render(
//     <Router>
//       {" "}
//       <HomePage />{" "}
//     </Router>
//   );
//   const headerText = screen.getByTestId("bottle2Button");
//   expect(headerText).toHaveTextContent("Drink from bottle 2");
// });
