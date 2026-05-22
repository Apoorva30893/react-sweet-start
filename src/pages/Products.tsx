import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Settings, Gem, Layers, Wrench, ChevronRight, ArrowRight, Check, FileText } from 'lucide-react';
import styles from './Products.module.css';

const categories = [
  {
    id: 'solid-carbide',
    icon: Settings,
    color: '#4A7BA7',
    bg: '#EBF2F9',
    label: 'Solid Carbide',
    headline: 'Solid Carbide End Mills, Drills & Reamers',
    intro:
      'High-performance solid carbide tools engineered for steel, titanium, stainless steel and aluminium applications. High-polish flutes, micro cutting edge geometry, internal coolant options and advanced PVD coatings. All ground on 5-axis SAACKE machines to sub-micron tolerances.',
    image: '/13.png',
    features: [
      'High-polish flutes for superior surface finish',
      'Micro cutting edge geometry for precision',
      'Internal coolant channels (optional)',
      '5-axis SAACKE grinding for ±0.002mm accuracy',
      'AlTiN, TiSiN, DLC coating options',
      'Ideal for HSC machining and 3D contouring',
    ],
    products: [
      { name: 'Ball nose end mills', desc: 'Tapered ball nose with ±0.005mm radius tolerance for 3D machining', image: '/RMTT_PPT.pdf_(4).png' },
      { name: 'General purpose end mills', desc: 'Neutral geometry for general cutting applications', image: '/RMTT_PPT.pdf_(3).png' },
      { name: 'High-performance end mills', desc: 'Advanced coating for steel and stainless steel', image: '/RMTT_PPT.pdf_(1).png' },
      { name: 'Step drills & drills', desc: 'High-polish flutes for single-pass multi-diameter drilling', image: '/RMTT_PPT.pdf_(7).png' },
      { name: 'Solid carbide reamers', desc: 'Precision bore finishing with tight tolerances', image: '/RMTT_PPT.pdf_(2).png' },
      { name: 'Special Multi-Grooving tool', desc: 'Application-specific profiles and geometries', image: '/RMTT_PPT.pdf_(8).png' },
    ],
  },
  {
    id: 'pcd',
    icon: Gem,
    color: '#1A8A5C',
    bg: '#E8F5EE',
    label: 'PCD Tools',
    headline: 'PCD Reamers, Milling Cutters & Special Tools',
    intro:
      'Polycrystalline diamond tipped tools engineered with VOLLMER Wire EDM edge machining and precision lapping. Ideal for high-volume aluminium die casting, CFRP and non-ferrous applications demanding superior surface finish, dimensional accuracy and extended tool life. Available with solid carbide or steel bodies.',
    image: '/22.png',
    features: [
      'VOLLMER Wire EDM + precision lapping edges',
      'Seamless brazing with no heat distortion',
      'Z-4 high-quality PCD tips',
      'Internal coolant supply (optional)',
      'Steel body or solid carbide body options',
      'Module 60/70, HSK, BT connections available',
    ],
    products: [
      { name: 'Multi-step PCD reamers', desc: '5 steps in one tool, Module 70, Vc=210 m/min', image: '/RMTT PPT.pdf (16).png' },
      { name: 'Valve seat & guide tools', desc: 'Steel body + PCD tips for cylinder head profiling', image: '/RMTT PPT.pdf (15).png' },
      { name: 'Injector bore reamers', desc: 'Long taper with Ra 0.4 finish, solid carbide body', image: '/RMTT PPT.pdf (13).png' },
      { name: 'PCD profile milling cutters', desc: 'Boot & seal groove milling, one-shot finish',image:'/RMTT PPT.pdf (12).png' },
      { name: 'PCD form grooving cutters', desc: 'Outside diameter profile grooving', image: '/RMTT PPT.pdf (14).png' },
      { name: 'PCD thread mills', desc: 'Non-ferrous thread milling applications', image: '/RMTT PPT.pdf (11).png' },
    ],
  },
  {
    id: 'brazed',
    icon: Layers,
    color: '#B07A1A',
    bg: '#FBF4E6',
    label: 'Brazed Carbide',
    headline: 'Brazed Carbide Special Tools & Solutions',
    intro:
      'Cost-effective alternative to solid carbide and PCD for large-diameter, special-profile and high-volume applications. Tungsten carbide tips seamlessly brazed to steel bodies and ground on SAACKE 5-axis machines for edge geometry precision. Designed for hydraulic and excavator component machining.',
    image: '/RMTT PPT.pdf (10).png',
    features: [
      '5-axis SAACKE ground cutting edges',
      'Seamless brazing with no heat distortion',
      'Large diameter capability (up to 80mm+)',
      'Cost-effective vs volatile carbide prices',
      'Engineered for grey cast iron, steel & aluminium',
      'Tight tolerances built in for precision',
    ],
    products: [
      { name: 'Multi-grooving tool', desc: 'Hydraulic manifold spool bore, 70% time reduction' },
      { name: 'T-slot cutters', desc: 'Single and double-ended profiles for slot machining', image: '/RMTT PPT.pdf (19).png' },
      { name: 'Shell milling cutter', desc: 'Face milling for hydraulic/excavator components, 80mm diameter', image: '/RMTT PPT.pdf (20).png' },
      { name: 'Two-step reamer', desc: 'Multi-diameter bore finishing with brazed carbide tips', image: '/RMTT PPT.pdf (18).png' },
      { name: 'Brazed boring bars', desc: 'Fine boring with carbide tip for precision holes' },
      { name: 'Special form tools', desc: 'Customer-specific profiles and geometries', image: '/RMTT PPT.pdf (17).png' },
    ],
  },
  {
    id: 'special',
    icon: Wrench,
    color: '#5B7FA3',
    bg: '#EBF2F9',
    label: 'Special Tools',
    headline: 'Application-Specific Custom Tooling',
    intro:
      "When standard tools won't solve your problem, we engineer from scratch. Submit your drawing, material specifications, machine type and cycle requirements — our team designs, manufactures and validates a proven solution tailored to your exact needs.",
    image: '/RMTT_PPT.pdf_(7).png',
    features: [
      'Application analysis and custom design',
      'Reverse engineering from sample parts',
      'One-shot combination tools to reduce cycle time',
      'Internal coolant and advanced coating options',
      'Technical support and on-site trials included',
      'Fast turnaround from design to delivery',
    ],
    products: [
      { name: 'Multi-grooving tools', desc: 'Multiple grooves/profiles in single pass' },
      { name: 'Combination tools', desc: 'Multiple operations consolidated into one tool' },
      { name: 'Profile cutters', desc: 'Complex bore and outside profiles' },
      { name: 'Special reamers', desc: 'Custom step, form or specialty reaming tools' },
      { name: 'Custom boring tools', desc: 'Fine diameter adjustment boring bars' },
      { name: 'Application-specific solutions', desc: 'Your challenge, engineered solution' },
    ],
  },
];

export default function Products() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <main className={styles.main}>
      {/* Page hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <div className="section-eyebrow">What we manufacture</div>
          <h1 className={styles.pageTitle}>Product range</h1>
          <p className={styles.pageSubtitle}>
            Three tool technologies — solid carbide, PCD and brazed carbide — all manufactured to the same exacting standards on German equipment in Bengaluru.
          </p>
          <div className={styles.jumpLinks}>
            {categories.map(c => (
              <a key={c.id} href={`#${c.id}`} className={styles.jumpLink} style={{ color: c.color, borderColor: c.color + '40', background: c.bg }}>
                <c.icon size={14} />
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat, i) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`${styles.catSection} ${i % 2 === 1 ? styles.catSectionAlt : ''}`}
        >
          <div className="container">
            <div className={styles.catGrid}>
              <div className={styles.catImg}>
                <img src={cat.image} alt={cat.headline} />
                <div className={styles.catImgBadge} style={{ background: cat.color }}>
                  <cat.icon size={18} />
                  {cat.label}
                </div>
              </div>
              <div className={styles.catBody}>
                <div className="section-eyebrow" style={{ background: cat.bg, color: cat.color }}>
                  {cat.label}
                </div>
                <h2 className={styles.catTitle}>{cat.headline}</h2>
                <p className={styles.catIntro}>{cat.intro}</p>
                <ul className={styles.features}>
                  {cat.features.map(f => (
                    <li key={f} className={styles.feature}>
                      <Check size={14} style={{ color: cat.color, flexShrink: 0 }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.productsGrid}>
                  {cat.products.map(p => (
                    <div key={p.name} className={styles.productItem}>
                      {p.image && <img src={p.image} alt={p.name} className={styles.productImage} />}
                      <div className={styles.productName}>{p.name}</div>
                      <div className={styles.productDesc}>{p.desc}</div>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className={styles.catCta} style={{ background: cat.color }}>
                  <FileText size={15} />
                  Request quote for {cat.label}
                  <ChevronRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className={styles.bottomCta}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Don't see what you need?</h2>
          <p className={styles.ctaSub}>
            We regularly manufacture custom and special tools to customer specifications. Share your drawing or describe your challenge and we'll respond within 24 hours.
          </p>
          <Link to="/contact" className={styles.ctaBtn}>
            Describe your requirement <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
