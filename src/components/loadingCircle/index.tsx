import React from "react";
import "./LoadingCircle.scss";
import { pure } from "recompose";
import { H1Tag } from "../typography";

function LoadingCircle() {
  return (
    <div className="centered-circle" data-testid="loadingCircle">
      <H1Tag>Loading...</H1Tag>
      <div className="loader"></div>
    </div>
  );
}

export default pure(LoadingCircle);
