import { Factory, Ruler, Clock, Award } from 'lucide-react';
import { useReveal, useCountUp } from '../hooks/useReveal';
import styles from './StatsBar.module.css';

const stats = [
  { icon: Factory, value: '12,000+', label: 'Precision tools delivered' },
  { icon: Ruler,   value: '±0.002mm', label: 'Tolerance capability' },
  { icon: Clock,   value: '24h',      label: 'Technical response time' },
  { icon: Award,   value: '15+',      label: 'Years of engineering' },
];

function Stat({ icon: Icon, value, label, start }: { icon: typeof Factory; value: string; label: string; start: boolean }) {
  const display = useCountUp(value, start);
  return (
    <div className={styles.stat}>
      <Icon size={22} className={styles.icon} aria-hidden="true" />
      <div className={styles.value}>{display}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}

export default function StatsBar() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <section className={styles.wrap}>
      <div className="container">
        <div ref={ref} className={styles.grid}>
          {stats.map(s => (
            <Stat key={s.label} icon={s.icon} value={s.value} label={s.label} start={shown} />
          ))}
        </div>
      </div>
    </section>
  );
}
