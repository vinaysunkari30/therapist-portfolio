"use client";
import { useEffect, useState, useRef } from "react";

const Animation = ({ children }) => {
  const [hasAppeared, setHasAppeared] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    if (!domRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAppeared(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.1 
      }
    );
    observer.observe(domRef.current);

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-[1000ms] ease-out will-change-[transform,opacity] ${
        hasAppeared 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export default Animation;