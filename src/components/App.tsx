import React from 'react';
import {Home} from "./Home";
import {Skills} from "./Skills";
import {Contacts} from "./Contacts";
import {Projects} from "./Projects";
import {About} from "./About";
import {Navigation} from "./Navigation";
import s from "../style/App.module.scss";
import {Particle} from "./Particle";

function App() {

    return (
        <div className={s.App}>
            <main className={s.main}>
                <Particle />
                <Home/>
                    <About/>
                    <Skills/>
                    <Projects/>
                    <Contacts/>
            </main>
            <Navigation/>
        </div>
    );
}

export default App;


/*
   <div className={s.contactMe}>
                    <h2 className={s.titleContact}>I consider options for remote work</h2>
                    <NavHashLink smooth to='#contacts' className={s.linkContacts}>Contact me</NavHashLink>
                </div>
                456
 */

/*
<footer className={s.footer}>
                <h3 className={s.footerHeader}>add me to your friends</h3>
                <div className={s.footerIconsContainer}>
                    <a href='https://www.linkedin.com/in/-ilia-kravtsov' target='_blank' rel="noreferrer">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Facebook_F_icon.svg/512px-Facebook_F_icon.svg.png"
                            alt="facebook logo" className={s.footerLogo}/>
                    </a>
                    <a href='https://www.linkedin.com/in/-ilia-kravtsov' target='_blank' rel="noreferrer">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/120px-Instagram_logo_2016.svg.png"
                            alt="facebook logo" className={s.footerLogo}/>
                    </a>
                    <a href='https://t.me/Ilia_melbourne' target='_blank' rel="noreferrer">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png?20220101141644"
                            alt="facebook logo" className={s.footerLogo}/>
                    </a>
                    <a href='https://www.linkedin.com/in/-ilia-kravtsov' target='_blank' rel="noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/200px-Linkedin.svg.png"
                             alt="linkedin logo" className={s.footerLogo}/>
                    </a>
                </div>
                <span>© All rights reserved</span>
            </footer>
 */