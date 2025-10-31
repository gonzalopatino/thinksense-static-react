
import React from "react"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <p>© {year} ThinkSense Labs</p>
        <p className="muted">Built with React + Vite. Deployed on Netlify.</p>
      </div>
    </footer>
  )
}

