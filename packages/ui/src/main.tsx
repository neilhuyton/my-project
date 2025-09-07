import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./components/Button";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">UI Package Demo</h1>
      <Button onClick={() => alert("Clicked!")}>Click Me</Button>
    </div>
  </React.StrictMode>
);
