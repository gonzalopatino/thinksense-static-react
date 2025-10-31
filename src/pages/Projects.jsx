import React from "react"

const sample = [
  {
    title: "RF Trainer Plane + RTOS flight controller",
    summary: "High-wing trainer, custom avionics, telemetry experiments.",
    link: "https://github.com/",
  },
  {
    title: "Smart Thermostat (Raspberry Pi + AHT20)",
    summary: "FSM-driven control with UART and planned MQTT telemetry.",
    link: "https://github.com/",
  },
]

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="grid">
        {sample.map((p, i) => (
          <a key={i} className="card" href={p.link} target="_blank" rel="noreferrer">
            <h3>{p.title}</h3>
            <p className="muted">{p.summary}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
