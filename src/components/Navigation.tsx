import React, {FC, useState} from 'react';
import s from "../App.module.css";
import {NavLink} from "react-router-dom";
import homeIcon from "../images/home-button.png";
import skillsIcon from "../images/settings.png";
import projectsIcon from "../images/project.png";
import contactsIcon from "../images/contacting.png";
import aboutIcon from "../images/boy.png";

type NavLinkBorderType = {
    home: number
    about: number
    skills: number
    projects: number
    contacts: number
}

type NaviType = {
    aboutBorder: NavLinkBorderType
}

export const Navigation: FC<NaviType> = ({aboutBorder}) => {

    let [navLinkBorder, setNavLinkBorder] = useState<NavLinkBorderType>({
        home: 1,
        skills: 0,
        about: 0,
        projects: 0,
        contacts: 0
    })

    const onHomeClick = () => {
        setNavLinkBorder({
            home: 1,
            about: 0,
            skills: 0,
            projects: 0,
            contacts: 0
        })
    }
    const onAboutClick = () => {
        setNavLinkBorder({
            home: 0,
            about: 1,
            skills: 0,
            projects: 0,
            contacts: 0
        })
    }
    const onSkillClick = () => {
        setNavLinkBorder({
            home: 0,
            about: 0,
            skills: 1,
            projects: 0,
            contacts: 0
        })
    }
    const onProjectClick = () => {
        setNavLinkBorder({
            home: 0,
            about: 0,
            skills: 0,
            projects: 1,
            contacts: 0
        })
    }
    const onContactClick = () => {
        setNavLinkBorder({
            home: 0,
            about: 0,
            skills: 0,
            projects: 0,
            contacts: 1
        })
    }

    return (
        <nav className={s.navContainer}>
            <div className={s.navLinksContainer}>
                <NavLink to='/home'
                         className={s.navLink}
                         onClick={onHomeClick}>
                    <div className={navLinkBorder.home === 1
                        ? `${s.navIconContainer} ${s.active}`
                        :  s.navIconContainer
                        }>
                        <span className={s.linkTitle}>Home</span>
                        <img src={homeIcon}
                             className={s.navIcon}
                             alt={'homeIcon'}/>
                    </div>
                </NavLink>
                <NavLink to='/about'
                         className={s.navLink}
                         onClick={onAboutClick}>
                    <div className={navLinkBorder.about === 1
                        ? `${s.navIconContainer} ${s.active}`
                        :  s.navIconContainer
                    }>
                        <div className={s.linkTitle}>
                            <span>about me</span>
                        </div>
                        <img src={aboutIcon}
                             className={s.navIcon}
                             alt={'aboutIcon'}/>
                    </div>
                </NavLink>
                <NavLink to='/skills'
                         className={s.navLink}
                         onClick={onSkillClick}>
                    <div className={navLinkBorder.skills === 1
                        ? `${s.navIconContainer} ${s.active}`
                        :  s.navIconContainer
                    }>
                        <span className={s.linkTitle}>Skills</span>
                        <img src={skillsIcon}
                             className={s.navIcon}
                             alt={'skillsIcon'}/>
                    </div>
                </NavLink>
                <NavLink to='/projects'
                         className={s.navLink}
                         onClick={onProjectClick}>
                    <div className={navLinkBorder.projects === 1
                        ? `${s.navIconContainer} ${s.active}`
                        :  s.navIconContainer}>
                        <span className={s.linkTitle}>Projects</span>
                        <img src={projectsIcon}
                             className={s.navIcon}
                             alt={'projectsIcon'}
                        />
                    </div>
                </NavLink>
                <NavLink to='/contacts'
                         className={s.navLink}
                         onClick={onContactClick}>
                    <div className={navLinkBorder.contacts === 1
                        ? `${s.navIconContainer} ${s.active}`
                        :  s.navIconContainer}>
                        <span className={s.linkTitle}>Let's Talk</span>
                        <img src={contactsIcon}
                             className={s.navIcon}
                             alt={'contactsIcon'}
                        />
                    </div>
                </NavLink>
            </div>
        </nav>
    );
};

