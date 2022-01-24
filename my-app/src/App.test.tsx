import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";
it("should call setCurrentUser when onclick", () => {
    render( <App />
    );
    const headerText = screen.getByTestId("header");
    expect(headerText).toHaveTextContent("Welcome to the Sherlock Game");
  });

  it("should have a pick bottle 1 button", () => {
    render( <App />
    );
    const headerText = screen.getByTestId("bottle1Button");
    expect(headerText).toHaveTextContent("Drink from bottle 1");
  });
  it("should have a pick bottle 2 button", () => {
    render( <App />
    );
    const headerText = screen.getByTestId("bottle2Button");
    expect(headerText).toHaveTextContent("Drink from bottle 2");
  });