import { render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

test("renders hello there", () => {
  render(<App />);
  const linkElement = screen.getByText(/hello there/i);
  expect(linkElement).toBeInTheDocument();
});
