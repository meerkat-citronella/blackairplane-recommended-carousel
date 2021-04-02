import React from "react";

import { Nav } from "./components/nav";
import { Page } from "./components/page";
import { Footer } from "./components/footer";

function App() {
  return (
    <div>
      <Nav selectedTab={"Orange Store"} />
      <Page
        bookName={
          "It's Personal: Five Questions You Should Answer to Give Every Kid Hope"
        }
      />
      <Footer />
    </div>
  );
}

export default App;
