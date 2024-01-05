import React, {FC} from 'react';
import s from '../style/Projects.module.scss'
import {Fade} from "react-awesome-reveal";
import Tilt from 'react-parallax-tilt';
import {Title} from "../components/Title";

export const Projects: FC = () => {

    return (
        <div className={s.ProjectsContainer} id={'projects'}>
            <div className={s.container}>
                <Fade direction={'up'}>
                    <Title title={'project'}
                           accentTitle={'$'}
                           titleBack={''}
                    />
                </Fade>

                <div className={s.projectsContainer}>
                    <Fade direction={'up'}>

                        <div className={s.projectContainer}>
                            <div className={s.projectDescription}>
                                <Tilt tiltAngleYInitial={-45} tiltAxis={'y'}>
                                    <p>
                                        In this project, I incorporated some legacy React code,
                                        utilized older libraries, employed syntax, class components
                                        that are no longer in mainstream use,
                                        implemented REST features such as registration, authentication, and pagination,
                                        and developed components using <span className={s.accentColor}>React and Redux.</span>
                                    </p>
                                </Tilt>
                            </div>
                            <Tilt tiltAngleYInitial={15}>
                                <div className={s.project}>
                                    <a href='https://ilia-kravtsov.github.io/samurai_way/' target='_blank'
                                       className={s.projectLink} rel="noreferrer">
                                        <div className={s.socialNetworkBack}></div>

                                    </a>
                                    <h3 className={s.projectHeader}>Social network</h3>
                                    <span
                                        className={s.status}>Status: in progress
                                    </span>
                                </div>
                            </Tilt>
                        </div>

                        <div className={s.projectContainer}>
                            <Tilt tiltAngleYInitial={-15}>
                                <div className={s.project}>
                                    <a href='https://ilia-kravtsov.github.io/todolist/' target='_blank'
                                       className={s.projectLink} rel="noreferrer">
                                        <div className={s.todolistBack}></div>
                                    </a>
                                    <h3 className={s.projectHeader}>Todolist</h3>
                                    <span
                                        className={s.status}>Status: in progress
                                </span>
                                </div>
                            </Tilt>
                            <div className={s.projectDescription}>
                                <Tilt tiltAngleYInitial={45} tiltAxis={'y'}>
                                    <p>
                                        Here i used modern syntax like: <span className={s.accentColor}>Redux-Toolkit</span>,
                                        Project architectural solutions
                                        (separation into layers: <span className={s.accentColor}>UI, BLL, DAL, Server</span>)
                                        Using BLL state management with Redux, Thunks
                                    </p>
                                </Tilt>
                            </div>
                        </div>

                        <div className={s.projectContainer}>
                            <div className={s.projectDescription}>
                                <Tilt tiltAngleYInitial={-45} tiltAxis={'y'}>
                                    <p>
                                        I've made an effort to showcase
                                        my passion for mobile app development it's
                                        an area that I also gravitate towards
                                    </p>
                                </Tilt>
                            </div>
                            <Tilt tiltAngleYInitial={15}>
                                <div className={s.project}>

                                    <a href='https://ilia-kravtsov.github.io/telegram_clone_2' target='_blank'
                                       className={s.projectLink} rel="noreferrer">
                                        <div className={s.telegram}></div>
                                    </a>

                                    <h3 className={s.projectHeader}>Telegram clone</h3>
                                    <span
                                        className={s.status}>Status: in progress
                                </span>
                                </div>
                            </Tilt>
                        </div>

                        <div className={s.projectContainer}>
                            <Tilt tiltAngleYInitial={-15}>
                                <div className={s.project}>
                                    <a href='https://ilia-kravtsov.github.io/counter/' target='_blank'
                                       className={s.projectLink}
                                       rel="noreferrer">
                                        <div className={s.counter}></div>
                                    </a>
                                    <h3 className={s.projectHeader}>Counter</h3>
                                    <span
                                        className={s.status}>Status: my first project
                                </span>
                                </div>
                            </Tilt>
                            <div className={s.projectDescription}>
                                <Tilt tiltAngleYInitial={45} tiltAxis={'y'}>
                                    <p>
                                        This is my first react project,
                                        and what makes it truly delightful
                                        is its simplicity and conciseness.
                                    </p>
                                </Tilt>
                            </div>
                        </div>

                    </Fade>
                </div>
            </div>
        </div>
    );
};

