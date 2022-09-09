/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "../../context/dataContext";

import ScoreSingle from ".";

describe("Running component", () => {
  it("Renders without crashing", () => {
    render(
        <BrowserRouter>
              <DataProvider>
                <ScoreSingle />
              </DataProvider>
        </BrowserRouter>
    );
  });
});
