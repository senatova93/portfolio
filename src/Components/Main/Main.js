import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className="App">
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.greeting}>
                        <span> Hi There </span>
                        <span> I am Anastasiya Senatova </span>
                        <h1> A frontend developer </h1>
                    </div>
                    <div className={styles.photo}>
                        <img src="https://avatars0.githubusercontent.com/u/60384489?s=460&u=9aca9ef12078a47366f574f59f53add74a5f7dd2&v=4"/>
                    </div>


                </div>


            </div>
        </div>
    );
}

export default Main;
