import React from 'react';
import s from './Skills.module.scss'
import {Circle} from "./Circle";

export const Skills = () => {
    return (
        <div className={s.container}>
            <div className={s.titleContainer}>
                <div className={s.dotContainer}>
                    <div className={s.leftDot}></div>
                </div>
                <h1 className={s.title}>
                    Skills
                    <span className={s.titleRight}> set</span>
                </h1>
                <div className={s.dotContainer}>
                    <div className={s.rightDot}></div>
                </div>
                <span className={s.titleBack}>Programming</span>
            </div>
            <div className={s.skillsContainer}>
                <div className={s.skillsBack}></div>
                <div className={s.skill}>
                    <Circle percents={80} title={'HTML'}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={80} title={'CSS'}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={60} title={'JavaScript'}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={60} title={'TypeScript'}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={30} title={'StoryBook'}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={40} title={'Unit Testing'}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={70} title={'React'}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={70} title={'Redux'}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={70} title={'SASS'}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={70} title={'REST API'}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={70} title={'MUI'}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={70} title={'Axios'}/>
                </div>
            </div>
        </div>
    );
};

