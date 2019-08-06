import React from "react";
import "./App.css";
import LayoutLoader from "./loader/LayoutLoader";
import { config } from "./config/main-config";

function App() {
  return (
    <div className="my-app">
      <LayoutLoader config={config} />
    </div>
  );
}

export default App;
