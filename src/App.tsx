import React from "react";
import logo from "./logo.svg";

import { Nav } from "./components/nav";
import { Page } from "./components/page";

function App() {
  return (
    <div>
      <Nav selectedTab={"Orange Store"} />
      <Page
        bookName={
          "It's Personal: Five Questions You Should Answer to Give Every Kid Hope"
        }
      />
    </div>
  );
}

export default App;
