/**
 * @jest-environment jsdom
 */

import React from "react";
import * as router from "react-router";
import {
  screen,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";

import MultiPlayerScores from ".";
import { BrowserRouter } from "react-router-dom";

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});

describe("MultiPlayerScores component", () => {
  beforeEach(() => {
    render(<BrowserRouter><MultiPlayerScores /></BrowserRouter>);
  });

  it("Maps through all 'h1' & checks role is 'heading'", () => {
    const heading = screen.queryAllByRole("heading");

    heading.map((singleHeadingInArr) => {
      expect(singleHeadingInArr).toBeInTheDocument();
    });
  });
});

describe("Displaying scores", () => {
  it("Shows winner main title",  () => {
    jest
      .spyOn(axios, "get")
      .mockResolvedValueOnce({ data: { users: [{ scores: {} }] } });
    render(
      <BrowserRouter>
        <MultiPlayerScores />
      </BrowserRouter>
    );

    // await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));

    const heading = screen.queryByRole("heading", { name: "Winner" });

    expect(heading).toBeInTheDocument();
  });
});
