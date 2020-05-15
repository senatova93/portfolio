import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className="App">
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.greeting}><span> Hi There </span>
                        <span>I<span> am Anastasiya Senatova </span></span>
                        <h1> A frontend developer </h1>
                    </div>
                    <div className={styles.photo}>

                        <img src="https://avatars3.githubusercontent.com/u/60384489?s=460&u=b10f9c56d231e7d4ce716d23ff30895dcf70178d&v=4" alt = ""/>

                    </div>


                </div>


            </div>
        </div>
    );
}

export default Main;
