// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__inner">
        <header className="hero__eyebrow">ThinkSense Labs</header>

        <h1 className="hero__title">
          Embedded systems, IoT, and clever contraptions
        </h1>

        <p className="hero__lead">
          Fast prototypes, tidy code, and honest writeups. Practical builds from sensors to cloud,
          with diagrams, firmware, and benchmarks you can reuse.
        </p>

        <div className="hero__cta">
          <a className="btn btn--primary" href="/projects">View projects</a>
          <a className="btn btn--ghost" href="/about">About</a>
          <a className="btn btn--ghost" href="/contact">Contact</a>
        </div>

        <ul className="hero__meta">
          <li>STM32, ESP32, Pi</li>
          <li>FreeRTOS, drivers, HAL</li>
          <li>MQTT, Modbus, cloud</li>
        </ul>
      </div>
    </section>
  );
}
