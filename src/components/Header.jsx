import React from "react"
import { NavLink, Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="container header-grid">
        <div className="brand">
          <Link to="/" className="brand-link" aria-label="ThinkSense Labs home">
            <img src="/logo.svg" alt="" width="28" height="28" />
            <span>ThinkSense Labs</span>
          </Link>
        </div>
        <nav className="nav" aria-label="Primary">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  )
}
