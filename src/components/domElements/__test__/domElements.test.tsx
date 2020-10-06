import React from "react";
import ReactDOM from "react-dom";
import {
  ULTag,
  LITag,
  Header,
  BoardSurround,
  ShowMoreButton,
  Date,
  Source,
  Select
} from "../index";
import { colors, fonts, align, deviceSizes } from "../../../themeVariables";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("Dom Element Tests", () => {
  describe("ULTag Tests", () => {
    it("ULTag renders correctly", () => {
      const div = document.createElement("div");
      ReactDOM.render(<ULTag />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("ULTag should have list-style none", () => {
      const tree = renderer.create(<ULTag />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("list-style", "none");
    });

    test("ULTag should have margin-top when mobile (Device Width 768px or smaller)", () => {
      const tree = renderer.create(<ULTag />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("margin-top", "4rem", {
        media: `(max-width: ${deviceSizes.mobile})`
      });
    });
  });

  describe("LITag Tests", () => {
    it("LITag renders correctly", () => {
      const div = document.createElement("div");
      ReactDOM.render(<LITag />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("LITag should have a grey border (#9C9C9C) under each item", () => {
      const tree = renderer.create(<LITag />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule(
        "border-bottom",
        `0.1rem ${colors.ternary} solid`
      );
    });
  });

  describe("Header Tests", () => {
    it("Header renders correctly", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Header />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("Header should display as grid by default", () => {
      const tree = renderer.create(<Header />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("display", "grid");
    });
  });

  describe("BoardSurround Tests", () => {
    it("BoardSurround renders correctly", () => {
      const div = document.createElement("div");
      ReactDOM.render(<BoardSurround />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("BoardSurround to be 30rem wide by default", () => {
      const tree = renderer.create(<BoardSurround />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("width", "30rem");
    });
  });
  describe("ShowMoreButton Tests", () => {
    it("ShowMoreButton renders correctly", () => {
      const div = document.createElement("div");
      ReactDOM.render(<ShowMoreButton />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("ShowMoreButton should have pointer to denote it can be pressed", () => {
      const tree = renderer.create(<ShowMoreButton />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("cursor", "pointer");
    });

    test("ShowMoreButton should turn orange (#f9b600) when hovered", () => {
      const tree = renderer.create(<ShowMoreButton />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("color", `${colors.orange}`, {
        modifier: ":hover"
      });
    });

    test("ShowMoreButton should be smaller for Mobile (Device Width 768px or smaller)", () => {
      const tree = renderer.create(<ShowMoreButton />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("width", "6.4rem", {
        media: `(max-width: ${deviceSizes.mobile})`
      });
    });
  });

  describe("Date Tests", () => {
    it("Date renders correctly", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Date />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("Date is secondary colour (#5D5D5D - Dark Grey)", () => {
      const tree = renderer.create(<Date />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule(`color, ${colors.secondary}`);
    });
  });

  describe("Source Tests", () => {
    it("Source renders correctly", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Source />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("Source is white colour (#FFF)", () => {
      const tree = renderer.create(<Source />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule(`color, ${colors.white}`);
    });
  });

  describe("Select Tests", () => {
    it("Select renders correctly", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Select />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("Select is ternary colour (#9C9C9C - Light Grey)", () => {
      const tree = renderer.create(<Select />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule(`color, ${colors.ternary}`);
    });
  });
});
