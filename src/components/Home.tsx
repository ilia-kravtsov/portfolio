import React, {FC} from 'react';
import s from '../style/Home.module.scss'
import sb from '../style/Home.module.scss'
import aboutIcon from "../style/images/boy.png";
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";
import {Tilt} from 'react-tilt'

type HomeType = {
    toggleLight: boolean
}

export const Home: FC<HomeType> = ({toggleLight}) => {

    const defaultOptions = {
        reverse: true,  // reverse the tilt direction
        max: 50,     // max tilt rotation (degrees)
        perspective: 2000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: 'X',   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: 'ease',    // Easing on enter/exit.
    }

    return (
        <div className={sb.subContainer} id={'home'}>
            <div className={s.container}>
                <Fade direction={'down'}>
                    <div className={s.photoWrapper}>
                        <Tilt options={defaultOptions}>
                            <div className={s.photo}></div>
                        </Tilt>
                    </div>
                    <div className={s.textGreeting}>
                    <span className={s.name}>
                        <span className={toggleLight ? `${s.preName} ${s.light}` : s.preName}>I'M ILIA </span>KRAVTSOV
                    </span>
                        <div className={s.professionConatiner}>
                            <span className={toggleLight ? `${s.profession} ${s.light}` : s.profession}>A FRONTEND DEVELOPER</span>
                        </div>
                        {/*<ReactTypingEffect text={'A FRONTEND DEVELOPER'}/>*/}
                        <div className={toggleLight ? `${s.aboutMeText} ${s.lightPostText}` : s.aboutMeText}>
                            <p>Writing the application Code - is an art.</p>
                            <p className={s.letsBuild}>Programmers - are modern sculptors,</p>
                            <p>who create intellectual masterpieces.</p>
                        </div>
                        <a href={'#about'} className={s.navLink}>
                            <div className={toggleLight ? `${s.navIconContainer} ${s.light}` : s.navIconContainer}>
                                <div className={s.linkTitle}>
                                    <span>find out more about me</span>
                                </div>
                                <img src={aboutIcon}
                                     className={s.navIcon}
                                     alt={'aboutIcon'}/>
                            </div>
                        </a>
                    </div>
                </Fade>
            </div>

        </div>
    );
};

