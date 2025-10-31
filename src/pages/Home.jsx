import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section className="hero">
      <h1>Embedded systems, IoT, and clever contraptions</h1>
      <p className="lead">
        Experiments, notes, and demos from ThinkSense Labs. Fast prototypes, tidy code, and honest writeups.
      </p>
      <div className="cta">
        <Link to="/projects" className="btn">View projects</Link>
        <a href="mailto:contact@thinksense.example" className="btn btn-ghost">Contact</a>
      </div>
    </section>
  )
}
