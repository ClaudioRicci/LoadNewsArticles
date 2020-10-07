import React from "react";
import ReactDOM from "react-dom";
import Board from "..";
import { H1Tag } from "../../typography";
import { colors } from "../../../themeVariables";
import renderer from "react-test-renderer";
// import { expect } from "chai";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-styled-components";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
Enzyme.configure({ adapter: new Adapter() });

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

  test("H1 Renders Correctly in Primary colour (#D9819D)", () => {
    const tree = renderer.create(<H1Tag />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule(`color, ${colors.primary}`);
  });
});
