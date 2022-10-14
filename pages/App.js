import React from "react";
import "./App.css";
import Box from "./Box.js";

function App() {
  const [selected, setSelected] = React.useState();

  const bigarray = [];
  for (let step = 1; step < 2000; step++) {
    bigarray.push({ step });
  }

  return (
    <div className="App">
      <header className="App-header p-8">
        {bigarray.map((i) => (
          <Box id={i.step} onPeerSearch={setSelected} selected={selected} />
        ))}
      </header>
    </div>
  );
}

export default App;
