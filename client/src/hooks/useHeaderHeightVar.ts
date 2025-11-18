import { useEffect, useRef } from 'react';

export function useHeaderHeightVar() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      document.documentElement.style.setProperty(
        '--header-height',
        `${rect.height}px`
      );
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  return ref;
}
