import React from "react";
import styles from "./Navbarbuttons.module.css";

function Navbarbuttons() {
  return (
    <div className={styles.Alloptions}>
      <button className={styles.Navbuttons}>Demos</button>
      <button className={styles.Navbuttons}> About</button>
      <button className={styles.Navbuttons}>Blog</button>
      <button className={styles.Navbuttons}>Pages</button>
      <button className={styles.Navbuttons}>Contact</button>
    </div>
  );
}

export default Navbarbuttons;
