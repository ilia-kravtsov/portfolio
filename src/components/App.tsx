import React, {useState} from 'react';
import {Home} from "./Home";
import {Skills} from "./Skills";
import {Contacts} from "./Contacts";
import {Projects} from "./Projects";
import {About} from "./About";
import {Navigation} from "./Navigation";
import s from "../style/App.module.scss";

export type NavLinkBorderType = {
    home: number
    about: number
    skills: number
    projects: number
    contacts: number
}

function App() {

    let [navState, setNavState] = useState<NavLinkBorderType>({
        home: 1,
        skills: 0,
        about: 0,
        projects: 0,
        contacts: 0
    })
    let [toggleLight, setToggleLight] = useState<boolean>(false)

    const linkColorAbout = (toggle: boolean) => {
        if (toggle) {
            setNavState({
                home: 0,
                skills: 0,
                about: 1,
                projects: 0,
                contacts: 0
            })
        }
    }
    const lightToggleClick = () => {
        setToggleLight(!toggleLight)
    }

    return (
        <div className={s.App}>
            <main className={toggleLight ? `${s.main} ${s.light}` : s.main}>
                <Home toggleLight={toggleLight}/>
                <About linkColorAbout={linkColorAbout} toggleLight={toggleLight}/>
                <Skills toggleLight={toggleLight}/>
                <Projects toggleLight={toggleLight}/>
                <Contacts toggleLight={toggleLight}/>
            </main>
            <Navigation navState={navState} setNavState={setNavState} lightToggleClick={lightToggleClick}
                        toggleLight={toggleLight}/>
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