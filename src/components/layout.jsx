import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Header />
      <main id="main">{/* page content renders here */}
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
