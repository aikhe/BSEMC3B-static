import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "../layouts/Landing.tsx";
import "../styles/globals.scss";

const rootElement = document.getElementById("lenis-root");

if (rootElement) {
  const lenisRoot = ReactDOM.createRoot(rootElement);
  lenisRoot.render(
    <React.StrictMode>
      <Landing />
    </React.StrictMode>,
  );
} else {
  console.error("Error: Root element is not found");
}
