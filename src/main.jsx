import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import "./styles.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,        // <— shared header + footer
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "about", element: <About /> },
      { path: "*", element: <div className="container"><h1>404</h1></div> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
