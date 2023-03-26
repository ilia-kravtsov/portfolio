import React from 'react';
import s from './Projects.module.css'

export const Projects = () => {
    return (
        <div className={s.container}>
            <div className={s.titleContainer}>
                <h1 className={s.title}>Projects</h1>
            </div>
            <div className={s.projectsContainer}>
                <div className={s.contentContainer}>
                    <div className={s.socialNetworkBack}></div>
                    <h3>Social network</h3>
                    <span className={s.status}>Status: in progress</span>
                </div>
                <div className={s.contentContainer}>
                    <div className={s.todolistBack}></div>
                    <h3>Todolist</h3>
                    <span className={s.status}>Status: in progress</span>
                </div>
                <div className={s.contentContainer}>
                    <div className={s.counter}></div>
                    <h3>Counter</h3>
                    <span className={s.status}>Status: my first project</span>
                </div>
            </div>
        </div>
    );
};

