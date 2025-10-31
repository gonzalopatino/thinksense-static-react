import React from "react"

export default function About() {
  return (
    <section className="container about">
      <h1 className="page-title">About ThinkSense Labs</h1>
      <p className="lead about-lead">
        ThinkSense Labs is a hub for learning and building in embedded systems and IoT.
        It hosts personal R&D, tutorials, and engineering notes focused on practical, production-minded prototyping.
      </p>

      {/* badges */}
      <div className="badges">
        <span className="badge">STM32</span>
        <span className="badge">ESP32</span>
        <span className="badge">Raspberry Pi</span>
        <span className="badge">RTOS</span>
        <span className="badge">Linux userspace</span>
        <span className="badge">MQTT</span>
        <span className="badge">Cloud dashboards</span>
      </div>

      {/* two column grid */}
      <div className="about-grid">
        <div className="about-card">
          <h3>Mission</h3>
          <p className="muted">
            Build tidy, testable systems that bridge hardware, software, and the cloud. Share the path clearly so others can reproduce results.
          </p>
          <ul className="checklist">
            <li>Documented experiments with BOM and wiring</li>
            <li>Readable code with small abstractions</li>
            <li>Deterministic tests where it matters</li>
            <li>Explain tradeoffs and limits honestly</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Focus areas</h3>
          <ul className="bullets">
            <li>Edge control: sensor fusion, control loops, RTOS scheduling</li>
            <li>Connectivity: UART, SPI, I2C, CAN, BLE, Wi-Fi, MQTT</li>
            <li>Dev tooling: reproducible builds, CI for firmware, tracing</li>
            <li>Dashboards: live telemetry, alerts, and device ops</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>What’s next</h3>
          <ul className="bullets">
            <li>UAV airframe rev with lighter printable spars</li>
            <li>Flight controller on STM32 with logging and replay</li>
            <li>Unified sensor hub template for ESP32 and Pi</li>
          </ul>
        </div>

        <div className="about-card highlight">
          <h3>Say hi</h3>
          <p className="muted">Collaborations, feedback, or just nerding out about embedded systems.</p>
          <a className="btn" href="mailto:contact@thinksense.io">Contact</a>
        </div>
      </div>

      {/* timeline */}
      <div className="timeline">
        <div className="tl-item">
          <div className="dot" />
          <div>
            <h4>2025 Q1 - RF Trainer Plane</h4>
            <p className="muted">High-wing trainer airframe, first avionics tests, telemetry link.</p>
          </div>
        </div>
        <div className="tl-item">
          <div className="dot" />
          <div>
            <h4>2025 Q2 - Smart Thermostat</h4>
            <p className="muted">FSM control on Raspberry Pi with AHT20 and LCD, UART debug, MQTT plan.</p>
          </div>
        </div>
        <div className="tl-item">
          <div className="dot" />
          <div>
            <h4>2025 Q3 - IoT Sensor Hub</h4>
            <p className="muted">ESP32 gateway template for rapid sensor bring-up and cloud demos.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
