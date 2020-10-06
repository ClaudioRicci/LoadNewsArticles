import React, { useState } from "react";
import { pure } from "recompose";

function Board() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  if (loaded) {
    return (
      <main className="selectSurround" data-testid="selectSurround">
        <p>Loaded content here</p>
      </main>
    );
  } else {
    return <p>Loading...</p>;
  }
}

export default pure(Board);
