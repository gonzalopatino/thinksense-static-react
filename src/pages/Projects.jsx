export default function Projects() {
  const projects = [
    {
      title: "RF Trainer Plane + RTOS Flight Controller",
      desc: "High-wing trainer, custom avionics, telemetry experiments.",
      color: "#6ee7ff"
    },
    {
      title: "Smart Thermostat (Raspberry Pi + AHT20)",
      desc: "FSM-driven control with UART and planned MQTT telemetry.",
      color: "#94f7c5"
    },
    {
      title: "IoT Sensor Hub",
      desc: "ESP32 gateway with MQTT and cloud dashboard prototype.",
      color: "#f9ae00"
    }
  ]

  return (
    <section className="container">
      <h1 className="page-title">Projects</h1>
      <div className="deck">
        {projects.map((p, i) => (
          <div
            key={i}
            className="card"
            style={{ borderColor: p.color, boxShadow: `0 0 12px ${p.color}20` }}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
