import { useRoutes, Navigate } from "react-router-dom";
import Home from "@pages/home";
import About from "@pages/about";
import Detail from "@pages/detail";

// 如果需要懒加载，可参考这篇文章
// https://cloud.tencent.com/developer/article/2098078
const routes = [
  { path: "/", element: <Navigate to="/home" replace /> },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
];

export default function Routers() {
  let element = useRoutes(routes);
  return element;
}
