import styles from './Home.module.css';
import { GetServerSideProps } from 'next';
import Timeline from '../components/timeline';
import events from '@/data/events.json';
import KeyFeatures from '@/components/keyfeatures';
import Hero from '@/components/hero';

interface Event {
  title: string;
  date: string;
  description?: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.hero}>
        <Hero />
        </section>

        <section className={styles.features}>
          <KeyFeatures />
        </section>

        <section className={styles.timeline}>
          {/* Pass events as a prop to Timeline */}
          <Timeline events={events}/>
        </section>

        <section className={styles.support}>
          {/* Add support and resources content here */}
        </section>
      </main>
    </div>
  );
};

export default Home;
