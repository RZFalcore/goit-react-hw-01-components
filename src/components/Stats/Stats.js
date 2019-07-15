import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';
import RandomColor from '../RandomColor';

const Stats = ({ title, stats }) => (
  <section className={styles.statsSection}>
    {title.length > 0 && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {stats.map(stat => (
        <li
          className={styles.item}
          key={stat.id}
          style={{ backgroundColor: `${RandomColor()}` }}
        >
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.persentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Stats;
