import React, {FC} from 'react';
import s from '../style/About.module.scss'
import {Circle} from './Circle';
import {Fade} from "react-awesome-reveal";
import {Title} from "../components/Title";
import cvIcon from '../style/images/cv_2.png'
import codewarsIcon from '../style/images/codewars_2.svg'

export const About: FC = () => {

    return (
        <div className={s.AboutContainer} id={'about'}>
            <div className={s.container}>
                <Title title={'about'}
                       accentTitle={' me'}
                       titleBack={'information'}
                />
                <section className={s.content}>

                    <div className={s.lineContent}>
                        <Fade direction={'up'}>
                            <section className={s.personalInfo}>
                                <h3 className={s.header_3}>info:
                                    <div className={s.circle}></div>
                                    <div className={s.headerLine}></div>
                                </h3>
                                <p><span>First name:</span><span>ilia</span>
                                </p>
                                <p><span>Last name:</span><span>kravtsov</span>
                                </p>
                                <p><span>Age:</span> <span>30</span></p>
                                <p><span>Address:</span>
                                    <span>Stavropol, Russia</span></p>
                            </section>
                            <section className={s.programming_training}>
                                <h3 className={s.header_3}>Experience:
                                    <div className={s.circle}></div>
                                    <div className={s.headerLine}></div>
                                </h3>
                                <p>Main Experience:<span>IT INCUBATOR</span></p>
                                <p>Codewars: <span>3 kyu rank</span></p>
                                <p>FreeCodeCamp: <span>JS and HTML</span></p>
                                <p>Hexlet: <span>Base JS program is done</span></p>
                            </section>
                        </Fade>
                    </div>

                    <div className={s.lineContent}>
                        <Fade direction={'up'}>

                            <section className={s.personalStrengths}>
                                <h3 className={s.header_3}>My message:
                                    <div className={s.circle}></div>
                                    <div className={s.headerLine}></div>
                                </h3>
                                <div>
                                    <p>
                                        I'm constantly improving my skills
                                        in web developing
                                        and plan to expand my knowledge with new technologies,
                                        such as React Native.
                                    </p>
                                    <p>
                                        In my spare time, I usually read IT literature,
                                        such as: "Grokking Algorithms",
                                        challenge myself with Codewars,
                                        and work on improving my English skills.
                                    </p>
                                </div>
                            </section>

                            <section className={s.experience_education}>
                                <h3 className={s.header_3}>EDUCATION:
                                    <div className={s.circle}></div>
                                    <div className={s.headerLine}></div>
                                </h3>
                                <p>
                                    2022 IT-INCUBATOR: <span> Web developer</span>
                                </p>
                                <p>Key Skills:</p>
                                <p>
                                        JS, React, Redux, Redux-Toolkit, TypeScript,
                                        Rest API, Axious, Formik, GIT, React-router-dom,
                                        Unit-test, Storybook, Material UI, HTML & CSS, SASS
                                </p>
                                <p>
                                    2010 - 2015 Stavropol State University: <span>engineer</span>
                                </p>
                            </section>

                        </Fade>
                    </div>

                    <div className={s.lineContent}>
                        <Fade direction={'up'}>

                            <section className={s.usefulLinks}>
                                <h3 className={s.header_3}>Useful Links:
                                    <div className={s.circle}></div>
                                    <div className={s.headerLine}></div>
                                </h3>
                                <div className={s.linksContainer}>
                                    <a target={'_blank'} href={'https://github.com/ilia-kravtsov'}>
                                        <img
                                            src="https://ouch-cdn2.icons8.com/W_FSxOuaSfBv7Ol6sCwJRD3-jYjicOpPgbE1p1Q7HJk/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDEw/LzY2ZThhYzc1LTJh/ZjAtNDk4MC1hNThl/LWMwOWY0NWIyM2Mz/NS5wbmc.png"
                                            alt="GitHub_logo"/>
                                    </a>
                                    <a target={'_blank'} href={'https://www.codewars.com/users/ilia_kravtsov'}>
                                        <img src="https://img.icons8.com/?size=512&id=gDJDJJ1MCGmG&format=png"
                                             alt="Codewars_logo"/>
                                    </a>
                                    <a target={'_blank'}
                                       href={'https://www.freecodecamp.org/certification/ilia-kravtsov/javascript-algorithms-and-data-structures'}>
                                        <img src="https://img.icons8.com/color/48/free-code-camp.png"
                                             alt="freecodecamp_logo"/>
                                    </a>
                                    <a target={'_blank'} href={'https://www.linkedin.com/in/-ilia-kravtsov/'}>
                                        <img
                                            src="https://ouch-cdn2.icons8.com/eHIHzmHX02221t-bFZtZRHJmb6S4UUBirfHjBFMp_oo/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjQ3/L2NmOThkOWJmLWRl/NTktNDMzYi1hNjQ1/LTUzYjNkMTczMTU4/My5wbmc.png"
                                            alt="LinkedIn_logo"/>
                                    </a>
                                    <a target={'_blank'}
                                       href={'https://drive.google.com/file/d/1zJy4JD0sHg4Sk7tDftg6nbn_OZkE2ZTg/view?usp=sharing'}>
                                        <img
                                            src={cvIcon}
                                            alt="CV_logo"/>
                                    </a>
                                </div>
                            </section>

                            <section className={s.languages}>
                                <h3 className={s.header_3}>Languages:
                                    <div className={s.circle}></div>
                                    <div className={s.headerLine}></div>
                                </h3>
                                <div className={s.circleContainer}>
                                    <Circle percents={100} title={'Russian'}/>
                                    <Circle percents={70} title={'English'}/>
                                </div>
                            </section>

                        </Fade>
                    </div>
                </section>
            </div>
        </div>
    )
};

