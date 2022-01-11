import React from 'react';
import styles from './Quote.module.css';

const Quote = () => (
  <div className={styles.center}>
    <p className={styles.big}>
      What is mathematics? It is only a systematic effort of solving puzzles posed by nature.
      <br />
      <span className={styles.bold}>— Shakuntala Devi</span>
    </p>
  </div>
);

export default Quote;
