import React from 'react';
import events from '@/data/events.json';
import styles from './Timeline.module.css';

interface Event {
  title: string;
  date: string;
  description?: string;
}

interface Props {
  events: Event[];
}

const Timeline: React.FC<Props> = ({ events }) => {
  return (
    <div className={styles.container}>
      {events.map((event, index) => (
        <div key={index} className={styles.event}>
          <h3 className={styles.eventTitle}>{event.title}</h3>
          <p className={styles.eventDate}>{event.date}</p>
          {event.description && <p className={styles.eventDescription}>{event.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
