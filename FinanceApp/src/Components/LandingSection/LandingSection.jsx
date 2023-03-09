import React from "react";
import FooterSection from "../FooterSection/FooterSection";
import HeroSection from "../HeroSection/HeroSection";
import NavbarSection from "../NavBarSection/NavbarSection";
import styles from "./LandingSection.module.css";

function LandingSection() {
  return (
    <>
      <div className={styles.landingWrapper}>
        <NavbarSection />
        <HeroSection />
      </div>
      <div>
        <FooterSection />
      </div>
    </>
  );
}

export default LandingSection;
