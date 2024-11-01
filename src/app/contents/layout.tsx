"use client";

import Sidebar from "@/components/SideBar.comp";
import styles from "./page.module.css";
import useIsMobile from "../hooks/useIsMobile";
import Header from "@/components/Header.comp";

const ContentsLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.section}>
      {isMobile && <Header title="std" />}
      <Sidebar isMobile={isMobile} />
      {children}
    </section>
  );
};

export default ContentsLayout;
