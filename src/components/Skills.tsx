import React from 'react';
import s from './Skills.module.css'

export const Skills = () => {
    return (
        <div className={s.container}>
            <div className={s.titleContainer}>
                <h1 className={s.title}>Skills set</h1>
            </div>
            <div className={s.skillsContainer}>
                <div className={s.skill}>
                    <h3>HTML</h3>
                    <img src="" alt="logo" className={s.skillImg}/>
                    <h4></h4>
                </div>
                <div className={s.skill}>
                    <h3>CSS</h3>
                    <img src="" alt="logo" className={s.skillImg}/>
                    <h4></h4>
                </div>
                <div className={s.skill}>
                    <h3>JS</h3>
                    <img src="" alt="logo" className={s.skillImg}/>
                    <h4></h4>
                </div>
                <div className={s.skill}>
                    <h3>React</h3>
                    <img src="" alt="logo" className={s.skillImg}/>
                    <h4></h4>
                </div>
                <div className={s.skill}>
                    <h3>Typescript</h3>
                    <img src="" alt="logo" className={s.skillImg}/>
                    <h4></h4>
                </div>
            </div>
        </div>
    );
};

