import React from "react";
import "./App.css";
import { make as Button } from "./ResButton.bs";
import "antd/dist/antd.css";
import { Button as AntDesignButton } from "antd";
import "./Denylist.bs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React + ReScript!</p>
        <p>
          <Button />
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <AntDesignButton type="primary">antd button</AntDesignButton>
      </header>
    </div>
  );
}

export default App;
