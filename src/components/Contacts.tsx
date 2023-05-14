import React from 'react';
import s from './Contacts.module.scss'

export const Contacts = () => {

    return (
        <div className={s.container} >
            <div className={s.titleContainer}>
                <div className={s.dotContainer}>
                    <div className={s.leftDot}></div>
                </div>
                <h1 className={s.title}>Сontact<span className={s.me}> ME</span></h1>
                <div className={s.dotContainer}>
                    <div className={s.rightDot}></div>
                </div>
            </div>
            <form action="" className={s.form}>
                <div className={s.inputBox}>
                    <input type="text" required/>
                    <span>First name</span>
                </div>
                <div className={s.inputBox}>
                    <input type="number" required/>
                    <span>Phone number</span>
                </div>
                <div className={s.inputBox}>
                    <input type="text" required/>
                    <span>Email</span>
                </div>
                <div className={s.inputBox}>
                    <textarea className={s.textarea} required></textarea>
                    <span>Enter your comment</span>
                </div>
                    <a href="#" className={s.sendButton}>
                        <span className={s.sendTitle}>Send</span>
                        <div className={s.liquid}></div>
                    </a>
            </form>
        </div>
    );
};

