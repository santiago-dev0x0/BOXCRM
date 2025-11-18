import { useLayoutEffect, useState, useCallback, useRef } from 'react';

export type MeasureRect = {
  width: number;
  height: number;
  top: number;
  left: number;
  right: number;
  bottom: number;
  x: number;
  y: number;
};

const defaultRect: MeasureRect = {
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  x: 0,
  y: 0,
};

export function useMeasure<T extends HTMLElement = HTMLElement>() {
  const [rect, setRect] = useState<MeasureRect>(defaultRect);
  const elementRef = useRef<T | null>(null);
  const observerRef = useRef<ResizeObserver | null>(null);

  const ref = useCallback((node: T | null) => {
    elementRef.current = node;
  }, []);

  useLayoutEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Crear observer seguro
    let resizeObserver: ResizeObserver | null = null;

    try {
      resizeObserver = new ResizeObserver((entries) => {
        if (!entries[0]) return;
        const { width, height, top, left, right, bottom, x, y } =
          entries[0].contentRect;

        setRect({
          width,
          height,
          top,
          left,
          right,
          bottom,
          x,
          y,
        });
      });
      resizeObserver.observe(el);
    } catch (err) {
      console.warn('ResizeObserver no soportado o falló:', err);
      resizeObserver = null;
    }

    observerRef.current = resizeObserver;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return [ref, rect] as const;
}
