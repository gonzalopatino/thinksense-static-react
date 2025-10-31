import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles.css";

const cards = [
  { title: "RTOS Flight Controller", desc: "STM32, PID, telemetry, RTOS scheduling.", color: "#00bcd4", to: "/projects#rtos-fc" },
  { title: "Smart Thermostat", desc: "Raspberry Pi, FSM, AHT20, LCD, MQTT.", color: "#8bc34a", to: "/projects#thermostat" },
  { title: "IoT Sensor Hub", desc: "ESP32 gateway, MQTT, cloud dash prototype.", color: "#ff9800", to: "/projects#sensor-hub" },
  { title: "3D Printed UAV Frame", desc: "Modular enclosure, quick-swap arms, P1S.", color: "#e91e63", to: "/projects#uav-frame" },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function Home() {
  const prefersReduced = useReducedMotion();

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero drone-hero hero--compact" aria-label="Animated drone scene">
        <div className="drone-stage">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 400"
            role="img"
            aria-label="Cartoon drone flying over a stylized landscape"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0c0f14" />
                <stop offset="100%" stopColor="#0b0b10" />
              </linearGradient>
              <linearGradient id="horizon" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#0b2230" />
                <stop offset="1" stopColor="#0b1016" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect width="1200" height="400" fill="url(#sky)" />

            {/* Parallax clouds (disabled if prefers-reduced-motion) */}
            <g className={`cloud-band band-a ${prefersReduced ? "no-fly" : ""}`} aria-hidden="true">
              <Cloud x="100" y="80" scale={1.2} />
              <Cloud x="420" y="60" scale={1.0} />
              <Cloud x="780" y="90" scale={1.4} />
            </g>
            <g className={`cloud-band band-b ${prefersReduced ? "no-fly" : ""}`} aria-hidden="true">
              <Cloud x="220" y="140" scale={0.9} />
              <Cloud x="610" y="130" scale={1.1} />
              <Cloud x="980" y="150" scale={1.0} />
            </g>

            <rect y="320" width="1200" height="80" fill="url(#horizon)" />

            {/* Drone */}
            <g
              className={`drone ${prefersReduced ? "no-fly" : ""}`}
              transform="translate(600,190)"
              filter="url(#glow)"
            >
              <Drone />
            </g>
          </svg>

          {/* Overlay text */}
          <motion.h1
            className="hero-title"
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          >
            Embedded systems, IoT, and clever contraptions
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            Experiments, notes, and demos from ThinkSense Labs. Fast prototypes, tidy code, and honest writeups.
          </motion.p>

          <motion.div
            className="cta"
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Link to="/projects" className="btn">View projects</Link>
            <a href="mailto:info@thinksenselabs.com" className="btn btn-ghost">Contact</a>
          </motion.div>
        </div>
      </section>

      {/* ---------- PROJECT CARDS ---------- */}
      <motion.section
        className="deck"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map((card) => (
          <motion.article
            key={card.title}
            className="card"
            variants={item}
            /* your CSS sets border-left: 3px solid currentColor; so set currentColor here */
            style={{ color: card.color }}
          >
            {/* Make card clickable without extra CSS classes */}
            <Link
              to={card.to}
              style={{ display: "block", textDecoration: "none", color: "inherit" }}
              aria-label={`${card.title} project`}
            >
              <h3 style={{ margin: 0 }}>{card.title}</h3>
              <p className="muted">{card.desc}</p>
            </Link>
          </motion.article>
        ))}
      </motion.section>
    </>
  );
}

/* ---------- Tiny SVG subcomponents ---------- */
const Cloud = React.memo(function Cloud({ x = 0, y = 0, scale = 1 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`}>
      <ellipse cx="0" cy="0" rx="60" ry="22" fill="#c9e8ff11" />
      <ellipse cx="40" cy="-6" rx="38" ry="16" fill="#c9e8ff0f" />
      <ellipse cx="-35" cy="-4" rx="28" ry="12" fill="#c9e8ff0c" />
    </g>
  );
});

const Drone = React.memo(function Drone() {
  return (
    <g>
      <rect x="-52" y="-16" width="104" height="32" rx="11" fill="#12121a" stroke="#6ee7ff" strokeWidth="2" />
      <ellipse cx="0" cy="-8" rx="26" ry="14" fill="#0f1c26" stroke="#6ef3a5" strokeWidth="1.5" />
      <circle cx="0" cy="6" r="6" fill="#0b0b10" stroke="#6ee7ff" strokeWidth="2" />
      <circle cx="0" cy="6" r="2" fill="#6ee7ff" />
      <line x1="-52" y1="-8" x2="-86" y2="-18" stroke="#6ee7ff" strokeWidth="3" />
      <line x1="52" y1="-8" x2="86" y2="-18" stroke="#6ee7ff" strokeWidth="3" />
      <line x1="-52" y1="8" x2="-86" y2="18" stroke="#6ee7ff" strokeWidth="3" />
      <line x1="52" y1="8" x2="86" y2="18" stroke="#6ee7ff" strokeWidth="3" />
      <g className="prop prop-a" transform="translate(-96,-22)">
        <circle r="10" fill="#0f1820" stroke="#6ef3a5" strokeWidth="1" />
        <ellipse rx="22" ry="4" fill="#6ee7ff55" />
      </g>
      <g className="prop prop-b" transform="translate(96,-22)">
        <circle r="10" fill="#0f1820" stroke="#6ef3a5" strokeWidth="1" />
        <ellipse rx="22" ry="4" fill="#6ee7ff55" />
      </g>
      <g className="prop prop-c" transform="translate(-96,22)">
        <circle r="10" fill="#0f1820" stroke="#6ef3a5" strokeWidth="1" />
        <ellipse rx="22" ry="4" fill="#6ee7ff55" />
      </g>
      <g className="prop prop-d" transform="translate(96,22)">
        <circle r="10" fill="#0f1820" stroke="#6ef3a5" strokeWidth="1" />
        <ellipse rx="22" ry="4" fill="#6ee7ff55" />
      </g>
    </g>
  );
});
