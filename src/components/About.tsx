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
                <div className={s.contentUp}>
                    <section className={s.personalContainer}>
                        <h3>personal info</h3>
                        <p>Last name: <span>Kravtsov</span></p>
                        <p>First name: <span>Ilia</span></p>
                        <p>Age: <span>29</span></p>
                        <p>Address: <span>Stavropol, Russia</span></p>
                        <p>Drinking: <span>Not for me</span></p>
                        <p>Smoking: <span>Non smoker</span></p>
                        <p>Snowboarding: <span>is my hobby</span></p>
                        <p>Workout: <span>Every day</span></p>
                        <p>Programming: <span>Every day</span></p>
                        <p>Job Status: <span>in active search</span></p>
                    </section>
                    <section className={s.educationContainer}>
                        <h3>EXPERIENCE & EDUCATION</h3>
                        <p>Education level: <span>higher, successfully graduated from the university</span></p>
                        <p>University: <span>Stavropol State University</span></p>
                        <p>Qualification: <span>Engineering degree</span></p>
                        <p>Specialization: <span>Electrification and Automation</span></p>
                        <h3>Programming training:</h3>
                        <p>Main Experience: <span>IT INCUBATOR</span></p>
                        <h3>Additional  Experience: </h3>
                        <p>CODEWARS: <span>5 kyu rank</span></p>
                        <p>FreeCodeCamp: <span>The js and html programs are done</span></p>
                        <p>Hexlet: <span>Base js program is done</span></p>
                    </section>
                </div>
               <div className={s.contentDown}>
                   <section>
                       <h3>Personal Strengths:</h3>
                       <p>Discipline</p>
                       <p>Punctuality</p>
                       <p>Team player</p>
                       <p>Feeling of the Code flow</p>
                       <p>Respecting the Code</p>
                       <p>Hard worker</p>
                   </section>
                   <section>
                       <h3>Languages:</h3>
                       <p>Russian: Native</p>
                       <p>English: B2</p>
                       <p>Norsk: A2</p>
                   </section>
               </div>
            </section>
        </div>
    );
};

