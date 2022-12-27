import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

test("should render menu/title bar", () => {
  render(<App />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should render main body", () => {
  render(<App />);
  const main = screen.getByRole("main");
  expect(main).toBeInTheDocument();
});

test("should render search bar", () => {
  render(<App />);
  const search = screen.getByRole("search");
  expect(search).toBeInTheDocument();
});