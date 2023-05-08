import React from 'react';
import s from './Home.module.css'
import aboutIcon from "../images/boy.png";
import {NavLink} from "react-router-dom";

export const Home = () => {

    const onAboutClick = () => {

    }

    return (
            <div className={s.container}>
                <div className={s.colorBlock}></div>
                <div className={s.photoWrapper}>
                    <div className={s.photo}></div>
                </div>
                <div className={s.textGreeting}>
                    <span className={s.name}>
                        <span className={s.preName}>I'M ILIA </span>
                         KRAVTSOV
                    </span>
                    <div className={s.professionConatiner}>
                        <span className={s.profession}>A FRONTEND DEVELOPER</span>
                    </div>
                    <div className={s.aboutMeText}>
                        <p>I'm passionate about building excellent software</p>
                        <p>that improves the lives of those around me.</p>
                    </div>
                    <NavLink to='/about'
                             className={s.navLink}
                             onClick={onAboutClick}>
                        <div className={s.navIconContainer}>
                            <div className={s.linkTitle}>About_me</div>
                            <img src={aboutIcon}
                                 className={s.navIcon}
                                 alt={'aboutIcon'}/>
                        </div>
                    </NavLink>
                </div>
            </div>
    );
};

