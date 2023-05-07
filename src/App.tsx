import React, {useState} from 'react';
import s from './App.module.css';
import {Home} from "./components/Home";
import {Skills} from "./components/Skills";
import {Contacts} from "./components/Contacts";
import {Projects} from "./components/Projects";
import { NavHashLink } from 'react-router-hash-link';
import {NavLink, Route, Routes} from "react-router-dom";

type NavLinkBorderType = {
    home: number
    skills: number
    projects: number
    contacts: number
}

function App() {

    let [navLinkBorder, setNavLinkBorder] = useState<NavLinkBorderType>({
        home: 1,
        skills: 0,
        projects: 0,
        contacts: 0
    })

    const onHomeClick = () => {
        setNavLinkBorder({
            home: 1,
            skills: 0,
            projects: 0,
            contacts: 0
        })
    }
    const onSkillClick = () => {
        setNavLinkBorder({
            home: 0,
            skills: 1,
            projects: 0,
            contacts: 0
        })
    }
    const onProjectClick = () => {
        setNavLinkBorder({
            home: 0,
            skills: 0,
            projects: 1,
            contacts: 0
        })
    }
    const onContactClick = () => {
        setNavLinkBorder({
            home: 0,
            skills: 0,
            projects: 0,
            contacts: 1
        })
    }

    return (
        <div className={s.App}>
            <header className={s.header}>
                <div className={s.nav}>
                    <NavLink to='/home' className={navLinkBorder.home === 1 ? `${s.linkNav} ${s.active}` : s.linkNav} onClick={onHomeClick}
                    >Home</NavLink>
                    <NavLink to='/skills' className={navLinkBorder.skills === 1 ? `${s.linkNav} ${s.active}` : s.linkNav} onClick={onSkillClick}
                    >Skills</NavLink>
                    <NavLink to='/projects' className={navLinkBorder.projects === 1 ? `${s.linkNav} ${s.active}` : s.linkNav} onClick={onProjectClick}
                    >Projects</NavLink>
                    <NavLink to='/contacts' className={navLinkBorder.contacts === 1 ? `${s.linkNav} ${s.active}` : s.linkNav} onClick={onContactClick}
                    >Contacts</NavLink>
                </div>
            </header>
            <main className={s.main}>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/skills' element={<Skills/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                </Routes>
            </main>
            <footer className={s.footer}>
                <h3 className={s.footerHeader}>add me to your friends</h3>
                <div className={s.footerIconsContainer}>
                    <a href='https://www.linkedin.com/in/-ilia-kravtsov' target='_blank' rel="noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Facebook_F_icon.svg/512px-Facebook_F_icon.svg.png" alt="facebook logo" className={s.footerLogo}/>
                    </a>
                    <a href='https://www.linkedin.com/in/-ilia-kravtsov' target='_blank' rel="noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/120px-Instagram_logo_2016.svg.png" alt="facebook logo" className={s.footerLogo}/>
                    </a>
                    <a href='https://t.me/Ilia_melbourne' target='_blank' rel="noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png?20220101141644" alt="facebook logo" className={s.footerLogo}/>
                    </a>
                    <a href='https://www.linkedin.com/in/-ilia-kravtsov' target='_blank' rel="noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/200px-Linkedin.svg.png" alt="linkedin logo" className={s.footerLogo} />
                    </a>
                </div>
                <span>© All rights reserved</span>
            </footer>
        </div>
    );
}

export default App;


/*
   <div className={s.contactMe}>
                    <h2 className={s.titleContact}>I consider options for remote work</h2>
                    <NavHashLink smooth to='#contacts' className={s.linkContacts}>Contact me</NavHashLink>
                </div>
 */