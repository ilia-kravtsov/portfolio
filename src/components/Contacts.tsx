import React, {ChangeEvent, FC, useState, useRef} from 'react';
import s from '../style/Contacts.module.scss'
import sb from "../style/Skills.module.scss";
import {Fade} from "react-awesome-reveal";
import emailjs from '@emailjs/browser';

type ContactsType = {
    toggleLight: boolean
}

export const Contacts: FC<ContactsType> = ({toggleLight}) => {

    let [name, setName] = useState<string>('')
    let [phone, setPhone] = useState<string>('')
    let [email, setEmail] = useState<string>('')
    let [comment, setComment] = useState<string>('')
    let [error, setError] = useState<string | null>('')
    let form = useRef<any>();

    const nameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        setError(null)
    }
    const phoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number.isInteger(+e.currentTarget.value)) {
            setPhone(e.currentTarget.value)
            setError(null)
        }
    }
    const emailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
        setError(null)
    }
    const commentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.currentTarget.value)
        setError(null)
    }

    const sendClick = (event: any) => {
        event.preventDefault()
        if (name.trim() !== '' && phone.trim() !== '' && email.trim() !== '' && comment.trim() !== '') {
            setName('')
            setPhone('')
            setEmail('')
            setComment('')
        }
        if (name.trim() === '') {
            setError('Fill in all the fields')
        }
        if (phone.trim() === '') {
            setError('Fill in all the fields')
        }
        if (email.trim() === '') {
            setError('Fill in all the fields')
        }
        if (comment.trim() === '') {
            setError('Fill in all the fields')
        }
    }
        // service_15uif7p
        const sendEmail = (e: any) => {
            e.preventDefault();

            emailjs.sendForm('service_15uif7p', 'template_c9bogp1', form.current, 'C2Zo-ewRkNJtUXqgY')
                .then((result) => {
                    console.log(result.text);
                    e.target.reset() // to clean the fields
                }, (error) => {
                    console.log(error.text);
                });
        };

    return (
        <div className={sb.subContainer}>
            <div className={s.container}>

                    <div className={s.titleContainer} id={'contacts'}>
                        <Fade direction={'up'}>
                        <div className={s.dotContainer_left}>
                            <div className={s.leftDot}></div>
                        </div>
                        <h1 className={s.title}>Сontact<span className={s.me}> ME</span></h1>
                        <div className={s.dotContainer_right}>
                            <div className={s.rightDot}></div>
                        </div>
                        </Fade>
                    </div>

                    <form action="" className={s.form} ref={form} onSubmit={sendEmail}>
                        <div className={s.inputBox}>
                            <input required
                                   value={name}
                                   onChange={nameChange}
                                   name="user_name"
                                   className={toggleLight ? `${s.input} ${s.inputLight}` : s.input}/>
                            <span className={toggleLight ? s.spanLight : ''}>First name</span>
                        </div>
                        <div className={s.inputBox}>
                            <input type="number" required value={phone} onChange={phoneChange} name="phone_number"
                                   className={toggleLight ? `${s.input} ${s.inputLight}` : s.input}/>
                            <span>Phone number</span>
                        </div>
                        <div className={s.inputBox}>
                            <input type="email"
                                   required
                                   value={email}
                                   onChange={emailChange}
                                   name="user_email"
                                   className={toggleLight ? `${s.input} ${s.inputLight}` : s.input}/>
                            <span>Email</span>
                        </div>
                        <div className={s.inputBox}>
                        <textarea name="message"
                            className={toggleLight ? `${s.textareaContact} ${s.textAreaLight}` : s.textareaContact}
                            required value={comment} onChange={commentChange}></textarea>
                            <span>Enter your comment</span>
                        </div>
                        <div className={s.errorContainer}>
                        <span
                            className={error === 'Fill in all the fields' ? s.errorActive : s.errorDisabled}>{error}</span>
                        </div>
                        <input type={'submit'} value="Send"></input>
                            {/*<span>Send</span>*/}
                            {/*<div className={toggleLight ? s.liquidLight : s.liquid}></div>*/}
                    </form>

            </div>
        </div>
    );
};

