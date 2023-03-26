import React, {useState} from 'react';
import s from './App.module.css';
import {Home} from "./components/Home";
import {Skills} from "./components/Skills";
import {Contacts} from "./components/Contacts";
import {Projects} from "./components/Projects";
import { NavHashLink } from 'react-router-hash-link';

function App() {

    let [homeLink, setHomeLink] = useState<boolean>(false)
    let [skillLink, setSkillLink] = useState<boolean>(false)
    let [proLink, setProLink] = useState<boolean>(false)
    let [contactLink, setContactLink] = useState<boolean>(false)

    const onHomeClick = () => {
        setHomeLink(true)
        setSkillLink(false)
        setProLink(false)
        setContactLink(false)
    }
    const onSkillClick = () => {
        setHomeLink(false)
        setSkillLink(true)
        setProLink(false)
        setContactLink(false)
    }
    const onProjectClick = () => {
        setHomeLink(false)
        setSkillLink(false)
        setProLink(true)
        setContactLink(false)
    }
    const onContactClick = () => {
        setHomeLink(false)
        setSkillLink(false)
        setProLink(false)
        setContactLink(true)
    }

    return (
        <div className={s.App}>
            <div className={s.header}>
                <div className={s.nav}>
                    <NavHashLink smooth to='#home' className={homeLink ? `${s.linkNav} ${s.active}` : s.linkNav} onClick={onHomeClick}
                    >Home</NavHashLink>
                    <NavHashLink smooth to='#skills' className={skillLink ? `${s.linkNav} ${s.active}` : s.linkNav} onClick={onSkillClick}
                    >Skills</NavHashLink>
                    <NavHashLink smooth to='#projects' className={proLink ? `${s.linkNav} ${s.active}` : s.linkNav} onClick={onProjectClick}
                    >Projects</NavHashLink>
                    <NavHashLink smooth to='#contacts' className={contactLink ? `${s.linkNav} ${s.active}` : s.linkNav} onClick={onContactClick}
                    >Contacts</NavHashLink>
                </div>
            </div>
            <main className={s.main}>
                <section id='home' className={s.homeAnchor}></section>
                <Home/>
                <section id='skills' className={s.skillsAnchor}></section>
                <Skills/>
                <div className={s.contactMe}>
                    <h2 className={s.titleContact}>I consider options for remote work</h2>
                    <NavHashLink smooth to='#contacts' className={s.linkContacts}>Contact me</NavHashLink>
                </div>
                <section id='projects' className={s.skillsAnchor}></section>
                <Projects/>
                <section id='contacts' className={s.skillsAnchor}></section>
                <Contacts/>
            </main>
            <footer className={s.footer}>
                <h3 className={s.footerHeader}>add to friends</h3>
                <div className={s.footerIconsContainer}>
                    <a href='https://www.linkedin.com/in/-ilia-kravtsov' target='_blank' rel="noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Facebook_F_icon.svg/512px-Facebook_F_icon.svg.png" alt="facebook logo" className={s.footerLogo}/>
                    </a>
                    <a href='https://www.linkedin.com/in/-ilia-kravtsov' target='_blank' rel="noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/120px-Instagram_logo_2016.svg.png" alt="facebook logo" className={s.footerLogo}/>
                    </a>
                    <a href='https://www.linkedin.com/in/-ilia-kravtsov' target='_blank' rel="noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/600px-VK.com-logo.svg.png" alt="facebook logo" className={s.footerLogo}/>
                    </a>
                    <a href='https://www.linkedin.com/in/-ilia-kravtsov' target='_blank' rel="noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/200px-Linkedin.svg.png" alt="linkedin logo" className={s.footerLogo} />
                    </a>
                </div>
                <span>2023</span>
            </footer>
        </div>
    );
}

export default App;
