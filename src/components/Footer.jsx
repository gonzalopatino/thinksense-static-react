import React from "react"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <small>© {new Date().getFullYear()} ThinkSense Labs</small>
        <small>Built by Gonzalo Patino</small>
      </div>
    </footer>
  )
}
