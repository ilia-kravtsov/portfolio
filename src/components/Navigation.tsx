import React, {FC} from 'react';
import s from "../style/Navigation.module.scss";
import homeIcon from "../style/images/home-button.png";
import skillsIcon from "../style/images/settings.png";
import projectsIcon from "../style/images/project.png";
import contactsIcon from "../style/images/contacting.png";
import aboutIcon from "../style/images/boy.png";
import {Link} from "react-scroll";

export const Navigation: FC = () => {

    return (
        <nav className={s.navContainer}>
            <div className={s.navLinksContainer}>

                <div className={s.navLink}>
                    <Link activeClass={s.active}
                          className={s.navIconContainer}
                          to="home"
                          spy
                          smooth
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
                          spy
                          smooth
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
                          spy
                          smooth
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
                      spy
                      smooth
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
                      spy
                      smooth
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
            </div>
        </nav>
    );
};

