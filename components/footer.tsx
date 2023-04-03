import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <h2>Footer</h2>

      <div className={styles.footerSection}>
        <h3>Latest News / Blog Section:</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Featured articles, updates, and press releases</li>
        </ul>
        <button>Read More / View All</button>
      </div>

      <div className={styles.footerSection}>
        <h3>About Webb Protocol:</h3>
        <p>Brief history and mission statement</p>
      </div>

      <div className={styles.footerSection}>
        <h3>Contact / Community:</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}><a href="#">Twitter</a></li>
          <li className={styles.listItem}><a href="#">Discord</a></li>
          <li className={styles.listItem}><a href="#">Telegram</a></li>
        </ul>
        <p>Email: info@webbprotocol.com</p>
        <button>Join Community / Get In Touch</button>
      </div>

    </footer>
  );
}

export default Footer;
