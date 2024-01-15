import React, {FC, useState, useRef} from 'react';
import s from '../style/Contacts.module.scss'
import {Fade} from "react-awesome-reveal";
import emailjs from '@emailjs/browser';
import {Alert, Snackbar} from "@mui/material";
import Tilt from 'react-parallax-tilt';
import {Title} from "../components/Title";

type Validation = {
    success: boolean
    error: boolean
    errorPhoneNumber: boolean
    waiting: boolean
}
export const Contacts: FC = () => {

    let [validation, setValidation] = useState<Validation>({
        success: false,
        error: false,
        errorPhoneNumber: false,
        waiting: false
    })

    let form = useRef<HTMLFormElement>(null);

    const sendEmail = (event: React.FormEvent<HTMLFormElement>, reason?: string) => {
        event.preventDefault();

        if (reason === 'clickaway') {
            return;
        }

        // Phone number validation regex pattern
        const phoneRegex = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;

        if (form.current) {
            const phoneNumber = form.current.phone_number.value;

            if (!phoneRegex.test(phoneNumber)) {
                setValidation({...validation, errorPhoneNumber: true})
                return;
            }

            setValidation({...validation, waiting: true})
            emailjs.sendForm('service_15uif7p', 'template_c9bogp1', form.current, 'C2Zo-ewRkNJtUXqgY')
                .then((result) => {
                    setValidation({...validation, waiting: false})
                    setValidation({...validation, success: true})
                    console.log(result.text);
                    (event.target as HTMLFormElement).reset(); // to clean the fields
                }, (error) => {
                    setValidation({...validation, waiting: false})
                    setValidation({...validation, error: true})
                    console.log(error.text);
                });
        }
    };

    const setSuccessClose = () => setValidation({...validation, success: false});
    const setErrorClose = () => setValidation({...validation, error: false});
    const setWaitingClose = () => setValidation({...validation, waiting: false});
    const setErrorPhoneNumberClose = () => setValidation({...validation, errorPhoneNumber: false});


    return (
        <div className={s.ContactsContainer} id={'contacts'}>
            <div className={s.container}>
                <Fade direction={'up'}>
                    <Title title={'get in touch'}
                           accentTitle={''}
                           titleBack={''}
                    />
                </Fade>

                <section className={s.content}>
                    <form action="" className={s.form} ref={form} onSubmit={sendEmail}>
                        <h2>Contact Form</h2>
                        <div className={s.inputBox}>
                            <Tilt tiltAngleYInitial={-45} tiltAxis={'y'}>
                                <input required
                                       name="user_name"
                                       className={s.formInput}/>
                                <span>First name</span>
                            </Tilt>
                        </div>
                        <div className={s.inputBox}>
                            <Tilt tiltAngleYInitial={-45} tiltAxis={'y'}>
                                <input type="tel"
                                       required
                                       name="phone_number"
                                       className={s.formInput}/>
                                <span>Phone number</span>
                            </Tilt>
                        </div>
                        <div className={s.inputBox}>
                            <Tilt tiltAngleYInitial={-45} tiltAxis={'y'}>
                                <input type="email"
                                       required
                                       name="user_email"
                                       className={s.formInput}/>
                                <span>Email</span>
                            </Tilt>
                        </div>

                        <div className={s.inputBox}>
                            <Tilt tiltAngleYInitial={-45} tiltAxis={'y'}>
                                <textarea name="message"
                                          className={s.formTextarea}
                                          required>
                                </textarea>
                                <span>Your comment</span>
                            </Tilt>
                        </div>
                        <Tilt tiltAngleYInitial={-45} tiltAxis={'y'}>
                            <button type={'submit'} disabled={validation.waiting} className={s.formButton}>
                                <span>Send</span>
                                <div className={s.liquid}></div>
                            </button>
                        </Tilt>
                    </form>
                    {<Snackbar open={validation.success} autoHideDuration={6000} onClose={setSuccessClose}>
                        <Alert onClose={setSuccessClose} severity="success">
                            Your data has been successfully sent to my email!
                        </Alert>
                    </Snackbar>}
                    {<Snackbar open={validation.error} autoHideDuration={6000} onClose={setErrorClose}>
                        <Alert onClose={setErrorClose} severity="error">
                            Some error with the internet connection to the server has occurred!
                        </Alert>
                    </Snackbar>}
                    {<Snackbar open={validation.waiting} autoHideDuration={5000} onClose={setWaitingClose}>
                        <Alert onClose={setWaitingClose} severity="info" sx={{mb: '50px'}}>
                            Just a moment, we're sending your data!
                        </Alert>
                    </Snackbar>}
                    {<Snackbar open={validation.errorPhoneNumber} autoHideDuration={6000} onClose={setErrorPhoneNumberClose}>
                        <Alert onClose={setErrorPhoneNumberClose} severity="error" sx={{mb: '50px'}}>
                            Provide your phone number in the format +79990000000 or 89990000000
                        </Alert>
                    </Snackbar>}
                    <section className={s.links}>
                        <Tilt tiltAngleYInitial={25} tiltAngleXInitial={-5}>
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
                        </Tilt>
                    </section>
                </section>
            </div>
        </div>
    );
};

