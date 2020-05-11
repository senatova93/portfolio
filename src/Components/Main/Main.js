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
                        <image src=""/>
                    </div>


                </div>


            </div>
        </div>
    );
}

export default Main;
