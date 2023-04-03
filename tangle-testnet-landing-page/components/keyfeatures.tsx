import React from 'react';
import styles from './KeyFeatures.module.css';

const KeyFeatures: React.FC = () => {
  const features = [
    {
      title: 'Cross-chain zero-knowledge messaging layer',
      description: 'Seamlessly communicate between different blockchains while maintaining privacy with our cutting-edge zero-knowledge technology.',
      illustration: 'path/to/illustration1.svg',
    },
    {
      title: 'Robust developer documentation',
      description: 'Easily build privacy-focused applications with our comprehensive and easy-to-follow documentation, code samples, and API references.',
      illustration: 'path/to/illustration2.svg',
    },
    {
      title: 'Node operator incentives',
      description: 'Node operators play a crucial role in our network, and we reward them with incentives for maintaining security and performance.',
      illustration: 'path/to/illustration3.svg',
    },
    {
      title: 'Privacy-focused applications',
      description: 'Develop and deploy applications that prioritize user privacy, ensuring data protection and confidentiality across the ecosystem.',
      illustration: 'path/to/illustration4.svg',
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Key Features of Webb Protocol</h2>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <img src={feature.illustration} alt={`${feature.title} illustration`} className={styles.illustration} />
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
