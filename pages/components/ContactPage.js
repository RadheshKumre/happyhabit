import ContactForm from './ContactForm';
import React from 'react';
import styles from '../../styles/ContactPage.module.css'
const ContactPage = () => {
  return (
    <div className={styles.container} >
      <div className={styles.container_contact_form}>
      <h1>Contact Us</h1>
      <div className={styles.comman}>
      <div className={styles.data}>
    
        <p>
          Please use the contact form below to<br/>get in touch with us directly. Fill in the<br/>required details and select the relevant<br/>subject so that we can provide you<br/>with the best assistance.
        </p>
        <p>Address :</p>
        <p>302, The Shri Platinum Mall,<br/>Jawahar Rd, Ghatkopar East,<br/>Mumbai Maharashtra - 400077</p>
        <p>Get Into Tuch :</p>
        <p>contact@happyhabit.club</p>
        <p>+91 8898343385</p>

      </div>
      <div className={styles.form}>
      <ContactForm/>
      </div>
      </div>

      </div>
        
    </div>
  );
};

export default ContactPage;


