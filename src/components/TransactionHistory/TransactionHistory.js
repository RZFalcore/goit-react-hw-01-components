import React from 'react';
import PropType from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr className={styles.title}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr className={styles.line} key={item.id}>
          <th className={styles.cell}>{item.type}</th>
          <th className={styles.cell}>{item.amount}</th>
          <th className={styles.cell}>{item.currency}</th>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropType.arrayOf(PropType.object).isRequired,
};

export default TransactionHistory;
