import React, {FC} from 'react';
import s from '../style/Projects.module.scss'
import sb from "../style/About.module.scss";
import {Fade} from "react-awesome-reveal";

type ProjectsType = {
    toggleLight: boolean
}

export const Projects: FC<ProjectsType> = ({toggleLight}) => {
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
                                    In this project i used some legacy js code,
                                    <p>
                                        old libraries, syntax, and class components
                                    </p>
                                    <p>
                                        RESTful (registration, loginization, pagination)
                                    </p>
                                </p>
                            </div>
                            <div className={s.project}>
                                <div className={s.socialNetworkBack}>
                                    <a href='https://ilia-kravtsov.github.io/samurai_way/' target='_blank'
                                       className={s.projectLink} rel="noreferrer">check</a>
                                </div>
                                <h3 className={toggleLight ? s.lightH3 : ''}>Social network</h3>
                                <span
                                    className={toggleLight ? `${s.status} ${s.lightH3}` : s.status}>Status: in progress
                                </span>
                            </div>
                        </div>

                        <div className={s.projectContainer}>
                            <div className={s.project}>
                                <div className={s.todolistBack}>
                                    <a href='https://ilia-kravtsov.github.io/todolist/' target='_blank'
                                       className={s.projectLink} rel="noreferrer">check</a>
                                </div>
                                <h3 className={toggleLight ? s.lightH3 : ''}>Todolist</h3>
                                <span
                                    className={toggleLight ? `${s.status} ${s.lightH3}` : s.status}>Status: in progress
                                </span>
                            </div>
                            <div className={s.projectDescription}>
                                <p>
                                    Here i used modern syntax
                                    <p>
                                        Project architectural solutions
                                    </p>
                                    <p>
                                        (separation into layers: UI, BLL, DAL, Server)
                                    </p>
                                    <p>
                                        Using BLL state managment with Redux, Thunk, Redux-Toolkit
                                    </p>
                                </p>
                            </div>
                        </div>

                        <div className={s.projectContainer}>
                            <div className={s.projectDescription}>
                                <p>
                                    This is my pet project
                                </p>
                            </div>
                            <div className={s.project}>
                                <div className={s.telegram}>
                                    <a href='https://ilia-kravtsov.github.io/telegram_clone_2' target='_blank'
                                       className={s.projectLink} rel="noreferrer">check</a>
                                </div>
                                <h3 className={toggleLight ? s.lightH3 : ''}>Telegram clone</h3>
                                <span
                                    className={toggleLight ? `${s.status} ${s.lightH3}` : s.status}>Status: in progress
                                </span>
                            </div>
                        </div>

                        <div className={s.projectContainer}>
                            <div className={s.project}>
                                <div className={s.counter}>
                                    <a href='https://ilia-kravtsov.github.io/counter/' target='_blank'
                                       className={s.projectLink}
                                       rel="noreferrer">check</a>
                                </div>
                                <h3 className={toggleLight ? s.lightH3 : ''}>Counter</h3>
                                <span
                                    className={toggleLight ? `${s.status} ${s.lightH3}` : s.status}>Status: my first project
                                </span>
                            </div>
                            <div className={s.projectDescription}>
                                <p>
                                    This is my first project
                                </p>
                            </div>
                        </div>

                    </Fade>
                </div>
            </div>
        </div>
    );
};

