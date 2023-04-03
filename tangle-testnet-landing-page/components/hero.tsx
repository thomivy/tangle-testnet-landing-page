import React from 'react';
import styles from './HeroSection.module.css';

const Hero: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>
        Unlock Privacy for Everyone, Everything, Everywhere
      </h1>
      <p className={styles.subheadline}>
        Enable the next generation of cross-chain communication powered by
        zero-knowledge technology.
      </p>
      <p className={styles.objective}>
        Join our testnet to help us test new features, gather user feedback, and
        improve network security and performance.
      </p>
      <button className={styles.ctaButton}>Join Testnet</button>
      <div className={styles.participationRewards}>
        <h4>Participation Rewards</h4>
        <p>To be announced</p>
      </div>
    </div>
  );
};

export default Hero;
