import React, {FC} from 'react';
import s from "../style/App.module.scss";
import homeIcon from "../style/images/home-button.png";
import skillsIcon from "../style/images/settings.png";
import projectsIcon from "../style/images/project.png";
import contactsIcon from "../style/images/contacting.png";
import aboutIcon from "../style/images/boy.png";
import flashLight_1 from "../style/images/flashlight_2.png";
import {Link} from "react-scroll";

type NavLinkBorderType = {
    home: number
    about: number
    skills: number
    projects: number
    contacts: number
}

type NaviType = {
    navState?: NavLinkBorderType
    setNavState?: (navState: NavLinkBorderType) => void
    lightToggleClick: () => void
    toggleLight: boolean
}

export const Navigation: FC<NaviType> = ({lightToggleClick, toggleLight}) => {

    const flashLightCB = () => {
        lightToggleClick()
    }

    return (
        <nav className={toggleLight ? `${s.navContainer} ${s.light}` : s.navContainer}>
            <div className={s.navLinksContainer}>

                <div className={s.navLink}>
                    <Link activeClass={s.active}
                          className={s.navIconContainer}
                          to="home"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={600}>
                        <span className={s.linkTitle}>Home</span>
                        <img src={homeIcon}
                             className={s.navIcon}
                             alt={'homeIcon'}/>

                    </Link>
                </div>

                <div className={s.navLink}>
                    <Link activeClass={s.active}
                          className={s.navIconContainer}
                          to="about"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={600}>
                        <div className={s.linkTitle}>
                            <span className={s.inline}>
                                <span>About</span>
                                <span className={s.ml}>me</span>
                            </span>
                        </div>
                        <img src={aboutIcon}
                             className={s.navIcon}
                             alt={'aboutIcon'}/>
                    </Link>
                </div>

                <div className={s.navLink}>
                    <Link activeClass={s.active}
                          className={s.navIconContainer}
                          to="skills"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={600}>
                        <span className={s.linkTitle}>Skills</span>
                        <img src={skillsIcon}
                             className={s.navIcon}
                             alt={'skillsIcon'}/>
                    </Link>
                </div>

                <div className={s.navLink}>
                <Link activeClass={s.active}
                      className={s.navIconContainer}
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={600}>
                        <span className={s.linkTitle}>Projects</span>
                        <img src={projectsIcon}
                             className={s.navIcon}
                             alt={'projectsIcon'}
                        />
                </Link>
                </div>

                <div className={s.navLink}>
                <Link activeClass={s.active}
                      className={s.navIconContainer}
                      to="contacts"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={600}>
                      <span className={s.linkTitle}>
                                    <span className={s.inline}>Let's
                                        <span className={s.ml}>Talk</span>
                                    </span>
                                </span>
                        <img src={contactsIcon}
                             className={s.navIcon}
                             alt={'contactsIcon'}
                        />
                </Link>
                </div>

                <img className={s.flashLight} src={flashLight_1} alt={'FlashLight'} onClick={flashLightCB}/>
            </div>
        </nav>
    );
};

/*
                <a href='#home'
                         className={s.navLink}
                         onClick={onHomeClick}>
                    <div className={navState.home === 1
                        ? `${s.navIconContainer} ${s.active}`
                        : s.navIconContainer
                    }>
                        <span className={s.linkTitle}>Home</span>
                        <img src={homeIcon}
                             className={s.navIcon}
                             alt={'homeIcon'}/>
                    </div>
                </a>

                <a href='#about'
                         className={s.navLink}
                         onClick={onAboutClick}>
                    <div className={navState.about === 1
                        ? `${s.navIconContainer} ${s.active}`
                        : s.navIconContainer
                    }>
                        <div className={s.linkTitle}>
                            <span className={s.inline}>
                                <span>About</span>
                                <span className={s.ml}>me</span>
                            </span>
                        </div>
                        <img src={aboutIcon}
                             className={s.navIcon}
                             alt={'aboutIcon'}/>
                    </div>
                </a>

                <a href='#projects'
                         className={s.navLink}
                         onClick={onSkillClick}>
                    <div className={navState.projects === 1
                        ? `${s.navIconContainer} ${s.active}`
                        : s.navIconContainer}>
                        <span className={s.linkTitle}>Projects</span>
                        <img src={projectsIcon}
                             className={s.navIcon}
                             alt={'projectsIcon'}
                        />
                    </div>
                </a>

                <a href='#contacts'
                         className={s.navLink}
                         onClick={onContactClick}>
                    <div className={navState.contacts === 1
                        ? `${s.navIconContainer} ${s.active}`
                        : s.navIconContainer}>
                        <span className={s.linkTitle}>
                            <span className={s.inline}>Let's
                                <span className={s.ml}>Talk</span>
                            </span>
                        </span>
                        <img src={contactsIcon}
                             className={s.navIcon}
                             alt={'contactsIcon'}
                        />
                    </div>
                </a>

                    // const onHomeClick = () => {
    //     setNavState({
    //         home: 1,
    //         about: 0,
    //         skills: 0,
    //         projects: 0,
    //         contacts: 0
    //     })
    // }
    // const onAboutClick = () => {
    //     setNavState({
    //         home: 0,
    //         about: 1,
    //         skills: 0,
    //         projects: 0,
    //         contacts: 0
    //     })
    // }
    // const onSkillClick = () => {
    //     setNavState({
    //         home: 0,
    //         about: 0,
    //         skills: 1,
    //         projects: 0,
    //         contacts: 0
    //     })
    // }
    // const onProjectClick = () => {
    //     setNavState({
    //         home: 0,
    //         about: 0,
    //         skills: 0,
    //         projects: 1,
    //         contacts: 0
    //     })
    // }
    // const onContactClick = () => {
    //     setNavState({
    //         home: 0,
    //         about: 0,
    //         skills: 0,
    //         projects: 0,
    //         contacts: 1
    //     })
    // }
*/