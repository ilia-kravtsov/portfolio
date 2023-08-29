import React, {FC} from 'react';
import s from '../style/Skills.module.scss'
import {Circle} from "./Circle";
import sb from "../style/Skills.module.scss";
import {Fade} from "react-awesome-reveal";
import {Title} from "../components/Title";

export const Skills: FC = () => {

    return (
        <div className={sb.subContainer} id={'skills'}>
            <div className={s.container}>
                <Fade direction={'up'}>
                    <Title title={'skill'}
                           accentTitle={'$'}
                           titleBack={'Programming'}
                    />
                </Fade>

                <div className={s.skillsContainer}>
                    <Fade direction={'up'}>
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
                            <Circle percents={30} title={'Storybook'}/>
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
                            <Circle percents={70} title={'Rest API'}/>
                        </div>
                        <div className={s.skill}>
                            <Circle percents={70} title={'MUI'}/>
                        </div>
                        <div className={s.skill}>
                            <Circle percents={70} title={'Axios'}/>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

