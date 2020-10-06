import React from "react";
import ReactDOM from "react-dom";
import { H1Tag, H2Tag, ArticleTitle, PTag } from "../../typography";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("Typography Tests", () => {
  describe("H1Tag Tests", () => {
    it("H1 Tag renders correctly", () => {
      const div = document.createElement("div");
      ReactDOM.render(<H1Tag />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("H1 is primary colour", () => {
      const tree = renderer.create(<H1Tag />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("color", "#D9819D");
    });
  });

  describe("H2Tag Tests", () => {
    it("H2Tag renders correctly", () => {
      const div = document.createElement("div");
      ReactDOM.render(<H2Tag />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("H1 is secondary colour", () => {
      const tree = renderer.create(<H2Tag />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("color", "#5D5D5D");
    });
  });

  describe("ArticleTitle Tests", () => {
    it("ArticleTitle renders correctly", () => {
      const div = document.createElement("div");
      ReactDOM.render(<ArticleTitle />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("ArticleTitle is secondary colour", () => {
      const tree = renderer.create(<ArticleTitle />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("color", "#5D5D5D");
    });

    test("ArticleTitle has a cursor pointer to denote a link", () => {
      const tree = renderer.create(<ArticleTitle />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("cursor", "pointer");
    });
  });

  describe("PTag Tests", () => {
    it("PTag renders correctly", () => {
      const div = document.createElement("div");
      ReactDOM.render(<PTag />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("PTag has 1rem line-height", () => {
      const tree = renderer.create(<PTag />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("line-height", "1rem");
    });
  });
});
