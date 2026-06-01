import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Settings, Gem, Layers, ChevronRight, ArrowRight, Check, FileText } from 'lucide-react';
import styles from './Products.module.css';

type Product = {
  name: string;
  desc: string;
  image?: string;
  specs?: { label: string; value: string }[];
  application?: string;
};

type SubCategory = {
  id: string;
  title: string;
  blurb: string;
  products: Product[];
};

type Category = {
  id: 'solid-carbide' | 'pcd' | 'brazed';
  icon: typeof Settings;
  color: string;
  bg: string;
  label: string;
  headline: string;
  intro: string;
  image: string;
  features: string[];
  subcategories: SubCategory[];
};

const categories: Category[] = [
  {
    id: 'solid-carbide',
    icon: Settings,
    color: '#002855',
    bg: '#E6EDF4',
    label: 'Solid Carbide',
    headline: 'Solid Carbide End Mills, Drills & Reamers',
    intro:
      'High-performance solid carbide tools engineered for steel, titanium, stainless steel and aluminium. High-polish flutes, micro cutting edge geometry, internal coolant options and advanced PVD coatings — all ground on 5-axis SAACKE machines to sub-micron tolerances.',
    image: '/13.png',
    features: [
      'High-polish flutes for superior surface finish',
      'Micro cutting edge geometry for precision',
      'Internal coolant channels (optional)',
      '5-axis SAACKE grinding for ±0.002 mm accuracy',
      'AlTiN, TiSiN, DLC coating options',
      'Ideal for HSC machining and 3D contouring',
    ],
    subcategories: [
      {
        id: 'sc-end-mills',
        title: 'End Mills',
        blurb: 'Two, three and four flute geometries for roughing, finishing and 3D contouring across steel, stainless and aluminium.',
        products: [
          {
            name: 'Ball Nose End Mills',
            desc: 'Tapered ball nose tools for high-precision 3D surface machining and die/mould finishing.',
            image: '/10.png',
            specs: [
              { label: 'Radius tolerance', value: '±0.005 mm' },
              { label: 'Flutes', value: '2 / 4' },
              { label: 'Coating', value: 'AlTiN / nACo' },
              { label: 'Diameter', value: '0.5 – 20 mm' },
            ],
            application: 'Mould & die finishing, aerospace pockets, medical implants',
          },
          {
            name: 'General Purpose End Mills',
            desc: 'Neutral geometry for everyday milling across mild steel, stainless and non-ferrous materials.',
            image: '/9.png',
            specs: [
              { label: 'Flutes', value: '3 / 4' },
              { label: 'Helix', value: '38° – 45°' },
              { label: 'Coating', value: 'TiAlN' },
              { label: 'Diameter', value: '1 – 25 mm' },
            ],
            application: 'Slotting, profiling, side milling of general engineering parts',
          },
          {
            name: 'High-Performance End Mills',
            desc: 'Variable helix, unequal indexing and advanced coatings for vibration-free machining of hardened steels.',
            image: '/7.png',
            specs: [
              { label: 'Hardness range', value: 'up to 65 HRC' },
              { label: 'Flutes', value: '4 / 5 / 6' },
              { label: 'Coating', value: 'TiSiN / nACRo' },
              { label: 'Cooling', value: 'Internal coolant' },
            ],
            application: 'Hardened tool steels, Inconel, titanium, stainless 17-4PH',
          },
          {
            name: 'Finishing Application Solid Carbide Endmill',
            desc: 'Multi-flute reamers producing H7 or finer bores with Ra 0.4 µm surface finish.',
            image: '/8.png',
            specs: [
              { label: 'Tolerance', value: 'H7 / H6' },
              { label: 'Flutes', value: '6 / 8' },
              { label: 'Surface finish', value: 'Ra 0.4 µm' },
              { label: 'Coating', value: 'TiCN / TiAlN' },
            ],
            application: 'Hydraulic spool bores, gearbox shafts, valve bodies',
          },
          {
            name: 'Tapered Ball Nose Endmill',
            desc: 'Ideal for HSC machining  and 3D machining Stable center geometery',
            image: '/11.png',
            specs: [
              { label: 'Tolerance', value: 'H7 / H6' },
              { label: 'Flutes', value: '6 / 8' },
              { label: 'Surface finish', value: 'Ra 0.4 µm' },
              { label: 'Coating', value: 'TiCN / TiAlN' },
            ],
            application: 'stainless steel, Tatanium alloys',
          },
        ],
      },
      {
        id: 'sc-drills',
        title: 'Drills & Step Drills',
        blurb: 'Solid carbide drills with polished flutes and reinforced web for chip-free single-pass drilling.',
        products: [
          {
            name: 'Step Drills',
            desc: 'Multi-diameter holes finished in a single pass, eliminating tool changes and centring operations.',
            image: '/13T.png',
            specs: [
              { label: 'Steps', value: '2 – 5' },
              { label: 'Point angle', value: '140°' },
              { label: 'Coating', value: 'TiAlN' },
              { label: 'L/D ratio', value: 'up to 8×D' },
            ],
            application: 'Cylinder heads, gearbox housings, injector bodies',
          },
          {
            name: 'High-Polish Carbide Drills',
            desc: 'Mirror-polished flutes for excellent chip evacuation in deep-hole and stainless steel drilling.',
            image: '/12.png',
            specs: [
              { label: 'L/D ratio', value: '3×D – 12×D' },
              { label: 'Coolant', value: 'Internal, 70 bar' },
              { label: 'Coating', value: 'TiAlN / DLC' },
              { label: 'Diameter', value: '1 – 16 mm' },
            ],
            application: 'Stainless steel, titanium, aluminium deep-hole drilling',
          },
        ],
      },
      {
        id: 'sc-special',
        title: 'Special / Multi-Grooving',
        blurb: 'Application-specific carbide tools combining multiple cutting profiles into a single operation.',
        products: [
          {
            name: 'Special Multi-Grooving Tool',
            desc: 'Combination tools designed around your component drawing to cut multiple grooves in one pass.',
            image: '/RMTT_PPT.pdf_(8).png',
            specs: [
              { label: 'Profile count', value: 'up to 6 grooves' },
              { label: 'Cycle time', value: '40 – 70% reduction' },
              { label: 'Bodies', value: 'Carbide / Steel + carbide' },
            ],
            application: 'Hydraulic manifold spools, automotive shaft grooves',
          },
        ],
      },
    ],
  },
  {
    id: 'pcd',
    icon: Gem,
    color: '#003B73',
    bg: '#E6EDF4',
    label: 'PCD Tools',
    headline: 'PCD Reamers, Milling Cutters & Special Tools',
    intro:
      'Polycrystalline diamond tipped tools engineered with VOLLMER Wire EDM edge machining and precision lapping. Ideal for high-volume aluminium die-casting, CFRP and non-ferrous applications demanding superior surface finish, dimensional accuracy and extended tool life.',
    image: '/22.png',
    features: [
      'VOLLMER Wire EDM + precision lapping edges',
      'Seamless brazing with no heat distortion',
      'Z-4 high-quality PCD tips',
      'Internal coolant supply (optional)',
      'Steel or solid carbide body options',
      'Module 60/70, HSK and BT connections',
    ],
    subcategories: [
      {
        id: 'pcd-reamers',
        title: 'PCD Reamers',
        blurb: 'Multi-step and single-step diamond reamers delivering 5–10× the life of carbide in non-ferrous machining.',
        products: [
          {
            name: 'Multi-Step PCD Reamers',
            desc: 'Up to 5 diameters in a single tool — replaces multiple operations on aluminium cylinder heads.',
            image: '/RMTT PPT.pdf (16).png',
            specs: [
              { label: 'Steps', value: 'up to 5' },
              { label: 'Connection', value: 'Module 70 / HSK' },
              { label: 'Cutting speed', value: 'Vc = 210 m/min' },
              { label: 'Tip', value: 'Z-4 PCD' },
            ],
            application: 'Aluminium cylinder heads, gearbox housings',
          },
          {
            name: 'Injector Bore Reamers',
            desc: 'Long-taper PCD reamers producing Ra 0.4 µm injector bores in cast iron and aluminium.',
            image: '/RMTT PPT.pdf (13).png',
            specs: [
              { label: 'Body', value: 'Solid carbide' },
              { label: 'Taper length', value: '90 – 180 mm' },
              { label: 'Surface finish', value: 'Ra 0.4 µm' },
              { label: 'Tip', value: 'PCD' },
            ],
            application: 'Diesel/petrol injector seats in cylinder heads',
          },
        ],
      },
      {
        id: 'pcd-milling',
        title: 'PCD Milling Cutters',
        blurb: 'Profile, form-grooving and face mills with brazed PCD tips for one-shot finishing on aluminium.',
        products: [
          {
            name: 'PCD Profile Milling Cutters',
            desc: 'Custom-profile mills for boot grooves, seal channels and OD profiles in one finishing pass.',
            image: '/RMTT PPT.pdf (12).png',
            specs: [
              { label: 'Tips', value: 'Z-3 / Z-4 PCD' },
              { label: 'Profile tolerance', value: '±0.01 mm' },
              { label: 'Body', value: 'Steel' },
            ],
            application: 'CV joint boot grooves, transmission seal channels',
          },
          {
            name: 'PCD Form Grooving Cutters',
            desc: 'Outside-diameter grooving cutters producing complex shapes on rotating workpieces.',
            image: '/RMTT PPT.pdf (14).png',
            specs: [
              { label: 'OD range', value: '20 – 120 mm' },
              { label: 'Tips', value: 'PCD brazed' },
              { label: 'Cooling', value: 'Through-body coolant' },
            ],
            application: 'Aluminium pistons, motor shaft grooves',
          },
        ],
      },
      {
        id: 'pcd-thread',
        title: 'PCD Thread Mills',
        blurb: 'Diamond thread mills for non-ferrous threading where tap life is the bottleneck.',
        products: [
          {
            name: 'PCD Thread Mills',
            desc: 'Helical interpolation thread mills with PCD tips for long-running threading on aluminium parts.',
            image: '/RMTT PPT.pdf (11).png',
            specs: [
              { label: 'Thread range', value: 'M3 – M30' },
              { label: 'Pitch', value: '0.5 – 3.5 mm' },
              { label: 'Tips', value: 'Z-2 PCD' },
            ],
            application: 'Aluminium housings, die-cast threaded bosses',
          },
        ],
      },
      {
        id: 'pcd-special',
        title: 'Valve Seat & Guide Tools',
        blurb: 'Combination PCD tooling for cylinder head valve seat and guide machining in a single cycle.',
        products: [
          {
            name: 'Valve Seat & Guide Tools',
            desc: 'Steel body with multiple PCD tips finishing seat angles and guide bore concentric to ±0.005 mm.',
            image: '/RMTT PPT.pdf (15).png',
            specs: [
              { label: 'Concentricity', value: '±0.005 mm' },
              { label: 'Angles', value: '30° / 45° / 60°' },
              { label: 'Body', value: 'Steel + PCD tips' },
            ],
            application: 'Cylinder head valve seats and guides',
          },
        ],
      },
    ],
  },
  {
    id: 'brazed',
    icon: Layers,
    color: '#3D6FA0',
    bg: '#E6EDF4',
    label: 'Brazed Carbide',
    headline: 'Brazed Carbide Special Tools & Solutions',
    intro:
      'Cost-effective alternative to solid carbide and PCD for large-diameter, special-profile and high-volume applications. Tungsten carbide tips seamlessly brazed to steel bodies and ground on SAACKE 5-axis machines for precise edge geometry.',
    image: '/RMTT PPT.pdf (10).png',
    features: [
      '5-axis SAACKE ground cutting edges',
      'Seamless brazing with no heat distortion',
      'Large diameter capability (80 mm+)',
      'Cost-effective vs volatile carbide prices',
      'Engineered for grey cast iron, steel & aluminium',
      'Tight tolerances built in for precision',
    ],
    subcategories: [
      {
        id: 'bc-milling',
        title: 'Milling Cutters',
        blurb: 'Large-diameter face, shell and slot milling cutters with brazed carbide tips.',
        products: [
          {
            name: 'Shell Milling Cutter',
            desc: 'Face milling cutter for hydraulic and excavator components — large diameters at competitive cost.',
            image: '/RMTT PPT.pdf (20).png',
            specs: [
              { label: 'Diameter', value: '80 mm (up to 250 mm)' },
              { label: 'Inserts', value: 'Brazed carbide' },
              { label: 'Body', value: 'Heat-treated steel' },
            ],
            application: 'Hydraulic valve blocks, excavator castings',
          },
          {
            name: 'T-Slot Cutters',
            desc: 'Single and double-ended T-slot profile cutters for machine tool tables and fixturing slots.',
            image: '/RMTT PPT.pdf (19).png',
            specs: [
              { label: 'Slot widths', value: '8 – 36 mm' },
              { label: 'Configuration', value: 'Single / double-ended' },
              { label: 'Tips', value: 'K20 carbide' },
            ],
            application: 'Machine tables, fixture plates, jig bases',
          },
        ],
      },
      {
        id: 'bc-reamers',
        title: 'Reamers & Boring Tools',
        blurb: 'Multi-diameter reamers and brazed boring bars for large bores beyond solid carbide range.',
        products: [
          {
            name: 'Two-Step Reamer',
            desc: 'Multi-diameter bore finishing with brazed carbide tips — single tool replaces two reaming operations.',
            image: '/RMTT PPT.pdf (18).png',
            specs: [
              { label: 'Steps', value: '2' },
              { label: 'Tolerance', value: 'H7' },
              { label: 'Diameter range', value: '20 – 80 mm' },
            ],
            application: 'Hydraulic cylinders, gearbox bores',
          },
          {
            name: 'Brazed Boring Bars',
            desc: 'Fine boring bars with brazed carbide tips for precision hole finishing on large workpieces.',
            specs: [
              { label: 'Diameter range', value: '25 – 150 mm' },
              { label: 'Tolerance', value: 'IT6 achievable' },
              { label: 'Body', value: 'Steel or carbide-reinforced' },
            ],
            application: 'Engine blocks, large hydraulic bores',
          },
        ],
      },
      {
        id: 'bc-special',
        title: 'Special Form & Multi-Grooving',
        blurb: 'Customer-specific profiles brazed and ground to drawing — the workhorse of our brazed range.',
        products: [
          {
            name: 'Multi-Grooving Tool',
            desc: 'Hydraulic manifold spool bore tool combining several grooves and chamfers — proven 70% cycle-time reduction.',
            specs: [
              { label: 'Profiles', value: 'up to 8 in one pass' },
              { label: 'Cycle time', value: '70% reduction' },
              { label: 'Body', value: 'Steel + brazed carbide' },
            ],
            application: 'Hydraulic manifold spool bores',
          },
          {
            name: 'Special Form Tools',
            desc: 'Customer-specific profile tools ground to drawing — bring us the part, we will engineer the tool.',
            image: '/RMTT PPT.pdf (17).png',
            specs: [
              { label: 'Profile tolerance', value: '±0.01 mm' },
              { label: 'Materials', value: 'Steel, cast iron, Al' },
              { label: 'Lead time', value: '3 – 5 weeks' },
            ],
            application: 'OEM-specific component profiling',
          },
        ],
      },
    ],
  },
];

export default function Products() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 110;
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
            Three tool technologies — Solid Carbide, PCD and Brazed Carbide — all manufactured to the same exacting standards on German equipment in Bengaluru.
          </p>
          <div className={styles.jumpLinks}>
            {categories.map(c => (
              <a key={c.id} href={`#${c.id}`} className={styles.jumpLink}>
                <c.icon size={14} />
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat) => (
        <section key={cat.id} id={cat.id} className={styles.catSection}>
          <div className="container">
            {/* Category header */}
            <div className={styles.catHeader}>
              <div className={styles.catHeaderText}>
                <div className="section-eyebrow">{cat.label}</div>
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
              </div>
              <div className={styles.catImg}>
                <img src={cat.image} alt={cat.headline} />
              </div>
            </div>

            {/* Sub-categories */}
            {cat.subcategories.map(sub => (
              <div key={sub.id} id={sub.id} className={styles.subCat}>
                <div className={styles.subCatHead}>
                  <h3 className={styles.subCatTitle}>{sub.title}</h3>
                  <p className={styles.subCatBlurb}>{sub.blurb}</p>
                </div>
                <div className={styles.productCards}>
                  {sub.products.map(p => (
                    <article key={p.name} className={styles.productCard}>
                      {p.image && (
                        <div className={styles.productImgWrap}>
                          <img src={p.image} alt={p.name} loading="lazy" />
                        </div>
                      )}
                      <div className={styles.productBody}>
                        <h4 className={styles.productName}>{p.name}</h4>
                        <p className={styles.productDesc}>{p.desc}</p>
                        {p.specs && (
                          <dl className={styles.specGrid}>
                            {p.specs.map(s => (
                              <div key={s.label} className={styles.specItem}>
                                <dt>{s.label}</dt>
                                <dd>{s.value}</dd>
                              </div>
                            ))}
                          </dl>
                        )}
                        {p.application && (
                          <div className={styles.appLine}>
                            <span className={styles.appLabel}>Typical use</span>
                            <span>{p.application}</span>
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}

            <div className={styles.catFooter}>
              <Link to="/contact" className={styles.catCta}>
                <FileText size={15} />
                Request quote for {cat.label}
                <ChevronRight size={15} />
              </Link>
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
