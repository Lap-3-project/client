/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import * as router from "react-router";

import SinglePlayerLogin from ".";
import handleSubmitForm from ".";
import moveToNextPage from ".";
import createNewUser from ".";
import { DataProvider } from "../../../context/dataContext";

console.log("render==> ", render);
describe("Running component", () => {
  it("Renders without crashing", () => {
    render(
        <BrowserRouter>
          <DataProvider>
            <SinglePlayerLogin />
          </DataProvider>
        </BrowserRouter>
    );
  });
});

describe("Component element roles", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <SinglePlayerLogin />
      </BrowserRouter>
    );
  });

  it("Maps through all 'h1' to check roles = 'heading'", () => {
    const heading = screen.queryAllByRole("heading");

    heading.map((singleHeadingInArr) => {
      expect(singleHeadingInArr).toBeInTheDocument();
      expect(singleHeadingInArr).toBeTruthy();
    });
  });

  it("Check one 'h1' role = 'heading'", () => {
    const heading = screen.queryByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toBeTruthy();
  });

  it("Checks 'form' element role = 'form'", () => {
    const form = screen.queryByRole("form");
    expect(form).toBeInTheDocument();
    expect(form).toBeTruthy();
  });

  it("Checks 'input' element role = 'input'", () => {
    const input = screen.queryByRole("input");
    expect(input).toBeInTheDocument();
    expect(input).toBeTruthy();
  });

  it("Checks 'p' element role = 'warningPara'", () => {
    const paraElem = screen.queryByRole("warningPara");
    expect(paraElem).not.toBeInTheDocument();
    expect(paraElem).toBeFalsy();
  });

  it("Checks 'button' element role = 'submit'", () => {
    const button = screen.queryByRole("submit");
    expect(button).toBeInTheDocument();
    expect(button).toBeTruthy();
  });
});

describe("Id & Class attribute testing", () => {
  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });

  test("should find 'h1' id attribute", () => {
    const { container } = render(<SinglePlayerLogin />);
    const mockComponent = container.querySelector("h1#singlePlayerTitle");
    expect(mockComponent).toBeInTheDocument();
    expect(mockComponent).toBeTruthy();
  });

  test("should find 'form' id attribute", () => {
    const { container } = render(<SinglePlayerLogin />);
    const mockComponent = container.querySelector(
      "form#singlePlayerFormContainer"
    );
    expect(mockComponent).toBeInTheDocument();
    expect(mockComponent).toBeTruthy();
  });

  test("should find 'input' id attribute", () => {
    const { container } = render(<SinglePlayerLogin />);
    const mockComponent = container.querySelector("input#username");
    expect(mockComponent).toBeInTheDocument();
    expect(mockComponent).toBeTruthy();
  });

  test("should find 'button' class attribute", () => {
    const { container } = render(<SinglePlayerLogin />);
    const mockComponent = container.querySelector("button.btn");
    expect(mockComponent).toBeInTheDocument();
    expect(mockComponent).toBeTruthy();
  });
});

describe("Other selector testing", () => {
  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });

  test("should find 'h1' selector", () => {
    const { container } = render(<SinglePlayerLogin />);
    const mockComponent = container.querySelector("h1");
    expect(mockComponent).toBeInTheDocument();
    expect(mockComponent).toBeTruthy();
  });

  test("should find 'input' selector", () => {
    const { container } = render(<SinglePlayerLogin />);
    const mockComponent = container.querySelector("input");
    expect(mockComponent).toBeInTheDocument();
    expect(mockComponent).toBeTruthy();
  });

  test("should find 'input[name='username']' selector", () => {
    const { container } = render(<SinglePlayerLogin />);
    const mockComponent = container.querySelector("input[name='username']");
    expect(mockComponent).toBeInTheDocument();
    expect(mockComponent).toBeTruthy();
  });

  test("should find 'input[autoComplete='off']' selector", () => {
    const { container } = render(<SinglePlayerLogin />);
    const mockComponent = container.querySelector("input[autoComplete='off']");
    expect(mockComponent).toBeInTheDocument();
    expect(mockComponent).toBeTruthy();
  });

  test("should find 'input[type='text']' selector", () => {
    const { container } = render(<SinglePlayerLogin />);
    const mockComponent = container.querySelector("input[type='text']");
    expect(mockComponent).toBeInTheDocument();
    expect(mockComponent).toBeTruthy();
  });

  test("should find 'input[placeholder='Enter username']' selector", () => {
    const { container } = render(<SinglePlayerLogin />);
    const mockComponent = container.querySelector(
      "input[placeholder='Enter username']"
    );
    expect(mockComponent).toBeInTheDocument();
    expect(mockComponent).toBeTruthy();
  });

  test("should find 'button' selector", () => {
    const { container } = render(<SinglePlayerLogin />);
    const mockComponent = container.querySelector("button");
    expect(mockComponent).toBeInTheDocument();
    expect(mockComponent).toBeTruthy();
  });
});

describe("Component text content", () => {
  beforeEach(() => {
    render(<DataProvider>
        <BrowserRouter>
          <SinglePlayerLogin />
        </BrowserRouter>
      </DataProvider>
    );
  });

  it("Shows correct text in heading", () => {
    const text = screen.queryByRole("heading");
    expect(text.textContent).toBe("Choose your username");
    expect(text.textContent).toBeTruthy();
  });

  it("Shows correct text in input placeholder", () => {
    const placeholderText = screen
      .getByPlaceholderText("Enter username")
      .getAttribute("placeholder");
    expect(placeholderText).toBe("Enter username");
    expect(placeholderText).toBeTruthy();
  });

  it("Shows correct text as input value", () => {
    const inputText = screen.queryByRole("input");
    expect(inputText.textContent).toBeFalsy();
  });

  it("Shows correct text on button", () => {
    const btnText = screen.queryByRole("submit");
    expect(btnText.textContent).toBeTruthy();
    expect(btnText.textContent).toBe("Submit");
  });
});

describe("Running functions should not throw errors", () => {
  test("handleSubmitForm()", () => {
    expect(() => handleSubmitForm).not.toThrow();
  });

  test("moveToNextPage()", () => {
    expect(() => moveToNextPage).not.toThrow();
  });

  test("createNewUser()", () => {
    expect(() => createNewUser).not.toThrow();
  });
});
