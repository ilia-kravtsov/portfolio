import React, {FC, useState, useRef} from 'react';
import s from '../style/Contacts.module.scss'
import sb from "../style/Skills.module.scss";
import {Fade} from "react-awesome-reveal";
import emailjs from '@emailjs/browser';
import {Alert, Snackbar} from "@mui/material";
import {Tilt} from 'react-tilt'
import {defaultOptions} from '../features/features'

export const Contacts: FC = () => {

    let [success, setSuccess] = useState<boolean>(false)
    let [error, setError] = useState<boolean>(false)
    let [waiting, setWaiting] = useState<boolean>(false)

    let form = useRef<any>();

    const sendEmail = (event: any, reason?: string) => {
        event.preventDefault();

        if (reason === 'clickaway') {
            return;
        }

        setWaiting(true)
        emailjs.sendForm('service_15uif7p', 'template_c9bogp1', form.current, 'C2Zo-ewRkNJtUXqgY')
            .then((result) => {
                setWaiting(false)
                setSuccess(true)
                console.log(result.text);
                event.target.reset() // to clean the fields
            }, (error) => {
                setWaiting(false)
                setError(true)
                console.log(error.text);
            });
    };

    const setSuccessClose = () => setSuccess(false);
    const setErrorClose = () => setError(false);
    const setWaitingClose = () => setWaiting(false);

    return (
        <div className={sb.subContainer} id={'contacts'}>
            <div className={s.container}>
                <Fade direction={'up'}>

                    <div className={s.titleContainer}>
                        <div className={s.dotContainer_left}>
                            <div className={s.leftDot}></div>
                        </div>
                        <h1 className={s.title}>Get in<span className={s.me}> touch</span></h1>
                        <div className={s.dotContainer_right}>
                            <div className={s.rightDot}></div>
                        </div>
                    </div>

                </Fade>

                <section className={s.content}>
                    <section className={s.formContainer}>
                        <form action="" className={s.form} ref={form} onSubmit={sendEmail}>
                            <div className={s.inputBox}>
                                <input required
                                       name="user_name"
                                       className={s.input}/>
                                <span>First name</span>
                            </div>
                            <div className={s.inputBox}>
                                <input type="number"
                                       required
                                       name="phone_number"
                                       className={s.input}/>
                                <span>Phone number</span>
                            </div>
                            <div className={s.inputBox}>
                                <input type="email"
                                       required
                                       name="user_email"
                                       className={s.input}/>
                                <span>Email</span>
                            </div>
                            <div className={s.inputBox}>
                                <textarea name="message"
                                          className={s.textareaContact}
                                          required>
                                </textarea>
                                <span>Enter your comment</span>
                            </div>
                            <Tilt options={defaultOptions}>
                                <button type={'submit'} disabled={waiting}>
                                    <span>Send</span>
                                    <div className={s.liquid}></div>
                                </button>
                            </Tilt>
                        </form>
                        {<Snackbar open={success} autoHideDuration={6000} onClose={setSuccessClose}>
                            <Alert onClose={setSuccessClose} severity="success">
                                Your data has been successfully sent to my email!
                            </Alert>
                        </Snackbar>}
                        {<Snackbar open={error} autoHideDuration={6000} onClose={setErrorClose}>
                            <Alert onClose={setErrorClose} severity="error">
                                Some error with the internet connection to the server has occurred!
                            </Alert>
                        </Snackbar>}
                        {<Snackbar open={waiting} autoHideDuration={5000} onClose={setWaitingClose}>
                            <Alert onClose={setWaitingClose} severity="info" sx={{mb: '50px'}}>
                                Just a moment, we're sending your data!
                            </Alert>
                        </Snackbar>}
                        <section className={s.links}>
                            <div className={s.socialLinksContainer}>
                                <h2>Social links:</h2>
                                <div className={s.linksContainer}>
                                    <a target={'_blank'} href={'https://www.linkedin.com/in/-ilia-kravtsov/'}>
                                        <img
                                            src="https://ouch-cdn2.icons8.com/eHIHzmHX02221t-bFZtZRHJmb6S4UUBirfHjBFMp_oo/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjQ3/L2NmOThkOWJmLWRl/NTktNDMzYi1hNjQ1/LTUzYjNkMTczMTU4/My5wbmc.png"
                                            alt="LinkedIn_logo"/>
                                    </a>
                                    <a target={'_blank'}
                                       href={'https://www.facebook.com/profile.php?id=100094314852191'}>
                                        <img
                                            src="https://img.icons8.com/?size=2x&id=jZ0kw76QEzJU&format=png"
                                            alt="facebook_logo"/>
                                    </a>
                                    <a target={'_blank'} href={'https://www.instagram.com/kravtsov_ilia_/'}>
                                        <img
                                            src="https://ouch-cdn2.icons8.com/9LkOctqjfET0aNP8knLWqXpV9SvLetwEQRnNdq0dnLM/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTI0/L2NjYjgwMjlkLWZh/NWMtNDU5Yy05YjBk/LWI0Yzg2MzI3Zjc0/Mi5wbmc.png"
                                            alt="inst_logo"/>
                                    </a>
                                </div>
                            </div>
                            <div className={s.socialLinksContainer}>
                                <h2>Quick connect:</h2>
                                <div className={s.linksContainer}>
                                    <a target={'_blank'}
                                       href={'https://e.mail.ru/cgi-bin/sentmsg?To=kravtsov.i.s@mail.ru&from=otvet&afterReload=1'}>
                                        <img
                                            src="https://ouch-cdn2.icons8.com/OW9Zh9PhpH8i_nA909trE4eNHqaLDghrdJWihUXQn9Y/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTYv/MzE3NWFhMzAtMmQw/Yi00MDgyLTlhZWMt/ZWUyZGNlYzQwYmM0/LnBuZw.png"
                                            alt="email_logo"/>
                                    </a>
                                    <a target={'_blank'}
                                       href={'https://api.whatsapp.com/send/?phone=%2B79991800090&text&type=phone_number&app_absent=0'}>
                                        <img
                                            src="https://ouch-cdn2.icons8.com/VS5LETMx6xrS16SIpmiNam1f8eRbbZ_0mtsjfnaW90Y/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTY0/L2U0NTdjYWFlLWMy/MWUtNDU5Yi1iMzcy/LTQ4OWIwM2U5ZDgw/OC5wbmc.png"
                                            alt="whatsApp_logo"/>
                                    </a>
                                    <a target={'_blank'} href={'https://t.me/kravtsov_ilia'}>
                                        <img
                                            src="https://ouch-cdn2.icons8.com/kSIAJQ2detV1XffgFuJ10fUEsh4Gm2atdnFRLFz3ORI/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTg1/L2I5MDg2ZjUyLTRi/NWMtNDYyZC1iMTli/LTk5Y2Q0NGZiYjI4/Yi5wbmc.png"
                                            alt="telegram_logo"/>
                                    </a>
                                </div>
                            </div>
                        </section>

                    </section>
                </section>
            </div>
        </div>
    );
};

