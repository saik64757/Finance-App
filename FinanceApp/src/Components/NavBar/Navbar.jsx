import React from "react";
import styles from "./NavBar.module.css";
import Navbarbuttons from "./Navbarbuttons";

function Navbar() {
  return (
    <>
      <div className={styles.Navbarwrapper}>
        <img
          src={require("../../assets/Logo financeapp.png")}
          alt=""
          width={"145px"}
          height={"24px"}
        />
        <Navbarbuttons />
      </div>
    </>
  );
}

export default Navbar;
