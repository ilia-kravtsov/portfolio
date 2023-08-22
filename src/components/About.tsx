import React, {FC, useEffect} from 'react';
import s from '../style/About.module.scss'
import {Circle} from './Circle';
import sb from "../style/About.module.scss";
import {Fade} from "react-awesome-reveal";

type AboutType = {
    linkColorAbout: (toggle: boolean) => void
    toggleLight: boolean
}

export const About: FC<AboutType> = ({linkColorAbout, toggleLight}) => {

    useEffect(() => {
        linkColorAbout(true)
    }, [])

    return (
        <div className={sb.subContainer} id={'about'}>
            <div className={s.container}>
                <Fade direction={'up'}>
                    <div className={s.dotContainer_left}>
                        <div className={s.leftDot}></div>
                    </div>
                    <section className={s.titleSection}>
                        <h2 className={s.titleAboutPage}>ABOUT
                            <span className={s.me}> ME</span>
                        </h2>
                        <span className={toggleLight ? `${s.titleBack} ${s.lightMode}` : s.titleBack}>Information</span>
                    </section>
                    <div className={s.dotContainer_right}>
                        <div className={s.rightDot}></div>
                    </div>
                </Fade>
                <section className={s.content}>
                    <div className={s.lineContent}>
                        <Fade direction={'up'}>
                            <section className={s.personalInfo}>
                                <h3 className={toggleLight ? s.lightH3 : ''}>info: <div className={s.circle}></div>
                                    <div className={s.headerLine}></div>
                                </h3>
                                <p className={toggleLight ? s.lightH3 : ''}><span>First name:</span><span>ilia</span>
                                </p>
                                <p className={toggleLight ? s.lightH3 : ''}><span>Last name:</span><span>kravtsov</span>
                                </p>
                                <p className={toggleLight ? s.lightH3 : ''}><span>Age:</span> <span>29</span></p>
                                <p className={toggleLight ? s.lightH3 : ''}><span>Address:</span>
                                    <span>Stavropol, Russia</span></p>
                                <p className={toggleLight ? s.lightH3 : ''}><span>Job Status:</span>
                                    <span>in active search</span></p>
                            </section>
                            <section className={s.programming_training}>
                                <h3 className={toggleLight ? s.lightH3 : ''}>Experience:
                                    <div className={s.circle}></div>
                                    <div className={s.headerLine}></div>
                                </h3>
                                <p className={toggleLight ? s.lightH3 : ''}>Main
                                    Experience: <span>IT INCUBATOR</span>
                                </p>
                                <p className={toggleLight ? s.lightH3 : ''}>Codewars: <span>4 kyu rank</span></p>
                                <p className={toggleLight ? s.lightH3 : ''}>FCC: <span>JS and HTML</span></p>
                                <p className={toggleLight ? s.lightH3 : ''}>Hexlet: <span>Base JS program is done</span>
                                </p>
                            </section>
                        </Fade>
                    </div>
                    <div className={s.lineContent}>
                        <Fade direction={'up'}>
                            <section className={s.experience_education}>
                                <h3 className={toggleLight ? s.lightH3 : ''}>EDUCATION:
                                    <div className={s.circle}></div>
                                    <div className={s.headerLine}></div>
                                </h3>
                                <p className={toggleLight ? s.lightH3 : ''}>University: <span>Stavropol State University</span>
                                </p>
                                <p className={toggleLight ? s.lightH3 : ''}>Qualification: <span>engineering degree</span>
                                </p>
                                <p className={toggleLight ? s.lightH3 : ''}>Specialization: <span
                                    className={s.electrification}>electrification</span></p>
                            </section>
                            <section className={s.personalHobbies}>
                                <h3 className={toggleLight ? s.lightH3 : ''}>Relevant Links:
                                    <div className={s.circle}></div>
                                    <div className={s.headerLine}></div>
                                </h3>
                                <div className={s.linksContainer}>
                                    <a target={'_blank'} href={'https://github.com/ilia-kravtsov'}>
                                        <img
                                            src="https://ouch-cdn2.icons8.com/W_FSxOuaSfBv7Ol6sCwJRD3-jYjicOpPgbE1p1Q7HJk/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDEw/LzY2ZThhYzc1LTJh/ZjAtNDk4MC1hNThl/LWMwOWY0NWIyM2Mz/NS5wbmc.png"
                                            alt="GitHub_logo"/>
                                    </a>
                                    <a target={'_blank'} href={'https://www.codewars.com/users/ilia-kravtsov'}>
                                        <img src="https://img.icons8.com/?size=512&id=gDJDJJ1MCGmG&format=png"
                                             alt="Codewars_logo"/>
                                    </a>
                                    <a target={'_blank'} href={'https://www.linkedin.com/in/-ilia-kravtsov/'}>
                                        <img
                                            src="https://ouch-cdn2.icons8.com/eHIHzmHX02221t-bFZtZRHJmb6S4UUBirfHjBFMp_oo/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjQ3/L2NmOThkOWJmLWRl/NTktNDMzYi1hNjQ1/LTUzYjNkMTczMTU4/My5wbmc.png"
                                            alt="LinkedIn_logo"/>
                                    </a>
                                    <a target={'_blank'} href={'https://drive.google.com/file/d/1zJy4JD0sHg4Sk7tDftg6nbn_OZkE2ZTg/view?usp=sharing'}>
                                        <img
                                            src="https://img.icons8.com/?size=512&id=c20V6inu0P2Q&format=png"
                                            alt="CV_logo"/>
                                    </a>
                                </div>
                            </section>
                        </Fade>
                    </div>
                    <div className={s.lineContent}>
                        <Fade direction={'up'}>
                            <section className={s.lifePath}>
                                <h3 className={toggleLight ? s.lightH3 : ''}>life path:
                                    <div className={s.circle}></div>
                                    <div className={s.headerLine}></div>
                                </h3>
                                <p className={toggleLight ? s.lightH3 : ''}>
                                    2022 - 2023 IT-INCUBATOR
                                    Frontend developer - key skills:
                                    JS, React, Redux, TypeScript, Rest API, Axious,
                                    Formik, React-router-dom Unit-test, Storybook,
                                    GIT, Redux-Toolkit, Material UI, HTML & CSS, SASS
                                </p>
                                <p className={toggleLight ? s.lightH3 : ''}>
                                    2020 - 2022 Moscow Tourist Police:
                                    i'd gained life experience communicating with
                                    English speakers which has improved my
                                    ability to confidently speak English with pretty
                                    good pronunciation at a true B1 level
                                </p>
                                <p className={toggleLight ? s.lightH3 : ''}>
                                    2015 - 2020 I'd worked as an engineer
                                    working with normative and technical
                                    documentation,
                                    development of projects for the production
                                    of works,
                                    quality control of works
                                </p>
                                <p className={toggleLight ? s.lightH3 : ''}>
                                    2010 - 2015 Stavropol State University
                                    engineer
                                </p>
                            </section>
                            <section className={s.languages}>
                                <h3 className={toggleLight ? s.lightH3 : ''}>Languages:
                                    <div className={s.circle}></div>
                                    <div className={s.headerLine}></div>
                                </h3>
                                <div className={s.circleContainer}>
                                    <Circle percents={100} title={'Russian'} toggleLight={toggleLight}/>
                                    <Circle percents={70} title={'English'} toggleLight={toggleLight}/>
                                </div>
                            </section>
                        </Fade>
                    </div>
                    <div className={s.lineContent}>
                        <Fade direction={'up'}>

                        </Fade>
                    </div>
                </section>
            </div>
        </div>
    )
};

