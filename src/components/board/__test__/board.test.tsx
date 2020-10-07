import React from "react";
import ReactDOM from "react-dom";
import Board from "..";
import { H1Tag } from "../../typography";
import renderer from "react-test-renderer";
import "jest-styled-components";

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

describe("Title Tests", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<H1Tag></H1Tag>, div);
  });

  test("H1 Renders Correctly", () => {
    const tree = renderer.create(<H1Tag />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule("color", "#D9819D");
  });
});
