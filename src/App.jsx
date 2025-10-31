import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Header />
      <main id="main" className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
