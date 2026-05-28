// src/hooks/useScrollReveal.js
import { useState, useEffect, useRef } from "react";

/**
 * Hook que devuelve [ref, isVisible].
 * Cuando el elemento entra en viewport, isVisible se vuelve true.
 * Se desconecta automáticamente tras la primera activación.
 *
 * @param {number} threshold  - porcentaje del elemento visible para activar (0–1)
 * @param {string} rootMargin - margen adicional como en IntersectionObserver
 */
export function useScrollReveal(threshold = 0.1, rootMargin = "0px") {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}