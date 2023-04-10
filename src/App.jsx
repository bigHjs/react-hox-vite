// import { useState } from "react";
import Home from "@pages/home";
import { NavLink } from "react-router-dom";
import RouteElement from "@/router/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <NavLink to="/home">首页</NavLink>
        <span> --- </span>
        <NavLink to="/about">关于</NavLink>
        <span> --- </span>
        <NavLink to="/detail/12?age=333">详情</NavLink>
      </div>
      <hr />
      <RouteElement />
    </div>
  );
}

export default App;
