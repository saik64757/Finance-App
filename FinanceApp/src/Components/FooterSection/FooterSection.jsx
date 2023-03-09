import React from "react";
import Navbarbuttons from "../NavBar/Navbarbuttons";
import MediaButtons from "./MediaButtons";
import styles from "./FooterSection.module.css";

function FooterSection() {
  return (
    <>
      <hr />
      <div className={styles.FooterSectionWrapper}>
        <img
          src={require("../../assets/Logo financeapp.png")}
          alt=""
          width={"145px"}
          height={"24px"}
        />
        <Navbarbuttons />
        <MediaButtons />
      </div>
    </>
  );
}

export default FooterSection;
