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
                        <div className={s.contentContainer}>
                            <div className={s.socialNetworkBack}>
                                <a href='https://ilia-kravtsov.github.io/samurai_way/' target='_blank'
                                   className={s.projectLink} rel="noreferrer">check</a>
                            </div>
                            <h3 className={toggleLight ? s.lightH3 : ''}>Social network</h3>
                            <span
                                className={toggleLight ? `${s.status} ${s.lightH3}` : s.status}>Status: in progress</span>
                        </div>
                        <div className={s.contentContainer}>
                            <div className={s.todolistBack}>
                                <a href='https://ilia-kravtsov.github.io/todolist/' target='_blank'
                                   className={s.projectLink} rel="noreferrer">check</a>
                            </div>
                            <h3 className={toggleLight ? s.lightH3 : ''}>Todolist</h3>
                            <span
                                className={toggleLight ? `${s.status} ${s.lightH3}` : s.status}>Status: in progress</span>
                        </div>
                        <div className={s.contentContainer}>
                            <div className={s.telegram}>
                                <a href='https://ilia-kravtsov.github.io/telegram_clone_2' target='_blank'
                                   className={s.projectLink} rel="noreferrer">check</a>
                            </div>
                            <h3 className={toggleLight ? s.lightH3 : ''}>Telegram clone</h3>
                            <span
                                className={toggleLight ? `${s.status} ${s.lightH3}` : s.status}>Status: in progress</span>
                        </div>
                        <div className={s.contentContainer}>
                            <div className={s.counter}>
                                <a href='https://ilia-kravtsov.github.io/counter/' target='_blank'
                                   className={s.projectLink}
                                   rel="noreferrer">check</a>
                            </div>
                            <h3 className={toggleLight ? s.lightH3 : ''}>Counter</h3>
                            <span
                                className={toggleLight ? `${s.status} ${s.lightH3}` : s.status}>Status: my first project</span>
                        </div>
                        </Fade>
                    </div>
            </div>
        </div>
);
};

