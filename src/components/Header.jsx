import React, { useEffect } from "react"
import { NavLink } from "react-router-dom"

export default function Header() {
  useEffect(() => {
    const el = document.querySelector(".header")
    const onScroll = () => {
      if (window.scrollY > 30) el?.classList.add("scrolled")
      else el?.classList.remove("scrolled")
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="header">
      <a className="brand-link" href="/"><span>~</span> ThinkSense Labs</a>
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}
