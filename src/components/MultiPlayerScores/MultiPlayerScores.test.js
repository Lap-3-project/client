/**
 * @jest-environment jsdom
 */

import React from "react";
import * as router from "react-router";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";

import MultiPlayerScores from ".";

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});

describe("MultiPlayerScores component", () => {
  beforeEach(() => {
    render(<MultiPlayerScores />);
  });

  it("Maps through all 'h1' & checks role is 'heading'", () => {
    const heading = screen.queryAllByRole("heading");

    heading.map((singleHeadingInArr) => {
      expect(singleHeadingInArr).toBeInTheDocument();
    });
  });
});

describe("Displaying scores", () => {
  it("Shows winner main title", async () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce({ data: [] });

    render(
      <BrowserRouter>
        <MultiPlayerScores />
      </BrowserRouter>
    );

    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));

    const heading = screen.queryByRole("heading");

    expect(heading).toBeInTheDocument();
  });
});
