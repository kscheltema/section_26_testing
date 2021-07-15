import { render, screen } from "@testing-library/react";
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
  test("button clicked test", () => {
    const buttonCheckClicked = screen.getByText("Changed!", {
      exact: false,
    });
    expect(buttonCheckClicked).toBeInTheDocument();

    const buttonCheckNotClicked = screen.getByText("It's Good to see!", {
      exact: false,
    });
    expect(buttonCheckNotClicked).toBeInTheDocument();
  });
  test("button not clicked test", () => {
    const buttonCheckNotClicked = screen.getByText("It's Good to see!", {
      exact: false,
    });
    expect(buttonCheckNotClicked).toBeInTheDocument();
  });
});

//testing suites
//group together different components/functions or features
