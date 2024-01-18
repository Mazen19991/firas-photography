// NavTabs.tsx
import React, { useState } from "react";
import navStyle from "./NavTabs.module.css"; // Import your custom CSS for styling

const NavTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    scrollToSection(index);
  };

  const scrollToSection = (index: number) => {
    // Implement your logic to scroll to the corresponding section
    let element;
    switch (index) {
      case 0:
        element = document.getElementById("Home");
        break;
      case 1:
        element = document.getElementById("Home");
        break;
      case 2:
        element = document.getElementById("Portfolio");
        break;
      case 3:
        element = document.getElementById("Footer");
        break;
      default:
        break;
    }

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  return (
    <div className={navStyle.navTabsContainer}>
      <div
        className={`${navStyle.navTab} ${activeTab === 0 ? navStyle.active : ""}`}
        onClick={() => handleTabClick(0)}
      >
        <p className={navStyle.textTab}>Home</p>
      </div>
      <div
        className={`${navStyle.navTab} ${activeTab === 1 ? navStyle.active : ""}`}
        onClick={() => handleTabClick(1)}
      >
        <p className={navStyle.textTab}>About Me</p>
      </div>
      <div
        className={`${navStyle.navTab} ${activeTab === 2 ? navStyle.active : ""}`}
        onClick={() => handleTabClick(2)}
      >
        <p className={navStyle.textTab}>portfolio</p>
      </div>
      <div
        className={`${navStyle.navTab} ${activeTab === 3 ? navStyle.active : ""}`}
        onClick={() => handleTabClick(3)}
      >
        <p className={navStyle.textTab}>Contact Us</p>
      </div>
      <div className={`${navStyle.underline} ${navStyle.slide}`} style={{ left: `${activeTab * 25}%` }} />
    </div>
  );
};

export default NavTabs;
