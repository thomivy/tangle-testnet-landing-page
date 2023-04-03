import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Community</Link>
        </li>
        <li>
          <Link href="/docs">Docs</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/bridge">Bridge</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
