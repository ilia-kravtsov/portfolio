import React, {FC, useEffect} from 'react';
import s from '../style/About.module.scss'
import disciplineIcon from '../style/images/martial-arts.png'
import punctualityIcon from '../style/images/time-manager.png'
import teamPlayerIcon from '../style/images/together.png'
import flowIcon from '../style/images/data-flow.png'
import worker from '../style/images/working.png'
import bord from '../style/images/board.png'
import workout from '../style/images/workout.png'
import vocabulary from '../style/images/vocabulary.png'
import {Circle} from './Circle';
import sb from "../style/About.module.scss";
import {Fade} from "react-awesome-reveal";

type AboutType = {
    linkColorAbout: (toggle: boolean) => void
    toggleLight: boolean
}

export const About: FC<AboutType> = ({linkColorAbout, toggleLight}) => {

    useEffect(() => {
        linkColorAbout(true)
    }, [])

    return (
        <div className={sb.subContainer} id={'about'}>
            <div className={s.container}>
                <Fade direction={'up'}>
                    <section className={s.titleSection}>
                        <h2 className={s.titleAboutPage}>ABOUT
                            <span className={s.me}> ME</span>
                        </h2>
                        <span className={toggleLight ? `${s.titleBack} ${s.lightMode}` : s.titleBack}>Information</span>
                    </section>
                </Fade>
                <section className={s.content}>
                    <div className={s.contentLeft}>
                        <Fade direction={'up'}>
                            <section className={s.personalInfo}>
                                <h3 className={toggleLight ? s.lightH3 : ''}>info: <div className={s.circle}></div>
                                    <div className={s.headerLine}></div>
                                </h3>
                                <p className={toggleLight ? s.lightH3 : ''}><span>First name:</span><span>ilia</span>
                                </p>
                                <p className={toggleLight ? s.lightH3 : ''}><span>Last name:</span><span>kravtsov</span>
                                </p>
                                <p className={toggleLight ? s.lightH3 : ''}><span>Age:</span> <span>29</span></p>
                                <p className={toggleLight ? s.lightH3 : ''}><span>Address:</span>
                                    <span>Stavropol, Russia</span></p>
                                <p className={toggleLight ? s.lightH3 : ''}><span>Job Status:</span>
                                    <span>in active search</span></p>
                                <section className={s.personalHobbies}>
                                    <h3 className={toggleLight ? s.lightH3 : ''}>Hobbies: <div
                                        className={s.circle}></div>
                                        <div className={s.headerLine}></div>
                                    </h3>
                                    <p className={toggleLight ? s.lightH3 : ''}><img src={vocabulary}
                                                                                     alt="disciplineIcon"
                                                                                     className={s.hobbieIcon}/>Learning
                                        languages</p>
                                    <p className={toggleLight ? s.lightH3 : ''}><img src={workout} alt="disciplineIcon"
                                                                                     className={s.hobbieIcon}/>Snowboarding
                                    </p>
                                    <p className={toggleLight ? s.lightH3 : ''}><img src={bord} alt="disciplineIcon"
                                                                                     className={s.hobbieIcon}/>Workout
                                    </p>
                                </section>
                            </section>


                            <section className={s.personalStrengths}>
                                <h3 className={toggleLight ? s.lightH3 : ''}>Strengths:
                                    <div className={s.circle}></div>
                                    <div className={s.headerLine}></div>
                                </h3>
                                <p className={toggleLight ? s.lightH3 : ''}><img src={disciplineIcon}
                                                                                 alt="disciplineIcon"
                                                                                 className={s.icon}/>Discipline</p>
                                <p className={toggleLight ? s.lightH3 : ''}><img src={punctualityIcon}
                                                                                 alt="punctualityIcon"
                                                                                 className={s.icon}/>Punctuality</p>
                                <p className={toggleLight ? s.lightH3 : ''}><img src={teamPlayerIcon}
                                                                                 alt="Team play Icon"
                                                                                 className={s.icon}/>Team play</p>
                                <p className={toggleLight ? s.lightH3 : ''}><img src={worker} alt="Hard worker"
                                                                                 className={s.icon}/>Hard worker</p>
                                <p className={toggleLight ? s.lightH3 : ''}><img src={flowIcon} alt="flowIcon"
                                                                                 className={s.icon}/>Feeling of the Code
                                    flow</p>
                            </section>
                        </Fade>
                    </div>
                    <div className={s.contentRight}>
                        <Fade direction={'up'}>
                            <section className={s.experience_education}>
                                <h3 className={toggleLight ? s.lightH3 : ''}>EDUCATION:
                                    <div className={s.circle}></div>
                                    <div className={s.headerLine}></div>
                                </h3>
                                <p className={toggleLight ? s.lightH3 : ''}>University: <span>Stavropol State University</span>
                                </p>
                                <p className={toggleLight ? s.lightH3 : ''}>Qualification: <span>engineering degree</span>
                                </p>
                                <p className={toggleLight ? s.lightH3 : ''}>Specialization: <span
                                    className={s.electrification}>electrification</span></p>
                                <section className={s.programming_training}>
                                    <h3 className={toggleLight ? s.lightH3 : ''}>Experience:
                                        <div className={s.circle}></div>
                                        <div className={s.headerLine}></div>
                                    </h3>
                                    <p className={toggleLight ? s.lightH3 : ''}>Main
                                        Experience: <span>IT INCUBATOR</span>
                                    </p>
                                    <p className={toggleLight ? s.lightH3 : ''}>Codewars: <span>5 kyu rank</span></p>
                                    <p className={toggleLight ? s.lightH3 : ''}>FCC: <span>JS and HTML</span></p>
                                    <p className={toggleLight ? s.lightH3 : ''}>Hexlet: <span>Base JS program is done</span>
                                    </p>
                                </section>
                            </section>
                            <section className={s.languages}>
                                <h3 className={toggleLight ? s.lightH3 : ''}>Languages:
                                    <div className={s.circle}></div>
                                    <div className={s.headerLine}></div>
                                </h3>
                                <div className={s.circleContainer}>
                                    <Circle percents={100} title={'Russian'} toggleLight={toggleLight}/>
                                    <Circle percents={70} title={'English'} toggleLight={toggleLight}/>
                                </div>
                            </section>
                        </Fade>
                    </div>
                </section>
            </div>
        </div>
    )
};

