// import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import { useNavigate } from "react-router-dom";
import { useCounterStore, getCountStore } from "@store/count";
import "./index.scss";

function App() {
  const navigate = useNavigate();
  const { count, increment, decrement } = useCounterStore();
  const jumpUrl = () => {
    // 写法1
    // 参数1：string/number  string它就是一个url地址，number就是回退的步数 正向前 负向后
    // 参数2：对象，可选，可以不写
    // navigate('/about', {
    //   state: {}, // 隐式传递数据
    //   replace: true // 不可回退
    // })

    // 写法2
    navigate("/about");
  };
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={increment}>count is {count}</button>
      </div>
      <button onClick={jumpUrl}>跳转到关于页面</button>
    </div>
  );
}

export default App;
