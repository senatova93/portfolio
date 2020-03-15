import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
  return (
      <div className={styles.container}>
          <div className={styles.slogan}>
              <div>
                  <h3>I Am Available For Freelancer </h3>
                  <button>Join me</button>
              </div>
          </div>
      </div>
  );
}

export default Slogan;
