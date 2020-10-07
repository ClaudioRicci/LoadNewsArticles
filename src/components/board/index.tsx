import React, { useState } from "react";
import LoadingCircle from "../loadingCircle";
import { BoardSurround } from "../domElements";
import { pure } from "recompose";

function Board() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  if (loaded) {
    return (
      <BoardSurround>
        <main className="selectSurround" data-testid="selectSurround">
          <p>Loaded content here</p>
        </main>
      </BoardSurround>
    );
  } else {
    return (
      <BoardSurround>
        <main data-testid="loadingCircle">
          <LoadingCircle />
        </main>
      </BoardSurround>
    );
  }
}

export default pure(Board);
