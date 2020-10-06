import React from "react";
import ReactDOM from "react-dom";
import Board from "..";
import renderer from "react-test-renderer";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("Board Tests", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Board />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
