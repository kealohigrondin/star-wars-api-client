import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("app", () => {
  test("it should render", () => {
    render(<App />);
    // expect(screen.getByRole("heading").innerHTML).toBe("Home Page");
  });
});
