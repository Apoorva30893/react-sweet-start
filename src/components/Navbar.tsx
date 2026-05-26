import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Search } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Technology', href: '/technology' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <a href="tel:+919945909155" className={styles.topBarLink}>
            <Phone size={13} /> +91 99459 09155
          </a>
          <a href="mailto:sales@rmtt.co.in" className={styles.topBarLink}>
            <Mail size={13} /> sales@rmtt.co.in
          </a>
        </div>
      </div>

      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
            <img src="/image001.png" alt="Riddhi Machine Tool Technology" className={styles.logoImg} />
          </Link>

          <nav className={styles.nav} aria-label="Main navigation">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`${styles.navLink} ${location.pathname.startsWith(link.href) ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <Link to="/contact" className={styles.cta}>
              Request Quote
            </Link>
            <button
              className={styles.menuBtn}
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className={styles.mobileMenu}>
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`${styles.mobileLink} ${location.pathname.startsWith(link.href) ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className={styles.mobileCta}>
              Request a Quote
            </Link>
          </div>
        )}
      </header>
    </>
  );
}

