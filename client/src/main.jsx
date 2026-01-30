import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { AuthProvider } from "./context/AuthContext"; // 👈 import

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>      {/* 👈 wrap here */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);
