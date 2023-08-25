import React, {FC} from 'react';
import s from '../style/Home.module.scss'
import sb from '../style/Home.module.scss'
import aboutIcon from "../style/images/boy.png";
import {Fade} from "react-awesome-reveal";

type HomeType = {
    toggleLight: boolean
}

export const Home: FC<HomeType> = ({toggleLight}) => {

    // const defaultOptions = {
    //     reverse: true,  // reverse the tilt direction
    //     max: 80,     // max tilt rotation (degrees)
    //     perspective: 2000,   // Transform perspective, the lower the more extreme the tilt gets.
    //     scale: 1,    // 2 = 200%, 1.5 = 150%, etc..
    //     speed: 1000,   // Speed of the enter/exit transition
    //     transition: true,   // Set a transition on enter/exit.
    //     axis: 'X',   // What axis should be disabled. Can be X or Y.
    //     reset: true,    // If the tilt effect has to be reset on exit.
    //     easing: 'ease',    // Easing on enter/exit.
    // }

    return (
        <div className={sb.subContainer} id={'home'}>
            <div className={s.container}>
                <Fade direction={'down'}>
                    <div className={s.photoWrapper}>
                        {/*<Tilt options={defaultOptions}>*/}
                        {/*    <div className={s.photo}></div>*/}
                        {/*</Tilt>*/}
                        <div className={s.photo}></div>
                    </div>
                    <div className={s.textGreeting}>
                    <span className={s.name}>
                        <span className={toggleLight ? `${s.preName} ${s.light}` : s.preName}>I'M ILIA </span>KRAVTSOV
                    </span>
                        <div className={s.professionConatiner}>
                            <span className={toggleLight ? `${s.profession} ${s.light}` : s.profession}>FRONT-END WEB DEVELOPER</span>
                        </div>
                        {/*<ReactTypingEffect text={'A FRONTEND DEVELOPER'}/>*/}
                        <div className={toggleLight ? `${s.aboutMeText} ${s.lightPostText}` : s.aboutMeText}>
                            <p>with 1+ year of work experience</p>
                            <p>in creating Single Page Applications</p>
                            <p>using React, Redux, Redux-Toolkit, TypeScript</p>
                        </div>
                        <a href={'https://t.me/kravtsov_ilia'} className={s.navLink} target={'_blank'}>
                            <div className={toggleLight ? `${s.navIconContainer} ${s.light}` : s.navIconContainer}>
                                <div className={s.linkTitle}>
                                    <span>Get hire me</span>
                                </div>
                                <img src={'https://ouch-cdn2.icons8.com/kSIAJQ2detV1XffgFuJ10fUEsh4Gm2atdnFRLFz3ORI/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTg1/L2I5MDg2ZjUyLTRi/NWMtNDYyZC1iMTli/LTk5Y2Q0NGZiYjI4/Yi5wbmc.png'}
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

