import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "../layouts/Landing.tsx";
import "../styles/globals.scss";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Landing />
    </React.StrictMode>,
  );
} else {
  console.error("Error: Root element is not found");
}
