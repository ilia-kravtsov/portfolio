import React, {FC} from 'react';
import s from '../style/Projects.module.scss'
import sb from "../style/About.module.scss";
import {Fade} from "react-awesome-reveal";
import {Tilt} from 'react-tilt'
import {defaultOptions} from '../features/features'

export const Projects: FC = () => {

    return (
        <div className={sb.subContainer} id={'projects'}>
            <div className={s.container}>
                <Fade direction={'up'}>

                    <div className={s.titleContainer}>
                        <div className={s.dotContainer_left}>
                            <div className={s.leftDot}></div>
                        </div>
                        <h1 className={s.title}>Project<span className={s.me}>$</span></h1>
                        <div className={s.dotContainer_right}>
                            <div className={s.rightDot}></div>
                        </div>
                    </div>

                </Fade>

                <div className={s.projectsContainer}>
                    <Fade direction={'up'}>
                        <div className={s.projectContainer}>
                            <div className={s.projectDescription}>
                                <p>
                                    In this project, I incorporated some legacy React code,
                                    utilized older libraries, employed syntax, class components
                                    that are no longer in mainstream use,
                                    implemented RESTful features such as registration, loginization, and pagination,
                                    and developed components using React and Redux.
                                </p>
                            </div>
                            <Tilt options={defaultOptions}>
                                <div className={s.project}>
                                    <a href='https://ilia-kravtsov.github.io/samurai_way/' target='_blank'
                                       className={s.projectLink} rel="noreferrer">
                                        <div className={s.socialNetworkBack}></div>

                                    </a>
                                    <h3 className={s.header}>Social network</h3>
                                    <span
                                        className={s.status}>Status: in progress
                                    </span>
                                </div>
                            </Tilt>
                        </div>

                        <div className={s.projectContainer}>
                            <Tilt options={defaultOptions}>
                                <div className={s.project}>
                                    <a href='https://ilia-kravtsov.github.io/todolist/' target='_blank'
                                       className={s.projectLink} rel="noreferrer">
                                        <div className={s.todolistBack}></div>
                                    </a>
                                    <h3 className={s.header}>Todolist</h3>
                                    <span
                                        className={s.status}>Status: in progress
                                </span>
                                </div>
                            </Tilt>
                            <div className={s.projectDescription}>
                                <p>
                                    Here i used modern syntax like: Redux-Toolkit,
                                    Project architectural solutions
                                    (separation into layers: UI, BLL, DAL, Server)
                                    Using BLL state management with Redux, Thunks
                                </p>
                            </div>
                        </div>

                        <div className={s.projectContainer}>
                            <div className={s.projectDescription}>
                                <p>
                                    I've made an effort to showcase
                                    my passion for mobile app development it's
                                    an area that I also gravitate towards
                                </p>
                            </div>
                            <Tilt options={defaultOptions}>
                                <div className={s.project}>

                                    <a href='https://ilia-kravtsov.github.io/telegram_clone_2' target='_blank'
                                       className={s.projectLink} rel="noreferrer">
                                        <div className={s.telegram}></div>
                                    </a>

                                    <h3 className={s.header}>Telegram clone</h3>
                                    <span
                                        className={s.status}>Status: in progress
                                </span>
                                </div>
                            </Tilt>
                        </div>

                        <div className={s.projectContainer}>
                            <Tilt options={defaultOptions}>
                                <div className={s.project}>
                                    <a href='https://ilia-kravtsov.github.io/counter/' target='_blank'
                                       className={s.projectLink}
                                       rel="noreferrer">
                                        <div className={s.counter}></div>
                                    </a>
                                    <h3 className={s.header}>Counter</h3>
                                    <span
                                        className={s.status}>Status: my first project
                                </span>
                                </div>
                            </Tilt>
                            <div className={s.projectDescription}>
                                <p>
                                    This is my first react project,
                                    and what makes it truly delightful
                                    is its simplicity and conciseness.
                                </p>
                            </div>
                        </div>

                    </Fade>
                </div>
            </div>
        </div>
    );
};

