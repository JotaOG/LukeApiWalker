import React from "react";
import "./App.css";
import { LukeApiWalker } from "./views/LukeApiWalker";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <LukeApiWalker path="/" />
        <LukeApiWalker path="/:word/:id" />
      </Router>
    </div>
  );
}

export default App;
