import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About.jsx";
import Login from "./Login.jsx"
import Signup from "./Signup.jsx"


const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  
  {  path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);