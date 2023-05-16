import React, {FC, useEffect} from 'react';
import s from './About.module.scss'
import disciplineIcon from '../images/martial-arts.png'
import punctualityIcon from '../images/time-manager.png'
import teamPlayerIcon from '../images/together.png'
import flowIcon from '../images/data-flow.png'
import worker from '../images/working.png'
import {Circle} from "./Circle";

type AboutType = {
    linkColorAbout: (toggle: boolean) => void
}

export const About: FC<AboutType> = ({linkColorAbout}) => {

    useEffect(() => {
        linkColorAbout(true)
    }, [])

    return (
        <div className={s.container}>
            <div className={s.colorBlock}></div>
            <section className={s.titleSection}>
                <h2 className={s.titleAboutPage}>ABOUT
                    <span className={s.me}> ME</span>
                </h2>
                <span className={s.titleBack}>Information</span>
            </section>
            <section className={s.content}>
                <div className={s.contentLeft}>
                    <section className={s.personalInfo}>
                        <h3>personal info: <div className={s.circle}></div><div className={s.headerLine}></div></h3>
                        <p><span>First name:</span><span>ilia</span></p>
                        <p><span>Last name:</span><span>kravtsov</span></p>
                        <p><span>Age:</span> <span>29</span></p>
                        <p><span>Address:</span> <span>Stavropol, Russia</span></p>
                        <p><span>Drinking:</span> <span>not for me</span></p>
                        <p><span>Smoking:</span> <span>non smoker</span></p>
                        <p><span>Snowboarding:</span> <span>is my hobby</span></p>
                        <p><span>Workout:</span> <span>every day</span></p>
                        <p><span>Programming:</span> <span>every day</span></p>
                        <p><span>Learning languages:</span> <span>every day</span></p>
                        <p><span>Job Status:</span> <span>in active search</span></p>
                    </section>
                    <section className={s.personalStrengths}>
                        <h3>Strengths:
                            <div className={s.circle}></div>
                            <div className={s.headerLine}></div>
                        </h3>
                            <p className={s.teamPlayerIcon}><img src={disciplineIcon} alt="disciplineIcon" className={s.icon}/>Discipline</p>
                            <p className={s.teamPlayerIcon}><img src={punctualityIcon} alt="punctualityIcon" className={s.icon}/>Punctuality</p>
                            <p className={s.teamPlayerIcon}><img src={teamPlayerIcon} alt="Team play Icon" className={s.icon}/>Team play</p>
                            <p className={s.teamPlayerIcon}><img src={flowIcon} alt="flowIcon" className={s.icon}/>Feeling of the Code flow</p>
                            <p className={s.teamPlayerIcon}><img src={worker} alt="Hard worker" className={s.icon}/>Hard worker</p>
                    </section>
                </div>
               <div className={s.contentRight}>
                   <section className={s.experience_education}>
                       <h3>EXPERIENCE & EDUCATION:<div className={s.circle}></div><div className={s.headerLine}></div></h3>
                       <p>University: <span>Stavropol State University</span></p>
                       <p>Qualification: <span>engineering degree</span></p>
                       <p>Specialization: <span className={s.electrification}>electrification</span></p>
                       <section className={s.programming_training}>
                           <h3>Programming training:<div className={s.circle}></div><div className={s.headerLine}></div></h3>
                           <p>Main Experience: <span>IT INCUBATOR</span></p>
                           <p>Codewars: <span>5 kyu rank</span></p>
                           <p>FCC: <span>JS and HTML</span></p>
                           <p>Hexlet: <span>Base JS program is done</span></p>
                       </section>
                   </section>
                   <section className={s.languages}>
                       <h3>Languages:<div className={s.circle}></div><div className={s.headerLine}></div></h3>
                       <div className={s.circleContainer}>
                           <Circle percents={100} title={'Russian'}/>
                           <Circle percents={70} title={'English'}/>
                           <Circle percents={20} title={'Norsk'}/>
                       </div>
                   </section>
               </div>
            </section>
        </div>
    );
};

/*

 */

