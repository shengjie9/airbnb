import React from "react";
import { Navigate } from "react-router-dom";
// import Home from "../views/home";
// import Detail from "../views/detail";
// import Entire from "../views/entire";

// const routes = [
//   {
//     path: "/",
//     element: <Navigate to="/home" />,
//   },
//   {
//     path: "/home",
//     element: <Home />,
//   },
//   {
//     path: "/detail",
//     element: <Detail />,
//   },
//   {
//     path: "/entire",
//     element: <Entire />,
//   },
// ];

//懒加载
const Detail = React.lazy(() => import("@/views/detail"));
const Home = React.lazy(() => import("@/views/home"));
const Entire = React.lazy(() => import("@/views/entire"));
const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/entire",
    element: <Entire />,
  },
];

export default routes;
