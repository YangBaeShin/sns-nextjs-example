"use client";

import React from "react";
import styles from "./SideBar.module.scss";
import {
  FaHome,
  FaSearch,
  FaCompass,
  FaHeart,
  FaPlusCircle,
  FaUserAlt,
  FaBell,
} from "react-icons/fa";
import CameraIcon from "@/asset/icon-camera";
import CompassIcon from "@/asset/icon-compass";
import MessageIcon from "@/asset/icon-message";
import VideoIcon from "@/asset/icon-video";
import PlusItemIcon from "@/asset/icon-plusItem";

const Sidebar: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.iconContainer}>
        <CameraIcon />
        <CompassIcon />
        <VideoIcon />
        <MessageIcon />
        <PlusItemIcon />
        <FaUserAlt />
        {!isMobile && (
          <>
            <FaHome />
            <FaSearch />
            <FaCompass />
            <FaHeart />
            <FaPlusCircle />
            <FaUserAlt />{" "}
            <div className={styles.notification}>
              <FaBell />
              <span className={styles.badge}>2</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
