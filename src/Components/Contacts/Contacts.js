import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
  return (
      <div className={styles.container}>
          <div className={styles.contacts}>
              <form className={styles.contactsBlock}>
                <h3>  Contacts </h3>
                  <input type='text' placeholder='name'/>
                  <input type='text'placeholder='E-mail'/>
                  <textarea placeholder='Your message'></textarea>
                  <div>
                      <button> contact with me</button>
                  </div>
              </form>
          </div>

      </div>
  );
}
export default Contacts;
