import { Outlet, NavLink, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="header" id="site-header">
        <Link className="brand-link" to="/">ThinkSense Labs</Link>

        {/* mobile toggle (works with your existing .nav.open CSS) */}
        <button
          className="menu-toggle"
          aria-controls="primary-nav"
          aria-expanded="false"
          onClick={(e) => {
            const nav = document.getElementById("primary-nav");
            const open = nav.classList.toggle("open");
            e.currentTarget.setAttribute("aria-expanded", String(open));
          }}
        >
          Menu
        </button>

        <nav className="nav" id="primary-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      {/* main takes the remaining height so footer sits at the bottom */}
      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">
          <small>© 2025 ThinkSense Labs</small>
          <div><small>Built with React + Vite. Deployed on Netlify.</small></div>
        </div>
      </footer>
    </>
  );
}
