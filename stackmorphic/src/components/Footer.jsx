import { Link } from "react-router-dom";
import { navItems } from "../data/siteData";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="logo footer-logo">Stackmorphic</div>
          <p className="muted-text">
            Full-stack web development solutions for modern businesses.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <ul className="footer-links">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Services</h3>
          <ul className="footer-links">
            <li>Business Websites</li>
            <li>Web Applications</li>
            <li>E-Commerce</li>
            <li>Landing Pages</li>
            <li>Website Redesign</li>
            <li>Maintenance</li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="footer-links">
            <li>
              <a href="tel:+919330492466">+91 9330492466</a>
            </li>
            <li>
              <a
                href="https://wa.me/919330492466?text=Hello%20Stackmorphic%2C%20I%20would%20like%20to%20discuss%20a%20website%20project."
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              Badu Rd, Sreenagar, Madhyamgram, Kolkata, West Bengal 700129
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-meta">
        <span>© 2026 Stackmorphic. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
