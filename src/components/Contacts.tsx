import React, {ChangeEvent, FC, useState, useRef} from 'react';
import s from '../style/Contacts.module.scss'
import sb from "../style/Skills.module.scss";
import {Fade} from "react-awesome-reveal";
import emailjs from '@emailjs/browser';

type ContactsType = {
    toggleLight: boolean
}

export const Contacts: FC<ContactsType> = ({toggleLight}) => {

    let form = useRef<any>();

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
                        <h1 className={s.title}>Get in<span className={s.me}> touch</span></h1>
                        <div className={s.dotContainer_right}>
                            <div className={s.rightDot}></div>
                        </div>
                    </Fade>
                </div>

                <section className={s.content}>
                    <form action="" className={s.form} ref={form} onSubmit={sendEmail}>
                        <div className={s.inputBox}>
                            <input required
                                   name="user_name"
                                   className={toggleLight ? `${s.input} ${s.inputLight}` : s.input}/>
                            <span className={toggleLight ? s.spanLight : ''}>First name</span>
                        </div>
                        <div className={s.inputBox}>
                            <input type="number" required name="phone_number"
                                   className={toggleLight ? `${s.input} ${s.inputLight}` : s.input}/>
                            <span>Phone number</span>
                        </div>
                        <div className={s.inputBox}>
                            <input type="email"
                                   required
                                   name="user_email"
                                   className={toggleLight ? `${s.input} ${s.inputLight}` : s.input}/>
                            <span>Email</span>
                        </div>
                        <div className={s.inputBox}>
                        <textarea name="message"
                                  className={toggleLight ? `${s.textareaContact} ${s.textAreaLight}` : s.textareaContact}
                                  required>
                        </textarea>
                            <span>Enter your comment</span>
                        </div>
                        <button type={'submit'}>
                            <span>Send</span>
                            <div className={toggleLight ? s.liquidLight : s.liquid}></div>
                        </button>
                    </form>

                    <section className={s.getInTouchContainer}>
                        <div className={s.socialLinksContainer}>
                            <img src="https://ouch-cdn2.icons8.com/W_FSxOuaSfBv7Ol6sCwJRD3-jYjicOpPgbE1p1Q7HJk/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDEw/LzY2ZThhYzc1LTJh/ZjAtNDk4MC1hNThl/LWMwOWY0NWIyM2Mz/NS5wbmc.png" alt="GitHub_logo"/>
                            <img src="https://img.icons8.com/?size=512&id=gDJDJJ1MCGmG&format=png" alt="Codewars_logo"/>
                            <img src="https://ouch-cdn2.icons8.com/eHIHzmHX02221t-bFZtZRHJmb6S4UUBirfHjBFMp_oo/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjQ3/L2NmOThkOWJmLWRl/NTktNDMzYi1hNjQ1/LTUzYjNkMTczMTU4/My5wbmc.png" alt="LinkedIn_logo"/>
                            <img src="https://ouch-cdn2.icons8.com/9LkOctqjfET0aNP8knLWqXpV9SvLetwEQRnNdq0dnLM/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTI0/L2NjYjgwMjlkLWZh/NWMtNDU5Yy05YjBk/LWI0Yzg2MzI3Zjc0/Mi5wbmc.png" alt="inst_logo"/>
                            <img src="https://ouch-cdn2.icons8.com/92FIUCfMd07DEJTqVLCABlJeSBHp8xEqTPbB_73eLYI/rs:fit:368:366/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzUy/LzFhNzlhNTYyLTZk/NmEtNDkxYy1iYjJh/LTljMGU5Y2JiNWVj/Zi5wbmc.png" alt="facebook_logo"/>
                            <img src="https://ouch-cdn2.icons8.com/OW9Zh9PhpH8i_nA909trE4eNHqaLDghrdJWihUXQn9Y/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTYv/MzE3NWFhMzAtMmQw/Yi00MDgyLTlhZWMt/ZWUyZGNlYzQwYmM0/LnBuZw.png" alt="email_logo"/>
                            <img src="https://ouch-cdn2.icons8.com/kSIAJQ2detV1XffgFuJ10fUEsh4Gm2atdnFRLFz3ORI/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTg1/L2I5MDg2ZjUyLTRi/NWMtNDYyZC1iMTli/LTk5Y2Q0NGZiYjI4/Yi5wbmc.png" alt="telegram_logo"/>
                            <img src="https://ouch-cdn2.icons8.com/VS5LETMx6xrS16SIpmiNam1f8eRbbZ_0mtsjfnaW90Y/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTY0/L2U0NTdjYWFlLWMy/MWUtNDU5Yi1iMzcy/LTQ4OWIwM2U5ZDgw/OC5wbmc.png" alt="whatsApp_logo"/>
                        </div>
                    </section>
                </section>

            </div>
        </div>
    );
};

