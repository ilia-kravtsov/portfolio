import React from 'react';
import s from './Skills.module.scss'
import {Circle} from "./Circle";

export const Skills = () => {
    return (
        <div className={s.container}>
            <div className={s.titleContainer}>
                <h1 className={s.title}>
                    Skills
                    <span className={s.titleRight}> set</span>
                </h1>
                <span className={s.titleBack}>Programming</span>
            </div>
            <div className={s.skillsContainer}>
                <div className={s.skill}>
                    <Circle percents={100} title={'HTML'}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={100} title={'CSS'}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={100} title={'JavaScript'}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={100} title={'TypeScript'}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={100} title={'StoryBook'}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={100} title={'Unit Testing'}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={100} title={'React'}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={100} title={'Redux'}/>
                </div>
            </div>
        </div>
    );
};

