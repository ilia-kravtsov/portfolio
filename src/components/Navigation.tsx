import React, {useState} from 'react';
import s from "../App.module.css";
import {NavLink} from "react-router-dom";
import homeIcon from "../images/home-button.png";
import skillsIcon from "../images/settings.png";
import projectsIcon from "../images/project.png";
import contactsIcon from "../images/contacting.png";

type NavLinkBorderType = {
    home: number
    skills: number
    projects: number
    contacts: number
}

export const Navigation = () => {

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
        <nav className={s.navContainer}>
            <div className={s.navLinksContainer}>
                <NavLink to='/home'
                         className={navLinkBorder.home === 1
                             ? `${s.navLink} ${s.active}`
                             : s.navLink}
                         onClick={onHomeClick}>
                    <div className={s.navIconContainer}>
                        <span className={s.linkTitle}>Home</span>
                        <img src={homeIcon} className={s.navIcon}/>
                    </div>
                </NavLink>
                <NavLink to='/skills'
                         className={navLinkBorder.skills === 1
                             ? `${s.navLink} ${s.active}`
                             : s.navLink}
                         onClick={onSkillClick}>
                    <span className={s.linkTitle}>Skills</span>
                    <img src={skillsIcon} className={s.navIcon}/>
                </NavLink>
                <NavLink to='/projects'
                         className={navLinkBorder.projects === 1
                             ? `${s.navLink} ${s.active}`
                             : s.navLink}
                         onClick={onProjectClick}>
                    <span className={s.linkTitle}>Projects</span>
                    <img src={projectsIcon} className={s.navIcon}/>
                </NavLink>
                <NavLink to='/contacts'
                         className={navLinkBorder.contacts === 1
                             ? `${s.navLink} ${s.active}`
                             : s.navLink}
                         onClick={onContactClick}>
                    <span className={s.linkTitle}>Let's Talk</span>
                    <img src={contactsIcon} className={s.navIcon}/>
                </NavLink>
            </div>
        </nav>
    );
};

