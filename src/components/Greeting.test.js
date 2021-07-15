import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders -Hello World- as a text", () => {
    //arrange -set up the test data
    render(<Greeting />);

    //act - run the logic - like a button test
    //none

    //assert - compares execution results with expected results
    const helloWorld = screen.getByText("Hello World", { exact: false }); //exact false = check within /default harsher check
    expect(helloWorld).toBeInTheDocument();
  });
  test("button clicked test, render", () => {
    //arrange
    render(<Greeting />);
    //act
    const buttonTest = screen.getByRole("button");
    userEvent.click(buttonTest);
    //assert
    const outputElement = screen.getByText("Changed!", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
  test("no action error check", () => {
    //arrange
    render(<Greeting />);
    //act - none

    //assert
    const noActionErrorElement = "It's Good to see!";
    // const actionErrorElement = "Changed!";
    const errorElement = screen.getByText(noActionErrorElement, {
      exact: false,
    });
    expect(errorElement).toBeNull();
  });
});

//testing suites
//group together different components/functions or features
