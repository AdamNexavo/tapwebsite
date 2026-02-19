import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * RevealOnScroll — globaal IntersectionObserver component.
 *
 * Observeert alle elementen met class `.reveal` en voegt `.revealed`
 * toe zodra ze in de viewport komen. Speelt 1x (geen herhaling).
 *
 * Respecteert `prefers-reduced-motion`: als de gebruiker verminderde
 * beweging prefereert, worden alle `.reveal` elementen direct zichtbaar
 * en wordt de observer NIET geactiveerd.
 */
const RevealOnScroll = () => {
  const location = useLocation();

  useEffect(() => {
    // Respecteer gebruikersvoorkeur voor verminderde beweging
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      document
        .querySelectorAll(".reveal:not(.revealed)")
        .forEach((el) => el.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    // Korte delay zodat de nieuwe route eerst rendert
    const timer = setTimeout(() => {
      document
        .querySelectorAll(".reveal:not(.revealed)")
        .forEach((el) => observer.observe(el));
    }, 60);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
};

export default RevealOnScroll;
