import { Settings, Gem, Layers } from 'lucide-react';

export type Product = {
  name: string;
  desc: string;
  image?: string;
  specs?: { label: string; value: string }[];
  application?: string;
};

export type SubCategory = {
  id: string;
  title: string;
  blurb: string;
  products: Product[];
};

export type Category = {
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

export const categories: Category[] = [
  {
    id: 'solid-carbide',
    icon: Settings,
    color: '#002855',
    bg: '#E6EDF4',
    label: 'Solid Carbide',
    headline: 'Solid Carbide End Mills, Drills & Reamers',
    intro:
      'High-performance solid carbide tools engineered for steel, titanium, stainless steel and aluminium. High-polish flutes, micro cutting edge geometry, internal coolant options and advanced PVD coatings — all ground on 5-axis SAACKE machines to sub-micron tolerances.',
    image: `${import.meta.env.BASE_URL}13.png`,
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
          { name: 'Ball Nose End Mills', desc: 'Tapered ball nose tools for high-precision 3D surface machining and die/mould finishing.', image: `${import.meta.env.BASE_URL}10.png`, application: 'Mould & die finishing, aerospace pockets, medical implants' },
          { name: 'General Purpose End Mills', desc: 'Neutral geometry for everyday milling across mild steel, stainless and non-ferrous materials.', image: `${import.meta.env.BASE_URL}9.png`, application: 'Slotting, profiling, side milling of general engineering parts' },
          { name: 'High-Performance End Mills', desc: 'Variable helix, unequal indexing and advanced coatings for vibration-free machining of hardened steels.', image: `${import.meta.env.BASE_URL}7.png`, application: 'Hardened tool steels, Inconel, titanium, stainless 17-4PH' },
          { name: 'Finishing Application Solid Carbide Endmill', desc: 'Multi-flute reamers producing H7 or finer bores with Ra 0.4 µm surface finish.', image: `${import.meta.env.BASE_URL}8.png`, application: 'Hydraulic spool bores, gearbox shafts, valve bodies' },
          { name: 'Tapered Ball Nose Endmill', desc: 'Ideal for HSC machining  and 3D machining Stable center geometery', image: `${import.meta.env.BASE_URL}11.png`, application: 'stainless steel, Tatanium alloys' },
        ],
      },
      {
        id: 'sc-drills',
        title: 'Drills & Step Drills',
        blurb: 'Solid carbide drills with polished flutes and reinforced web for chip-free single-pass drilling.',
        products: [
          { name: 'Step Drills', desc: 'Multi-diameter holes finished in a single pass, eliminating tool changes and centring operations.', image: `${import.meta.env.BASE_URL}13T.png`, application: 'Cylinder heads, gearbox housings, injector bodies' },
          { name: 'High-Polish Carbide Drills', desc: 'Mirror-polished flutes for excellent chip evacuation in deep-hole and stainless steel drilling.', image: `${import.meta.env.BASE_URL}12.png`, application: 'Stainless steel, titanium, aluminium deep-hole drilling' },
        ],
      },
      {
        id: 'sc-special',
        title: 'Special / Multi-Grooving',
        blurb: 'Application-specific carbide tools combining multiple cutting profiles into a single operation.',
        products: [
          { name: 'Special Multi-Grooving Tool', desc: 'Combination tools designed around your component drawing to cut multiple grooves in one pass.', image: `${import.meta.env.BASE_URL}RMTT PPT.pdf (8).png`, application: 'Hydraulic manifold spools, automotive shaft grooves' },
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
    image: `${import.meta.env.BASE_URL}PCD-shanks.png`,
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
        id: 'pcd-tools',
        title: 'PCD Tools',
        blurb: 'Multi-step and single-step diamond delivering 5–10× the life of carbide in non-ferrous machining.',
        products: [
          { name: 'Single-Step & Multi-Step PCD Tools', desc: 'Up to 5 diameters in a single tool — replaces multiple operations on aluminium cylinder heads.', image: `${import.meta.env.BASE_URL}22.png`, application: 'Aluminium cylinder heads, gearbox housings' },
          { name: 'Injector Bore PCD Tool', desc: 'Solid carbide body with PCD tipped.Long taper finish 0.4 Ra and size consistence with visible high quality finish.', image: `${import.meta.env.BASE_URL}5.png`, application: ' Cy head injector bore for 4Wheeler' },
          { name: 'Master Cylender- Main Bore PCD Tool', desc: 'Solid carbide body with PCD. Challenge: Surface finish and clear from blow holes ', image: `${import.meta.env.BASE_URL}28.png`, application: 'Master main bore' },
        ],
      },
      {
        id: 'pcd-reamers',
        title: 'PCD Reamers',
        blurb: 'Multi-step and single-step diamond reamers delivering 5–10× the life of carbide in non-ferrous machining.',
        products: [
          { name: 'Two-Wheeler Shock Absorber', desc: 'It is Aluminum Die Casting material. Used for Precision hole finishing (reaming) operation.', image: `${import.meta.env.BASE_URL}38.png`, application: 'Achieve high dimensional accuracy and superior surface finish for smooth piston movement' },
          { name: 'PCD Step Three Step Reamer', desc: 'It is Aluminum Die Casting material. Used for Precision hole finishing (reaming) operation.', image: `${import.meta.env.BASE_URL}42.png`, application: 'Aerospace component finish reaming' },
        ],
      },
      {
        id: 'pcd-milling',
        title: 'PCD Milling Cutters',
        blurb: 'Profile, form-grooving and face mills with brazed PCD tips for one-shot finishing on aluminium.',
        products: [
          { name: 'PCD Profile Milling Cutters', desc: 'Custom-profile mills for boot grooves, seal channels and OD profiles in one finishing pass.', image: `${import.meta.env.BASE_URL}RMTT PPT.pdf (12).png`, application: 'CV joint boot grooves, transmission seal channels' },
          { name: 'Boot & Seal groove milling', desc: 'Solid carbide body, Z-4 High quality PCD tips.It has internal coolant supplyand one shot finish. Highest seal groove surace and Consistent profile accuracy achieved', image: `${import.meta.env.BASE_URL}36.png`, application: 'CV joint boot grooves, transmission seal channels' },
          { name: 'PCD Form Grooving Cutters', desc: 'Outside-diameter grooving cutters producing complex shapes on rotating workpieces.', image: `${import.meta.env.BASE_URL}RMTT PPT.pdf (14).png`, application: 'Aluminium pistons, motor shaft grooves' },
        ],
      },
      {
        id: 'pcd-thread',
        title: 'PCD Thread Mills',
        blurb: 'Diamond thread mills for non-ferrous threading where tap life is the bottleneck.',
        products: [
          { name: 'PCD Thread Mills', desc: 'Helical interpolation thread mills with PCD tips for long-running threading on aluminium parts.', image: `${import.meta.env.BASE_URL}RMTT PPT.pdf (11).png`, application: 'Aluminium housings, die-cast threaded bosses' },
        ],
      },
      {
        id: 'pcd-special',
        title: 'Valve Seat & Guide Tools',
        blurb: 'Combination PCD tooling for cylinder head valve seat and guide machining in a single cycle.',
        products: [
          { name: 'Valve Seat & Guide Tools', desc: 'Steel body with multiple PCD tips finishing seat angles and guide bore concentric to ±0.005 mm.', image: `${import.meta.env.BASE_URL}RMTT PPT.pdf (15).png`, application: 'Cylinder head valve seats and guides' },
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
    image: `${import.meta.env.BASE_URL}RMTT PPT.pdf (10).png`,
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
        blurb: 'Large-diameter face, Engineered for hydraulic and excavator component machining,shell and slot milling cutters with brazed carbide tips.',
        products: [
          { name: 'Shell Milling Cutter', desc: 'Face milling cutter for hydraulic and excavator components — large diameters at competitive cost.', image: `${import.meta.env.BASE_URL}RMTT PPT.pdf (20).png`, application: 'Designed to deliver consistent performance and machining efficiency in demanding industrial applications:Hydraulic valve blocks, excavator castings' },
          { name: 'T-Slot Cutters', desc: 'Single and double-ended T-slot profile cutters for machine tool tables and fixturing slots.', image: `${import.meta.env.BASE_URL}46.png`, application: 'Machine tables, fixture plates, jig bases' },
        ],
      },
      {
        id: 'bc-reamers',
        title: 'Reamers',
        blurb: 'Multi-diameter reamers and brazed boring bars for large bores beyond solid carbide range.',
        products: [
          { name: 'Two-Step Reamer', desc: 'Multi-diameter bore finishing with brazed carbide tips — single tool replaces two reaming operations.', image: `${import.meta.env.BASE_URL}45.png`, application: 'Hydraulic cylinders, gearbox bores' },
        ],
      },
      {
        id: 'bc-special',
        title: 'Special Form ',
        blurb: 'Customer-specific profiles brazed and ground to drawing — the workhorse of our brazed range.',
        products: [
          { name: 'Special Form Tools', desc: 'Customer-specific profile tools ground to drawing — bring us the part, we will engineer the tool.', image: `${import.meta.env.BASE_URL}RMTT PPT.pdf (17).png`, application: 'OEM-specific component profiling' },
        ],
      },
    ],
  },
];
