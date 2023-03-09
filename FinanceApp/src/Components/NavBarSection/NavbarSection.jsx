import React from "react";
import Navbar from "../NavBar/Navbar";
import styles from "./NavbarSection.module.css";

function NavbarSection() {
  return (
    <>
      <div className={styles.NavbarSectionWrapper}>
        <Navbar />
        <button className={styles.downloadbutton}>Download App</button>
      </div>
    </>
  );
}

export default NavbarSection;
