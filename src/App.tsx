import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Nav } from "./components/nav";

function App() {
  return (
    <div>
      <Nav selectedTab={"Orange Store"} />
    </div>
  );
}

export default App;
