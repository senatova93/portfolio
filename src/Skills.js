import React from 'react';
import styles from './Skills.module.css';
import MySkills from "./MySkills";
/**
 * @return {boolean}
 */
function Skills() {
  return (
      <div className={styles.skills}>
      <div className = {styles.container}>
     My skills
          <MySkills/>
          <MySkills/>
          <MySkills/>
      </div>

    </div>
  );
}

export default Skills;
