/**
 * @jest-environment jsdom
 */

import React from "react";
import * as router from "react-router";
import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MultiPlayerLogin from ".";
import handleUsernameInput from ".";
import handleRoomInput from ".";
import handlePlayerNumInput from ".";
import handleSubmitForm from ".";
import createNewUser from ".";
import moveToNextPage from ".";

describe("MultiPlayerLogin component w/ out beforeEach", () => {
  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });

  it("Displays correct Title", () => {
    const { getByText } = render(<MultiPlayerLogin title="Create your room" />);

    expect(getByText("Create your room")).toBeInTheDocument();

    waitFor(() => expect(getByText("Create your room")).toBeInTheDocument());
  });
});

describe("Running component", () => {
  it("Renders without crashing", () => {
    render(
      <BrowserRouter>
        <MultiPlayerLogin />
      </BrowserRouter>
    );
  });
});

describe("Component element roles", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <MultiPlayerLogin />
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

  it("Checks 'label' element role = 'label'", () => {
    const label = screen.queryAllByRole("label");
    label.forEach((singleObj) => {
      expect(singleObj).toBeInTheDocument();
      expect(singleObj).toBeTruthy();
    });
  });

  it("Maps through all 'input' to check roles = 'input'", () => {
    const inputArr = screen.queryAllByRole("input");

    inputArr.map((singleInputArr) => {
      expect(singleInputArr).toBeInTheDocument();
      expect(singleInputArr).toBeTruthy();
    });
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

describe("Running functions should not throw errors", () => {
  test("handleUsernameInput()", () => {
    expect(() => handleUsernameInput).not.toThrow();
  });

  test("handleRoomInput()", () => {
    expect(() => handleRoomInput).not.toThrow();
  });

  test("handlePlayerNumInput()", () => {
    expect(() => handlePlayerNumInput).not.toThrow();
  });

  test("handleSubmitForm()", () => {
    expect(() => handleSubmitForm).not.toThrow();
  });

  test("createNewUser()", () => {
    expect(() => createNewUser).not.toThrow();
  });

  test("moveToNextPage()", () => {
    expect(() => moveToNextPage).not.toThrow();
  });
});
