import React, {FC} from 'react';
import s from "../style/Title.module.scss";
import {Fade} from "react-awesome-reveal";

type TitleType = {
    title: string
    accentTitle: string
    titleBack: string
}

export const Title: FC<TitleType> = ({title, accentTitle, titleBack}) => {

    let toggleTitle = title === 'skill' || title === 'get in touch' ? s.titleContainerFirst : s.titleContainerSecond

    return (
        <Fade direction={'up'}>
            <section className={toggleTitle}>
                <div className={s.dotContainer_left}>
                    <div className={s.leftDot}></div>
                </div>
                <h1 className={s.title}>
                    {title}<span className={s.accentTitle}>{accentTitle}</span>
                </h1>
                <div className={s.titleBack}>{titleBack}</div>
                <div className={s.dotContainer_right}>
                    <div className={s.rightDot}></div>
                </div>
            </section>
        </Fade>
    );
};

