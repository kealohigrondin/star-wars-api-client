import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../Home";

//test only this file with 'npm test -- Home.test.js'
describe("home", () => {
  test("it should render the home page h1", () => {
    render(<Home />);
    expect(screen.getByRole("heading").innerHTML).toBe("Home Page");
  });
});
