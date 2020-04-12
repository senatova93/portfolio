import React from 'react';
import styles from './Projects.module.css';

function Projects() {
  return (
      <div className={styles.container}>
          <div className={styles.projects}>
              <h3>My projects</h3>
              <div className={styles.projectsBlock}>

                  <div className={styles.project}>
                      <img className={styles.projectPhoto} src='' />
                      <h4>#1 project </h4>
                  </div>

                  <div className={styles.project}>
                      <img className={styles.projectPhoto} src='' />
                      <h4>#1 project </h4>
                  </div>
                  <div className={styles.project}>
                      <img className={styles.projectPhoto} src='' />
                      <h4>#2 project</h4>
                  </div>
              </div>
          </div>
      </div>


);
}

export default Projects;
