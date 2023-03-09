import React from "react";
import styles from "./MediaButtons.module.css";

function MediaButtons() {
  return (
    <>
      <div className={styles.MediaButtonsWrapper}>
        <button className={styles.Mediabuttons}>
          <img
            src={require("../../assets/google.png")}
            alt=""
            height={"20px"}
            width={"19.6px"}
          />
        </button>
        <button className={styles.Mediabuttons}>
          <img
            src={require("../../assets/framer.png")}
            alt=""
            height={"20px"}
            width={"19.6px"}
          />
        </button>
        <button className={styles.Mediabuttons}>
          <img
            src={require("../../assets/facebook.png")}
            alt=""
            height={"20px"}
            width={"19.6px"}
          />
        </button>
        <button className={styles.Mediabuttons}>
          <img
            src={require("../../assets/whatsapp.png")}
            alt=""
            height={"20px"}
            width={"19.6px"}
          />
        </button>
        <button className={styles.Mediabuttons}>
          <img
            src={require("../../assets/youtube.png")}
            alt=""
            height={"20px"}
            width={"19.6px"}
          />
        </button>
      </div>
    </>
  );
}

export default MediaButtons;
