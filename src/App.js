import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { VideoComponent, Burger, Menu } from "./components";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </ThemeProvider>
      <VideoComponent />
    </div>
  );
}

export default App;
