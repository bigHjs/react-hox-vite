import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HoxRoot } from "hox";
// 定义当前项目的路由模式
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HoxRoot>
      <Router>
        <App />
      </Router>
    </HoxRoot>
  </React.StrictMode>
);
