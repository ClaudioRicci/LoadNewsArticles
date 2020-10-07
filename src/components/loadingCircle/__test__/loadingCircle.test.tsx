import React from "react";
import ReactDOM from "react-dom";

import LoadingCircle from "../index";
import { H1Tag } from "../../typography";
import renderer from "react-test-renderer";
import { expect } from "chai";
import { shallow } from "enzyme";
// import "jest-styled-components";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup);

describe("Loading Tests", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LoadingCircle />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //   it("contains a Loader", () => {
  //     const wrapper = shallow(<LoadingCircle />);
  //     expect(wrapper.find(".centered-circle")).to.have.lengthOf(1);
  //   });
});
