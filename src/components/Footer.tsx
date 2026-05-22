import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.brand}>
              <img src="/image001.png" alt="Riddhi Machine Tool Technology" className={styles.logoImg} />
              <p className={styles.tagline}>
                Precision cutting tools engineered for demanding applications — solid carbide, PCD and brazed carbide solutions manufactured to German-benchmark standards in Bengaluru.
              </p>
              <div className={styles.socials}>
                <a href="#" aria-label="LinkedIn" className={styles.social}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" aria-label="YouTube" className={styles.social}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
                </a>
                <a href="#" aria-label="Instagram" className={styles.social}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
              </div>
              <img src="/2.jpg" alt="Make in India" className={styles.makeInIndiaImage} />
            </div>

            <div className={styles.col}>
              <div className={styles.colTitle}>Products</div>
              <ul className={styles.links}>
                <li><Link to="/products#solid-carbide">Solid Carbide End Mills</Link></li>
                <li><Link to="/products#solid-carbide">Step Drills & Reamers</Link></li>
                <li><Link to="/products#pcd">PCD Tools</Link></li>
                <li><Link to="/products#pcd">PCD Reamers & Millers</Link></li>
                <li><Link to="/products#brazed">Brazed Carbide Tools</Link></li>
                <li><Link to="/products#special">Special / Custom Tools</Link></li>
              </ul>
            </div>

            <div className={styles.col}>
              <div className={styles.colTitle}>Company</div>
              <ul className={styles.links}>
                <li><Link to="/about">About Riddhi</Link></li>
                <li><Link to="/technology">Technology</Link></li>
                <li><Link to="/industries">Industries</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><a href="#">Downloads</a></li>
              </ul>
            </div>

            <div className={styles.col}>
              <div className={styles.colTitle}>Contact</div>
              <ul className={styles.contactList}>
                <li>
                  <MapPin size={14} className={styles.contactIcon} />
                  <span>GNC Industrial Estate,<br />Bengaluru, KA 560082</span>
                </li>
                <li>
                  <Phone size={14} className={styles.contactIcon} />
                  <a href="tel:+919945909155">+91 99459 09155</a>
                </li>
                <li>
                  <Mail size={14} className={styles.contactIcon} />
                  <a href="mailto:sales@riddhitools.in">sales@riddhitools.in</a>
                </li>
              </ul>
            </div>
            <div className={styles.followCol}>
              <div className={styles.colTitle}>Follow us</div>
              <div className={styles.socials}>
                <a
                  href="https://in.linkedin.com/company/riddhi-machine-tool-technology-blr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={styles.social}>
              
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="#" aria-label="YouTube" className={styles.social}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className={styles.social}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <span>© {new Date().getFullYear()} Riddhi Machine Tool Technology. All rights reserved.</span>
            <div className={styles.bottomLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
