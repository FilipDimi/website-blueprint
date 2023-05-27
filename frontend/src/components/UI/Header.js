import React from "react";
import { CiSettings } from "react-icons/ci";
import styles from "./Header.module.css";


const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <h3 style={{marginLeft: 30}}>CyberBar</h3>
        <button className={styles.settingsButton} style={{marginRight: 30, display: 'flex', justifyItems: 'space-between', alignItems: 'center'}}><CiSettings size={18} style={{marginRight: 5}} /> Options</button>
      </div>
    </div>
  );
};

export default Header;
