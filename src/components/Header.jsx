import React from "react"
import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="brand-link">
        <span>∿</span> ThinkSense Labs
      </a>
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}
