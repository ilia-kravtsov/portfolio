import React from 'react';
import s from './Home.module.scss'
import aboutIcon from "../images/boy.png";
import {NavLink} from "react-router-dom";

export const Home = () => {

    return (
            <div className={s.container}>
                <div className={s.colorBlock}></div>
                <div className={s.photoWrapper}>
                    <div className={s.photo}></div>
                </div>
                <div className={s.textGreeting}>
                    <span className={s.name}>
                        <span className={s.preName}>I'M ILIA </span>KRAVTSOV
                    </span>
                    <div className={s.professionConatiner}>
                        <span className={s.profession}>A FRONTEND DEVELOPER</span>
                    </div>
                    <div className={s.aboutMeText}>
                        <p>Writing the application Code - is an art.</p>
                        <p className={s.letsBuild}>Programmers - are modern sculptors,</p>
                        <p>who create intellectual masterpieces.</p>
                    </div>
                    <NavLink to='/about' className={s.navLink}>
                        <div className={s.navIconContainer}>
                            <div className={s.linkTitle}>
                                <span>find out more about me</span>
                            </div>
                            <img src={aboutIcon}
                                 className={s.navIcon}
                                 alt={'aboutIcon'}/>
                        </div>
                    </NavLink>
                </div>
            </div>
    );
};

