import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "@my-project/ui";
import "./index.css";
import "@my-project/ui/dist/index.css"; // Add this import

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Site1 Demo</h1>
      <Button onClick={() => alert("Clicked from Site1!")}>Site1 Button</Button>
    </div>
  </React.StrictMode>
);
