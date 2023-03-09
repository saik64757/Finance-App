import React from "react";
import styles from "./HeroSection.module.css";
import Herosectioncontent from "./Herosectioncontent/Herosectioncontent";

function HeroSection() {
  return (
    <>
      <div className={styles.HeroSectionWrapper}>
        <div>
          <Herosectioncontent />{" "}
        </div>
        <div>
          <img
            src={require("../../assets/HeroImage.png")}
            alt=""
            width={"604px"}
            height={"643px"}
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
