
import React from "react"
import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="header">
      <div className="container header-grid">
        <div className="brand">
          <img src="/logo.svg" alt="ThinkSense Labs logo" width="28" height="28" />
          <span>ThinkSense Labs</span>
        </div>
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  )
}

