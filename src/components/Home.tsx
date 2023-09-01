import React, {FC} from 'react';
import s from '../style/Home.module.scss'
import aboutIcon from "../style/images/boy.png";
import {Fade} from "react-awesome-reveal";
import Tilt from 'react-parallax-tilt';
import ReactTypingEffect from "react-typing-effect";

export const Home: FC = () => {
    return (
        <div className={s.HomeContainer} id={'home'}>
            <div className={s.container}>
                <Fade direction={'down'}>
                    <Tilt tiltAxis={'x'} perspective={3000}>
                        <div className={s.photoWrapper}>
                            <div className={s.photo}></div>
                        </div>
                    </Tilt>
                    <Tilt>
                        <div className={s.textGreeting}>
                        <span className={s.name}>
                            <span className={s.firstName}>I'M ILIA </span>KRAVTSOV
                        </span>
                            <div className={s.professionConatiner}>
                                <ReactTypingEffect className={s.profession} text={'FRONT-END DEVELOPER'}/>
                            </div>
                            <div className={s.aboutMeText}>
                                <p>with 1+ year of work experience</p>
                                <p>in creating Single Page Applications</p>
                                <p>using <span className={s.accentColor}>React, Redux, Redux-Toolkit, TypeScript</span></p>
                            </div>
                            <a href={'https://t.me/kravtsov_ilia'} className={s.getHireLink} target={'_blank'}>
                                <div className={s.getHireContainer}>
                                    <div className={s.getHireTitle}>
                                        <span>Get hire me</span>
                                    </div>
                                    <img
                                        src={'https://ouch-cdn2.icons8.com/kSIAJQ2detV1XffgFuJ10fUEsh4Gm2atdnFRLFz3ORI/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTg1/L2I5MDg2ZjUyLTRi/NWMtNDYyZC1iMTli/LTk5Y2Q0NGZiYjI4/Yi5wbmc.png'}
                                        className={s.getHireIcon}
                                        alt={'aboutIcon'}/>
                                </div>
                            </a>
                        </div>
                    </Tilt>
                </Fade>
            </div>
        </div>
    );
};

