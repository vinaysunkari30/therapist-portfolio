"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const isClickingLink = useRef(false);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    window.history.replaceState(null, "", "#home");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickingLink.current || isOpen) return;
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "services",
      "office",
      "faqs",
      "contact",
    ];
    const handleObserver = (entries) => {
      if (isClickingLink.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const capitalized = id.charAt(0).toUpperCase() + id.slice(1);
          setActiveTab(capitalized);
          window.history.replaceState(null, "", `#${id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (id, tabName) => {
    const targetId = id.toLowerCase();
    isClickingLink.current = true;

    setActiveTab(tabName);
    setIsOpen(false);
    setIsVisible(true);

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    window.history.pushState(null, "", `#${targetId}`);
    const unlockOnManualScroll = () => {
      isClickingLink.current = false;
      window.removeEventListener("wheel", unlockOnManualScroll);
      window.removeEventListener("touchmove", unlockOnManualScroll);
    };

    window.addEventListener("wheel", unlockOnManualScroll, { passive: true });
    window.addEventListener("touchmove", unlockOnManualScroll, {
      passive: true,
    });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed bg-secondary flex justify-between items-center px-5 py-5 top-0 left-0 w-full z-[70] transition-transform duration-500 ease-in-out
        ${isVisible || isOpen ? "translate-y-0" : "-translate-y-full"}
        md:px-12 md:py-8`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer relative w-12 h-10 flex flex-col items-center justify-around lg:hidden"
        >
          <span
            className={`
           absolute h-0.5 bg-current bg-primary
           transition-all duration-500
           ${isOpen ? "-rotate-48 w-7" : "w-9 -rotate-180 -translate-y-1.5"}
         `}
          />
          <span
            className={`
           absolute h-0.5 bg-current bg-primary
           transition-all duration-500
           ${isOpen ? "-rotate-135 w-7" : "w-9 rotate-180 translate-y-1.5"}
         `}
          />
        </button>

        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("home", "Home");
          }}
        >
          <h1 className="font-heading text-md font-semibold text-primary sm:text-xl md:text-xl lg:text-2xl xl:text-3xl">
            Dr. Maya Reynolds
          </h1>
        </a>

        <div className="justify-evenly items-center hidden lg:flex lg:w-130 xl:w-160">
          {["Home", "About", "Services", "Office", "Faqs", "Contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => handleLinkClick(item.toLowerCase(), item)}
                className={`${activeTab === item ? "underline decoration-2 underline-offset-8" : ""} font-body font-medium text-xl text-primary cursor-pointer transition-all xl:text-2xl`}
              >
                {item}
              </button>
            ),
          )}
        </div>
      </nav>

      {/* Modal Menu */}
      <div
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-700 ease-in-out bg-secondary ${isOpen ? "h-full opacity-100" : "h-0 opacity-0 pointer-events-none"}`}
      >
        <div
          className={`flex flex-col items-center justify-start pt-25 gap-5 transition-all duration-700 ${isOpen ? "translate-y-0" : "-translate-y-10"}`}
        >
          {["Home", "About", "Services", "Office", "Faqs", "Contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => handleLinkClick(item.toLowerCase(), item)}
                className="font-body font-medium text-2xl text-primary cursor-pointer"
              >
                {item}
              </button>
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
