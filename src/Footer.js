import React from "react";
import styles from "./Footer.module.css";
import { Link, Route, Routes } from "react-router-dom";
import Auth from "../components/auth";
import PageA from "../components/page-a";
import PageB from "../components/page-b";
import RemoteCmp from "../components/remote";

const Footer = function (login) {
  return (
    <div className={styles.background}>
      <nav className={styles.horizontalNav}>
        <Link className={styles.link} to="/page-a">
          Host/Page A
        </Link>
        <Link className={styles.link} to="/page-b">
          Host/Page B
        </Link>
        <Link className={styles.link} to="/remote">
          Remote
        </Link>
        <Link className={styles.link} to="/auth">
          Auth
        </Link>
        <Routes>
          <Route path="/page-a" element={<Auth />} />
          <Route path="/page-b" element={<PageA />} />
          <Route path="/remote" element={<PageB />} />
          <Route path="/auth" element={<RemoteCmp />} />
        </Routes>
      </nav>
    </div>
  );
};

export default Footer;
