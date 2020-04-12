import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
           <span className={styles.blockTitle}>Анастасия Сенатова </span>
            <div className={styles.socialBlock}>
                <div className={styles.socialIcon}></div>
                <div className={styles.socialIcon}></div>
                <div className={styles.socialIcon}></div>
                <div className={styles.socialIcon}></div>
            </div>
                <span className={styles.copyRight}>© 2020, All Rights Reserved</span>
            </div>
        </div>
    );
}

export default Footer;
