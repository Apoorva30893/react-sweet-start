import { useEffect, useRef, useState } from 'react';

export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [shown, options]);

  return { ref, shown };
}

export function useCountUp(target: string, start: boolean, duration = 1600) {
  // Extract numeric portion + prefix/suffix
  const match = target.match(/^([^\d.-]*)([\d.,]+)(.*)$/);
  const [value, setValue] = useState(match ? match[1] + '0' + match[3] : target);

  useEffect(() => {
    if (!start || !match) {
      if (!match) setValue(target);
      return;
    }
    const prefix = match[1];
    const numStr = match[2].replace(/,/g, '');
    const suffix = match[3];
    const end = parseFloat(numStr);
    if (Number.isNaN(end)) {
      setValue(target);
      return;
    }
    const decimals = (numStr.split('.')[1] || '').length;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = end * eased;
      setValue(prefix + cur.toFixed(decimals) + suffix);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration, match]);

  return value;
}
