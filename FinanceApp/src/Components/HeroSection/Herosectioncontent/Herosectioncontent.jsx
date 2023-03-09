import React from "react";
import styles from "./Herosectioncontent.module.css";

function Herosectioncontent() {
  return (
    <>
      <div className={styles.HeroContentWrapper}>
        <p className={styles.sectionTitle}>Save money fast from app.</p>
        <p className={styles.sectiondetail}>
          Transfer business money easily through finance app without any hassle.
          This app can help you control.
        </p>
        <button className={styles.sectionButton}>Check our features</button>
        <p className={styles.sectiondetailQuote}>
          “Transfer business money easily through finance app without any
          hassle. This app can help you control.Transfer business money easily
          through finance ”
        </p>
        <div className={styles.profileframe}>
          <img
            src={require("../../../assets/Ellipse 1.png")}
            alt=""
            width={"51px"}
            height={"51px"}
          />
          <div>
            <p className={styles.userName}>Darika samak</p>
            <p className={styles.userfrom}>From amazon.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosectioncontent;
