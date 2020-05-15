import React from 'react';
import styles from './Skills.module.css';

function Skills() {
    return (<div className={styles.container}>

            <div className={styles.skills}>
                <div className={styles.blockTitle}>
                <h2 className={styles.blockTitle}>My Skills</h2>
                <div className={styles.line}></div>
                </div>
                <div className={styles.skillBlock}>

                    <div className={styles.skill}>
                        <h4>My skill</h4>
                        <h5>discription skill</h5>
                    </div>


                    <div className={styles.skill}>
                        <h4>my skill</h4>
                        <h5>discription skill</h5>
                    </div>

                    <div className={styles.skill}>
                        <h4>my skill</h4>
                        <h5>discription skill</h5>
                    </div>
                </div>

            </div>

        </div>
    );
}


export default Skills;
