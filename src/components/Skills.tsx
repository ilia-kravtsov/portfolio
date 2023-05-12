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
                <div className={`${s.skill} ${s.down}`}>
                    <Circle percents={80} title={'HTML'}/>
                </div>
                <div className={`${s.skill} ${s.up}`}>
                    <Circle percents={80} title={'CSS'}/>
                </div>
                <div className={`${s.skill} ${s.down}`}>
                        <Circle percents={60} title={'JavaScript'}/>
                </div>
                <div className={`${s.skill} ${s.up}`}>
                        <Circle percents={60} title={'TypeScript'}/>
                </div>
                <div className={`${s.skill} ${s.down}`}>
                        <Circle percents={30} title={'StoryBook'}/>
                </div>
                <div className={`${s.skill} ${s.up}`}>
                        <Circle percents={40} title={'Unit Testing'}/>
                </div>
                <div className={`${s.skill} ${s.down}`}>
                        <Circle percents={70} title={'React'}/>
                </div>
                <div className={`${s.skill} ${s.up}` }>
                        <Circle percents={70} title={'Redux'}/>
                </div>
                <div className={`${s.skill} ${s.down}`}>
                        <Circle percents={70} title={'SASS'}/>
                </div>
                <div className={`${s.skill} ${s.up}`}>
                        <Circle percents={70} title={'REST API'}/>
                </div>
                <div className={`${s.skill} ${s.down}`}>
                        <Circle percents={70} title={'MUI'}/>
                </div>
                <div className={`${s.skill} ${s.up}`}>
                        <Circle percents={70} title={'Axios'}/>
                </div>
            </div>
        </div>
    );
};

