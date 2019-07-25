import React from 'react';
import PropType from 'prop-types';
import styles from './PricingItem.module.css';

const PricingItem = ({ icon, label, capacity, description, price }) => {
  return (
    <div className={styles.pricingItem}>
      <img className={styles.icon} src={icon} alt="ICON" />
      <h2 className={`${styles.label} ${styles[label]}`}>{label}</h2>
      <p className={styles.capacity}>{capacity} Storage</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}/MO</p>
      <button type="button" className={styles.button}>
        Get Started
      </button>
    </div>
  );
};

PricingItem.propTypes = {
  label: PropType.string.isRequired,
  icon: PropType.string.isRequired,
  capacity: PropType.string.isRequired,
  price: PropType.number.isRequired,
  description: PropType.string.isRequired,
};

export default PricingItem;
