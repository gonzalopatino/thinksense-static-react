import React from "react"

export default function About() {
  return (
    <article className="prose">
      <h2>About ThinkSense Labs</h2>
      <p>
        ThinkSense Labs is a hub for learning and building in embedded systems and IoT. It hosts
        personal R&D, tutorials, and engineering notes aimed at practical, production-minded prototyping.
      </p>
      <ul>
        <li>Edge devices: STM32, ESP32, Raspberry Pi</li>
        <li>RTOS and Linux userland tinkering</li>
        <li>Cloud dashboards and device telemetry</li>
      </ul>
    </article>
  )
}
