import React from 'react';
import s from './About.module.css'

export const About = () => {

    return (
        <div className={s.container}>
            <section className={s.titleSection}>
                <h2>ABOUT
                    <span className={s.me}> ME</span>
                </h2>
                <span className={s.resume}>RESUME</span>
            </section>
            <section className={s.content}>
                <div className={s.contentLeft}>
                    <section className={s.personalInfo}>
                        <h3>personal info</h3>
                        <p>First name: <span>Ilia</span></p>
                        <p>Last name: <span>Kravtsov</span></p>
                        <p>Age: <span>29</span></p>
                        <p>Address: <span>Stavropol, Russia</span></p>
                        <p>Drinking: <span>Not for me</span></p>
                        <p>Smoking: <span>Non smoker</span></p>
                        <p>Snowboarding: <span>is my hobby</span></p>
                        <p>Workout: <span>Every day</span></p>
                        <p>Programming: <span>Every day</span></p>
                        <p>Job Status: <span>in active search</span></p>
                    </section>
                    <section className={s.personalStrengths}>
                        <h3>Personal Strengths:</h3>
                        <p>Discipline</p>
                        <p>Punctuality</p>
                        <p>Team player</p>
                        <p>Feeling of the Code flow</p>
                        <p>Respecting the Code</p>
                        <p>Hard worker</p>
                    </section>
                </div>
               <div className={s.contentRight}>
                   <section className={s.experience_education}>
                       <h3>EXPERIENCE & EDUCATION</h3>
                       <p>Education level: <span>higher, successfully graduated from the university</span></p>
                       <p>University: <span>Stavropol State University</span></p>
                       <p>Qualification: <span>Engineering degree</span></p>
                       <p>Specialization: <span>Electrification and Automation</span></p>
                       <section className={s.programming_training}>
                           <h3>Programming training:</h3>
                           <p>Main Experience: <span>IT INCUBATOR</span></p>
                           <h3>Additional  Experience: </h3>
                           <p>CODEWARS: <span>5 kyu rank</span></p>
                           <p>FreeCodeCamp: <span>The JS and html programs are done</span></p>
                           <p>Hexlet: <span>Base JS program is done</span></p>
                       </section>
                   </section>
                   <section className={s.languages}>
                       <h3>Languages:</h3>
                       <p>Russian: Native</p>
                       <p>English: B2</p>
                       <p>Norsk: A2</p>
                       {/*<div className={s.circularContainer}>*/}
                       {/*    <div className={s.circularProgress}>*/}
                       {/*        <span className={s.progressValue}>50%</span>*/}
                       {/*    </div>*/}
                       {/*    <span className={s.circleText}>React</span>*/}
                       {/*</div>*/}
                       <div className={s.circleContainer}>
                           <div className={s.card}>
                               <div className={s.percentCircle}>
                                   <div className={s.dot}></div>
                                    <svg className={s.svg}>
                                        <circle cx={'70'} cy={'70'} r={'70'}></circle>
                                        <circle cx={'70'} cy={'70'} r={'70'}></circle>
                                    </svg>
                                   <div className={s.amount}>
                                        <h3>85%</h3>
                                       <p>HTML</p>
                                   </div>
                               </div>
                           </div>
                           <div className={s.card}>

                           </div>
                       </div>
                   </section>
               </div>
            </section>
        </div>
    );
};

