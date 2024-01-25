import { useState, useEffect, useRef } from "react";
import navStyle from "./NavTabs.module.css";

const NavTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    scrollToSection(index);
  };

  const scrollToSection = (index: number) => {
    const elementId = getSectionId(index);
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  const getSectionId = (index: number) => {
    switch (index) {
      case 0:
        return "Home";
      case 1:
        return "Portfolio";
      case 2:
        return "Services";
      case 3:
        return "Footer";
      default:
        return "";
    }
  };

  useEffect(() => {
    sectionRefs.current = Array.from({ length: 4 }, (_, i) =>
      document.getElementById(getSectionId(i))
    );

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
    
      // Check if scrolling back to "Home" when at the top of the page
      const isScrollingBackToHome = scrollPosition === 0;
    
      if (isScrollingBackToHome) {
        setActiveTab(0);
        return; // No need to proceed with other calculations
      }
    
      const distances = sectionRefs.current.map((section) => {
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          const isPartiallyVisible =
            top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2;
          return isPartiallyVisible
            ? 0
            : Math.min(Math.abs(top - scrollPosition), Math.abs(bottom - scrollPosition));
        }
        return Infinity;
      });
    
      // If all distances are Infinity, it means there are no valid sections
      if (distances.every((distance) => distance === Infinity)) {
        return;
      }
    
      const closestSectionIndex = distances.indexOf(Math.min(...distances));
    
      // Update active tab if needed
      if (activeTab !== closestSectionIndex) {
        setActiveTab(closestSectionIndex);
      }
    };
      
    
    
    const observer = new IntersectionObserver(handleScroll, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    // Observe each section
    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Detach the event listener and observer when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [activeTab]);

  return (
    <div className={navStyle.navTabsContainer}>
      <div
        className={`${navStyle.navTab} ${
          activeTab === 0 ? navStyle.active : ""
        }`}
        onClick={() => handleTabClick(0)}
      >
        <p className={navStyle.textTab}>Home</p>
      </div>
      <div
        className={`${navStyle.navTab} ${
          activeTab === 1 ? navStyle.active : ""
        }`}
        onClick={() => handleTabClick(1)}
      >
        <p className={navStyle.textTab}>Portfolio</p>
      </div>
      <div
        className={`${navStyle.navTab} ${
          activeTab === 2 ? navStyle.active : ""
        }`}
        onClick={() => handleTabClick(2)}
      >
        <p className={navStyle.textTab}>Services</p>
      </div>
      <div
        className={`${navStyle.navTab} ${
          activeTab === 3 ? navStyle.active : ""
        }`}
        onClick={() => handleTabClick(3)}
      >
        <p className={navStyle.textTab}>Contact Us</p>
      </div>
      <div
        className={`${navStyle.underline} ${navStyle.slide}`}
        style={{ left: `${activeTab * 25}%` }}
      />
    </div>
  );
};

export default NavTabs;
