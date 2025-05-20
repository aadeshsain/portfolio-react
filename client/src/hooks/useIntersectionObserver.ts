import { useEffect, useRef, useState } from "react";

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useIntersectionObserver(
  options: IntersectionObserverOptions = {},
  once: boolean = false
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const { root = null, rootMargin = "0px", threshold = 0.1 } = options;

  useEffect(() => {
    if (!targetRef.current) return;

    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Setup new observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);

        // If once is true and the element is intersecting, disconnect the observer
        if (once && entry.isIntersecting && observerRef.current) {
          observerRef.current.disconnect();
        }
      },
      { root, rootMargin, threshold }
    );

    observerRef.current.observe(targetRef.current);

    // Cleanup on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [root, rootMargin, threshold, once]);

  return { targetRef, isIntersecting };
}
