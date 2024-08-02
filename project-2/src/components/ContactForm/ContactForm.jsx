import { MdMessage } from 'react-icons/md'
import { Button } from '../Button/Button'
import styles from './ContactForm.module.css'
import { IoCallOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';

export const ContactForm = () => {

  const[name, setName] = useState("Anshuman");
  const[email, setEmail] = useState("anshuman7p@gmail.com");
  const[text, setText] = useState("here i am to learn");

  const handleSubmit = (event) => {
    event.preventDefault();
    setName( event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)
    };

  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button text="VIA CHAT SUPPORT" icon={<MdMessage fontSize="24px" />} />
        <Button text="VIA CALL" icon={<IoCallOutline fontSize="24px" />} />
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdEmail fontSize="24px" />} />
        <form onSubmit={handleSubmit}>
            <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' />
            </div>
            <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' />
            </div>
            <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name='text' rows='6' />
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'end'
            }}>
            <Button text="SUBMIT" />
            </div>
            <div>{name + " " + email + " " + text}</div>
        </form>
        </div>
        
        <div className={styles.contact_image}>
          <img src="/images/contact.svg" alt="contact image" />
        </div>
    </section>
  )
}
