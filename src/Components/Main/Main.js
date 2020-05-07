import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className="App">
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.greeting}>
                        <span> Hi There </span>
                        <h2>I am<span> Anastasiya Senatova </span></h2>
                        <h1>I am a frontend developer</h1>
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
