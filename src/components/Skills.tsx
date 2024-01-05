import React, {FC} from 'react';
import s from '../style/Skills.module.scss'
import {Circle} from "./Circle";
import {Fade} from "react-awesome-reveal";
import {Title} from "../components/Title";
import {SkillsCircle} from "../components/SkillsCircle";

export const Skills: FC = () => {

    return (
        <div className={s.SkillsContainer} id={'skills'}>
            <div className={s.container}>
                <Fade direction={'up'}>
                    <Title title={'skill'}
                           accentTitle={'$'}
                           titleBack={'Programming'}
                    />
                </Fade>

                <div className={s.skillsContainer}>
                    <Fade direction={'up'}>
                        <SkillsCircle percents={80} title={'HTML'}/>
                        <SkillsCircle percents={80} title={'CSS'}/>
                        <SkillsCircle percents={70} title={'JavaScript'}/>
                        <SkillsCircle percents={60} title={'TypeScript'}/>
                        <SkillsCircle percents={40} title={'Storybook'}/>
                        <SkillsCircle percents={50} title={'Git'}/>
                        <SkillsCircle percents={70} title={'React'}/>
                        <SkillsCircle percents={70} title={'Redux'}/>
                        <SkillsCircle percents={70} title={'SASS'}/>
                        <SkillsCircle percents={70} title={'Rest API'}/>
                        <SkillsCircle percents={70} title={'MUI'}/>
                        <SkillsCircle percents={70} title={'Axios'}/>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

