import { useEffect, useRef, useState, CSSProperties } from 'react';

export interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Hook to detect if user has enabled prefers-reduced-motion in OS / browser.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    } else if ('addListener' in mediaQuery) {
      (mediaQuery as any).addListener(handler);
      return () => (mediaQuery as any).removeListener(handler);
    }
  }, []);

  return prefersReducedMotion;
}

/**
 * Individual item / card scroll reveal hook with staggered delay calculation.
 */
export function useScrollRevealItem<T extends HTMLElement = HTMLDivElement>(
  index: number = 0,
  columns: number = 4,
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.12, rootMargin = '0px 0px -40px 0px', once = true } = options;
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [prefersReducedMotion, threshold, rootMargin, once]);

  // Compute CSS transition style
  const style = computeRevealStyle(isVisible, index, columns, prefersReducedMotion);

  return { ref, isVisible, style, prefersReducedMotion };
}

/**
 * Pure function to compute staggered reveal CSS properties based on visibility and motion preferences.
 */
export function computeRevealStyle(
  isVisible: boolean,
  index: number = 0,
  columns: number = 4,
  prefersReducedMotion: boolean = false
): CSSProperties {
  if (prefersReducedMotion) {
    return {
      opacity: 1,
      transform: 'none',
      transition: 'none',
    };
  }

  return {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
    transitionProperty: 'opacity, transform',
    transitionDuration: '600ms',
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: isVisible ? `${(index % columns) * 80}ms` : '0ms',
    willChange: isVisible ? 'auto' : 'opacity, transform',
  };
}

