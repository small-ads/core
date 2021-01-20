import React from "react";
import { Button } from "./stories/Button";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button
        label="it works!"
        backgroundColor="seagreen"
        size="medium"
        onClick={() => {
          console.log("click works");
        }}
        primary
      />
    </div>
  );
}

export default App;
