import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//test will fail if th regular expression is not found
// /learn react/
// i - case insensitive
// how to run the test
// npm test
