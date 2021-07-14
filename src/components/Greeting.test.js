import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders -Hello World- as a text", () => {
  //arrange -set up the test data
  render(<Greeting />);

  //act - run the logic - like a button test
  //none

  //assert - compares execution results with expected results
  const helloWorld = screen.getByText("Hello World", { exact: false });
  expect(helloWorld).toBeInTheDocument();
});
