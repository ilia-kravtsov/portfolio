import React, {FC, useEffect} from 'react';
import s from './About.module.css'

type AboutType = {
    linkColorAbout: (toggle: boolean) => void
}

export const About: FC<AboutType> = ({linkColorAbout}) => {

    useEffect(() => {
        linkColorAbout(true)
    }, [])

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
                        <h3>personal info:</h3>
                        <p>First name: <span>Ilia</span></p>
                        <p>Last name: <span>Kravtsov</span></p>
                        <p>Age: <span>29</span></p>
                        <p>Address: <span>Stavropol, Russia</span></p>
                        <p>Drinking: <span>not for me</span></p>
                        <p>Smoking: <span>non smoker</span></p>
                        <p>Snowboarding: <span>is my hobby</span></p>
                        <p>Workout: <span>every day</span></p>
                        <p>Programming: <span>every day</span></p>
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
                       <h3>EXPERIENCE & EDUCATION:</h3>
                       <p>University: <span>Stavropol State University</span></p>
                       <p>Qualification: <span>engineering degree</span></p>
                       <p>Specialization: <span>electrification and automation</span></p>
                       <section className={s.programming_training}>
                           <h3>Programming training:</h3>
                           <p>Main Experience: <span>IT INCUBATOR</span></p>
                           <h3>Additional  Experience: </h3>
                           <p>CODEWARS: <span>5 kyu rank</span></p>
                           <p>FreeCodeCamp: <span>JS and HTML programs are done</span></p>
                           <p>Hexlet: <span>Base JS program is done</span></p>
                       </section>
                   </section>
                   <section className={s.languages}>
                       <h3>Languages:</h3>
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
                                       <p>English B2</p>
                                   </div>
                               </div>
                           </div>
                           <div className={s.card}>
                               <div className={s.percentCircle}>
                                   <div className={s.dot}></div>
                                   <svg className={s.svg}>
                                       <circle cx={'70'} cy={'70'} r={'70'}></circle>
                                       <circle cx={'70'} cy={'70'} r={'70'}></circle>
                                   </svg>
                                   <div className={s.amount}>
                                       <h3>100%</h3>
                                       <p>Russian</p>
                                   </div>
                               </div>
                           </div>
                           <div className={s.card}>
                               <div className={s.percentCircle}>
                                   <div className={s.dot}></div>
                                   <svg className={s.svg}>
                                       <circle cx={'70'} cy={'70'} r={'70'}></circle>
                                       <circle cx={'70'} cy={'70'} r={'70'}></circle>
                                   </svg>
                                   <div className={s.amount}>
                                       <h3>10%</h3>
                                       <p>Norsk A2</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </section>
               </div>
            </section>
        </div>
    );
};

/*

 */

