import React from 'react';
import styles from './index.module.css'

const LoadingSpinner = () => {
  return (
    <div className={styles["loading-spinner"]}>
      <div className={styles["spinner"]}></div>
    </div>
  );
};

export default LoadingSpinner;