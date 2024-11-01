import React from "react";
import styles from "./Header.module.scss";
import ArrowBackIcon from "@/asset/icon-arrowBack";

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.header}>
      <span className={styles.icon}>
        <ArrowBackIcon />
      </span>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default Header;
